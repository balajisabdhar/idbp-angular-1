import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import cbsIntegrationUrl from '../../idbp.config.json';

@Component({
  selector: 'app-cbs-integration',
  templateUrl: './cbs-integration.component.html',
  styleUrls: ['./cbs-integration.component.scss']
})
export class CbsIntegrationComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  cbsForm: FormGroup;
  submitted: boolean = false;

  authData = ['User Credentials', 'Token'];
  checkedUserValue: any;
  checkedTokenValue: any;
  checkedUserType: boolean = false;
  checkedTokenType: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.cbsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      desc: [''],
      address: ['', [Validators.required]],
      port: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      connectionProtocol: ['', [Validators.required]],
      mFormat: ['', [Validators.required]],
      authType: ['', [Validators.required]],
      username: [''],
      password: [''],
      token: [''],
      tlsType: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.cbsForm.controls;
  }

  onAuthCboxChangeHandler(event) {
    if (event.target.value == 'User Credentials') {
      this.checkedUserType = event.target.checked;
      this.checkedUserValue = event.target.value;
    } else {
      this.checkedTokenType = event.target.checked;
      this.checkedTokenValue = event.target.value;
    }
  }

  onCbsIntegrationSubmit() {
    this.submitted = true;
    if (this.cbsForm.invalid) {
      return false;
    } else {
      this.createCbsIntegration();
    }
  }

  createCbsIntegration() {
    this.http.post(cbsIntegrationUrl.cbsIntegrationURL, {
      name: this.cbsForm.controls.name.value,
      description: this.cbsForm.controls.desc.value,
      address: this.cbsForm.controls.address.value,
      port: this.cbsForm.controls.port.value,
      connectionProtocol: this.cbsForm.controls.connectionProtocol.value,
      mFormat: this.cbsForm.controls.mFormat.value,
      authType: this.checkedUserValue + ' , ' + this.checkedTokenValue,
      username: this.cbsForm.controls.username.value,
      password: this.cbsForm.controls.password.value,
      token: this.cbsForm.controls.token.value,
      tlsType: this.cbsForm.controls.tlsType.value
    })
      .subscribe((cbs) => {
        console.log('Post cbs call successful value returned >>', cbs);
        this.toastrService.success('Core Banking Data Saved Successfully.');
      },
        error => {
          console.log('Post cbs call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Core Banking Data Saved Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/cbs']);
            }, 2000);
          } else {
            this.toastrService.error('Core Banking name is already taken.');
          }
        })
  };
}