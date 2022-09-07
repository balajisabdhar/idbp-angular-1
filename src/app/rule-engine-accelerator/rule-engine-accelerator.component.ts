import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';

@Component({
  selector: 'app-rule-engine-accelerator',
  templateUrl: './rule-engine-accelerator.component.html',
  styleUrls: ['./rule-engine-accelerator.component.scss']
})
export class RuleEngineAcceleratorComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  ruleengineacceleratorForm: FormGroup;
  submitted: boolean = false;
  checkedRuleTypeValue: any;
  selectedService: string[] = [];

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();
    this.ruleengineacceleratorForm = this.formBuilder.group({
      eName: ['', [Validators.required]],
      ruleType: ['', [Validators.required]],
      sName: [''],
      pID: [''],
      currencyType: [''],
      minLimit: [''],
      maxLimit: [''],
      limit: [''],
      frequencyType: [''],
      start: [''],
      end: [''],
      actionType: [''],
      Compliance: [''],
      Value: [''],
      gdpr: [''],
    });
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.ruleengineacceleratorForm.controls;
  }

  onRuleChangeHandler(event) {
    this.checkedRuleTypeValue = event.target.value;
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

  onruleengineSubmit() {
    this.submitted = true;
    if (this.ruleengineacceleratorForm.invalid) {
      return false;
    } else {
      this.createruleengineIntegration();
    }
  }

  createruleengineIntegration() {
    this.toastrService.success('Rules created in target environment successfully.');
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);
  }
}