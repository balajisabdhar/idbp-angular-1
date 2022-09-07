import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import smtpUrl from '../../idbp.config.json';

@Component({
  selector: 'app-get-email-notifications',
  templateUrl: './get-email-notifications.component.html',
  styleUrls: ['./get-email-notifications.component.scss']
})
export class GetEmailNotificationsComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  editEmailForm: FormGroup;
  submitted: boolean = false;
  smtpsList: any;
  smtpTemp: boolean = false;
  servicename: string;
  host: string;
  port: string;
  secure: string;
  roleRoutesList: any;
  smtpRoutesMatched: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(smtpUrl.smtpURL)
      .subscribe((smtpServerList: Response) => {
        console.log('Get smtp servers list call >>', smtpServerList);
        this.smtpsList = smtpServerList;

        if (this.smtpsList.length == []) {
          this.smtpTemp = false;
        } else {
          this.smtpTemp = true;
        }
      }, error => {
        console.log('Get smtp servers list call in error >>', error.message);
      });

    this.editEmailForm = this.formBuilder.group({
      serviceName: ['', [Validators.required]],
      host: ['', [Validators.required]],
      port: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      secure: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.toastrService.overlayContainer = this.toastContainer;

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/settings/listsmtpconfigure/createsmtp" == this.roleRoutesList[i]) {
          this.smtpRoutesMatched = true;
        }
      }
    }
  }

  get f() {
    return this.editEmailForm.controls;
  }

  onEditEmailSubmit() {
    this.submitted = true;
    if (this.editEmailForm.invalid) {
      return;
    } else {
      this.editSmtp();
    }
  }

  editSmtp() {
    this.http.put(smtpUrl.smtpURL, {
      id: localStorage.getItem('smtpId'),
      servicename: this.editEmailForm.controls.serviceName.value,
      host: this.editEmailForm.controls.host.value,
      port: this.editEmailForm.controls.port.value,
      secure: this.editEmailForm.controls.secure.value,
      username: this.editEmailForm.controls.username.value,
      password: this.editEmailForm.controls.password.value
    })
      .subscribe((templateUpdated: Response) => {
        console.log('Put smtp call successful value returned >>', templateUpdated);
        this.toastrService.success('SMTP Updated Successfully.');
      },
        error => {
          console.log('Put smtp in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('SMTP Updated Successfully.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/settings/listsmtpconfigure']);
            }, 2000);
          } else {
            this.toastrService.error('Update incompleted. Please update the fields.');
          }
        })
  }

  onEditEmailNotification(id, servicename, host, port, secure) {
    localStorage.setItem('smtpId', id);
    localStorage.setItem('servicename', servicename);
    localStorage.setItem('host', host);
    localStorage.setItem('port', port);
    localStorage.setItem('secure', secure);

    this.servicename = localStorage.getItem('servicename');
    this.host = localStorage.getItem('host');
    this.port = localStorage.getItem('port');
    this.secure = localStorage.getItem('secure');
  }
}