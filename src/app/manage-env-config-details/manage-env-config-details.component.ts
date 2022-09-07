import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';

@Component({
  selector: 'app-manage-env-config-details',
  templateUrl: './manage-env-config-details.component.html',
  styleUrls: ['./manage-env-config-details.component.scss']
})
export class ManageEnvConfigDetailsComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();
  }
}