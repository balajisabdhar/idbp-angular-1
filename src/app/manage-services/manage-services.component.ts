import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import mrBSDetailsUrl from '../../idbp.config.json';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.scss']
})
export class ManageServicesComponent implements OnInit {
  bsList: any;

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();
    
    this.http.get(mrBSDetailsUrl.mrBSDetailsURL)
      .subscribe((bsData: Response) => {
        console.log('Get bs list call >>', bsData);
        this.bsList = bsData;     
      }, error => {
        console.log('Get bs call in error >>', error.message);
      });
  }
}