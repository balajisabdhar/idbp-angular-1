import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import mrContainerPlatformUrl from '../../idbp.config.json';

@Component({
  selector: 'app-manage-resources',
  templateUrl: './manage-resources.component.html',
  styleUrls: ['./manage-resources.component.scss']
})
export class ManageResourcesComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  navLinks: any[];
  containerPlatformList: any;
  containerPlatformTemp: boolean = false;

  editContainerPlatForm: FormGroup;
  submitted: boolean = false;
  name: string;
  domain: string;
  add: string;
  roleRoutesList: any;
  cPlatformRoutesMatched: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) {
    this.navLinks = [
      {
        label: 'Container Platform',
        link: './createcontainerplatform',
        index: 0
      },
      {
        label: 'Container Registry',
        link: './containerregistry',
        index: 1
      },
      {
        label: 'APIC',
        link: './apic',
        index: 2
      },
      {
        label: 'Notification',
        link: './notification',
        index: 3
      }
    ];
  }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(mrContainerPlatformUrl.mrContainerPlatformURL)
      .subscribe((containerPlatforms: Response) => {
        console.log('Get container platform list call >>', containerPlatforms);
        this.containerPlatformList = containerPlatforms;

        if (this.containerPlatformList.length == []) {
          this.containerPlatformTemp = false;
        } else {
          this.containerPlatformTemp = true;
        }
      }, error => {
        console.log('Get container platform call in error >>', error.message);
      });

    this.editContainerPlatForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      domain: ['', [Validators.required]],
      platformType: ['', [Validators.required]],
      address: ['', [Validators.required]],
      token: ['', [Validators.required]],
    })
    this.toastrService.overlayContainer = this.toastContainer;

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/manageresources/createcontainerplatform" == this.roleRoutesList[i]) {
          this.cPlatformRoutesMatched = true;
        }
      }
    }
  }

  get f() {
    return this.editContainerPlatForm.controls;
  }

  onEditContainerPlatformSubmit() {
    this.submitted = true;
    if (this.editContainerPlatForm.invalid) {
      return false;
    } else {
      this.editMrContainerPlatform();
    }
  }

  editMrContainerPlatform() {
    this.http.put(mrContainerPlatformUrl.mrContainerPlatformURL, {
      cPlatformId: localStorage.getItem('cPlatformId'),
      name: this.editContainerPlatForm.controls.name.value,
      domain: this.editContainerPlatForm.controls.domain.value,
      platformType: this.editContainerPlatForm.controls.platformType.value,
      address: this.editContainerPlatForm.controls.address.value,
      token: this.editContainerPlatForm.controls.token.value,
    })
      .subscribe((cPlatformUpdatedData) => {
        console.log('Put edit container platform call successful value returned >>', cPlatformUpdatedData);
        this.toastrService.success('Container Platform Data Updated Successfully.');
      },
        error => {
          console.log('Put edit container platform call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Container Platform Data Updated Successfully.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageresources']);
            }, 4000);
          } else {
            this.toastrService.error('Update incompleted. Please update all the fields.');
          }
        })
  };

  onEditContainerPlatform(id, name, domain, address) {
    localStorage.setItem('cPlatformId', id);
    localStorage.setItem('cPlatformName', name);
    localStorage.setItem('cPlatformDomain', domain);
    localStorage.setItem('cPlatformAddress', address);

    this.name = localStorage.getItem('cPlatformName');
    this.domain = localStorage.getItem('cPlatformDomain');
    this.add = localStorage.getItem('cPlatformAddress');
  }

  onDeleteContainerPlatform(cPlatformId) {
    this.http.post(mrContainerPlatformUrl.mrContainerPlatformURL, { _id: cPlatformId })
      .subscribe((cPlatformDeleted) => {
        console.log('Delete container platform call successful value returned >>', cPlatformDeleted);
      },
        error => {
          console.log('Delete container platform call in error >>', error);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/manageresources']);
        })
  }
}