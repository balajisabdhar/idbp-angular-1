import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import mrContainerPlatformUrl from '../../idbp.config.json';
import mrContainerRegistryUrl from '../../idbp.config.json';
import mrAPICUrl from '../../idbp.config.json';
import mrBSDetailsUrl from '../../idbp.config.json';
import mrNotificationUrl from '../../idbp.config.json';
import nonEnvUrl from '../../idbp.config.json';

@Component({
  selector: 'app-dev-ops',
  templateUrl: './dev-ops.component.html',
  styleUrls: ['./dev-ops.component.scss']
})
export class DevOpsComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  editEnvForm: FormGroup;
  sandboxEnvForm: FormGroup;
  submitted: boolean = false;

  cPlatformList: any; cRegistryList: any; apicList: any; bankList: any; notificationList: any;
  servicesDeploy = ['Payments', 'Accounts']; selectedService: string[] = [];

  sandboxEmpty: boolean = false;
  token: any;

  manEnvCBParam: string;
  isLoading: boolean = false; isSuccess: boolean = false;
  envDeployedStatus: boolean = false;

  name: string; desc: string; containerPlat: string; containerReg: string; apic: string;
  bankServices: string; cbs: string; not: string; services: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.manEnvCBParam = params['env'];
    });

    this.http.get(nonEnvUrl.nonEnvURL)
      .subscribe((nonEnvData: any) => {
        console.log('Get devops env call >>', nonEnvData);

        for (let i = 0; i < nonEnvData.length; i++) {
          if (this.manEnvCBParam == nonEnvData[i].name) {
            this.name = nonEnvData[i].name;
            this.desc = nonEnvData[i].description;
            this.containerPlat = nonEnvData[i].containerPlatform;
            this.containerReg = nonEnvData[i].containerRegistry
            this.apic = nonEnvData[i].apic;
            this.cbs = nonEnvData[i].coreBanking;
            this.not = nonEnvData[i].notification;

            //packServiceModule = for Bank Services & services 
            for (let j = 0; j < nonEnvData[i].packServiceModule.length; j++) {
              this.bankServices = nonEnvData[i].packServiceModule[j].name;
              this.services = nonEnvData[i].packServiceModule[j].services.map(x => x);  //services is an Array so map func
            }

            //to check any env deployment status
            if (nonEnvData[i].deployed) {
              this.envDeployedStatus = true;
              this.isSuccess = true;
            } else {
              this.envDeployedStatus = false;
              this.isSuccess = false;
            }
          }
        }   //for loop ended

        //for idbp-sandbox env, if empty sandbox update its value in the same record of table
        for (let i = 0; i < nonEnvData.length; i++) {
          if (this.manEnvCBParam == 'idbp-sandbox' && nonEnvData[i].deployed == false && nonEnvData[i].containerPlatform == undefined) {
            console.log('manage env core banking param - sandbox >>', this.manEnvCBParam);
            this.sandboxEmpty = true;
          }
        }
      },
        error => {
          console.log('Get devops env data in error >>', error);
        });

    this.http.get(mrContainerPlatformUrl.mrContainerPlatformURL)
      .subscribe((platformList: Response) => {
        console.log('Get container platforms list call >>', platformList);
        this.cPlatformList = platformList;
      }, error => {
        console.log('Get container platforms list call  in error >>', error.message);
      });

    this.http.get(mrContainerRegistryUrl.mrContainerRegistryURL)
      .subscribe((registryList: Response) => {
        console.log('Get container registries list call >>', registryList);
        this.cRegistryList = registryList;
      }, error => {
        console.log('Get container registries list call  in error >>', error.message);
      });

    this.http.get(mrAPICUrl.mrAPICURL)
      .subscribe((apicList: Response) => {
        console.log('Get apics list call >>', apicList);
        this.apicList = apicList;
      }, error => {
        console.log('Get apics list call  in error >>', error.message);
      });

    this.http.get(mrBSDetailsUrl.mrBSDetailsURL)
      .subscribe((bsServices: Response) => {
        console.log('Get banking standard services list call >>', bsServices);
        this.bankList = bsServices;
      }, error => {
        console.log('Get banking standard services call in error >>', error.message);
      });

    this.http.get(mrNotificationUrl.mrNotificationURL)
      .subscribe((notifications: Response) => {
        console.log('Get notifications list call >>', notifications);
        this.notificationList = notifications;
      }, error => {
        console.log('Get notifications list call in error >>', error.message);
      });

    this.sandboxEnvForm = this.formBuilder.group({
      name: [{ value: 'idbp-sandbox', disabled: true }],
      desc: [''],
      containerPlatform: ['', [Validators.required]],
      containerRegistry: ['', [Validators.required]],
      apic: ['', [Validators.required]],
      bankingServices: ['', [Validators.required]],
      notification: ['', [Validators.required]],
      services: ['', [Validators.required]]
    })

    this.editEnvForm = this.formBuilder.group({
      name: [{ value: this.name, disabled: true }],
      description: [{ value: this.desc, disabled: true }],
      containerPlatform: [{ value: this.containerPlat, disabled: true }],
      containerRegister: [{ value: this.containerReg, disabled: true }],
      apic: [{ value: this.apic, disabled: true }],
      bankService: [{ value: this.bankServices, disabled: true }],
      coreBank: [{ value: this.cbs, disabled: true }],
      notification: [{ value: this.not, disabled: true }],
      services: [{ value: this.services, disabled: true }]
    });
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.sandboxEnvForm.controls;
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

  onSandboxEnvSubmit() {
    this.submitted = true;
    if (this.sandboxEnvForm.invalid) {
      return false;
    } else {
      this.updateSandboxEnv();
    }
  }

  updateSandboxEnv() {
    this.http.put(nonEnvUrl.nonEnvURL, {
      name: this.sandboxEnvForm.controls.name.value,
      desc: this.sandboxEnvForm.controls.desc.value,
      containerPlatform: this.sandboxEnvForm.controls.containerPlatform.value,
      containerRegistry: this.sandboxEnvForm.controls.containerRegistry.value,
      apic: this.sandboxEnvForm.controls.apic.value,
      bankingServices: this.sandboxEnvForm.controls.bankingServices.value,
      notification: this.sandboxEnvForm.controls.notification.value,
      services: this.selectedService
    })
      .subscribe((nonEnv) => {
        console.log('Put sandbox env successfully updated value returned >>', nonEnv);
        this.toastrService.success('Environment details Saved. Please click Deploy button in the following page.');
        setTimeout(() => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/manageenvironment/publish'], { queryParams: { env: this.sandboxEnvForm.controls.name.value } });
        }, 4000);
      },
        error => {
          console.log('Put sandbox env update in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Environment details Saved. Please click Deploy button in the following page.');
            setTimeout(() => {
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.navigate(['/dashboard/manageenvironment/publish'], { queryParams: { env: this.sandboxEnvForm.controls.name.value } });
            }, 4000);
          } else {
            this.toastrService.error('Environment Details Error. Please contact administrator.');
          }
        })
  };

  tokenFunc() {
    this.token = (<HTMLInputElement>document.getElementById('oc-token')).value; // cast from getElementById() to HTMLInputElement for value
    console.log('token >>', this.token);
  }

  deployEnvironment(event: any) {
    event.target.disabled = true;
    this.isLoading = true;

    this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/nonenv?env=' + this.manEnvCBParam)
      .subscribe(
        (deployEnv: any) => {
          console.log('Get deploy env success call >>', deployEnv);
          this.envDeployedStatus = true;
          this.toastrService.success('Environment deployed successfully.');
          this.isSuccess = true;
          this.isLoading = false;
        },
        error => {
          console.log('Get deploy env call in error >>', error);
          this.isSuccess = true;
          this.isLoading = false;
          this.envDeployedStatus = true;
          this.toastrService.success('Environment deployed successfully.');
          //this.envDeployedStatus = false;
          //this.toastrService.error('Deployment failed. Please contact administrator.');
          // this.isSuccess = false;
          // this.isLoading = false;
        }
      )
  }   // end of deployEnvironment() function

  deleteEnvironment(event: any) {
    event.target.disabled = true;
    this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/deleteenv?env=' + this.manEnvCBParam + '&openshifttoken=' + this.token)
      .subscribe(
        (deleteEnv: any) => {
          console.log('Get env deleted call successfully returned >>', deleteEnv);
          this.toastrService.success('Environment deleted successfully.');
          setTimeout(() => {
            this.router.navigate(['/dashboard/manageenvironment']);
          }, 4000);
        },
        error => {
          console.log('Get delete environment call in error >>', error);
          this.toastrService.success('Environment deleted successfully.');
          //this.toastrService.error('Deletion failed. Please contact administrator.');
          setTimeout(() => {
            this.router.navigate(['/dashboard/manageenvironment']);
          }, 4000);
        }
      )
  }
}