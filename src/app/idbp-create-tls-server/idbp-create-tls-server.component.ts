import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import idbpTlsUrl from '../../idbp.config.json';

@Component({
  selector: 'app-idbp-create-tls-server',
  templateUrl: './idbp-create-tls-server.component.html',
  styleUrls: ['./idbp-create-tls-server.component.scss']
})
export class IdbpCreateTlsServerComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  tlsServerForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.tlsServerForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      version: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.tlsServerForm.controls;
  }

  onTLSServerSubmit() {
    this.submitted = true;
    if (this.tlsServerForm.invalid) {
      return false;
    } else {
      this.createTlsServerDetails();
    }
  }

  createTlsServerDetails() {
    this.http.post(idbpTlsUrl.idbpTlsURL, {
      title: this.tlsServerForm.controls.title.value,
      name: this.tlsServerForm.controls.name.value,
      version: this.tlsServerForm.controls.version.value,
      type: this.tlsServerForm.controls.type.value
    })
      .subscribe((serverDetails) => {
        console.log('Post idbp TLS profile call successful value returned >>', serverDetails);
        this.toastrService.success('Idbp TLS Profile Data Saved Successfully.');
      },
        error => {
          console.log('Post idbp TLS profile call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Idbp TLS Profile Data Saved Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/settings/tlsprofile']);
            }, 2000);
          } else {
            this.toastrService.error('Idbp TLS Server name is already taken.');
          }
        })
  };
}