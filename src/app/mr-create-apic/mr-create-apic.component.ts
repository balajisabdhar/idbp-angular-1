import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import mrAPICUrl from '../../idbp.config.json';

@Component({
  selector: 'app-mr-create-apic',
  templateUrl: './mr-create-apic.component.html',
  styleUrls: ['./mr-create-apic.component.scss']
})
export class MrCreateApicComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  apicForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.apicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      platform: ['', [Validators.required]],
      realm: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      pOrg: ['', [Validators.required]],
      catalog: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.apicForm.controls;
  }

  onAPICSubmit() {
    this.submitted = true;
    if (this.apicForm.invalid) {
      return false;
    } else {
      this.createMrAPICDetails();
    }
  }

  createMrAPICDetails() {
    this.http.post(mrAPICUrl.mrAPICURL, {
      name: this.apicForm.controls.name.value,
      platform: this.apicForm.controls.platform.value,
      realm: this.apicForm.controls.realm.value,
      username: this.apicForm.controls.username.value,
      password: this.apicForm.controls.password.value,
      pOrg: this.apicForm.controls.pOrg.value,
      catalog: this.apicForm.controls.catalog.value
    })
      .subscribe((mrAPICDetails) => {
        console.log('Post Manage Resources APIC call successful value returned >>', mrAPICDetails);
        this.toastrService.success('Manage Resources APIC Data Saved Successfully.');
      },
        error => {
          console.log('Post Manage Resources APIC call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Manage Resources APIC Data Saved Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/manageresources/apic']);
            }, 2000);
          } else {
            this.toastrService.error('APIC name is already taken.');
          }
        })
  };
}