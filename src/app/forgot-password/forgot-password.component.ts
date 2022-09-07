import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import adminUrl from '../../idbp.config.json';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  resetPasswordForm: FormGroup;
  submitted: boolean = false;
  resetPwdEmail: string;

  ctrl = {
    np: {
      label: 'Password',
      invalidText: ''
    }
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.resetPwdEmail = params['email'];
    });

    this.resetPasswordForm = this.formBuilder.group({
      np: ['', [Validators.required, Validators.minLength(8)]],
      cp: ['', [Validators.required]]
    })

    for (const ctrl of Object.keys(this.ctrl)) {
      this.resetPasswordForm.controls[ctrl].valueChanges.subscribe(value => {
        this.validateInput(ctrl);
      });
    }
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  validateInput(ctrl) {
    const field = this.resetPasswordForm.controls[ctrl];
    if (!field.errors || !Object.keys(field.errors).length) {
      return;
    }
    for (const err of Object.keys(field.errors)) {
      this.checkErrorCase(ctrl, err);
    }
  }

  checkErrorCase(ctrlName: string, err: string) {
    const field = this.resetPasswordForm.controls[ctrlName];
    switch (err) {
      case 'required':
        this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} is required`;
        break;
      case 'minlength':
        this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} must be at least ${field.errors.minlength.requiredLength} characters`;
        break;
    }
  }

  onResetPasswordSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return false;
    } else {
      if ((this.resetPasswordForm.controls.np.value == this.resetPasswordForm.controls.cp.value)) {
        this.resetPassword();
      } else {
        this.toastrService.error('Password doesn\'t match.');
      }
    }
  }

  resetPassword() {
    this.http.put(adminUrl.adminURL, {
      np: this.resetPasswordForm.controls.np.value,
      resetEmail: this.resetPwdEmail
    })
      .subscribe((resetPwdDetails) => {
        console.log('Put reset password successful value returned >>', resetPwdDetails);
        this.toastrService.success('Password Updated Successfully.');
      },
        error => {
          console.log('Put reset password in error >>', error);
          if (error.status == '401') {
            this.toastrService.error('Password Update Failed.');
          } else if (error.status == '200') {
            this.toastrService.success('Password Updated Successfully.');
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 2000);
          }
        })
  };
}