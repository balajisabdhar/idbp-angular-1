import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';

@Component({
  selector: 'app-token-management-accelerator',
  templateUrl: './token-management-accelerator.component.html',
  styleUrls: ['./token-management-accelerator.component.scss']
})
export class TokenManagementAcceleratorComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  aceacceleratorForm: FormGroup;
  submitted: boolean = false;
  checkedRadioTypeValue: any;
  selectedService: string[] = [];

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();
    this.aceacceleratorForm = this.formBuilder.group({
      radio: ['', [Validators.required]],
      revokeDate: [''],
      revokeClientID: [''],
      revokeOwner: [''],
      revokeToken: [''],
      radio4:['']
    });
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.aceacceleratorForm.controls;
  }

  onRadioChangeHandler(event) {
    this.checkedRadioTypeValue = event.value;
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

  ontokenmanagementSubmit() {
    this.submitted = true;
    if (this.aceacceleratorForm.invalid) {
      return false;
    } else {
      this.createaceacceleratorIntegration();
    }
  }

  createaceacceleratorIntegration() {
    this.toastrService.success('Updated in target environment succesfully.');
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);
  }
}