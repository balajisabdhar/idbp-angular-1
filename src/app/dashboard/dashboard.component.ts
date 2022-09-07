import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

    if (tokenValidateData["role"] != 'admin') {
      this.http.get("http:/uiusermanagement-idbp.apps.postings.os.fyre.ibm.com/idbp/roleroutes?role=" + tokenValidateData["role"])
        .subscribe((roleRoutesData: any) => {
          console.log('Get role routes list call >>', roleRoutesData);
          localStorage.setItem('nonAccessibleRoutes', JSON.stringify(roleRoutesData[0].routes));
        }, error => {
          console.log('Get role routes list call in error >>', error.message);
        });
    }
  }
}