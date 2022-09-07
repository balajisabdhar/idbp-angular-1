import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import mrContainerPlatformUrl from '../../idbp.config.json';

@Component({
  selector: 'app-mr-create-container-platform',
  templateUrl: './mr-create-container-platform.component.html',
  styleUrls: ['./mr-create-container-platform.component.scss']
})
export class MrCreateContainerPlatformComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  containerPlatForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.containerPlatForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      domain: ['', [Validators.required]],
      platformType: ['', [Validators.required]],
      address: ['', [Validators.required]],
      token: ['', [Validators.required]],
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.containerPlatForm.controls;
  }

  onContainerPlatformSubmit() {
    this.submitted = true;
    if (this.containerPlatForm.invalid) {
      return false;
    } else {
      this.createMrContainerPlatformDetails();
    }
  }

  createMrContainerPlatformDetails() {
    this.http.post(mrContainerPlatformUrl.mrContainerPlatformURL, {
      name: this.containerPlatForm.controls.name.value,
      domain: this.containerPlatForm.controls.domain.value,
      platformType: this.containerPlatForm.controls.platformType.value,
      address: this.containerPlatForm.controls.address.value,
      token: this.containerPlatForm.controls.token.value
    })
      .subscribe((mrCPlatformDetails) => {
        console.log('Post Manage Resources Container Platform call successful value returned >>', mrCPlatformDetails);
        this.toastrService.success('Manage Resources Container Platform Data Saved Successfully.');
      },
        error => {
          console.log('Post Manage Resources Container Platform call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Manage Resources Container Platform Data Saved Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/manageresources']);
            }, 2000);
          } else {
            this.toastrService.error('Container Platform name is already taken.');
          }
        })
  };
}