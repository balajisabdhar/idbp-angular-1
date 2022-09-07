import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import * as jwt_decode from 'jwt-decode';
import nonEnvUrl from '../../idbp.config.json';

@Component({
  selector: 'app-manage-environment',
  templateUrl: './manage-environment.component.html',
  styleUrls: ['./manage-environment.component.scss']
})
export class ManageEnvironmentComponent implements OnInit {
  nonList: any;
  roleRoutesList: any;
  envRoutesMatched: boolean = false;

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(nonEnvUrl.nonEnvURL)
      .subscribe((nonEnvs: Response) => {
        console.log('Get non environment list call >>', nonEnvs);
        this.nonList = nonEnvs;
      }, error => {
        console.log('Get non environment list call in error >>', error.message);
      });

    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
      this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

      for (let i = 0; i < this.roleRoutesList.length; i++) {
        if ("/dashboard/manageenvironment/createenv" == this.roleRoutesList[i]) {
          this.envRoutesMatched = true;
        }
      }
    }
  }
}