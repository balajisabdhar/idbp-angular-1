import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import mrNotificationUrl from '../../idbp.config.json';

@Component({
  selector: 'app-mr-create-notification',
  templateUrl: './mr-create-notification.component.html',
  styleUrls: ['./mr-create-notification.component.scss']
})
export class MrCreateNotificationComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  notificationForm: FormGroup;
  submitted: boolean = false;

  authData = ['User Credentials', 'Certificate'];
  checkedUserValue: any;
  checkedCertValue: any;
  checkedUserType: boolean = false;
  checkedCertType: boolean = false;

  // for multiple email addresses, separated with comma
  commaSepEmail = (control: AbstractControl): { [key: string]: any } | null => {
    const emails = control.value.split(',').map(e => e.trim());
    const forbidden = emails.some(email => Validators.email(new FormControl(email)));
    return forbidden ? { 'to': { value: control.value } } : null;
  };

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.notificationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      port: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      authType: ['', [Validators.required]],
      username: [''],
      password: [''],
      certificate: [''],
      tlsType: ['', [Validators.required]],
      purpose: ['', [Validators.required]],
      from: ['', [Validators.required, Validators.email]],
      to: ['', [Validators.required, this.commaSepEmail]],
      server: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.notificationForm.controls;
  }

  onAuthCboxChangeHandler(event) {
    if (event.target.value == 'User Credentials') {
      this.checkedUserType = event.target.checked;
      this.checkedUserValue = event.target.value;
    } else {
      this.checkedCertType = event.target.checked;
      this.checkedCertValue = event.target.value;
    }
  }

  onNotificationSubmit() {
    this.submitted = true;
    if (this.notificationForm.invalid) {
      return false;
    } else {
      this.createNotificationDetails();
    }
  }

  createNotificationDetails() {
    this.http.post(mrNotificationUrl.mrNotificationURL, {
      name: this.notificationForm.controls.name.value,
      port: this.notificationForm.controls.port.value,
      authType: this.checkedUserValue + ' , ' + this.checkedCertValue,
      username: this.notificationForm.controls.username.value,
      password: this.notificationForm.controls.password.value,
      certificate: this.notificationForm.controls.certificate.value,
      tlsType: this.notificationForm.controls.tlsType.value,
      purpose: this.notificationForm.controls.purpose.value,
      from: this.notificationForm.controls.from.value,
      to: this.notificationForm.controls.to.value,
      server: this.notificationForm.controls.server.value
    })
      .subscribe((notificationDetails) => {
        console.log('Post Manage Resources Notification call successful value returned >>', notificationDetails);
        this.toastrService.success('Manage Resources Notification Data Saved Successfully.');
      },
        error => {
          console.log('Post Manage Resources Notification call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Manage Resources Notification Data Saved Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/manageresources/notification']);
            }, 2000);
          } else {
            this.toastrService.error('Notification name is already taken.');
          }
        })
  };
}