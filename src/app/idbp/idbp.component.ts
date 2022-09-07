import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';

@Component({
  selector: 'app-idbp',
  templateUrl: './idbp.component.html',
  styleUrls: ['./idbp.component.scss']
})
export class IdbpComponent implements OnInit {
  navLinks: any[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.navLinks = [
      {
        label: 'User Registry',
        link: './userregistry',
        index: 0
      }, {
        label: 'Manage Users',
        link: './listusers',
        index: 1
      }, {
        label: 'SMTP Server',
        link: './listsmtpconfigure',
        index: 2
      }, {
        label: 'Templates',
        link: './listemailtemplates',
        index: 3
      }, {
        label: 'TLS Profile',
        link: './tlsprofile',
        index: 4
      }
    ];
  }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();
  }
}