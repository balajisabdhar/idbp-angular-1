import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import licenseUrl from '../../idbp.config.json';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {
  licenseForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.get('license')) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/license']);
    }

    this.licenseForm = this.formBuilder.group({
      acceptTerms: [false, [Validators.requiredTrue]]
    })
  }

  get f() {
    return this.licenseForm.controls;
  }

  onLicenseSubmit() {
    this.submitted = true;
    if (this.licenseForm.invalid) {
      return false;
    } else {
      this.acceptLicense();
    }
  }

  acceptLicense() {
    this.http.post(licenseUrl.licenseURL, {
      license: this.licenseForm.controls.acceptTerms.value
    })
      .subscribe((acceptedLicense: any) => {
        console.log('Post license call successful value returned >>', acceptedLicense);

      },
        error => {
          console.log('Post license call in error >>', error);
          this.cookieService.set('license', error['message']);
          this.router.navigate(['/login']);
        })
  }
}