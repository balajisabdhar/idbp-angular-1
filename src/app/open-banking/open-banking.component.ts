import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';

@Component({
  selector: 'app-open-banking',
  templateUrl: './open-banking.component.html',
  styleUrls: ['./open-banking.component.scss']
})
export class OpenBankingComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  servicesEnvForm: FormGroup;
  packParam: string;
  bsArray = [];
  servicesClicked: any;
  paymentsServiceEnvs: any;
  accountsServiceEnvs: any;
  deployButtonClicked: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.route.queryParams.subscribe(params => {
      this.packParam = params['pack'];
    });

    this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/mrbsdetails?pack=' + this.packParam)
      .subscribe((bsData: any) => {
        console.log('Get bs list call >>', bsData);

        for (let i = 0; i < bsData.data.services.length; i++) {
          this.bsArray = bsData.data.services.map(x => x);
          console.log('this.bsArray services list >> ', this.bsArray);
        }
      }, error => {
        console.log('Get bs call in error >>', error.message);
      });

    this.servicesEnvForm = this.formBuilder.group({
      payEnvs: [''],
      accEnvs: [''],
      token: ['']
    });
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.servicesEnvForm.controls;
  }

  onDeploySubmit() {
    if (this.servicesClicked == 'Payments' && this.servicesEnvForm.controls.payEnvs.value && this.servicesEnvForm.controls.token.value) {
      this.deployButtonClicked = true;

      this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/manageservicesnewdeploy?env=' + this.servicesEnvForm.controls.payEnvs.value + '&openshifttoken=' + this.servicesEnvForm.controls.token.value + '&pack=' + this.packParam + '&services=' + this.servicesClicked)
        .subscribe(
          (paymentsMsg: any) => {
            console.log('Get payments service env deployed list call >>', paymentsMsg);
            this.toastrService.success('Service Deployed in target environment.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageservices']);
            }, 4000);
          },
          error => {
            console.log('Get payments service env deployed call in error >>', error);
            this.toastrService.error('Service Deployment Failed in target environment.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageservices']);
            }, 4000);
          }
        )
    }
    else if (this.servicesClicked == 'Accounts' && this.servicesEnvForm.controls.accEnvs.value && this.servicesEnvForm.controls.token.value) {
      this.deployButtonClicked = true;

      this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/manageservicesnewdeploy?env=' + this.servicesEnvForm.controls.accEnvs.value + '&openshifttoken=' + this.servicesEnvForm.controls.token.value + '&pack=' + this.packParam + '&services=' + this.servicesClicked)
        .subscribe(
          (accountsMsg: any) => {
            console.log('Get accounts service env deployed list call >>', accountsMsg);
            this.toastrService.success('Service Deployed in target environment.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageservices']);
            }, 4000);
          },
          error => {
            console.log('Get accounts service env deployed call in error >>', error);
            this.toastrService.error('Service Deployment Failed in target environment.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageservices']);
            }, 4000);
          }
        )
    } else {
      this.toastrService.error('Please enter all fields to deploy.');
    }
  }

  onDeployServices(services) {
    this.servicesClicked = services;

    this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/nonenv?services=' + services + '&pack=' + this.packParam)
      .subscribe((servicesData: any) => {
        console.log('Get services from env call >>', servicesData);
        if (servicesData.length == []) {
          this.toastrService.error('No environment to be deployed.');
        } else {
          for (let i = 0; i < servicesData.length; i++) {
            if (this.servicesClicked == 'Payments') {
              this.paymentsServiceEnvs = servicesData.map(x => x);
              console.log('Payments Service Envs >>', this.paymentsServiceEnvs);
            } else if (this.servicesClicked == 'Accounts') {
              this.accountsServiceEnvs = servicesData.map(x => x);
              console.log('Accounts Service Envs >>', this.accountsServiceEnvs);
            }
          }
        }
      },
        error => {
          console.log('Get services from env data in error >>', error);
        });
  }
}