import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import nonAdminUrl from '../../idbp.config.json';
import roleUrl from '../../idbp.config.json';
import mailUrl from '../../idbp.config.json';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  userForm: FormGroup;
  submitted: boolean = false;
  rolesList: any;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(roleUrl.roleURL)
      .subscribe((roles: Response) => {
        console.log('Get roles list call >>', roles);
        this.rolesList = roles;
      }, error => {
        console.log('Get roles list call in error >>', error.message);
      });

    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      roleName: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get roleName() {
    return this.userForm.get('roleName');
  }

  get f() {
    return this.userForm.controls;
  }

  onUserManagementSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return false;
    } else {
      this.createUser();
    }
  }

  createUser() {
    this.http.post(nonAdminUrl.nonAdminURL, {
      email: this.userForm.controls.email.value,
      role: this.userForm.controls.roleName.value
    })
      .subscribe((userCreated) => {
        console.log('Post user management call successful value returned >>', userCreated);
        this.toastrService.success('User Created Successfully. Mail sent to registered user email. Please click on the link in the email to continue.');
      },
        error => {
          console.log('Post user management call in error >>', error);

          if (error.status == '200') {
            this.toastrService.success('User Created Successfully. Mail sent to registered user email. Please click on the link in the email to continue.');
            localStorage.setItem('nonAdminRegMail', this.userForm.controls.email.value);
            localStorage.setItem('role', this.userForm.controls.roleName.value);
            this.http.post(mailUrl.mailURL, {
              email: this.userForm.controls.email.value,
              // role: this.userForm.controls.roleName.value,
              action: "sign-up"
            })
              .subscribe((userRegMailConfirm) => {
                console.log('Post user registration mail service call successful value returned >>', userRegMailConfirm);
              },
                error => {
                  console.log('Post user registration mail service call in error >>', error);
                  setTimeout(() => {
                    this.router.navigate(['/dashboard/settings/listusers']);
                  }, 2000);
                });
          } else {
            this.toastrService.error('Email is already registered. Please create another email.');
          }
        })
  }
}