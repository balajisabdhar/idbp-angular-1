import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';

@Component({
  selector: 'app-ace-accelerator',
  templateUrl: './ace-accelerator.component.html',
  styleUrls: ['./ace-accelerator.component.scss']
})

export class AceAcceleratorComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  aceacceleratorForm: FormGroup;
  submitted: boolean = false;
  checkedAuthTypeValue: any;
  selectedService: string[] = [];

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();
    
    this.aceacceleratorForm = this.formBuilder.group({
      initServer: ['', [Validators.required]],
      appName: ['', [Validators.required]],
      transformationFilePath: [''],
      aceConfiguration: ['', [Validators.required]],
      maxCPU: ['', [Validators.required]],
      minCPU: ['', [Validators.required]],
      replicas: ['', [Validators.required]],
      maxRAM: ['', [Validators.required]],
      minRAM: ['', [Validators.required]],
      features: [''],
    });
    this.toastrService.overlayContainer = this.toastContainer;
  }
  get f() {
    return this.aceacceleratorForm.controls;
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

  onaceaccelerationSubmit() {
    this.submitted = true;
    if (this.aceacceleratorForm.invalid) {
      return false;
    } else {
      this.createaceacceleratorIntegration();
    }
  }

  createaceacceleratorIntegration() {
    this.toastrService.success('ACE Accelerator Code Generated and Deployed Successfully.');
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);
  }
}