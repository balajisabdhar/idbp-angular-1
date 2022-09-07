import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import idbpTlsUrl from '../../idbp.config.json';

@Component({
  selector: 'app-idbp-tls-profile',
  templateUrl: './idbp-tls-profile.component.html',
  styleUrls: ['./idbp-tls-profile.component.scss']
})
export class IdbpTlsProfileComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  editTlsForm: FormGroup;
  submitted: boolean = false;
  tlsList: any;
  tlsTemp: boolean = false;
  title: string;
  name: string;
  version: string;
  roleRoutesList: any;
  tlsRoutesMatched: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(idbpTlsUrl.idbpTlsURL)
      .subscribe((tlsProfileList: Response) => {
        console.log('Get idbp tls servers >>', tlsProfileList);
        this.tlsList = tlsProfileList;

        if (this.tlsList.length == []) {
          this.tlsTemp = false;
        } else {
          this.tlsTemp = true;
        }
      }, error => {
        console.log('Get idbp tls server in error >>', error.message);
      });

    this.editTlsForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9-]*$')]],
      version: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/settings/tlsprofile/createtls" == this.roleRoutesList[i]) {
          this.tlsRoutesMatched = true;
        }
      }
    }
  }

  get f() {
    return this.editTlsForm.controls;
  }

  onEditTlsSubmit() {
    this.submitted = true;
    if (this.editTlsForm.invalid) {
      return false;
    } else {
      this.editTlsServer();
    }
  }

  editTlsServer() {
    this.http.put(idbpTlsUrl.idbpTlsURL, {
      id: localStorage.getItem('tlsId'),
      title: this.editTlsForm.controls.title.value,
      name: this.editTlsForm.controls.name.value,
      version: this.editTlsForm.controls.version.value,
      type: this.editTlsForm.controls.type.value
    })
      .subscribe((tlsUpdated: Response) => {
        console.log('Put tls server call successful value returned >>', tlsUpdated);
        this.toastrService.success('Idbp TLS Profile Updated Successfully.');
      },
        error => {
          console.log('Put tls server call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Idbp TLS Profile Updated Successfully.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/settings/tlsprofile']);
            }, 4000);
          } else {
            this.toastrService.error('Update incompleted. Please update all the fields.');
          }
        })
  };

  onEditTlsProfile(id, title, name, version) {
    localStorage.setItem('tlsId', id);
    localStorage.setItem('title', title);
    localStorage.setItem('name', name);
    localStorage.setItem('version', version);

    this.title = localStorage.getItem('title');
    this.name = localStorage.getItem('name');
    this.version = localStorage.getItem('version');
  }

  onDeleteTlsProfile(tlsId) {
    this.http.post(idbpTlsUrl.idbpTlsURL, { _id: tlsId })
      .subscribe((tlsDeleted) => {
        console.log('Delete TLS Profile call successful value returned >>', tlsDeleted);
      },
        error => {
          console.log('Delete TLS Profile call in error >>', error);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/settings/tlsprofile']);
        })
  }
}