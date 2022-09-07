import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import mrContainerPlatformUrl from '../../idbp.config.json';
import mrContainerRegistryUrl from '../../idbp.config.json';
import mrAPICUrl from '../../idbp.config.json';
import mrBSDetailsUrl from '../../idbp.config.json';
import cbsIntegrationUrl from '../../idbp.config.json';
import mrNotificationUrl from '../../idbp.config.json';
import nonEnvUrl from '../../idbp.config.json';

@Component({
  selector: 'app-manage-environment-create',
  templateUrl: './manage-environment-create.component.html',
  styleUrls: ['./manage-environment-create.component.scss']
})
export class ManageEnvironmentCreateComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  nonEnvForm: FormGroup;
  submitted: boolean = false;

  cPlatformList: any;
  cRegistryList: any;
  apicList: any;
  bankList: any;
  cbsList: any;
  notificationList: any;

  servicesDeploy = ['Payments', 'Accounts']; selectedService: string[] = [];

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(mrContainerPlatformUrl.mrContainerPlatformURL)
      .subscribe((platformData: Response) => {
        console.log('Get container platforms list call >>', platformData);
        this.cPlatformList = platformData;
      }, error => {
        console.log('Get container platforms list call  in error >>', error.message);
      });

    this.http.get(mrContainerRegistryUrl.mrContainerRegistryURL)
      .subscribe((registryData: Response) => {
        console.log('Get container registries list call >>', registryData);
        this.cRegistryList = registryData;
      }, error => {
        console.log('Get container registries list call  in error >>', error.message);
      });

    this.http.get(mrAPICUrl.mrAPICURL)
      .subscribe((apicData: Response) => {
        console.log('Get apics list call >>', apicData);
        this.apicList = apicData;
      }, error => {
        console.log('Get apics list call  in error >>', error.message);
      });

    this.http.get(mrBSDetailsUrl.mrBSDetailsURL)
      .subscribe((bsServicesData: Response) => {
        console.log('Get banking standard services list call >>', bsServicesData);
        this.bankList = bsServicesData;
      }, error => {
        console.log('Get banking standard services call in error >>', error.message);
      });

    this.http.get(cbsIntegrationUrl.cbsIntegrationURL)
      .subscribe((cbsData: any) => {
        console.log('Get cbs list call >>', cbsData);
        this.cbsList = cbsData;
      }, error => {
        console.log('Get cbs list call in error >>', error.message);
      });

    this.http.get(mrNotificationUrl.mrNotificationURL)
      .subscribe((notificationsData: Response) => {
        console.log('Get notifications list call >>', notificationsData);
        this.notificationList = notificationsData;
      }, error => {
        console.log('Get notifications list call in error >>', error.message);
      });

    this.nonEnvForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^sit$|^uat$|^prod$'), Validators.maxLength(10)]],
      desc: [''],
      containerPlatform: ['', [Validators.required]],
      containerRegistry: ['', [Validators.required]],
      apic: ['', [Validators.required]],
      bankingServices: ['', [Validators.required]],
      cbs: ['', [Validators.required]],
      notification: ['', [Validators.required]],
      services: ['', [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.nonEnvForm.controls;
  }

  onServicesCboxChangeHandler(event) {
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

  onNonEnvSubmit() {
    this.submitted = true;
    if (this.nonEnvForm.invalid) {
      return false;
    } else {
      this.createNonEnv();
    }
  }

  createNonEnv() {
    this.http.post(nonEnvUrl.nonEnvURL, {
      name: this.nonEnvForm.controls.name.value,
      desc: this.nonEnvForm.controls.desc.value,
      containerPlatform: this.nonEnvForm.controls.containerPlatform.value,
      containerRegistry: this.nonEnvForm.controls.containerRegistry.value,
      apic: this.nonEnvForm.controls.apic.value,
      bankingServices: this.nonEnvForm.controls.bankingServices.value,
      cbs: this.nonEnvForm.controls.cbs.value,
      notification: this.nonEnvForm.controls.notification.value,
      services: this.selectedService
    })
      .subscribe((nonEnv) => {
        console.log('Put non env successful value returned >>', nonEnv);
        this.toastrService.success('Environment details Saved. Please click Deploy button in the following page.');
      },
        error => {
          console.log('Put non env in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Environment details Saved. Please click Deploy button in the following page.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/manageenvironment/publish'], { queryParams: { env: "idbp-" + this.nonEnvForm.controls.name.value } });
            }, 4000);
          } else {
            this.toastrService.error('Environment name is already taken.');
          }
        })
  };
}