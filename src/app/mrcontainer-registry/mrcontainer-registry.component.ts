import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import mrContainerRegistryUrl from '../../idbp.config.json';

@Component({
  selector: 'app-mrcontainer-registry',
  templateUrl: './mrcontainer-registry.component.html',
  styleUrls: ['./mrcontainer-registry.component.scss']
})
export class MRContainerRegistryComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  containerRegistryList: any;
  containerRegistryTemp: boolean = false;
  editContainerRegistryForm: FormGroup;
  submitted: boolean = false;

  authData = ['User Credentials', 'Token'];
  checkedUserValue: any;
  checkedTokenValue: any;
  checkedUserType: boolean = false;
  checkedTokenType: boolean = false;

  name: string;
  add: string;
  roleRoutesList: any;
  cRegistryRoutesMatched: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(mrContainerRegistryUrl.mrContainerRegistryURL)
      .subscribe((containerRegistries: Response) => {
        console.log('Get container registries list call >>', containerRegistries);
        this.containerRegistryList = containerRegistries;

        if (this.containerRegistryList.length == []) {
          this.containerRegistryTemp = false;
        } else {
          this.containerRegistryTemp = true;
        }
      }, error => {
        console.log('Get container registries list call in error >>', error.message);
      });


    this.editContainerRegistryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      address: ['', [Validators.required]],
      authType: ['', [Validators.required]],
      username: [''],
      password: [''],
      token: ['']
    })
    this.toastrService.overlayContainer = this.toastContainer;

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/manageresources/containerregistry/createcontainerregistry" == this.roleRoutesList[i]) {
          this.cRegistryRoutesMatched = true;
        }
      }
    }
  }

  get f() {
    return this.editContainerRegistryForm.controls;
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

  onEditContainerRegistrySubmit() {
    this.submitted = true;
    if (this.editContainerRegistryForm.invalid) {
      return false;
    } else {
      this.editMrContainerRegistry();
    }
  }

  editMrContainerRegistry() {
    this.http.put(mrContainerRegistryUrl.mrContainerRegistryURL, {
      cRegistryId: localStorage.getItem('cRegistryId'),
      name: this.editContainerRegistryForm.controls.name.value,
      address: this.editContainerRegistryForm.controls.address.value,
      authType: this.checkedUserValue + ' , ' + this.checkedTokenValue,
      username: this.editContainerRegistryForm.controls.username.value,
      password: this.editContainerRegistryForm.controls.password.value,
      token: this.editContainerRegistryForm.controls.token.value
    })
      .subscribe((cRegistryUpdatedData) => {
        console.log('Put edit container registry call successful value returned >>', cRegistryUpdatedData);
        this.toastrService.success('Container Registry Data Updated Successfully.');
      },
        error => {
          console.log('Put edit container registry call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Container Registry Data Updated Successfully.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageresources/containerregistry']);
            }, 4000);
          } else {
            this.toastrService.error('Update incompleted. Please update all the fields.');
          }
        })
  };

  onEditContainerRegistry(id, name, address) {
    localStorage.setItem('cRegistryId', id);
    localStorage.setItem('cRegistryName', name);
    localStorage.setItem('cRegistryAddress', address);

    this.name = localStorage.getItem('cRegistryName');
    this.add = localStorage.getItem('cRegistryAddress');
  }

  onDeleteContainerRegistry(cRegistryId) {
    this.http.post(mrContainerRegistryUrl.mrContainerRegistryURL, { _id: cRegistryId })
      .subscribe((registryDeleted) => {
        console.log('Delete container registry call successful value returned >>', registryDeleted);
      },
        error => {
          console.log('Delete container registry call in error >>', error);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/manageresources/containerregistry']);
        })
  }
}