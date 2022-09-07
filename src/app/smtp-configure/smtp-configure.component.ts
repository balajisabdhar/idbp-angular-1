import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import smtpUrl from '../../idbp.config.json';

@Component({
  selector: 'app-smtp-configure',
  templateUrl: './smtp-configure.component.html',
  styleUrls: ['./smtp-configure.component.scss']
})
export class SmtpConfigureComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  serverForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.serverForm = this.formBuilder.group({
      serviceName: ['', [Validators.required]],
      host: ['', [Validators.required]],
      port: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      secure: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.serverForm.controls;
  }

  onServerSubmit() {
    this.submitted = true;
    if (this.serverForm.invalid) {
      return;
    } else {
      this.createSmtp();
    }
  }

  createSmtp() {
    this.http.post(smtpUrl.smtpURL, {
      servicename: this.serverForm.controls.serviceName.value,
      host: this.serverForm.controls.host.value,
      port: this.serverForm.controls.port.value,
      secure: this.serverForm.controls.secure.value,
      username: this.serverForm.controls.username.value,
      password: this.serverForm.controls.password.value
    })
      .subscribe(
        (smtpConfigure: Response) => {
          console.log('Post smtp configuration call successful value returned in body >>', smtpConfigure);
          this.toastrService.success('SMTP Configuration Data Saved Successfully.');
          this.router.navigate(['/dashboard/settings/listsmtpconfigure']);
        },
        error => {
          console.log('Post smtp configuration call in error >>', error);
          if (error.status == '401') {
            this.toastrService.error('SMTP name is already taken.');
          } else {
            this.toastrService.success('SMTP Configuration Data Saved Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/settings/listsmtpconfigure']);
            }, 2000);
          }
        }
      )
  };
}