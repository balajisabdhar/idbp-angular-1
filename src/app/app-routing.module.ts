import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEnvironmentComponent } from './manage-environment/manage-environment.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LicenseComponent } from './license/license.component';
import { AddUserComponent } from './add-user/add-user.component';
import { IdbpComponent } from './idbp/idbp.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';
import { SmtpConfigureComponent } from './smtp-configure/smtp-configure.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { CbsComponent } from './cbs/cbs.component';
import { GetTemplatesComponent } from './get-templates/get-templates.component';
import { GetEmailNotificationsComponent } from './get-email-notifications/get-email-notifications.component';
import { IdbpTlsProfileComponent } from './idbp-tls-profile/idbp-tls-profile.component';
import { ManageResourcesComponent } from './manage-resources/manage-resources.component';
import { IdbpCreateTlsServerComponent } from './idbp-create-tls-server/idbp-create-tls-server.component';
import { ManageEnvironmentCreateComponent } from './manage-environment-create/manage-environment-create.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { MrCreateNotificationComponent } from './mr-create-notification/mr-create-notification.component';
import { MRNotificationComponent } from './mrnotification/mrnotification.component';
import { ManageEnvConfigDetailsComponent } from './manage-env-config-details/manage-env-config-details.component';
import { CbsIntegrationComponent } from './cbs-integration/cbs-integration.component';
import { MrCreateContainerRegistryComponent } from './mr-create-container-registry/mr-create-container-registry.component';
import { MrCreateContainerPlatformComponent } from './mr-create-container-platform/mr-create-container-platform.component';
import { MRContainerRegistryComponent } from './mrcontainer-registry/mrcontainer-registry.component';
import { MRApicComponent } from './mrapic/mrapic.component';
import { MrCreateApicComponent } from './mr-create-apic/mr-create-apic.component';
import { OpenBankingComponent } from './open-banking/open-banking.component';
import { ApicAcceleratorComponent } from './apic-accelerator/apic-accelerator.component';
import { AceAcceleratorComponent } from './ace-accelerator/ace-accelerator.component';
import { TokenManagementAcceleratorComponent } from './token-management-accelerator/token-management-accelerator.component';
import { RuleEngineAcceleratorComponent } from './rule-engine-accelerator/rule-engine-accelerator.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'license', component: LicenseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetpassword', component: ForgotPasswordComponent },
  { path: 'changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings', component: IdbpComponent, canActivate: [AuthGuard], },
  { path: 'dashboard/settings/userregistry', component: UserRegistryComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings/listusers', component: UserManagementComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings/listusers/createrole', component: AddRoleComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings/listusers/createuser', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings/listsmtpconfigure', component: GetEmailNotificationsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings/listsmtpconfigure/createsmtp', component: SmtpConfigureComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings/listemailtemplates', component: GetTemplatesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings/tlsprofile', component: IdbpTlsProfileComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings/tlsprofile/createtls', component: IdbpCreateTlsServerComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/cbs', component: CbsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/cbs/createcbs', component: CbsIntegrationComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageresources', component: ManageResourcesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageresources/createcontainerplatform', component: MrCreateContainerPlatformComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageresources/containerregistry', component: MRContainerRegistryComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageresources/containerregistry/createcontainerregistry', component: MrCreateContainerRegistryComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageresources/apic', component: MRApicComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageresources/apic/createapic', component: MrCreateApicComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageresources/notification', component: MRNotificationComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageresources/notification/createnotification', component: MrCreateNotificationComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageenvironment', component: ManageEnvironmentComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageenvironment/createenv', component: ManageEnvironmentCreateComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageenvironment/publish', component: ManageEnvConfigDetailsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageservices', component: ManageServicesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/manageservices/bankingstandard', component: OpenBankingComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/apicaccelerator', component: ApicAcceleratorComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/aceaccelerator', component: AceAcceleratorComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/rulemanagement', component: RuleEngineAcceleratorComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/tokenmanagement', component: TokenManagementAcceleratorComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
