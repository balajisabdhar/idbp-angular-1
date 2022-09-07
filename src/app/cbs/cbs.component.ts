import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import cbsIntegrationUrl from '../../idbp.config.json';

@Component({
  selector: 'app-cbs',
  templateUrl: './cbs.component.html',
  styleUrls: ['./cbs.component.scss']
})
export class CbsComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  editCbsForm: FormGroup;
  submitted: boolean = false;

  // authData = ['User Credentials', 'Token'];
  // checkedUserValue: any;
  // checkedTokenValue: any;
  // checkedUserType: boolean = false;
  // checkedTokenType: boolean = false;

  cbsList: any;
  cbsTemp: boolean = false;
  name: string;
  desc: string;
  add: string;
  port: string;
  // mf: string;
  roleRoutesList: any;
  cbsRoutesMatched: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(cbsIntegrationUrl.cbsIntegrationURL)
      .subscribe((cbs: Response) => {
        console.log('Get cbs list call >>', cbs);
        this.cbsList = cbs;

        if (this.cbsList.length == []) {
          this.cbsTemp = false;
        } else {
          this.cbsTemp = true;
        }
      }, error => {
        console.log('Get cbs list call in error >>', error.message);
      });

    this.editCbsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      desc: [''],
      address: ['', [Validators.required]],
      port: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      // connectionProtocol: ['', [Validators.required]],
      // mFormat: ['', [Validators.required]],
      // authType: ['', [Validators.required]],
      // username: [''],
      // password: [''],
      // token: [''],
      // tlsType: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/cbs/createcbs" == this.roleRoutesList[i]) {
          this.cbsRoutesMatched = true;
        }
      }
    }
  }

  get f() {
    return this.editCbsForm.controls;
  }

  // onAuthCboxChangeHandler(event) {
  //   if (event.target.value == 'User Credentials') {
  //     this.checkedUserType = event.target.checked;
  //     this.checkedUserValue = event.target.value;
  //   } else {
  //     this.checkedTokenType = event.target.checked;
  //     this.checkedTokenValue = event.target.value;
  //   }
  // }

  onEditCbsSubmit() {
    this.submitted = true;
    if (this.editCbsForm.invalid) {
      return false;
    } else {
      this.editCbs();
    }
  }

  editCbs() {
    this.http.put(cbsIntegrationUrl.cbsIntegrationURL, {
      cbsId: localStorage.getItem('cbsId'),
      name: this.editCbsForm.controls.name.value,
      description: this.editCbsForm.controls.desc.value,
      address: this.editCbsForm.controls.address.value,
      port: this.editCbsForm.controls.port.value
      // connectionProtocol: this.editCbsForm.controls.connectionProtocol.value,
      // mFormat: this.editCbsForm.controls.mFormat.value,
      // authType: this.checkedUserValue + ' , ' + this.checkedTokenValue,
      // username: this.editCbsForm.controls.username.value,
      // password: this.editCbsForm.controls.password.value,
      // token: this.editCbsForm.controls.token.value,
      // tlsType: this.editCbsForm.controls.tlsType.value
    })
      .subscribe((cbsUpdatedData) => {
        console.log('Put edit cbs call successful value returned >>', cbsUpdatedData);
        this.toastrService.success('Core Banking Data Updated Successfully.');
      },
        error => {
          console.log('Put edit cbs call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Core Banking Data Updated Successfully.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/cbs']);
            }, 4000);
          } else {
            this.toastrService.error('Update incompleted. Please update all the fields.');
          }
        })
  };

  onEditCbs(id, name, description, address, port, messageFormat) {
    localStorage.setItem('cbsId', id);
    localStorage.setItem('cbsName', name);
    localStorage.setItem('cbsDescription', description);
    localStorage.setItem('cbsAddress', address);
    localStorage.setItem('cbsPort', port);
    //localStorage.setItem('cbsMessageFormat', messageFormat);

    this.name = localStorage.getItem('cbsName');
    this.desc = localStorage.getItem('cbsDescription');
    this.add = localStorage.getItem('cbsAddress');
    this.port = localStorage.getItem('cbsPort');
    //this.mf = localStorage.getItem('cbsMessageFormat');
  }

  onDeleteCbs(cbsId) {
    this.http.post(cbsIntegrationUrl.cbsIntegrationURL, { _id: cbsId })
      .subscribe((cbsDeleted) => {
        console.log('Delete cbs call successful value returned >>', cbsDeleted);
      },
        error => {
          console.log('Delete cbs call in error >>', error);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/cbs']);
        })
  }
}