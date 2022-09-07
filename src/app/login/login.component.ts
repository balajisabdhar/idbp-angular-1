import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { AuthService } from './../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import adminUrl from '../../idbp.config.json';
import nonAdminUrl from '../../idbp.config.json';
import mailUrl from '../../idbp.config.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  submitted: boolean = false;

  ctrl = {
    email: {
      invalidText: ''
    },
    password: {
      invalidText: ''
    },
    fpEmail: {
      invalidText: ''
    }
  };

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private authService: AuthService,
    private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.get('license')) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/license']);
    }

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['admin', [Validators.required]]
    });
    this.loginForm.controls.email.valueChanges.subscribe(value => {
      this.validateInput('email', this.loginForm.controls.email.errors);
    });
    this.loginForm.controls.password.valueChanges.subscribe(value => {
      this.validateInput('password', this.loginForm.controls.password.errors);
    });

    this.forgotPasswordForm = this.formBuilder.group({
      fpEmail: ['', [Validators.required, Validators.email]]
    })
    this.forgotPasswordForm.controls.fpEmail.valueChanges.subscribe(value => {
      this.validateInput('fpEmail', this.forgotPasswordForm.controls.fpEmail.errors);
    });

    this.toastrService.overlayContainer = this.toastContainer;

    if (localStorage.getItem('jwt')) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  get fp() {
    return this.forgotPasswordForm.controls;
  }

  validateInput(type, ctrlErrors) {
    if (!ctrlErrors) {
      return;
    }
    switch (type) {
      case 'email':
        if (ctrlErrors.required) {
          this.ctrl.email.invalidText = 'Email is required';
        } else if (ctrlErrors.email) {
          this.ctrl.email.invalidText = 'Email must be a valid email address';
        } else {
          this.ctrl.email.invalidText = '';
        }
        break;
      case 'password':
        if (ctrlErrors.required) {
          this.ctrl.password.invalidText = 'Password is required';
        } else {
          this.ctrl.email.invalidText = '';
        }
        break;
      case 'fpEmail':
        if (ctrlErrors.required) {
          this.ctrl.fpEmail.invalidText = 'Email is required';
        } else if (ctrlErrors.fpEmail) {
          this.ctrl.fpEmail.invalidText = 'Email must be a valid email address';
        } else {
          this.ctrl.fpEmail.invalidText = '';
        }
        break;
    }
  }

  onLoginSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      for (const type of Object.keys(this.ctrl)) {
        this.validateInput(type, this.loginForm.controls[type].errors);
      }
    } else {
      this.login();
    }
  }

  login() {
    if (this.loginForm.controls.role.value == 'admin') {
      this.http.post(adminUrl.adminURL, {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      })
        .subscribe(
          (adminLogin: any) => {
            console.log('Post admin login call successful value returned in body >>', adminLogin);

            if (adminLogin["token"]) {
              this.authService.loggedIn = true;
              const tokenValidateData = jwt_decode(adminLogin["token"]);
              console.log('Token Validate Data >>', tokenValidateData);
              localStorage.setItem('jwt', adminLogin["token"]);
              localStorage.setItem('email', adminLogin["email"]);

              this.router.navigate(['/dashboard']);
            }
          },
          error => {
            console.log('Post admin login error >>', error);
            if (error.status == '401') {
              this.toastrService.error('Email or password is incorrect');
            } else {
              this.toastrService.error('Account not activated. Please open your mail box to activate your account.');
            }
          }
        );
    } else {
      this.http.post(nonAdminUrl.nonAdminURL, {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      })
        .subscribe(
          (nonAdminLogin: any) => {
            console.log('Post non admin login call successful value returned in body >>', nonAdminLogin);
            if (nonAdminLogin["token"]) {
              this.authService.loggedIn = true;
              const tokenValidateData = jwt_decode(nonAdminLogin["token"]);
              console.log('Token Validate Data >>', tokenValidateData);
              localStorage.setItem('jwt', nonAdminLogin["token"]);
              localStorage.setItem('email', nonAdminLogin["email"]);
              localStorage.setItem('role', nonAdminLogin["role"]);

              this.router.navigate(['/dashboard']);
            }
          },
          error => {
            console.log('Post non admin login error >>', error);
            if (error.status == '401') {
              this.toastrService.error('Email or password is incorrect');
            } else {
              this.toastrService.error('Account not activated. Please open your mail box to activate your account.');
            }
          }
        );
    }
  }

  onForgotPasswordSubmit() {
    this.submitted = true;
    if (this.forgotPasswordForm.invalid) {
      for (const type of Object.keys(this.ctrl)) {
        this.validateInput(type, this.forgotPasswordForm.controls[type].errors);
      }
    } else {
      this.toastrService.success('If account exists, an email is sent with further instructions.');
      this.forgotPassword();
    }
  }

  forgotPassword() {
    this.http.post(mailUrl.mailURL, {
      fpEmail: this.forgotPasswordForm.controls.fpEmail.value,
      action: "password-reset"
    })
      .subscribe((forgotPasswordMail) => {
        console.log('Post forgot password mail service call successful value returned >>', forgotPasswordMail);
      },
        error => {
          console.log('Post forgot password mail service call in error >>', error);
          setTimeout(() => {
            this.closeAddExpenseModal.nativeElement.click();
          }, 4000);
        });
  }
}