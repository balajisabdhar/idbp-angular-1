import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import apicAccelUrl from '../../idbp.config.json';

@Component({
  selector: 'app-apic-accelerator',
  templateUrl: './apic-accelerator.component.html',
  styleUrls: ['./apic-accelerator.component.scss']
})
export class ApicAcceleratorComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  apicacceleratorForm: FormGroup;
  submitted: boolean = false;
  checkedAuthTypeValue: any;
  features = ['Api key', 'Cert-verification', 'Schema Validation', 'Digital Signature Verification', 'Field Level Encryption Decryption'];
  selectedService: string[] = [];

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.apicacceleratorForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      basepath: ['', [Validators.required]],
      desc: [''],
      operationpath: ['', [Validators.required]],
      targeturl: ['', [Validators.required]],
      baseURL: ['', [Validators.required]],
      features: ['', [Validators.required]],
      realm: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      prov: ['', [Validators.required]]
    });
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.apicacceleratorForm.controls;
  }

  onFeaturesCboxChangeHandler(event) {
    console.log('selected >>', event.target.checked);
    console.log('Service value >>', event.target.value);
    if (event.target.checked) {
      this.selectedService.push(event.target.value);
    }
    else {
      if (this.selectedService.indexOf(event.target.value) > -1) {
        this.selectedService.splice(this.selectedService.indexOf(event.target.value), 1);
      }
    }
    console.log('final selectedService >>' + this.selectedService);
  }

  onApicaccelerationSubmit() {
    this.submitted = true;
    if (this.apicacceleratorForm.invalid) {
      return false;
    } else {
      this.createCbsIntegration();
    }
  }

  createCbsIntegration() {
    this.http.post(apicAccelUrl.apicAccelURL, {
      title: this.apicacceleratorForm.controls.title.value,
      description: this.apicacceleratorForm.controls.desc.value,
      basepath: this.apicacceleratorForm.controls.basepath.value,
      operationPath: this.apicacceleratorForm.controls.operationpath.value,
      targetURL: this.apicacceleratorForm.controls.targeturl.value,
      features: this.selectedService,
      baseURL: this.apicacceleratorForm.controls.baseURL.value,
      username: this.apicacceleratorForm.controls.username.value,
      password: this.apicacceleratorForm.controls.password.value,
      realm: this.apicacceleratorForm.controls.realm.value,
      prov: this.apicacceleratorForm.controls.prov.value
    })
      .subscribe((cbs) => {
        console.log('Post cbs call successful value returned >>', cbs);
        this.toastrService.success('APIC Accelerator Deployed Successfully.');
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 4000);
      },
        error => {
          console.log('Post cbs call in error >>', error);
          if (error.status == 200) {
            this.toastrService.success('APIC Accelerator Saved Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 2000);
          } else {
            this.toastrService.error('Internal Server Error.');
          }
        });
  }
}