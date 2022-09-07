import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import templateUrl from '../../idbp.config.json';

@Component({
  selector: 'app-get-templates',
  templateUrl: './get-templates.component.html',
  styleUrls: ['./get-templates.component.scss']
})
export class GetTemplatesComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('closeAddExpenseModal', { static: true }) closeAddExpenseModal: ElementRef;

  editEmailTemplateForm: FormGroup;
  submitted: boolean = false;
  templateList: any;
  templateTemp: boolean = false;
  subject: string;
  body: string;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.drawBreadcrumb();

    this.http.get(templateUrl.templateURL)
      .subscribe((emailTemplateList: Response) => {
        console.log('Get email template list call >>', emailTemplateList);
        this.templateList = emailTemplateList;

        if (this.templateList.length == []) {
          this.templateTemp = false;
        } else {
          this.templateTemp = true;
        }
      }, error => {
        console.log('Get email template call in error >>', error.message);
      });

    this.editEmailTemplateForm = this.formBuilder.group({
      subject: [{ value: this.subject }, [Validators.required]],
      body: [{ value: this.body }, [Validators.required]]
    })
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
    return this.editEmailTemplateForm.controls;
  }

  onEditEmailTemplateSubmit() {
    this.submitted = true;
    if (this.editEmailTemplateForm.invalid) {
      return false;
    } else {
      this.editTemplate();
    }
  }

  editTemplate() {
    this.http.put(templateUrl.templateURL, {
      id: localStorage.getItem('templateId'),
      subject: this.editEmailTemplateForm.controls.subject.value,
      body: this.editEmailTemplateForm.controls.body.value
    })
      .subscribe((templateUpdated: Response) => {
        console.log('Put email template call successful value returned >>', templateUpdated);
        this.toastrService.success('Email Template Updated Successfully.');
      },
        error => {
          console.log('Put email template call in error >>', error);
          if (error.status == '200') {
            this.toastrService.success('Email Template Updated Successfully.');
            setTimeout(() => {
              this.closeAddExpenseModal.nativeElement.click();
            }, 2000);
          } else {
            this.toastrService.error('Update incompleted. Please update all the fields.');
          }
        })
  };

  onEditTemplate(id, subject, body) {
    localStorage.setItem('templateId', id);
    localStorage.setItem('subject', subject);
    localStorage.setItem('body', body);

    this.subject = localStorage.getItem('subject');
    this.body = localStorage.getItem('body');
  }
}