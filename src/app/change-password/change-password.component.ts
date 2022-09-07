import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import adminUrl from '../../idbp.config.json';
import nonAdminUrl from '../../idbp.config.json';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  changePasswordForm: FormGroup;
  submitted: boolean = false;

  ctrl = {
    np: {
      label: 'Password',
      invalidText: ''
    }
  };

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      np: ['', [Validators.required, Validators.minLength(8)]],
      cp: ['', [Validators.required]]
    })

    for (const ctrl of Object.keys(this.ctrl)) {
      this.changePasswordForm.controls[ctrl].valueChanges.subscribe(value => {
        this.validateInput(ctrl);
      });
    }
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  validateInput(ctrl) {
    const field = this.changePasswordForm.controls[ctrl];
    if (!field.errors || !Object.keys(field.errors).length) {
      return;
    }
    for (const err of Object.keys(field.errors)) {
      this.checkErrorCase(ctrl, err);
    }
  }

  checkErrorCase(ctrlName: string, err: string) {
    const field = this.changePasswordForm.controls[ctrlName];
    switch (err) {
      case 'required':
        this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} is required`;
        break;
      case 'minlength':
        this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} must be at least ${field.errors.minlength.requiredLength} characters`;
        break;
    }
  }

  onChangePasswordSubmit() {
    this.submitted = true;
    if (this.changePasswordForm.invalid) {
      return false;
    } else {
      if ((this.changePasswordForm.controls.np.value == this.changePasswordForm.controls.cp.value)) {
        this.changePassword();
      } else {
        this.toastrService.error('Password doesn\'t match.');
      }
    }
  }

  changePassword() {
    // change password for non-admin users
    if (localStorage.getItem('role')) {
      this.http.put(nonAdminUrl.nonAdminURL, {
        np: this.changePasswordForm.controls.np.value,
        email: localStorage.getItem('email')
      })
        .subscribe((changePwdDetails) => {
          console.log('Put change password for non-admin users successful value returned >>', changePwdDetails);
          this.toastrService.success('Password Updated Successfully.');
        },
          error => {
            console.log('Put change password for non-admin users in error >>', error);
            if (error.status == '401') {
              this.toastrService.error('Password Updated Failed.');
            } else if (error.status == '200') {
              this.toastrService.success('Password Updated Successfully.');
              setTimeout(() => {
                this.router.navigate(['/dashboard']);
              }, 2000);
            }
          })
    }
    // change password for admin users
    else {
      this.http.put(adminUrl.adminURL, {
        np: this.changePasswordForm.controls.np.value,
        resetEmail: localStorage.getItem('email')
      })
        .subscribe((changePwdDetails) => {
          console.log('Put change password for admin users successful value returned >>', changePwdDetails);
          this.toastrService.success('Password Updated Successfully.');
        },
          error => {
            console.log('Put change password for admin users in error >>', error);
            if (error.status == '401') {
              this.toastrService.error('Password Updated Failed.');
            } else if (error.status == '200') {
              this.toastrService.success('Password Updated Successfully.');
              setTimeout(() => {
                this.router.navigate(['/dashboard']);
              }, 2000);
            }
          })
    }
  };
}
