import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import mrAPICUrl from '../../idbp.config.json';

@Component({
  selector: 'app-mrapic',
  templateUrl: './mrapic.component.html',
  styleUrls: ['./mrapic.component.scss']
})
export class MRApicComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  apicList: any;
  apicTemp: boolean = false;
  editApicForm: FormGroup;
  submitted: boolean = false;
  name: string;
  plat: string;
  rel: string;
  prov: string;
  cat: string;
  roleRoutesList: any;
  apicRoutesMatched: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(mrAPICUrl.mrAPICURL)
      .subscribe((apics: Response) => {
        console.log('Get apic list call >>', apics);
        this.apicList = apics;

        if (this.apicList.length == []) {
          this.apicTemp = false;
        } else {
          this.apicTemp = true;
        }
      }, error => {
        console.log('Get apic list call in error >>', error.message);
      });

    this.editApicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      platform: ['', [Validators.required]],
      realm: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      pOrg: ['', [Validators.required]],
      catalog: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/manageresources/apic/createapic" == this.roleRoutesList[i]) {
          this.apicRoutesMatched = true;
        }
      }
    }
  }

  get f() {
    return this.editApicForm.controls;
  }

  onEditApicSubmit() {
    this.submitted = true;
    if (this.editApicForm.invalid) {
      return false;
    } else {
      this.editMrApic();
    }
  }

  editMrApic() {
    this.http.put(mrAPICUrl.mrAPICURL, {
      apicId: localStorage.getItem('apicId'),
      name: this.editApicForm.controls.name.value,
      platform: this.editApicForm.controls.platform.value,
      realm: this.editApicForm.controls.realm.value,
      username: this.editApicForm.controls.username.value,
      password: this.editApicForm.controls.password.value,
      pOrg: this.editApicForm.controls.pOrg.value,
      catalog: this.editApicForm.controls.catalog.value
    })
      .subscribe((apicUpdatedData) => {
        console.log('Put edit apic call successful value returned >>', apicUpdatedData);
        this.toastrService.success('APIC Data Updated Successfully.');
      },
        error => {
          console.log('Put edit apic call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('APIC Data Updated Successfully.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageresources/apic']);
            }, 4000);
          } else {
            this.toastrService.error('Update incompleted. Please update all the fields.');
          }
        })
  };

  onEditApic(id, name, platform, realm, provorg, catalog) {
    localStorage.setItem('apicId', id);
    localStorage.setItem('apicName', name);
    localStorage.setItem('apicPlatform', platform);
    localStorage.setItem('apicRealm', realm);
    localStorage.setItem('apicProvorg', provorg);
    localStorage.setItem('apicCatalog', catalog);

    this.name = localStorage.getItem('apicName');
    this.plat = localStorage.getItem('apicPlatform');
    this.rel = localStorage.getItem('apicRealm');
    this.prov = localStorage.getItem('apicProvorg');
    this.cat = localStorage.getItem('apicCatalog');
  }

  onDeleteApic(apicId) {
    this.http.post(mrAPICUrl.mrAPICURL, { _id: apicId })
      .subscribe((apicDeleted) => {
        console.log('Delete apic call successful value returned >>', apicDeleted);
      },
        error => {
          console.log('Delete apic call in error >>', error);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/manageresources/apic']);
        })
  }
}