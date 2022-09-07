import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import roleUrl from '../../idbp.config.json';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  selectedEntry: string = '';
  roleForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.roleForm = this.formBuilder.group({
      role: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z-]*$')]]
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.roleForm.controls;
  }

  onRoleSubmit() {
    this.submitted = true;
    if (this.roleForm.invalid) {
      return false;
    } else {
      this.createRole();
    }
  }

  createRole() {
    this.http.post(roleUrl.roleURL, {
      roleName: this.roleForm.controls.role.value
    })
      .subscribe((roleCreated) => {
        console.log('Post role call successful value returned >>', roleCreated);
        this.toastrService.success('Role Created Successfully.');
      },
        error => {
          console.log('Post role call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Role Created Successfully.');
            setTimeout(() => {
              this.router.navigate(['/dashboard/settings/listusers']);
            }, 2000);
          } else {
            this.toastrService.error('Role name is already taken.');
          }
        })
  }
}