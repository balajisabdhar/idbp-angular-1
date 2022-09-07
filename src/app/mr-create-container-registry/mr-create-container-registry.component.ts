import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import mrContainerRegistryUrl from '../../idbp.config.json';

@Component({
  selector: 'app-mr-create-container-registry',
  templateUrl: './mr-create-container-registry.component.html',
  styleUrls: ['./mr-create-container-registry.component.scss']
})
export class MrCreateContainerRegistryComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  containerRegistryForm: FormGroup;
  submitted: boolean = false;

  authData = ['User Credentials', 'Token'];
  checkedUserValue: any;
  checkedTokenValue: any;
  checkedUserType: boolean = false;
  checkedTokenType: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.containerRegistryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      address: ['', [Validators.required]],
      authType: ['', [Validators.required]],
      username: [''],
      password: [''],
      token: ['']
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.containerRegistryForm.controls;
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

  onContainerRegistrySubmit() {
    this.submitted = true;
    if (this.containerRegistryForm.invalid) {
      return false;
    } else {
      this.createMrContainerRegistryDetails();
    }
  }

  createMrContainerRegistryDetails() {
    this.http.post(mrContainerRegistryUrl.mrContainerRegistryURL, {
      name: this.containerRegistryForm.controls.name.value,
      address: this.containerRegistryForm.controls.address.value,
      authType: this.checkedUserValue + ' , ' + this.checkedTokenValue,
      username: this.containerRegistryForm.controls.username.value,
      password: this.containerRegistryForm.controls.password.value,
      token: this.containerRegistryForm.controls.token.value
    })
      .subscribe((mrCRegistryDetails) => {
        console.log('Post Manage Resources Container Registry call successful value returned >>', mrCRegistryDetails);
        this.toastrService.success('Manage Resources Container Registry Data Saved Successfully.');
      },
        error => {
          console.log('Post Manage Resources Container Registry call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Manage Resources Container Registry Data Saved Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/manageresources/containerregistry']);
            }, 2000);
          } else {
            this.toastrService.error('Container Registry name is already taken.');
          }
        })
  };
}