import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import mrNotificationUrl from '../../idbp.config.json';

@Component({
  selector: 'app-mrnotification',
  templateUrl: './mrnotification.component.html',
  styleUrls: ['./mrnotification.component.scss']
})
export class MRNotificationComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  notificationList: any;
  notificationTemp: boolean = false;
  editNotificationForm: FormGroup;
  submitted: boolean = false;
  name: string;
  port: string;
  roleRoutesList: any;
  notificationRoutesMatched: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(mrNotificationUrl.mrNotificationURL)
      .subscribe((notifiList: Response) => {
        console.log('Get notification list call >>', notifiList);
        this.notificationList = notifiList;

        if (this.notificationList.length == []) {
          this.notificationTemp = false;
        } else {
          this.notificationTemp = true;
        }
      }, error => {
        console.log('Get notification list call in error >>', error.message);
      });

    this.editNotificationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      port: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      purpose: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/manageresources/notification/createnotification" == this.roleRoutesList[i]) {
          this.notificationRoutesMatched = true;
        }
      }
    }
  }

  get f() {
    return this.editNotificationForm.controls;
  }

  onEditNotificationSubmit() {
    this.submitted = true;
    if (this.editNotificationForm.invalid) {
      return false;
    } else {
      this.editMrNotification();
    }
  }

  editMrNotification() {
    this.http.put(mrNotificationUrl.mrNotificationURL, {
      notificationId: localStorage.getItem('notificationId'),
      name: this.editNotificationForm.controls.name.value,
      port: this.editNotificationForm.controls.port.value,
      purpose: this.editNotificationForm.controls.purpose.value
    })
      .subscribe((notUpdatedData) => {
        console.log('Put edit notification call successful value returned >>', notUpdatedData);
        this.toastrService.success('Notification Data Updated Successfully.');
      },
        error => {
          console.log('Put edit notification call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Notification Data Updated Successfully.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageresources/notification']);
            }, 4000);
          } else {
            this.toastrService.error('Update incompleted. Please update all the fields.');
          }
        })
  };

  onEditNotification(id, name, port) {
    localStorage.setItem('notificationId', id);
    localStorage.setItem('notificationName', name);
    localStorage.setItem('notificationPort', port);

    this.name = localStorage.getItem('notificationName');
    this.port = localStorage.getItem('notificationPort');
  }

  onDeleteNotification(notificationId) {
    this.http.post(mrNotificationUrl.mrNotificationURL, { _id: notificationId })
      .subscribe((notificationDeleted) => {
        console.log('Delete notification call successful value returned >>', notificationDeleted);
      },
        error => {
          console.log('Delete notification call in error >>', error);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/manageresources/notification']);
        })
  }
}