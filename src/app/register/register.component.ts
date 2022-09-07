import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import nonAdminUrl from '../../idbp.config.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  registerForm: FormGroup;
  email: String = "";

  ctrl = {
    firstName: {
      label: 'First Name',
      invalidText: '',
      disabled: false
    },
    lastName: {
      label: 'Last Name',
      invalidText: '',
      disabled: false
    },
    email: {
      invalidText: '',
      disabled: true
    },
    password: {
      label: 'Password',
      invalidText: '',
      disabled: false
    }
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService) {

    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      console.log('email >>', this.email);
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [{ value: this.email, disabled: true }],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    for (const ctrl of Object.keys(this.ctrl)) {
      this.registerForm.controls[ctrl].valueChanges.subscribe(value => {
        this.validateInput(ctrl);
      });
    }
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.registerForm.controls;
  }

  validateInput(ctrl) {
    const field = this.registerForm.controls[ctrl];
    if (!field.errors || !Object.keys(field.errors).length) {
      return;
    }
    for (const err of Object.keys(field.errors)) {
      this.checkErrorCase(ctrl, err);
    }
  }

  checkErrorCase(ctrlName: string, err: string) {
    const field = this.registerForm.controls[ctrlName];
    switch (err) {
      case 'required':
        this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} is required`;
        break;
      case 'minlength':
        this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} must be at least ${field.errors.minlength.requiredLength} characters`;
        break;
      case 'email':
        this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} must be a valid email address`;
        break;
    }
  }

  onRegisterSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      for (const ctrl of Object.keys(this.ctrl)) {
        this.validateInput(ctrl);
      }
      return;
    } else {
      this.nonAdminRegister();
    }
  }

  nonAdminRegister() {
    this.http.put(nonAdminUrl.nonAdminURL, {
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
      password: this.registerForm.controls.password.value,
      email: this.registerForm.controls.email.value,
      status: true
    })
      .subscribe(
        (nonAdminRegister: Response) => {
          console.log('Put Non Admin register >>', nonAdminRegister);
          this.toastrService.success('Registration Successfully done. Redirecting you to the login page.');
        },
        error => {
          console.log('Put non admin register call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Registration Successfully done. Redirecting you to the login page.');
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
          } else {
            this.toastrService.error('Email is not registered by admin. Contact your administrator.');
          }
        }
      )
  };
}