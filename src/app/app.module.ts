import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { BreadcrumbService } from './breadcrumb-service/breadcrumb.service';
import { CookieService } from 'ngx-cookie-service';
import { MatCardModule } from '@angular/material/card';
import { CarbonComponentsAngularModule } from './carbon-components-angular.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CbsComponent } from './cbs/cbs.component';
import { CbsIntegrationComponent } from './cbs-integration/cbs-integration.component';
import { ManageEnvironmentComponent } from './manage-environment/manage-environment.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LicenseComponent } from './license/license.component';
import { AddUserComponent } from './add-user/add-user.component';
import { IdbpComponent } from './idbp/idbp.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';
import { SmtpConfigureComponent } from './smtp-configure/smtp-configure.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DevOpsComponent } from './dev-ops/dev-ops.component';
import { GetTemplatesComponent } from './get-templates/get-templates.component';
import { GetEmailNotificationsComponent } from './get-email-notifications/get-email-notifications.component';
import { IdbpTlsProfileComponent } from './idbp-tls-profile/idbp-tls-profile.component';
import { ManageResourcesComponent } from './manage-resources/manage-resources.component';
import { IdbpCreateTlsServerComponent } from './idbp-create-tls-server/idbp-create-tls-server.component';
import { ManageEnvironmentCreateComponent } from './manage-environment-create/manage-environment-create.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { MRNotificationComponent } from './mrnotification/mrnotification.component';
import { MrCreateNotificationComponent } from './mr-create-notification/mr-create-notification.component';
import { ManageEnvConfigDetailsComponent } from './manage-env-config-details/manage-env-config-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MRApicComponent } from './mrapic/mrapic.component';
import { MRContainerRegistryComponent } from './mrcontainer-registry/mrcontainer-registry.component';
import { MrCreateApicComponent } from './mr-create-apic/mr-create-apic.component';
import { MrCreateContainerRegistryComponent } from './mr-create-container-registry/mr-create-container-registry.component';
import { MrCreateContainerPlatformComponent } from './mr-create-container-platform/mr-create-container-platform.component';
import { OpenBankingComponent } from './open-banking/open-banking.component';
import { AceAcceleratorComponent } from './ace-accelerator/ace-accelerator.component';
import { ApicAcceleratorComponent } from './apic-accelerator/apic-accelerator.component';
import { TokenManagementAcceleratorComponent } from './token-management-accelerator/token-management-accelerator.component';
import { RuleEngineAcceleratorComponent } from './rule-engine-accelerator/rule-engine-accelerator.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CbsComponent,
    CbsIntegrationComponent,
    ManageEnvironmentComponent,
    UserManagementComponent,
    LicenseComponent,
    AddUserComponent,
    IdbpComponent,
    UserRegistryComponent,
    SmtpConfigureComponent,
    AddRoleComponent,
    SidebarComponent,
    DevOpsComponent,
    GetTemplatesComponent,
    GetEmailNotificationsComponent,
    IdbpTlsProfileComponent,
    ManageResourcesComponent,
    IdbpCreateTlsServerComponent,
    ManageEnvironmentCreateComponent,
    ManageServicesComponent,
    MRNotificationComponent,
    MrCreateNotificationComponent,
    ManageEnvConfigDetailsComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    MRApicComponent,
    MRContainerRegistryComponent,
    MrCreateApicComponent,
    MrCreateContainerRegistryComponent,
    MrCreateContainerPlatformComponent,
    OpenBankingComponent,
    AceAcceleratorComponent,
    ApicAcceleratorComponent,
    TokenManagementAcceleratorComponent,
    RuleEngineAcceleratorComponent
  ],
  imports: [
    MatCardModule,
    CarbonComponentsAngularModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule
  ],
  providers: [AuthService, AuthGuard, CookieService, BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }