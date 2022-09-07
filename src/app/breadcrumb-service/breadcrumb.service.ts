import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import route from '../../routes.json';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  pathname: any;
  breadcrumb: any;

  constructor(private router: Router) { }

  drawBreadcrumb() {
    this.breadcrumb = '';  //to clear the div / dom content

    this.pathname = this.router.url.split('/');
    for (let i = 1; i <= this.pathname.length - 2; i++) {
      route[this.pathname[i]];
      this.breadcrumb += "<a href='" + route[this.pathname[i]] + "'>" + this.pathname[i].toUpperCase() + " </a>" + "&nbsp;" + "&nbsp;";
      if (i < this.pathname.length - 2) {
        this.breadcrumb += ">>" + "&nbsp;" + "&nbsp;";
      }
    }
    let domObject = document.getElementById("breadcrumb");
    domObject.innerHTML = this.breadcrumb;
  }
}