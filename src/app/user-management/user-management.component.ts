import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import nonAdminUrl from '../../idbp.config.json';
import roleUrl from '../../idbp.config.json';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  rolesList: any;
  roleTemp: boolean = false;
  usersList: any;
  userTemp: boolean = false;
  roleRoutesList: any;
  roleRoutesMatched: boolean = false;
  userRoutesMatched: boolean = false;

  constructor(private router: Router, private http: HttpClient, private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(roleUrl.roleURL)
      .subscribe((rolesList: Response) => {
        console.log('Get roles list call >>', rolesList);
        this.rolesList = rolesList;

        if (this.rolesList.length == []) {
          this.roleTemp = false;
        } else {
          this.roleTemp = true;
        }
      }, error => {
        console.log('Get roles list call in error >>', error.message);
      });

    this.http.get(nonAdminUrl.nonAdminURL)
      .subscribe((nonAdminsList: Response) => {
        console.log('Get non admins list call >>', nonAdminsList);
        this.usersList = nonAdminsList;

        if (this.usersList.length == []) {
          this.userTemp = false;
        } else {
          this.userTemp = true;
        }
      }, error => {
        console.log('Get non admins list call in error >>', error.message);
      });

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/settings/listusers/createrole" == this.roleRoutesList[i] || "/dashboard/settings/listusers/createuser" == this.roleRoutesList[i]) {
          this.roleRoutesMatched = true;
          this.userRoutesMatched = true;
        }
      }
    }
  }

  onDeleteRole(roleId) {
    this.http.post(roleUrl.roleURL, { _id: roleId })
      .subscribe((roleDeleted) => {
        console.log('Delete role call successful value returned >>', roleDeleted);
      },
        error => {
          console.log('Delete role call in error >>', error);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/settings/listusers']);
        })
  }

  onDeleteUser(userId) {
    this.http.post(nonAdminUrl.nonAdminURL, { _id: userId })
      .subscribe((userDeleted) => {
        console.log('Delete user call successful value returned >>', userDeleted);
      },
        error => {
          console.log('Delete user call in error >>', error);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['/dashboard/settings/listusers']);
        })
  }
}