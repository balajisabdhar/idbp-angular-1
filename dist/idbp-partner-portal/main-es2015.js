(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ace-accelerator/ace-accelerator.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ace-accelerator/ace-accelerator.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n  <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n    <div _ngcontent-yve-c2=\"\">\r\n      <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> ACE Accelerator Form </div>\r\n    </div>\r\n  </header>\r\n  <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n  <div toastContainer></div>\r\n  <div class=\"idbp-form-container\">\r\n    <h4>ACE Accelerator</h4>\r\n    <h5>Please fill in required details.<br /> As per inputs source code will be generated with best practices\r\n      comprising exception handling and Audit logging</h5>\r\n    <br>\r\n    <form [formGroup]=\"aceacceleratorForm\" (ngSubmit)=\"onaceaccelerationSubmit()\" class=\"signin-form\">\r\n      <div class=\"forms-gds\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.initServer.pristine && f.initServer.errors\"\r\n            [invalidText]=\"'Init Server is required'\">\r\n            Integration Server\r\n            <input ibmText formControlName=\"initServer\" [invalid]=\"submitted && f.initServer.errors\"\r\n              [placeholder]=\"'Integration Server'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.appName.pristine && f.appName.errors\" [invalidText]=\"'Application Name is required'\">\r\n            Application Name\r\n            <input ibmText formControlName=\"appName\" [invalid]=\"submitted && f.appName.errors\"\r\n              [placeholder]=\"'Application Name'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <h4>Select Features</h4>\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-radio-group aria-label=\"radiogroup\" formControlName=\"features\" orientation='vertical'>\r\n            <ibm-radio value=\"HTTP to HTTP proxy\">\r\n              HTTP to HTTP proxy\r\n            </ibm-radio>\r\n            <ibm-radio value=\"HTTP to HTTP with JSON-SOAP Transformation\">\r\n              HTTP to HTTP with JSON-SOAP Transformation\r\n            </ibm-radio>\r\n            <ibm-radio value=\"HTTP to MQPut Proxy\">\r\n              HTTP to MQPut Proxy\r\n            </ibm-radio>\r\n            <ibm-radio value=\"HTTP to MQPut Proxy with JSON-SOAP Transformation\">\r\n              HTTP to MQPut Proxy with JSON-SOAP Transformation\r\n            </ibm-radio>\r\n            <ibm-radio value=\"MQGET to HTTP proxy to MQPUT\">\r\n              MQGET to HTTP proxy to MQPUT\r\n            </ibm-radio>\r\n            <ibm-radio value=\"MQGET to HTTP with JSON-SOAP Transformation to MQPUT\">\r\n              MQGET to HTTP with JSON-SOAP Transformation to MQPUT\r\n            </ibm-radio>\r\n            <ibm-radio value=\"MQGET to MQPut Proxy to MQPUT\">\r\n              MQGET to MQPut Proxy to MQPUT\r\n            </ibm-radio>\r\n            <ibm-radio value=\"MQGET to MQPut Proxy with JSON-SOAP Transformation to MQPUT\">\r\n              MQGET to MQPut Proxy with JSON-SOAP Transformation to MQPUT\r\n            </ibm-radio>\r\n          </ibm-radio-group>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.transformationFilePath.pristine && f.transformationFilePath.errors\"\r\n            [invalidText]=\"'transformation File Path is required'\">\r\n            Transformation File Path\r\n            <input ibmText formControlName=\"transformationFilePath\"\r\n              [invalid]=\"submitted && f.transformationFilePath.errors\" [placeholder]=\"'Transformation File Path'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.aceConfiguration.pristine && f.aceConfiguration.errors\"\r\n            [invalidText]=\"'transformation File Path is required'\">\r\n            ACE Configuration Name\r\n            <input ibmText formControlName=\"aceConfiguration\" [invalid]=\"submitted && f.aceConfiguration.errors\"\r\n              [placeholder]=\"'ACE Configuration Name'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.minCPU.pristine && f.minCPU.errors\" [invalidText]=\"'Min CPU is required'\">\r\n            Min CPU\r\n            <input ibmText formControlName=\"minCPU\" [invalid]=\"submitted && f.minCPU.errors\" [placeholder]=\"'Min CPU'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.maxCPU.pristine && f.maxCPU.errors\" [invalidText]=\"'Max CPU File Path is required'\">\r\n            Max CPU\r\n            <input ibmText formControlName=\"maxCPU\" [invalid]=\"submitted && f.maxCPU.errors\" [placeholder]=\"'Max CPU'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.replicas.pristine && f.replicas.errors\" [invalidText]=\"'Replicas is required'\">\r\n            Replicas\r\n            <input ibmText formControlName=\"replicas\" [invalid]=\"submitted && f.replicas.errors\"\r\n              [placeholder]=\"'Replicas'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.minRAM.pristine && f.minRAM.errors\" [invalidText]=\"'Min RAM is required'\">\r\n            Min RAM (GB)\r\n            <input ibmText formControlName=\"minRAM\" [invalid]=\"submitted && f.minRAM.errors\" [placeholder]=\"'Min RAM'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.maxRAM.pristine && f.maxRAM.errors\" [invalidText]=\"'Max RAM File Path is required'\">\r\n            Max RAM (GB)\r\n            <input ibmText formControlName=\"maxRAM\" [invalid]=\"submitted && f.maxRAM.errors\" [placeholder]=\"'Max RAM'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <div class=\"form-button\">\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n            [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Cancel</button>\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-role/add-role.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-role/add-role.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Role management </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div toastContainer></div>\r\n    <div class=\"idbp-form-container\">\r\n        <h4>Create Role</h4>\r\n        <form [formGroup]=\"roleForm\" (ngSubmit)=\"onRoleSubmit()\" class=\"signin-form\">\r\n            <div class=\"forms-gds\">\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.role.pristine && f.role.errors\" [invalidText]=\"'* only letters and hyphens are allowed'\">\r\n                        Role Name\r\n                        <input ibmText formControlName=\"role\" [invalid]=\"submitted && f.role.errors\"\r\n                            [placeholder]=\"'Enter role'\" />\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <div class=\"form-button\">\r\n                    <button ibmButton id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n                        [routerLink]=\"['/dashboard/settings/listusers']\" routerLinkActive=\"active\">Cancel</button>\r\n                    <button ibmButton id=\"submit\" type=\"submit\" class=\"ibtn\">Create Role</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n  <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n    <div _ngcontent-yve-c2=\"\">\r\n      <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Create &amp; Configure Non Admin User\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n  <div toastContainer></div>\r\n  <div class=\"idbp-form-container\">\r\n    <h4>Create User </h4>\r\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onUserManagementSubmit()\" class=\"signin-form\">\r\n      <div class=\"forms-gds\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.email.pristine && f.email.errors\" [invalidText]=\"'Email is required'\">\r\n            Email\r\n            <input ibmText formControlName=\"email\" [invalid]=\"submitted && f.email.errors\"\r\n              [placeholder]=\"'Enter Email'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <select class=\"custom-select\" formControlName=\"roleName\">\r\n            <option value=\"\">Choose your Roles</option>\r\n            <option *ngFor=\"let role of rolesList\" [ngValue]=\"role.roleName\">{{role.roleName}}</option>\r\n          </select>\r\n          <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.roleName.errors\">\r\n            Role name is required\r\n          </div>\r\n        </fieldset>\r\n\r\n        <div class=\"form-button\">\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n            [routerLink]=\"['/dashboard/settings/listusers']\" routerLinkActive=\"active\">Cancel</button>\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create User</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apic-accelerator/apic-accelerator.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apic-accelerator/apic-accelerator.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n  <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n    <div _ngcontent-yve-c2=\"\">\r\n      <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> APIC Accelerator Form </div>\r\n    </div>\r\n  </header>\r\n  <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n  <div toastContainer></div>\r\n  <div class=\"idbp-form-container\">\r\n    <h4>APIC Accelerator</h4>\r\n    <h5>Please fill in required details.<br /> As per inputs source code will be generated with best practices\r\n      comprising exception handling and Audit logging</h5>\r\n    <br/><br/>\r\n    <form [formGroup]=\"apicacceleratorForm\" (ngSubmit)=\"onApicaccelerationSubmit()\" class=\"signin-form\">\r\n      <div class=\"forms-gds\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.title.pristine && f.title.errors\" [invalidText]=\"'API Title is required'\">\r\n            API Title\r\n            <input ibmText formControlName=\"title\" [invalid]=\"submitted && f.title.errors\" [placeholder]=\"'API Title'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label>\r\n            API Description (optional)\r\n            <input ibmText formControlName=\"desc\" [placeholder]=\"'Enter Description'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.basepath.pristine && f.basepath.errors\" [invalidText]=\"'basepath is required'\">\r\n            API Base Path\r\n            <input ibmText formControlName=\"basepath\" [invalid]=\"submitted && f.basepath.errors\"\r\n              [placeholder]=\"'Enter Base Path'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.operationpath.pristine && f.operationpath.errors\"\r\n            [invalidText]=\"'API Operation Path is required'\">\r\n            API Operation Path\r\n            <input ibmText formControlName=\"operationpath\" [invalid]=\"submitted && f.operationpath.errors\"\r\n              [placeholder]=\"'Enter API Operation Path'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.targeturl.pristine && f.targeturl.errors\" [invalidText]=\"'Target URL is required'\">\r\n            Target URL\r\n            <input ibmText formControlName=\"targeturl\" [invalid]=\"submitted && f.targeturl.errors\"\r\n              [placeholder]=\"'Enter Target URL'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          Choose Features <br /><br />\r\n          <table class=\"table hover\">\r\n            <tbody>\r\n              <tr *ngFor=\"let fe of this.features\">\r\n                <td><input type=\"checkbox\" formControlName=\"features\" name=\"features\" value=\"{{fe}}\"\r\n                    (change)=\"onFeaturesCboxChangeHandler($event)\"> </td>\r\n                <td>{{fe}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.features.errors\">\r\n            Features is required\r\n          </div>\r\n        </fieldset>\r\n\r\n        <hr style=\"height:1.5px;\">\r\n        <h4> APIC Details </h4>\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.baseURL.pristine && f.baseURL.errors\" [invalidText]=\"'Target URL is required'\">\r\n            Platform Base URL\r\n            <input ibmText formControlName=\"baseURL\" [invalid]=\"submitted && f.baseURL.errors\"\r\n              [placeholder]=\"'Platform Base URL'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.realm.pristine && f.realm.errors\" [invalidText]=\"'Target URL is required'\">\r\n            Realm\r\n            <input ibmText formControlName=\"realm\" [invalid]=\"submitted && f.realm.errors\" [placeholder]=\"'Realm'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.username.pristine && f.username.errors\" [invalidText]=\"'Target URL is required'\">\r\n            Username\r\n            <input ibmText formControlName=\"username\" [invalid]=\"submitted && f.username.errors\"\r\n              [placeholder]=\"'Username'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.password.pristine && f.password.errors\" [invalidText]=\"'Password is required'\">\r\n            Password\r\n            <input ibmText type=\"password\" formControlName=\"password\" [invalid]=\"submitted && f.password.errors\"\r\n              [placeholder]=\"'Password'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.prov.pristine && f.prov.errors\" [invalidText]=\"'PROV is required'\">\r\n            Prov Organisation\r\n            <input ibmText formControlName=\"prov\" [invalid]=\"submitted && f.prov.errors\"\r\n              [placeholder]=\"'Prov Organisation'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <div class=\"form-button\">\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n            [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Cancel</button>\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"app-wrap\" [class.with-header]=\"authService.loggedIn\" [class.with-footer]=\"authService.loggedIn\">\r\n    <div class=\"cb--page\" [class.nonloging]=\"!authService.loggedIn\">\r\n        <app-sidebar></app-sidebar>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cbs-integration/cbs-integration.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cbs-integration/cbs-integration.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure Core Banking </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div toastContainer></div>\r\n    <div class=\"idbp-form-container\">\r\n        <h4>Connect to Core Banking</h4>\r\n        <form [formGroup]=\"cbsForm\" (ngSubmit)=\"onCbsIntegrationSubmit()\" class=\"signin-form\">\r\n            <div class=\"forms-gds\">\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\r\n                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\r\n                        Name\r\n                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\r\n                            [placeholder]=\"'Enter Name'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label>\r\n                        Description (optional)\r\n                        <input ibmText formControlName=\"desc\" [placeholder]=\"'Enter Description'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.address.pristine && f.address.errors\"\r\n                        [invalidText]=\"'Address is required'\">\r\n                        FQDN address\r\n                        <input ibmText formControlName=\"address\" [invalid]=\"submitted && f.address.errors\"\r\n                            [placeholder]=\"'Enter FQDN address'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.port.pristine && f.port.errors\"\r\n                        [invalidText]=\"'* only numbers are allowed'\">\r\n                        Port\r\n                        <input ibmText formControlName=\"port\" [invalid]=\"submitted && f.port.errors\"\r\n                            [placeholder]=\"'Enter Port'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Connection Protocol <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"connectionProtocol\">\r\n                        <option value=\"\">Choose your Connection Protocol</option>\r\n                        <option value=\"TCP\">TCP</option>\r\n                        <option value=\"HTTP\">HTTP</option>\r\n                        <option value=\"HTTPS\">HTTPS</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.connectionProtocol.errors\">\r\n                        Connection Protocol is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.mFormat.pristine && f.mFormat.errors\"\r\n                        [invalidText]=\"'Message Format is required'\">\r\n                        Message Format\r\n                        <input ibmText formControlName=\"mFormat\" [invalid]=\"submitted && f.mFormat.errors\"\r\n                            [placeholder]=\"'Enter Message Format'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Authentication Type <br /><br />\r\n                    <table class=\"table hover\">\r\n                        <tbody>\r\n                            <tr *ngFor=\"let auth of this.authData\">\r\n                                <td><input type=\"checkbox\" formControlName=\"authType\" name=\"authType\" value=\"{{auth}}\"\r\n                                        (change)=\"onAuthCboxChangeHandler($event)\"> </td>\r\n                                <td>{{auth}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.authType.errors\">\r\n                        Authentication Type is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\"\r\n                    *ngIf=\"this.checkedUserType && this.checkedUserValue == 'User Credentials'\">\r\n                    <ibm-label>\r\n                        Username\r\n                        <input ibmText formControlName=\"username\" [placeholder]=\"'Enter Username'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\"\r\n                    *ngIf=\"this.checkedUserType && this.checkedUserValue  == 'User Credentials'\">\r\n                    <ibm-label>\r\n                        Password\r\n                        <input ibmText type=\"password\" formControlName=\"password\" [placeholder]=\"'Enter Password'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedTokenType && this.checkedTokenValue == 'Token'\">\r\n                    <ibm-label>\r\n                        Token\r\n                        <input ibmText type=\"password\" formControlName=\"token\" [placeholder]=\"'Enter Token'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\" bx--fieldset\">\r\n                    TLS Type <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"tlsType\">\r\n                        <option value=\"\">Choose your Type</option>\r\n                        <option value=\"One-Way\">One-Way</option>\r\n                        <option value=\"Two-Way\">Two-Way</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.tlsType.errors\">\r\n                        TLS Type is required\r\n                    </div>\r\n                </fieldset>\r\n                <div class=\"form-button\">\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n                        [routerLink]=\"['/dashboard/cbs']\" routerLinkActive=\"active\">Cancel</button>\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\"\r\n                        class=\"ibtn\">Save</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cbs/cbs.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cbs/cbs.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> List of CBS Environments</div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"idbp\">\r\n        <button ibmButton [routerLink]=\"['/dashboard/cbs/createcbs']\" routerLinkActive=\"active\"\r\n            style=\"background-color: #3d70b2;\" [disabled]=\"this.cbsRoutesMatched\">Create</button>\r\n    </div>\r\n    <div>\r\n        <table class=\"bx--data-table\" *ngIf=\"this.cbsTemp\" style=\"width: 30%;\">\r\n            <thead>\r\n                <tr>\r\n                    <th><span class=\"bx--table-header-label\">Name</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Description</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Activities</span></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let cbs of this.cbsList\">\r\n                    <td>{{cbs.name}}</td>\r\n                    <td>{{cbs.description}}</td>\r\n                    <td>\r\n                        <ibm-overflow-menu>\r\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#editCbsModal\"\r\n                                (click)=\"onEditCbs(cbs._id, cbs.name, cbs.description, cbs.address, cbs.port, cbs.messageFormat)\">\r\n                                Edit\r\n                            </ibm-overflow-menu-option>\r\n                            <ibm-overflow-menu-option (click)=\"onDeleteCbs(cbs._id)\"> Delete\r\n                            </ibm-overflow-menu-option>\r\n                        </ibm-overflow-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"bx--data-table\" *ngIf=\"!this.cbsTemp\">\r\n            <p>No Records Available</p>\r\n        </table>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"editCbsModal\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"editCbsModalLabel\">Edit Core Banking</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div toastContainer></div>\r\n                    <div class=\"idbp-form-container-modal\">\r\n                        <form [formGroup]=\"editCbsForm\" (ngSubmit)=\"onEditCbsSubmit()\" class=\"signin-form\">\r\n                            <div class=\"forms-gds\">\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\r\n                                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\r\n                                        Name\r\n                                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\r\n                                            value=\"{{this.name}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label>\r\n                                        Description (optional)\r\n                                        <input ibmText formControlName=\"desc\" value=\"{{this.desc}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.address.pristine && f.address.errors\"\r\n                                        [invalidText]=\"'Address is required'\">\r\n                                        FQDN address\r\n                                        <input ibmText formControlName=\"address\"\r\n                                            [invalid]=\"submitted && f.address.errors\" value=\"{{this.add}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.port.pristine && f.port.errors\"\r\n                                        [invalidText]=\"'* only numbers are allowed'\">\r\n                                        Port\r\n                                        <input ibmText formControlName=\"port\" [invalid]=\"submitted && f.port.errors\"\r\n                                            value=\"{{this.port}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <!-- <fieldset class=\"bx--fieldset\">\r\n                                    Connection Protocol <br /><br />\r\n                                    <select class=\"custom-select\" formControlName=\"connectionProtocol\">\r\n                                        <option value=\"\">Choose your Connection Protocol</option>\r\n                                        <option value=\"TCP\">TCP</option>\r\n                                        <option value=\"HTTP\">HTTP</option>\r\n                                        <option value=\"HTTPS\">HTTPS</option>\r\n                                    </select>\r\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.connectionProtocol.errors\">\r\n                                        Connection Protocol is required\r\n                                    </div>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.mFormat.pristine && f.mFormat.errors\"\r\n                                        [invalidText]=\"'Message Format is required'\">\r\n                                        Message Format\r\n                                        <input ibmText formControlName=\"mFormat\"\r\n                                            [invalid]=\"submitted && f.mFormat.errors\" value=\"{{this.mf}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    Authentication Type <br /><br />\r\n                                    <table class=\"table hover\">\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let auth of this.authData\">\r\n                                                <td><input type=\"checkbox\" formControlName=\"authType\" name=\"authType\"\r\n                                                        value=\"{{auth}}\" (change)=\"onAuthCboxChangeHandler($event)\">\r\n                                                </td>\r\n                                                <td>{{auth}}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.authType.errors\">\r\n                                        Authentication Type is required\r\n                                    </div>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\"\r\n                                    *ngIf=\"this.checkedUserType && this.checkedUserValue == 'User Credentials'\">\r\n                                    <ibm-label>\r\n                                        Username\r\n                                        <input ibmText formControlName=\"username\" [placeholder]=\"'Enter Username'\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\"\r\n                                    *ngIf=\"this.checkedUserType && this.checkedUserValue  == 'User Credentials'\">\r\n                                    <ibm-label>\r\n                                        Password\r\n                                        <input ibmText type=\"password\" formControlName=\"password\"\r\n                                            [placeholder]=\"'Enter Password'\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\"\r\n                                    *ngIf=\"this.checkedTokenType && this.checkedTokenValue == 'Token'\">\r\n                                    <ibm-label>\r\n                                        Token\r\n                                        <input ibmText type=\"password\" formControlName=\"token\"\r\n                                            [placeholder]=\"'Enter Token'\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\" bx--fieldset\">\r\n                                    TLS Type <br /><br />\r\n                                    <select class=\"custom-select\" formControlName=\"tlsType\">\r\n                                        <option value=\"\">Choose your Type</option>\r\n                                        <option value=\"One-Way\">One-Way</option>\r\n                                        <option value=\"Two-Way\">Two-Way</option>\r\n                                    </select>\r\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.tlsType.errors\">\r\n                                        TLS Type is required\r\n                                    </div>\r\n                                </fieldset> -->\r\n                            </div>\r\n                            <div class=\"modal-footer-button\">\r\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\r\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\r\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\">Update</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!--close of idbp-form-container-modal div-->\r\n                </div>\r\n                <!--close of modal-body div-->\r\n            </div>\r\n            <!--close of modal-content div-->\r\n        </div>\r\n        <!--close of modal-dialog div-->\r\n    </div>\r\n    <!--close of modal fade div-->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Change Password\r\n            </div>\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__subtitle\">\r\n                Easy to remember, hard to forget\r\n            </div>\r\n        </div>\r\n    </header>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div toastContainer></div>\r\n    <div class=\"idbp-form-container\">\r\n        <h4>Change Password</h4>\r\n        <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onChangePasswordSubmit()\" class=\"signin-form\">\r\n            <div class=\"forms-gds\">\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.np.pristine && f.np.errors\" [invalidText]=\"ctrl.np.invalidText\">\r\n                        New Password\r\n                        <input ibmText type=\"password\" formControlName=\"np\" [invalid]=\"submitted && f.np.errors\"\r\n                            [placeholder]=\"'Enter New Password'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.cp.pristine && f.cp.errors\"\r\n                        [invalidText]=\"'Confirm New Password is required'\">\r\n                        Confirm Your New Password\r\n                        <input ibmText type=\"password\" formControlName=\"cp\" [invalid]=\"submitted && f.cp.errors\"\r\n                            [placeholder]=\"'Confirm Your New Password'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n                <div class=\"form-button\">\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n                        [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Cancel</button>\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Change\r\n                        Password</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\">\r\n  <div class=\"common-actions\">\r\n    <div class=\"tiles\">\r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" width=\"60\" height=\"64\" viewBox=\"0 0 80 86\">\r\n          <path class=\"st0\" fill=\"#009BEF\"\r\n            d=\"M45.8,40.3c-0.6,0.9-1.4,1.7-2.1,2.5l2.1,8.6l-10,4.3l-5-6.8c-2.5,0.3-5-0.1-7.4-0.8l-5.6,4.9l-9-6.3l2.7-7 c-1.5-2.1-2.8-4.1-3.4-6.5l-8-2.4L0.7,20l8.9-1c0.5-1,1-2,1.7-2.9c0.6-0.9,1.4-1.8,2.1-2.6l-2.1-8.7l10.1-4.4l5.1,6.6 c2.5-0.3,5.2-0.3,7.7,0.4l6.1-5.7l9,6.3l-3.2,7.7c1.5,2.1,2.3,4.8,2.9,7.3l8,2.4l-0.7,10.9l-8.9,1C46.9,38.5,46.4,39.4,45.8,40.3z M23.2,35.9c4.7,3.3,11.1,2.1,14.4-2.5c3.3-4.7,2.1-11.1-2.5-14.4c-4.7-3.3-11.1-2.1-14.4,2.5S18.6,32.7,23.2,35.9z\">\r\n          </path>\r\n          <g>\r\n            <path class=\"st1\" fill=\"#5A6872\"\r\n              d=\"M47.8,69.3l1.1-3L45.4,64l-2.3,2.3c-1-0.2-2-0.2-2.9,0l-2-2.5l-3.8,1.8l0.9,3.3c-0.3,0.3-0.5,0.6-0.8,1 c-0.2,0.4-0.4,0.7-0.6,1.1l-3.4,0.5l-0.1,4.2l3.1,0.8c0.3,0.9,0.8,1.7,1.4,2.5L34,81.6l3.5,2.3l2.1-2c1,0.2,1.9,0.3,2.9,0.2l2,2.5 l3.8-1.8l-0.9-3.3c0.3-0.3,0.5-0.6,0.8-1c0.2-0.4,0.4-0.7,0.6-1.1L52,77l0.1-4.2L49,72C48.7,71.1,48.4,70.1,47.8,69.3z M44.8,76.1 c-1.2,1.8-3.6,2.3-5.4,1.2c-1.8-1.2-2.3-3.6-1.2-5.4c1.2-1.8,3.6-2.3,5.4-1.2C45.5,71.8,46,74.3,44.8,76.1z\">\r\n            </path>\r\n            <path class=\"st1\" fill=\"#5A6872\"\r\n              d=\"M75.3,51.1c-0.3-1.2-0.7-2.6-1.5-3.7l1.7-3.9l-4.6-3.2l-3.1,2.9c-1.3-0.3-2.6-0.3-3.9-0.2l-2.6-3.4l-5.1,2.3 l1.1,4.4c-0.4,0.4-0.8,0.8-1.1,1.3c-0.3,0.5-0.6,1-0.8,1.5l-4.5,0.5l-0.4,5.6l4.1,1.2c0.3,1.2,1,2.3,1.7,3.3l-1.4,3.6l4.6,3.2 l2.9-2.5c1.3,0.3,2.5,0.5,3.8,0.4l2.5,3.5l5.1-2.2l-1.1-4.4c0.4-0.4,0.7-0.8,1.1-1.3c0.3-0.5,0.6-1,0.8-1.5l4.5-0.5l0.4-5.6 L75.3,51.1z M69.5,56.3c-1.7,2.4-4.9,3-7.3,1.3c-2.4-1.7-3-4.9-1.3-7.3c1.7-2.4,4.9-3,7.3-1.3C70.6,50.7,71.2,53.9,69.5,56.3z\">\r\n            </path>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/settings']\" routerLinkActive=\"active\">Settings</a>\r\n        </h4>\r\n        <p>Create & edit settings for roles, users, smtp servers and more</p>\r\n      </ibm-tile>\r\n\r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" width=\"64\" height=\"64\" viewBox=\"0 0 75 75\">\r\n          <polygon class=\"st0\" fill=\"#5A6872\" points=\"48,19.1 48,0 18.9,0 0,19.5 0,67 48,67 48,44.4 46,46.4 46,65 2,65 2,20.3 2.3,20 20,20 20,2 46,2\r\n                                                                46,21.1 \"></polygon>\r\n          <g>\r\n            <polygon class=\"st1\" fill=\"#009BEF\" points=\"57.6,13 53,17.5 62.1,26.5 66.7,22\"></polygon>\r\n            <polygon class=\"st1\" fill=\"#009BEF\" points=\"33.6,37 29,50.7 42.6,46 60.9,28 51.8,19\"></polygon>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/cbs']\" routerLinkActive=\"active\">Manage\r\n            Core Banking</a></h4>\r\n        <p>Manage user core banking system and its related deployment environment</p>\r\n      </ibm-tile>\r\n\r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" width=\"64\" height=\"64\" viewBox=\"0 0 75 75\">\r\n          <polygon class=\"st0\" fill=\"#5A6872\" points=\"48,19.1 48,0 18.9,0 0,19.5 0,67 48,67 48,44.4 46,46.4 46,65 2,65 2,20.3 2.3,20 20,20 20,2 46,2\r\n                                                46,21.1 \"></polygon>\r\n          <g>\r\n            <polygon class=\"st1\" fill=\"#009BEF\" points=\"57.6,13 53,17.5 62.1,26.5 66.7,22\"></polygon>\r\n            <polygon class=\"st1\" fill=\"#009BEF\" points=\"33.6,37 29,50.7 42.6,46 60.9,28 51.8,19\">\r\n            </polygon>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/manageresources']\" routerLinkActive=\"active\">Manage\r\n            Resources</a></h4>\r\n        <p>Create & edit resources such as Registries, Platforms, Notifications & more</p>\r\n      </ibm-tile>\r\n\r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" viewBox=\"-197 199 64 64\" width=\"64\" height=\"64\">\r\n          <g id=\"Layer_2\">\r\n            <rect x=\"-197\" y=\"199\" fill=\"none\" width=\"64\" height=\"64\">\r\n            </rect>\r\n          </g>\r\n          <g id=\"Layer_1\">\r\n            <g>\r\n              <rect id=\"XMLID_9_\" x=\"-184.4\" y=\"231.4\" fill=\"#009BEF\" width=\"17.2\" height=\"18.8\"></rect>\r\n              <g>\r\n                <polygon fill=\"#5B6973\" points=\"-145.6,222.7 -154.5,212.4 -155.1,211.8 -166.1,221.3 -156.5,232.2\">\r\n                </polygon>\r\n                <rect x=\"-184.4\" y=\"215.3\" fill=\"#5B6973\" width=\"17.2\" height=\"14\"></rect>\r\n                <path class=\"st2\" d=\"M-165.1,250.2h16.7v-16.1h-16.7V250.2z M-164,235.2h14.5v14H-164V235.2z\">\r\n                </path>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/manageenvironment']\" routerLinkActive=\"active\">Manage\r\n            Environment</a></h4>\r\n        <p>Manage active core banking environment</p>\r\n      </ibm-tile>\r\n\r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" viewBox=\"-197 199 64 64\" width=\"64\" height=\"64\">\r\n          <g id=\"Layer_2\">\r\n            <rect x=\"-197\" y=\"199\" fill=\"none\" width=\"64\" height=\"64\"></rect>\r\n          </g>\r\n          <g id=\"Layer_1\">\r\n            <g>\r\n              <path fill=\"#009BEF\"\r\n                d=\"M-175.9,222.7l10.9-5.4l10.9,5.3L-165,228L-175.9,222.7z M-165,214.4l-16.9,8.3l16.9,8.3l16.9-8.3L-165,214.4 z\">\r\n              </path>\r\n              <g>\r\n                <polygon id=\"XMLID_2_\" fill=\"#65737C\"\r\n                  points=\"-148.1,230.9 -153.3,228.4 -165,234.2 -176.7,228.4 -181.8,230.9 -165,239.3\">\r\n                </polygon>\r\n                <polygon id=\"XMLID_1_\" fill=\"#65737C\"\r\n                  points=\"-165,242.6 -176.8,236.7 -181.9,239.3 -165,247.6 -148.1,239.3 -153.2,236.7 \">\r\n                </polygon>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/manageservices']\" routerLinkActive=\"active\">Manage\r\n            Services</a>\r\n        </h4>\r\n        <p>Manage your deployments, Publish your Services here</p>\r\n      </ibm-tile>\r\n\r\n      <ibm-tile>\r\n        <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\" width=\"42\"\r\n          height=\"68\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" style=\"will-change: transform;\">\r\n          <path d=\"M21 16h2v2h-2zM9 16h8v2H9zm12-4h2v2h-2zM9 12h8v2H9zm0-4h14v2H9z\">\r\n          </path>\r\n          <path\r\n            d=\"M25 2H7a2.002 2.002 0 0 0-2 2v25a1 1 0 0 0 1 1h1a.999.999 0 0 0 .8-.4l2.2-2.933 2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933 2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933 2.2 2.933a1 1 0 0 0 .8.4h1a1 1 0 0 0 1-1V4a2.002 2.002 0 0 0-2-2zm0 25.333L22.8 24.4a1.035 1.035 0 0 0-1.6 0L19 27.333 16.8 24.4a1.035 1.035 0 0 0-1.6 0L13 27.333 10.8 24.4a1.035 1.035 0 0 0-1.6 0L7 27.333V4h18z\">\r\n          </path>\r\n        </svg>\r\n        <h4><a href=\"https://developer.ibm.com/apiconnect/getting-started/\" target=\"_blank\">Connect</a></h4>\r\n        <p>Documentation and tutorials with step-by-step instructions</p>\r\n      </ibm-tile>\r\n\r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" viewBox=\"-197 199 64 64\" width=\"64\" height=\"64\">\r\n          <g id=\"Layer_2\">\r\n            <rect x=\"-197\" y=\"199\" fill=\"none\" width=\"64\" height=\"64\"></rect>\r\n          </g>\r\n          <g id=\"Layer_1\">\r\n            <g>\r\n              <path fill=\"#009BEF\"\r\n                d=\"M-175.9,222.7l10.9-5.4l10.9,5.3L-165,228L-175.9,222.7z M-165,214.4l-16.9,8.3l16.9,8.3l16.9-8.3L-165,214.4 z\">\r\n              </path>\r\n              <g>\r\n                <polygon id=\"XMLID_2_\" fill=\"#65737C\"\r\n                  points=\"-148.1,230.9 -153.3,228.4 -165,234.2 -176.7,228.4 -181.8,230.9 -165,239.3\">\r\n                </polygon>\r\n                <polygon id=\"XMLID_1_\" fill=\"#65737C\"\r\n                  points=\"-165,242.6 -176.8,236.7 -181.9,239.3 -165,247.6 -148.1,239.3 -153.2,236.7 \">\r\n                </polygon>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/apicaccelerator']\" routerLinkActive=\"active\">APIC Accelerator</a>\r\n        </h4>\r\n        <p>Dynamically generate API code and deploy</p>\r\n      </ibm-tile>\r\n\r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" viewBox=\"-197 199 64 64\" width=\"64\" height=\"64\">\r\n          <g id=\"Layer_2\">\r\n            <rect x=\"-197\" y=\"199\" fill=\"none\" width=\"64\" height=\"64\"></rect>\r\n          </g>\r\n          <g id=\"Layer_1\">\r\n            <g>\r\n              <path fill=\"#009BEF\"\r\n                d=\"M-175.9,222.7l10.9-5.4l10.9,5.3L-165,228L-175.9,222.7z M-165,214.4l-16.9,8.3l16.9,8.3l16.9-8.3L-165,214.4 z\">\r\n              </path>\r\n              <g>\r\n                <polygon id=\"XMLID_2_\" fill=\"#65737C\"\r\n                  points=\"-148.1,230.9 -153.3,228.4 -165,234.2 -176.7,228.4 -181.8,230.9 -165,239.3\">\r\n                </polygon>\r\n                <polygon id=\"XMLID_1_\" fill=\"#65737C\"\r\n                  points=\"-165,242.6 -176.8,236.7 -181.9,239.3 -165,247.6 -148.1,239.3 -153.2,236.7 \">\r\n                </polygon>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/aceaccelerator']\" routerLinkActive=\"active\">ACE Accelerator</a>\r\n        </h4>\r\n        <p>Dynamically generate ACE code and deploy</p>\r\n      </ibm-tile>\r\n      \r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" viewBox=\"-197 199 64 64\" width=\"64\" height=\"64\">\r\n          <g id=\"Layer_2\">\r\n            <rect x=\"-197\" y=\"199\" fill=\"none\" width=\"64\" height=\"64\"></rect>\r\n          </g>\r\n          <g id=\"Layer_1\">\r\n            <g>\r\n              <path fill=\"#009BEF\"\r\n                d=\"M-175.9,222.7l10.9-5.4l10.9,5.3L-165,228L-175.9,222.7z M-165,214.4l-16.9,8.3l16.9,8.3l16.9-8.3L-165,214.4 z\">\r\n              </path>\r\n              <g>\r\n                <polygon id=\"XMLID_2_\" fill=\"#65737C\"\r\n                  points=\"-148.1,230.9 -153.3,228.4 -165,234.2 -176.7,228.4 -181.8,230.9 -165,239.3\">\r\n                </polygon>\r\n                <polygon id=\"XMLID_1_\" fill=\"#65737C\"\r\n                  points=\"-165,242.6 -176.8,236.7 -181.9,239.3 -165,247.6 -148.1,239.3 -153.2,236.7 \">\r\n                </polygon>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/rulemanagement']\" routerLinkActive=\"active\">Rule Management</a>\r\n        </h4>\r\n        <p>Dynamically add new rules with different conditions</p>\r\n      </ibm-tile>\r\n      \r\n      <ibm-tile>\r\n        <svg x=\"0px\" y=\"0px\" viewBox=\"-197 199 64 64\" width=\"64\" height=\"64\">\r\n          <g id=\"Layer_2\">\r\n            <rect x=\"-197\" y=\"199\" fill=\"none\" width=\"64\" height=\"64\"></rect>\r\n          </g>\r\n          <g id=\"Layer_1\">\r\n            <g>\r\n              <path fill=\"#009BEF\"\r\n                d=\"M-175.9,222.7l10.9-5.4l10.9,5.3L-165,228L-175.9,222.7z M-165,214.4l-16.9,8.3l16.9,8.3l16.9-8.3L-165,214.4 z\">\r\n              </path>\r\n              <g>\r\n                <polygon id=\"XMLID_2_\" fill=\"#65737C\"\r\n                  points=\"-148.1,230.9 -153.3,228.4 -165,234.2 -176.7,228.4 -181.8,230.9 -165,239.3\">\r\n                </polygon>\r\n                <polygon id=\"XMLID_1_\" fill=\"#65737C\"\r\n                  points=\"-165,242.6 -176.8,236.7 -181.9,239.3 -165,247.6 -148.1,239.3 -153.2,236.7 \">\r\n                </polygon>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </svg>\r\n        <h4><a [routerLink]=\"['/dashboard/tokenmanagement']\" routerLinkActive=\"active\">Token Management</a>\r\n        </h4>\r\n        <p>Dynamically revoke or reactivate tokens in target environment</p>\r\n      </ibm-tile>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dev-ops/dev-ops.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dev-ops/dev-ops.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div toastContainer></div>\r\n<div class=\"cb--page-content__container\" *ngIf=\"!this.sandboxEmpty\">\r\n  <div>\r\n    <button class=\"bx--btn bx--btn--primary\" id=\"deploybutton\" style=\"margin-bottom: 10px;\" type=\"button\"\r\n      (click)=\"deployEnvironment($event)\" [disabled]=\"this.envDeployedStatus && this.isSuccess\"> Deploy\r\n      Environment</button> <br />\r\n\r\n    <span *ngIf=\"this.envDeployedStatus && this.isSuccess\" style=\"margin: -58px 885px 0px 0px; float: right;\">\r\n      <textarea rows=\"3\" cols=\"25\" placeholder=\"Enter Openshift Token to delete this environment\" id=\"oc-token\"\r\n        (keyup)=\"tokenFunc($event)\"></textarea>\r\n    </span>\r\n    <button class=\"btn btn-dark\" id=\"deletebutton\" style=\"margin: -58px 700px 0px 0px; float: right;\" type=\"button\"\r\n      (click)=\"deleteEnvironment($event)\" [disabled]=\"!this.envDeployedStatus && !this.isSuccess\"\r\n      *ngIf=\"this.token && this.manEnvCBParam != 'idbp-sandbox'\">\r\n      Delete Environment</button> <br />\r\n    <button class=\"btn btn-dark\" id=\"resetbutton\" style=\"margin: -58px 700px 0px 0px; float: right;\" type=\"button\"\r\n      (click)=\"deleteEnvironment($event)\" [disabled]=\"!this.envDeployedStatus && !this.isSuccess\"\r\n      *ngIf=\"this.token && this.manEnvCBParam == 'idbp-sandbox'\">\r\n      Reset Environment</button> <br />\r\n  </div>\r\n\r\n  <div data-inline-loading class=\"bx--inline-loading\" role=\"alert\" aria-live=\"assertive\" *ngIf=\"this.isLoading\">\r\n    <div class=\"bx--inline-loading__animation\">\r\n      <div data-inline-loading-spinner class=\"bx--loading bx--loading--small\">\r\n        <svg class=\"bx--loading__svg\" viewBox=\"-75 -75 150 150\">\r\n          <circle class=\"bx--loading__background\" cx=\"0\" cy=\"0\" r=\"30\" />\r\n          <circle class=\"bx--loading__stroke\" cx=\"0\" cy=\"0\" r=\"30\" />\r\n        </svg>\r\n      </div>\r\n    </div>\r\n    <p data-inline-loading-text-active class=\"bx--inline-loading__text\">\r\n      <font size=\"6\">Deployment is in progress, kindly wait..</font>\r\n    </p>\r\n  </div>\r\n  <!--close of bx--inline-loading div-->\r\n\r\n  <div class=\"deploy-env\">\r\n    <form [formGroup]=\"editEnvForm\" class=\"signin-form\">\r\n      <div class=\"forms-gds\">\r\n        <fieldset>\r\n          Name of Environment <input ibmText formControlName=\"name\" [value]=\"this.name\">\r\n        </fieldset>\r\n        <fieldset>\r\n          Description of Environment <input ibmText formControlName=\"description\" [value]=\"this.desc\">\r\n        </fieldset>\r\n        <fieldset>\r\n          Container Platform <input ibmText formControlName=\"containerPlatform\" [value]=\"this.containerPlat\">\r\n        </fieldset>\r\n        <fieldset>\r\n          Container Registry <input ibmText formControlName=\"containerRegister\" [value]=\"this.containerReg\">\r\n        </fieldset>\r\n        <fieldset>\r\n          APIC <input ibmText formControlName=\"apic\" [value]=\"this.apic\">\r\n        </fieldset>\r\n        <fieldset>\r\n          Banking Services <input ibmText formControlName=\"bankService\" [value]=\"this.bankServices\">\r\n        </fieldset>\r\n        <fieldset *ngIf=\"this.manEnvCBParam != 'idbp-sandbox' \">\r\n          Core Banking Service <input ibmText formControlName=\"coreBank\" [value]=\"this.cbs\">\r\n        </fieldset>\r\n        <fieldset>\r\n          Notification <input ibmText formControlName=\"notification\" [value]=\"this.not\">\r\n        </fieldset>\r\n        <fieldset *ngFor=\"let service of this.services\">\r\n          Services Associated <input ibmText formControlName=\"services\" [value]=\"this.service.name\">\r\n        </fieldset>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--close of deploy-env div-->\r\n</div>\r\n<!--close of cb--page-content__container div-->\r\n\r\n<div class=\"idbp-form-container\" *ngIf=\"this.sandboxEmpty\">\r\n  <h4>Create Sandbox Environment</h4>\r\n  <form [formGroup]=\"sandboxEnvForm\" (ngSubmit)=\"onSandboxEnvSubmit()\" class=\"signin-form\">\r\n    <div class=\"forms-gds\">\r\n      <fieldset class=\"bx--fieldset\">\r\n        <ibm-label>\r\n          Name\r\n          <input ibmText formControlName=\"name\" value=\"idbp-sandbox\">\r\n        </ibm-label>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"bx--fieldset\">\r\n        <ibm-label>\r\n          Description (optional)\r\n          <input ibmText formControlName=\"desc\" [placeholder]=\"'Enter Description'\">\r\n        </ibm-label>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"bx--fieldset\">\r\n        Container Platform\r\n        <a href=\"/dashboard/manageresources/createcontainerplatform\">\r\n          <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\"\r\n            height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" style=\"will-change: transform; margin-left: 355px;\">\r\n            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n            </path>\r\n            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n            </path>\r\n            <title>Create Container Platform</title>\r\n          </svg>\r\n        </a>\r\n        <br /><br />\r\n        <select class=\"custom-select\" formControlName=\"containerPlatform\">\r\n          <option value=\"\">Choose your Container Platform</option>\r\n          <option *ngFor=\"let plat of cPlatformList\" [ngValue]=\"plat.name\">{{plat.name}}</option>\r\n        </select>\r\n        <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.containerPlatform.errors\">\r\n          Container Platform is required\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"bx--fieldset\">\r\n        Container Registry\r\n        <a href=\"/dashboard/manageresources/containerregistry/createcontainerregistry\">\r\n          <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\"\r\n            height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" style=\"will-change: transform; margin-left: 358px;\">\r\n            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n            </path>\r\n            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n            </path>\r\n            <title>Create Container Registry</title>\r\n          </svg>\r\n        </a>\r\n        <br /><br />\r\n        <select class=\"custom-select\" formControlName=\"containerRegistry\">\r\n          <option value=\"\">Choose your Container Registry</option>\r\n          <option *ngFor=\"let registry of cRegistryList\" [ngValue]=\"registry.name\">{{registry.name}}\r\n          </option>\r\n        </select>\r\n        <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.containerRegistry.errors\">\r\n          Container Registry is required\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"bx--fieldset\">\r\n        APIC\r\n        <a href=\"/dashboard/manageresources/apic/createapic\">\r\n          <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\"\r\n            height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" style=\"will-change: transform; margin-left: 444px;\">\r\n            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n            </path>\r\n            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n            </path>\r\n            <title>Create APIC</title>\r\n          </svg>\r\n        </a>\r\n        <br /><br />\r\n        <select class=\"custom-select\" formControlName=\"apic\">\r\n          <option value=\"\">Choose your APIC</option>\r\n          <option *ngFor=\"let ap of apicList\" [ngValue]=\"ap.name\">{{ap.name}}</option>\r\n        </select>\r\n        <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.apic.errors\">\r\n          APIC is required\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"bx--fieldset\">\r\n        Banking Standard\r\n        <br /> <br />\r\n        <select class=\"custom-select\" formControlName=\"bankingServices\">\r\n          <option value=\"\">Choose your Banking Standard</option>\r\n          <option *ngFor=\"let bank of bankList\" [ngValue]=\"bank.data.name\">\r\n            {{bank.data.title}}</option>\r\n        </select>\r\n        <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.bankingServices.errors\">\r\n          Banking Standard is required\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"bx--fieldset\">\r\n        Notification\r\n        <a href=\"/dashboard/manageresources/notification/createnotification\">\r\n          <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\"\r\n            height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" style=\"will-change: transform; margin-left: 401px;\">\r\n            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n            </path>\r\n            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n            </path>\r\n            <title>Create Notification</title>\r\n          </svg>\r\n        </a>\r\n        <br /><br />\r\n        <select class=\"custom-select\" formControlName=\"notification\">\r\n          <option value=\"\">Choose your Notification</option>\r\n          <option *ngFor=\"let noti of notificationList\" [ngValue]=\"noti.name\">{{noti.name}}\r\n          </option>\r\n        </select>\r\n        <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.notification.errors\">\r\n          Notification is required\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"bx--fieldset\">\r\n        Select the Service to be deployed <br /><br />\r\n        <table class=\"table hover\">\r\n          <tbody>\r\n            <tr *ngFor=\"let ser of this.servicesDeploy\">\r\n              <td><input type=\"checkbox\" formControlName=\"services\" name=\"services\" value=\"{{ser}}\"\r\n                  (change)=\"onServicesCboxChangeHandler($event)\"> </td>\r\n              <td>{{ser}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.services.errors\">\r\n          Services is required\r\n        </div>\r\n      </fieldset>\r\n      <div class=\"form-button\">\r\n        <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n          [routerLink]=\"['/dashboard/manageenvironment']\" routerLinkActive=\"active\">Cancel</button>\r\n        <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--close of idbp-form-container div-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer *ngIf=\"authService.loggedIn\">\r\n    <div class=\"copyright\">\r\n        <span>Copyright IBM Corporation 2020 | </span>\r\n        <a>Privacy Policy</a>\r\n    </div>\r\n    <div class=\"powered-by\">\r\n        <span>Powered by</span>\r\n        <div class=\"ibm-footer-logo\"></div>\r\n    </div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n    <div class=\"forgot-password-left forgot-password-col\">\r\n        <div class=\"ibm-logo\"></div>\r\n        <div class=\"product-title\">\r\n            <h4>IBM Digital Banking Platform</h4>\r\n        </div>\r\n        <div toastContainer></div>\r\n        <div class=\"forgot-password-form\">\r\n            <fieldset class=\"bx--fieldset\">\r\n                <h4>Reset Password</h4>\r\n            </fieldset>\r\n            <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"onResetPasswordSubmit()\">\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.np.pristine && f.np.errors\" [invalidText]=\"ctrl.np.invalidText\">\r\n                        New Password\r\n                        <input ibmText type=\"password\" formControlName=\"np\" [invalid]=\"submitted && f.np.errors\"\r\n                            [placeholder]=\"'Enter New Password'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.cp.pristine && f.cp.errors\"\r\n                        [invalidText]=\"'Confirm New Password is required'\">\r\n                        Confirm Your New Password\r\n                        <input ibmText type=\"password\" formControlName=\"cp\" [invalid]=\"submitted && f.cp.errors\"\r\n                            [placeholder]=\"'Confirm Your New Password'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n                <div class=\"button-section\">\r\n                    <button id=\"submit\" [ibmButton]=\"'primary'\" [size]=\"'normal'\" type=\"submit\">\r\n                        Change Password\r\n                        <svg class=\"bx--btn__icon\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path d=\"M18 6l-1.4 1.4 7.5 7.6H3v2h21.1l-7.5 7.6L18 26l10-10z\"></path>\r\n                        </svg>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <!--close of forgot-password-left forgot-password-col div-->\r\n    <div class=\"forgot-password-right forgot-password-col\"></div>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-email-notifications/get-email-notifications.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-email-notifications/get-email-notifications.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure Email Server </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"idbp\">\r\n        <button ibmButton [routerLink]=\"['/dashboard/settings/listsmtpconfigure/createsmtp']\" routerLinkActive=\"active\"\r\n            style=\"background-color: #3d70b2;\" [disabled]=\"this.smtpTemp || this.smtpRoutesMatched\">Create</button>\r\n    </div>\r\n    <div>\r\n        <p>This is the currently configured email server</p>\r\n        <table class=\"bx--data-table\" *ngIf=\"this.smtpTemp\" style=\"width: 50%;\">\r\n            <thead>\r\n                <tr>\r\n                    <th><span class=\"bx--table-header-label\">Service Name </span></th>\r\n                    <th><span class=\"bx--table-header-label\">Host</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Activities</span></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let smtp of this.smtpsList\">\r\n                    <td>{{smtp.servicename}}</td>\r\n                    <td>{{smtp.host}}</td>\r\n                    <td>\r\n                        <ibm-overflow-menu>\r\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#editEmailModal\"\r\n                                (click)=\"onEditEmailNotification(smtp._id, smtp.servicename, smtp.host, smtp.port, smtp.secure)\">\r\n                                Edit </ibm-overflow-menu-option>\r\n                        </ibm-overflow-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"bx--data-table\" *ngIf=\"!this.smtpTemp\">\r\n            <p> No Records Available</p>\r\n        </table>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"editEmailModal\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"editEmailModalLabel\">Edit Email Server</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div toastContainer></div>\r\n                    <div class=\"idbp-form-container-modal\">\r\n                        <form [formGroup]=\"editEmailForm\" (ngSubmit)=\"onEditEmailSubmit()\" class=\"signin-form\">\r\n                            <div class=\"forms-gds\">\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.serviceName.pristine && f.serviceName.errors\"\r\n                                        [invalidText]=\"'Service Name is required'\">\r\n                                        Service Name\r\n                                        <input ibmText formControlName=\"serviceName\"\r\n                                            [invalid]=\"submitted && f.serviceName.errors\" value=\"{{this.servicename}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.host.pristine && f.host.errors\"\r\n                                        [invalidText]=\"'Host is required'\">\r\n                                        Host\r\n                                        <input ibmText formControlName=\"host\" [invalid]=\"submitted && f.host.errors\"\r\n                                            value=\"{{this.host}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.port.pristine && f.port.errors\"\r\n                                        [invalidText]=\"'* only numbers are allowed'\">\r\n                                        Port\r\n                                        <input ibmText formControlName=\"port\" [invalid]=\"submitted && f.port.errors\"\r\n                                            value=\"{{this.port}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.secure.pristine && f.secure.errors\"\r\n                                        [invalidText]=\"'Secure is required'\">\r\n                                        Secure\r\n                                        <input ibmText formControlName=\"secure\" [invalid]=\"submitted && f.secure.errors\"\r\n                                            value=\"{{this.secure}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.username.pristine && f.username.errors\"\r\n                                        [invalidText]=\"'Username is required'\">\r\n                                        Username\r\n                                        <input ibmText formControlName=\"username\"\r\n                                            [invalid]=\"submitted && f.username.errors\" [placeholder]=\"'Enter Username'\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.password.pristine && f.password.errors\"\r\n                                        [invalidText]=\"'Password is required'\">\r\n                                        Password\r\n                                        <input ibmText type=\"password\" formControlName=\"password\"\r\n                                            [invalid]=\"submitted && f.password.errors\" [placeholder]=\"'Enter Password'\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div class=\"modal-footer-button\">\r\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\r\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\r\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\">Update</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!--close of idbp-form-container-modal div-->\r\n                </div>\r\n                <!--close of modal-body div-->\r\n            </div>\r\n            <!--close of modal-content div-->\r\n        </div>\r\n        <!--close of modal-dialog div-->\r\n    </div>\r\n    <!--close of modal fade div-->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-templates/get-templates.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-templates/get-templates.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure Email Templates\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div>\r\n        <h3>Email Templates</h3>\r\n        <p>Configure the email templates used to invite & notify users</p> <br />\r\n        <table class=\"bx--data-table\" *ngIf=\"this.templateTemp\" style=\"width: 50%;\">\r\n            <thead>\r\n                <tr>\r\n                    <th><span class=\"bx--table-header-label\">Template</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Activities</span></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let template of this.templateList\">\r\n                    <td>{{template.action}}</td>\r\n                    <td>\r\n                        <ibm-overflow-menu>\r\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#editTemplateModal\"\r\n                                (click)=\"onEditTemplate(template._id, template.subject, template.body)\"> Edit\r\n                            </ibm-overflow-menu-option>\r\n                        </ibm-overflow-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"bx--data-table\" *ngIf=\"!this.templateTemp\">\r\n            <p> No Records Available</p>\r\n        </table>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"editTemplateModal\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"editTemplateModalLabel\">Edit Email Template</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div toastContainer></div>\r\n                    <div class=\"idbp-form-container-modal\">\r\n                        <form [formGroup]=\"editEmailTemplateForm\" (ngSubmit)=\"onEditEmailTemplateSubmit()\"\r\n                            class=\"signin-form\">\r\n                            <div class=\"forms-gds\">\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.subject.pristine && f.subject.errors\"\r\n                                        [invalidText]=\"'Subject is required'\">\r\n                                        Subject\r\n                                        <input ibmText formControlName=\"subject\"\r\n                                            [invalid]=\"submitted && f.subject.errors\" value=\"{{this.subject}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.body.pristine && f.body.errors\"\r\n                                        [invalidText]=\"'Body is required'\">\r\n                                        Body\r\n                                        <input ibmText formControlName=\"body\" [invalid]=\"submitted && f.body.errors\"\r\n                                            value=\"{{this.body}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div class=\"modal-footer-button\">\r\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\r\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\r\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\">Update</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!--close of idbp-form-container-modal div-->\r\n                </div>\r\n                <!--close of modal-body div-->\r\n            </div>\r\n            <!--close of modal-content div-->\r\n        </div>\r\n        <!--close of modal-dialog div-->\r\n    </div>\r\n    <!--close of modal fade div-->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"authService.loggedIn\">\r\n    <ibm-header name=\"Digital Banking Platform\">\r\n        <ibm-header-global>\r\n            <ibm-header-action title=\"action\" (click)=\"userAction = !userAction\" class=\"header-action-parent\">\r\n                <svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\">\r\n                    <path\r\n                        d=\"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm-6 24.38v-2A3.22 3.22 0 0 1 13 21h6a3.22 3.22 \r\n                0 0 1 3 3.39v2a11.92 11.92 0 0 1-12 0zm14-1.46v-.61A5.21 5.21 0 0 0 19 19h-6a5.2 5.2 0 0 0-5 5.31v.59a12 12 0 1 1 16 0z\">\r\n                    </path>\r\n                    <path d=\"M16 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z\"></path>\r\n                </svg>\r\n                <ul *ngIf=\"userAction\" class=\"header-action-children\">\r\n                    <ibm-header-item [routerLink]=\"['/changepassword']\" routerLinkActive=\"active\">Change Password\r\n                    </ibm-header-item>\r\n                    <ibm-header-item (click)=\"logout()\">Logout</ibm-header-item>\r\n                </ul>\r\n            </ibm-header-action>\r\n        </ibm-header-global>\r\n    </ibm-header>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idbp-create-tls-server/idbp-create-tls-server.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idbp-create-tls-server/idbp-create-tls-server.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure TLS Profile </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div toastContainer></div>\r\n    <div class=\"idbp-form-container\">\r\n        <h4>Create TLS Server Profile</h4>\r\n        <form [formGroup]=\"tlsServerForm\" (ngSubmit)=\"onTLSServerSubmit()\" class=\"signin-form\">\r\n            <div class=\"forms-gds\">\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.title.pristine && f.title.errors\" [invalidText]=\"'Title is required'\">\r\n                        Title\r\n                        <input ibmText formControlName=\"title\" [invalid]=\"submitted && f.title.errors\"\r\n                            [placeholder]=\"'Enter Title'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\r\n                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\r\n                        Name\r\n                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\r\n                            [placeholder]=\"'Enter Name'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.version.pristine && f.version.errors\"\r\n                        [invalidText]=\"'Version is required'\">\r\n                        Version\r\n                        <input ibmText formControlName=\"version\" [invalid]=\"submitted && f.version.errors\"\r\n                            [placeholder]=\"'Enter Version'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Type <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"type\">\r\n                        <option value=\"\">Choose your Type</option>\r\n                        <option value=\"One-Way\">One-Way</option>\r\n                        <option value=\"Two-Way\">Two-Way</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.type.errors\">\r\n                        Type is required\r\n                    </div>\r\n                </fieldset>\r\n                <div class=\"form-button\">\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n                        [routerLink]=\"['/dashboard/settings/tlsprofile']\" routerLinkActive=\"active\">Cancel</button>\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create\r\n                        TLS Profile</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idbp-tls-profile/idbp-tls-profile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idbp-tls-profile/idbp-tls-profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure IDBP TLS Profile </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"idbp\">\r\n        <button ibmButton [routerLink]=\"['/dashboard/settings/tlsprofile/createtls']\" routerLinkActive=\"active\"\r\n            style=\"background-color: #3d70b2;\" [disabled]=\"this.tlsRoutesMatched\">Create</button>\r\n    </div>\r\n    <div>\r\n        <table class=\"bx--data-table\" *ngIf=\"this.tlsTemp\" style=\"width: 50%;\">\r\n            <thead>\r\n                <tr>\r\n                    <th><span class=\"bx--table-header-label\">Title</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Name</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Version</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Type</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Activities</span></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let tls of this.tlsList\">\r\n                    <td>{{tls.title}}</td>\r\n                    <td>{{tls.name}}</td>\r\n                    <td>{{tls.version}}</td>\r\n                    <td>{{tls.type}}</td>\r\n                    <td>\r\n                        <ibm-overflow-menu>\r\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#editTLSModal\"\r\n                                (click)=\"onEditTlsProfile(tls._id, tls.title, tls.name, tls.version)\"> Edit\r\n                            </ibm-overflow-menu-option>\r\n                            <ibm-overflow-menu-option (click)=\"onDeleteTlsProfile(tls._id)\"> Delete\r\n                            </ibm-overflow-menu-option>\r\n                        </ibm-overflow-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"bx--data-table\" *ngIf=\"!this.tlsTemp\">\r\n            <p> No Records Available</p>\r\n        </table>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"editTLSModal\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"editTLSModalLabel\">Edit TLS Profile</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div toastContainer></div>\r\n                    <div class=\"idbp-form-container-modal\">\r\n                        <form [formGroup]=\"editTlsForm\" (ngSubmit)=\"onEditTlsSubmit()\" class=\"signin-form\">\r\n                            <div class=\"forms-gds\">\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.title.pristine && f.title.errors\"\r\n                                        [invalidText]=\"'Title is required'\">\r\n                                        Title\r\n                                        <input ibmText formControlName=\"title\" [invalid]=\"submitted && f.title.errors\"\r\n                                            value=\"{{this.title}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\r\n                                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\r\n                                        Name\r\n                                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\r\n                                            value=\"{{this.name}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.version.pristine && f.version.errors\"\r\n                                        [invalidText]=\"'Version is required'\">\r\n                                        Version\r\n                                        <input ibmText formControlName=\"version\"\r\n                                            [invalid]=\"submitted && f.version.errors\" value=\"{{this.version}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    Type <br /><br />\r\n                                    <select class=\"custom-select\" formControlName=\"type\">\r\n                                        <option value=\"\">Choose your Type</option>\r\n                                        <option value=\"One-Way\">One-Way</option>\r\n                                        <option value=\"Two-Way\">Two-Way</option>\r\n                                    </select>\r\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.type.errors\">\r\n                                        Type is required\r\n                                    </div>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div class=\"modal-footer-button\">\r\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\r\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\r\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\">Update</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!--close of idbp-form-container-modal div-->\r\n                </div>\r\n                <!--close of modal-body div-->\r\n            </div>\r\n            <!--close of modal-content div-->\r\n        </div>\r\n        <!--close of modal-dialog div-->\r\n    </div>\r\n    <!--close of modal fade div-->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idbp/idbp.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idbp/idbp.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> IDBP Platform\r\n            </div>\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__subtitle\">\r\n                Configure Active Directories, smtp server, templates, users and roles for IDBP platform\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"settings-tabs\">\r\n        <!-- <mat-tab-group mat-align-tabs=\"center\">            \r\n            <mat-tab label=\"User Registry\" [routerLink]=\"['/dashboard/settings/userregistry']\">\r\n                <div class=\"idbp\">\r\n                    <button ibmButton [routerLink]=\"['/dashboard/settings/userregistry']\"\r\n                        style=\"background-color: #3d70b2;\">Manage User Registry</button>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Second\">Content 2</mat-tab>\r\n            <mat-tab label=\"Third\">Content 3</mat-tab>\r\n        </mat-tab-group> -->\r\n        <nav mat-tab-nav-bar>\r\n            <a mat-tab-link *ngFor=\"let link of navLinks\" [routerLink]=\"link.link\">{{link.label}}\r\n            </a>\r\n        </nav>\r\n    </div>\r\n    <div class=\"idbp\">\r\n        <button ibmButton [routerLink]=\"['/dashboard/settings/userregistry']\" routerLinkActive=\"active\"\r\n            style=\"background-color: #3d70b2;\">Manage User Registry</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/license/license.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/license/license.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <form [formGroup]=\"licenseForm\" (ngSubmit)=\"onLicenseSubmit()\">\r\n        <div class=\"form-group form-check\">\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <h1>IBM IDBP License Agreement</h1>\r\n            <p>\r\n                <br />\r\n                These Software License Terms and Conditions apply to and are incorporated by reference into the ordering\r\n                document\r\n                made by and between the Licensor/Service Provider and the Customer. <br /> This License Agreement sets\r\n                forth the terms and conditions under which Customer may <br /> (i) use Licensor’s proprietary software\r\n                (the Licensed Software/Subscribed Software) that is specifically licensed to Customer pursuant to the\r\n                Quote; and <br /> (ii) use the user documentation that Licensor makes generally available in hard copy\r\n                or electronic form to its general customer base in conjunction with the licensing of such Applications\r\n                (the “Documentation”). For purposes of this License Agreement, the term “Software” means the\r\n                Applications listed in an applicable Quote, the Documentation, and any Updates (as defined in the\r\n                Maintenance and Support Terms and Conditions incorporated by reference).\r\n                <br />Customer acknowledges and agrees that it is not relying on any agreement, representation,\r\n                statement, or warranty (whether or not in writing) made or given prior to the Term Start Date, except as\r\n                expressly provided herein with respect to the Software provided hereunder or any Maintenance and Support\r\n                Services under the applicable Quote. Licensor and Customer hereby agree as follows:\r\n            </p> <br /><br />\r\n            <label>Terms &amp; Conditions</label> <br /><br />\r\n            <input type=\"checkbox\" formControlName=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\r\n            <label for=\"acceptTerms\" class=\"form-check-label\">I Accept Terms & Conditions</label>\r\n            <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"bx--form-requirement\">Terms &amp; Conditions are\r\n                required\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"text-center\">\r\n            <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Accept</button>\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n  <div class=\"login-left login-col\">\r\n    <div class=\"ibm-logo\"></div>\r\n    <div class=\"product-title\">\r\n      <h4>IBM Digital Banking Platform</h4>\r\n    </div>\r\n    <div toastContainer></div>\r\n    <div class=\"login-form\">\r\n      <fieldset class=\"bx--fieldset\">\r\n        <h4>Log In</h4>\r\n      </fieldset>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <legend class=\"bx--label\">Select Role</legend>\r\n          <ibm-radio-group aria-label=\"radiogroup\" formControlName=\"role\">\r\n            <ibm-radio value=\"admin\" [checked]=\"true\">\r\n              Admin\r\n            </ibm-radio>\r\n            <ibm-radio value=\"nonadmin\">\r\n              Non-Admin\r\n            </ibm-radio>\r\n          </ibm-radio-group>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"submitted && f.email.errors\" [invalidText]=\"ctrl.email.invalidText\">\r\n            Email\r\n            <input ibmText formControlName=\"email\" [invalid]=\"submitted && f.email.errors\"\r\n              [placeholder]=\"'Enter email'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"submitted && f.password.errors\" [invalidText]=\"ctrl.password.invalidText\">\r\n            Password\r\n            <input ibmText type=\"password\" formControlName=\"password\" [invalid]=\"submitted && f.password.errors\"\r\n              [placeholder]=\"'Enter password'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <div class=\" button-section\">\r\n          <a id=\"forgotPassword\" href=\"/login\" data-toggle=\"modal\" data-target=\"#forgotPasswordModal\">Forgot\r\n            Password</a>\r\n          <button id=\"submit\" [ibmButton]=\"'primary'\" [size]=\"'normal'\" type=\"submit\">\r\n            Login\r\n            <svg class=\"bx--btn__icon\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path d=\"M18 6l-1.4 1.4 7.5 7.6H3v2h21.1l-7.5 7.6L18 26l10-10z\"></path>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!--close of login-form div-->\r\n  </div>\r\n  <!--close of login-left login-col div-->\r\n  <div class=\"login-right login-col\"></div>\r\n  <div class=\"modal fade\" id=\"forgotPasswordModal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"forgotPasswordModalLabel\">Recover Password</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <h6>Don’t worry, happens to the best of us.</h6>\r\n          <div toastContainer></div>\r\n          <div class=\"idbp-form-container-modal\">\r\n            <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onForgotPasswordSubmit()\" class=\"signin-form\">\r\n              <div class=\"forms-gds\">\r\n                <br />\r\n                <fieldset class=\"bx--fieldset\">\r\n                  <ibm-label [invalid]=\"submitted && fp.fpEmail.errors\" [invalidText]=\"ctrl.fpEmail.invalidText\">\r\n                    Your Email\r\n                    <input ibmText formControlName=\"fpEmail\" [invalid]=\"submitted && fp.fpEmail.errors\"\r\n                      [placeholder]=\"'Enter your email'\">\r\n                  </ibm-label>\r\n                </fieldset>\r\n              </div>\r\n              <div class=\"modal-footer-button\">\r\n                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\" id=\"cancel\"\r\n                  #closeAddExpenseModal>Cancel</button>\r\n                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"fpSubmit\">Email me a Recovery Link</button>\r\n              </div>\r\n            </form>\r\n            <!-- close of idbp-form-container-modal div -->\r\n          </div>\r\n        </div>\r\n        <!-- close of modal-body div -->\r\n      </div>\r\n      <!-- close of modal-content div -->\r\n    </div>\r\n    <!-- close of modal-dialog div -->\r\n  </div>\r\n  <!-- close of modal fade div -->\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-env-config-details/manage-env-config-details.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-env-config-details/manage-env-config-details.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\">Configure Manage Environment </div>\r\n            <p>We support sandbox, uat, sit & prod environments only as of now. </p>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <ibm-tabs>\r\n        <ibm-tab heading=\"Deployment\">\r\n            <app-dev-ops></app-dev-ops>\r\n        </ibm-tab>\r\n    </ibm-tabs>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-environment-create/manage-environment-create.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-environment-create/manage-environment-create.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Create an Active Environment\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"> </div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div toastContainer></div>\r\n    <div class=\"idbp-form-container\">\r\n        <h4>Create Details for your respective Environment</h4>\r\n        <form [formGroup]=\"nonEnvForm\" (ngSubmit)=\"onNonEnvSubmit()\" class=\"signin-form\">\r\n            <div class=\"forms-gds\">\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\" [invalidText]=\"'* only sit/uat/prod are accepted values due to limited resources in the POC Environment'\">\r\n                        Name\r\n                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\r\n                            [placeholder]=\"'Enter Name'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label>\r\n                        Description (optional)\r\n                        <input ibmText formControlName=\"desc\" [placeholder]=\"'Enter Description'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Container Platform\r\n                    <a href=\"/dashboard/manageresources/createcontainerplatform\">\r\n                        <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                            width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"\r\n                            style=\"will-change: transform; margin-left: 355px;\">\r\n                            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n                            </path>\r\n                            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n                            </path>\r\n                            <title>Create Container Platform</title>\r\n                        </svg>\r\n                    </a>\r\n                    <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"containerPlatform\">\r\n                        <option value=\"\">Choose your Container Platform</option>\r\n                        <option *ngFor=\"let plat of cPlatformList\" [ngValue]=\"plat.name\">{{plat.name}}</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.containerPlatform.errors\">\r\n                        Container Platform is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Container Registry\r\n                    <a href=\"/dashboard/manageresources/containerregistry/createcontainerregistry\">\r\n                        <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                            width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"\r\n                            style=\"will-change: transform; margin-left: 358px;\">\r\n                            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n                            </path>\r\n                            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n                            </path>\r\n                            <title>Create Container Registry</title>\r\n                        </svg>\r\n                    </a>\r\n                    <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"containerRegistry\">\r\n                        <option value=\"\">Choose your Container Registry</option>\r\n                        <option *ngFor=\"let registry of cRegistryList\" [ngValue]=\"registry.name\">{{registry.name}}\r\n                        </option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.containerRegistry.errors\">\r\n                        Container Registry is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    APIC\r\n                    <a href=\"/dashboard/manageresources/apic/createapic\">\r\n                        <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                            width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"\r\n                            style=\"will-change: transform; margin-left: 444px;\">\r\n                            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n                            </path>\r\n                            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n                            </path>\r\n                            <title>Create APIC</title>\r\n                        </svg>\r\n                    </a>\r\n                    <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"apic\">\r\n                        <option value=\"\">Choose your APIC</option>\r\n                        <option *ngFor=\"let ap of apicList\" [ngValue]=\"ap.name\">{{ap.name}}</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.apic.errors\">\r\n                        APIC is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Banking Standard\r\n                    <br /> <br />\r\n                    <select class=\"custom-select\" formControlName=\"bankingServices\">\r\n                        <option value=\"\">Choose your Banking Standard</option>\r\n                        <option *ngFor=\"let bank of bankList\" [ngValue]=\"bank.data.name\">\r\n                            {{bank.data.title}}</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.bankingServices.errors\">\r\n                        Banking Standard is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Core Banking\r\n                    <a href=\"/dashboard/cbs/createcbs\">\r\n                        <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                            width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"\r\n                            style=\"will-change: transform; margin-left: 391px;\">\r\n                            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n                            </path>\r\n                            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n                            </path>\r\n                            <title>Create Core Banking</title>\r\n                        </svg>\r\n                    </a>\r\n                    <br /> <br />\r\n                    <select class=\"custom-select\" formControlName=\"cbs\">\r\n                        <option value=\"\">Choose your Core Banking</option>\r\n                        <option *ngFor=\"let cb of cbsList\" [ngValue]=\"cb.name\">{{cb.name}}</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.cbs.errors\">\r\n                        Core Banking is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Notification\r\n                    <a href=\"/dashboard/manageresources/notification/createnotification\">\r\n                        <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                            width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"\r\n                            style=\"will-change: transform; margin-left: 401px;\">\r\n                            <path d=\"M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\">\r\n                            </path>\r\n                            <path d=\"M22 15L17 15 17 10 15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15z\">\r\n                            </path>\r\n                            <title>Create Notification</title>\r\n                        </svg>\r\n                    </a>\r\n                    <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"notification\">\r\n                        <option value=\"\">Choose your Notification</option>\r\n                        <option *ngFor=\"let noti of notificationList\" [ngValue]=\"noti.name\">{{noti.name}}\r\n                        </option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.notification.errors\">\r\n                        Notification is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Select the Service to be deployed <br /><br />\r\n                    <table class=\"table hover\">\r\n                        <tbody>\r\n                            <tr *ngFor=\"let ser of this.servicesDeploy\">\r\n                                <td><input type=\"checkbox\" formControlName=\"services\" name=\"services\" value=\"{{ser}}\"\r\n                                        (change)=\"onServicesCboxChangeHandler($event)\"> </td>\r\n                                <td>{{ser}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.services.errors\">\r\n                        Services is required\r\n                    </div>\r\n                </fieldset>\r\n                <div class=\"form-button\">\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n                        [routerLink]=\"['/dashboard/manageenvironment']\" routerLinkActive=\"active\">Cancel</button>\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-environment/manage-environment.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-environment/manage-environment.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\">List of Environments</div>\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__subtitle\">\r\n                <p>Please click on specific environment tile to manage.</p>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"idbp\">\r\n        <button ibmButton [routerLink]=\"['/dashboard/manageenvironment/createenv']\" routerLinkActive=\"active\"\r\n            style=\"background-color: #3d70b2;\" [disabled]=\"this.envRoutesMatched\">Create</button>\r\n    </div>\r\n    <div class=\"manage-environment\">\r\n        <div class=\"common-actions\">\r\n            <div class=\"tiles\">\r\n                <ibm-tile *ngFor=\"let non of this.nonList\">\r\n                    <svg id=\"_Layer_\" width=\"35\" height=\"40\" data-name=\" Layer \" xmlns=\"http://www.w3.org/2000/svg\"\r\n                        viewBox=\"0 0 24 21.60004\">\r\n                        <path fill=\"#8cd211\"\r\n                            d=\"M9.44856,2.2H1V23.8H13V5.75142A3.55147,3.55147,0,0,0,9.44856,2.2ZM10.6,18.30909H3.4V17.5818h7.2Zm0-2.4H3.4v-.72729h7.2Zm0-2.40007H3.4v-.72729h7.2Zm0-2.4H3.4v-.72729h7.2Zm0-2.40007H3.4V7.98175h7.2Z\"\r\n                            transform=\"translate(-1 -2.19998)\"></path>\r\n                        <path fill=\"#00b4a0\"\r\n                            d=\"M16.55155,2.2a3.55157,3.55157,0,0,0-3.55161,3.55144V23.8H25V2.2ZM22.6,18.30909H15.4V17.5818h7.2Zm0-2.4H15.4v-.72729h7.2Zm0-2.40007H15.4v-.72729h7.2Zm0-2.4H15.4v-.72729h7.2Zm0-2.40007H15.4V7.98175h7.2Z\"\r\n                            transform=\"translate(-1 -2.19998)\"></path>\r\n                    </svg>\r\n                    <h3><a [routerLink]=\"['/dashboard/manageenvironment/publish']\" [queryParams]=\"{env: non.name}\"\r\n                            routerLinkActive=\"active\">{{non.name}}</a>\r\n                    </h3>\r\n                    <p>{{non.description}}</p>\r\n                </ibm-tile>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-resources/manage-resources.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-resources/manage-resources.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Manage Resources\r\n            </div>\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__subtitle\">\r\n                Configure Registries, Platforms, Notifications & various other resources for IDBP platform\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"manage-resources-tabs\">\r\n        <nav mat-tab-nav-bar>\r\n            <a mat-tab-link *ngFor=\"let link of navLinks\" [routerLink]=\"link.link\">{{link.label}}\r\n            </a>\r\n        </nav>\r\n    </div>\r\n    <div class=\"idbp\">\r\n        <button ibmButton [routerLink]=\"['/dashboard/manageresources/createcontainerplatform']\"\r\n            style=\"background-color: #3d70b2;\" routerLinkActive=\"active\"\r\n            [disabled]=\"this.cPlatformRoutesMatched\">Create</button>\r\n    </div>\r\n    <div>\r\n        <table class=\"bx--data-table\" *ngIf=\"this.containerPlatformTemp\" style=\"width:20%;\">\r\n            <thead>\r\n                <tr>\r\n                    <th><span class=\"bx--table-header-label\">Name</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Platform Type</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Activities</span></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let platform of this.containerPlatformList\">\r\n                    <td>{{platform.name}}</td>\r\n                    <td>{{platform.platformType}}</td>\r\n                    <td>\r\n                        <ibm-overflow-menu>\r\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#editContainerPlatformModal\"\r\n                                (click)=\"onEditContainerPlatform(platform._id, platform.name, platform.domain, platform.address)\">\r\n                                Edit\r\n                            </ibm-overflow-menu-option>\r\n                            <ibm-overflow-menu-option (click)=\"onDeleteContainerPlatform(platform._id)\"> Delete\r\n                            </ibm-overflow-menu-option>\r\n                        </ibm-overflow-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"bx--data-table\" *ngIf=\"!this.containerPlatformTemp\">\r\n            <p> No Records Available</p>\r\n        </table>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"editContainerPlatformModal\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"editContainerPlatformModalLabel\">Edit Container Platform</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div toastContainer></div>\r\n                    <div class=\"idbp-form-container-modal\">\r\n                        <form [formGroup]=\"editContainerPlatForm\" (ngSubmit)=\"onEditContainerPlatformSubmit()\"\r\n                            class=\"signin-form\">\r\n                            <div class=\"forms-gds\">\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\r\n                                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\r\n                                        Name\r\n                                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\r\n                                            value=\"{{this.name}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.domain.pristine && f.domain.errors\"\r\n                                        [invalidText]=\"'Domain is required'\">\r\n                                        Domain\r\n                                        <input ibmText formControlName=\"domain\" [invalid]=\"submitted && f.domain.errors\"\r\n                                            value=\"{{this.domain}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    Container Platform Type <br /><br />\r\n                                    <select class=\"custom-select\" formControlName=\"platformType\">\r\n                                        <option value=\"\">Choose your Platform Type</option>\r\n                                        <option value=\"OCP\">OCP</option>\r\n                                    </select>\r\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.platformType.errors\">\r\n                                        Container Platform Type is required\r\n                                    </div>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.address.pristine && f.address.errors\"\r\n                                        [invalidText]=\"'Address is required'\">\r\n                                        Address\r\n                                        <input ibmText formControlName=\"address\"\r\n                                            [invalid]=\"submitted && f.address.errors\" value=\"{{this.add}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.token.pristine && f.token.errors\"\r\n                                        [invalidText]=\"'Token is required'\">\r\n                                        Authentication Token\r\n                                        <input ibmText type=\"password\" formControlName=\"token\"\r\n                                            [invalid]=\"submitted && f.token.errors\" [placeholder]=\"'Enter Token'\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div class=\"modal-footer-button\">\r\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\r\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\r\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\">Update</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!--close of idbp-form-container-modal div-->\r\n                </div>\r\n                <!--close of modal-body div-->\r\n            </div>\r\n            <!--close of modal-content div-->\r\n        </div>\r\n        <!--close of modal-dialog div-->\r\n    </div>\r\n    <!--close of modal fade div-->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-services/manage-services.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-services/manage-services.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Manage a Services\r\n            </div>\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__subtitle\">\r\n                Manage your various Services for IDBP Platform\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"manage-services\">\r\n        <div class=\"common-actions\">\r\n            <div class=\"tiles\">\r\n                <ibm-tile *ngFor=\"let bs of this.bsList\">\r\n                    <svg id=\"_Layer_\" width=\"35\" height=\"40\" data-name=\" Layer \" xmlns=\"http://www.w3.org/2000/svg\"\r\n                        viewBox=\"0 0 24 21.60004\">\r\n                        <path fill=\"#8cd211\"\r\n                            d=\"M9.44856,2.2H1V23.8H13V5.75142A3.55147,3.55147,0,0,0,9.44856,2.2ZM10.6,18.30909H3.4V17.5818h7.2Zm0-2.4H3.4v-.72729h7.2Zm0-2.40007H3.4v-.72729h7.2Zm0-2.4H3.4v-.72729h7.2Zm0-2.40007H3.4V7.98175h7.2Z\"\r\n                            transform=\"translate(-1 -2.19998)\"></path>\r\n                        <path fill=\"#00b4a0\"\r\n                            d=\"M16.55155,2.2a3.55157,3.55157,0,0,0-3.55161,3.55144V23.8H25V2.2ZM22.6,18.30909H15.4V17.5818h7.2Zm0-2.4H15.4v-.72729h7.2Zm0-2.40007H15.4v-.72729h7.2Zm0-2.4H15.4v-.72729h7.2Zm0-2.40007H15.4V7.98175h7.2Z\"\r\n                            transform=\"translate(-1 -2.19998)\"></path>\r\n                    </svg>\r\n                    <h3><a [routerLink]=\"['/dashboard/manageservices/bankingstandard']\" [queryParams]=\"{pack: bs.data.name}\"\r\n                            routerLinkActive=\"active\">{{bs.data.title}}</a>\r\n                    </h3>\r\n                </ibm-tile>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-apic/mr-create-apic.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-apic/mr-create-apic.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\n        <div _ngcontent-yve-c2=\"\">\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure APIC </div>\n        </div>\n    </header>\n    <div id=\"breadcrumb\"></div>\n</div>\n<div class=\"cb--page-content__container\">\n    <div toastContainer></div>\n    <div class=\"idbp-form-container\">\n        <h4>Create APIC Details</h4>\n        <form [formGroup]=\"apicForm\" (ngSubmit)=\"onAPICSubmit()\" class=\"signin-form\">\n            <div class=\"forms-gds\">\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\n                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\n                        Name\n                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\n                            [placeholder]=\"'Enter Name'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.platform.pristine && f.platform.errors\"\n                        [invalidText]=\"'Platform Base URL is required'\">\n                        Platform Base URL\n                        <input ibmText formControlName=\"platform\" [invalid]=\"submitted && f.platform.errors\"\n                            [placeholder]=\"'Enter Platform Base URL'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.realm.pristine && f.realm.errors\" [invalidText]=\"'Realm is required'\">\n                        Realm\n                        <input ibmText formControlName=\"realm\" [invalid]=\"submitted && f.realm.errors\"\n                            [placeholder]=\"'Enter Realm'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.username.pristine && f.username.errors\"\n                        [invalidText]=\"'Username is required'\">\n                        Username\n                        <input ibmText formControlName=\"username\" [invalid]=\"submitted && f.username.errors\"\n                            [placeholder]=\"'Enter Username'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.password.pristine && f.password.errors\"\n                        [invalidText]=\"'Password is required'\">\n                        Password\n                        <input ibmText type=\"password\" formControlName=\"password\"\n                            [invalid]=\"submitted && f.password.errors\" [placeholder]=\"'Enter Password'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.pOrg.pristine && f.pOrg.errors\"\n                        [invalidText]=\"'Prov Organization is required'\">\n                        Prov Organization\n                        <input ibmText formControlName=\"pOrg\" [invalid]=\"submitted && f.pOrg.errors\"\n                            [placeholder]=\"'Enter Prov Organization'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.catalog.pristine && f.catalog.errors\"\n                        [invalidText]=\"'Catalog Name is required'\">\n                        Catalog Name\n                        <input ibmText formControlName=\"catalog\" [invalid]=\"submitted && f.catalog.errors\"\n                            [placeholder]=\"'Enter Catalog Name'\">\n                    </ibm-label>\n                </fieldset>\n                <div class=\"form-button\">\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\n                        [routerLink]=\"['/dashboard/manageresources/apic']\" routerLinkActive=\"active\">Cancel</button>\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create\n                        APIC</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-container-platform/mr-create-container-platform.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-container-platform/mr-create-container-platform.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\n        <div _ngcontent-yve-c2=\"\">\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure Container Platform\n            </div>\n        </div>\n    </header>\n    <div id=\"breadcrumb\"></div>\n</div>\n<div class=\"cb--page-content__container\">\n    <div toastContainer></div>\n    <div class=\"idbp-form-container\">\n        <h4>Create Container Platform Details</h4>\n        <form [formGroup]=\"containerPlatForm\" (ngSubmit)=\"onContainerPlatformSubmit()\" class=\"signin-form\">\n            <div class=\"forms-gds\">\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\n                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\n                        Name\n                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\n                            [placeholder]=\"'Enter Name'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.domain.pristine && f.domain.errors\" [invalidText]=\"'Domain is required'\">\n                        Domain\n                        <input ibmText formControlName=\"domain\" [invalid]=\"submitted && f.domain.errors\"\n                            [placeholder]=\"'Enter Domain'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    Container Platform Type <br /><br />\n                    <select class=\"custom-select\" formControlName=\"platformType\">\n                        <option value=\"\">Choose your Platform Type</option>\n                        <!-- <option value=\"K8s\">K8s</option> -->\n                        <option value=\"OCP\">OCP</option>\n                    </select>\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.platformType.errors\">\n                        Container Platform Type is required\n                    </div>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.address.pristine && f.address.errors\"\n                        [invalidText]=\"'Address is required'\">\n                        Address\n                        <input ibmText formControlName=\"address\" [invalid]=\"submitted && f.address.errors\"\n                            [placeholder]=\"'Enter Address'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.token.pristine && f.token.errors\" [invalidText]=\"'Token is required'\">\n                        Authentication Token\n                        <input ibmText type=\"password\" formControlName=\"token\" [invalid]=\"submitted && f.token.errors\"\n                            [placeholder]=\"'Enter Token'\">\n                    </ibm-label>\n                </fieldset>\n                <div class=\"form-button\">\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\n                        [routerLink]=\"['/dashboard/manageresources']\" routerLinkActive=\"active\">Cancel</button>\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create\n                        Container Platform</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-container-registry/mr-create-container-registry.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-container-registry/mr-create-container-registry.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\n        <div _ngcontent-yve-c2=\"\">\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure Container Registry\n            </div>\n        </div>\n    </header>\n    <div id=\"breadcrumb\"></div>\n</div>\n<div class=\"cb--page-content__container\">\n    <div toastContainer></div>\n    <div class=\"idbp-form-container\">\n        <h4>Create Container Registry Details</h4>\n        <form [formGroup]=\"containerRegistryForm\" (ngSubmit)=\"onContainerRegistrySubmit()\" class=\"signin-form\">\n            <div class=\"forms-gds\">\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\n                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\n                        Name\n                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\n                            [placeholder]=\"'Enter Name'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    <ibm-label [invalid]=\"!f.address.pristine && f.address.errors\"\n                        [invalidText]=\"'Address is required'\">\n                        Address\n                        <input ibmText formControlName=\"address\" [invalid]=\"submitted && f.address.errors\"\n                            [placeholder]=\"'Enter Address'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\">\n                    Authentication Type <br /><br />\n                    <table class=\"table hover\">\n                        <tbody>\n                            <tr *ngFor=\"let auth of this.authData\">\n                                <td><input type=\"checkbox\" formControlName=\"authType\" name=\"authType\" value=\"{{auth}}\"\n                                        (change)=\"onAuthCboxChangeHandler($event)\"> </td>\n                                <td>{{auth}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.authType.errors\">\n                        Authentication Type is required\n                    </div>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\"\n                    *ngIf=\"this.checkedUserType && this.checkedUserValue == 'User Credentials'\">\n                    <ibm-label>\n                        Username\n                        <input ibmText formControlName=\"username\" [placeholder]=\"'Enter Username'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\"\n                    *ngIf=\"this.checkedUserType && this.checkedUserValue  == 'User Credentials'\">\n                    <ibm-label>\n                        Password\n                        <input ibmText type=\"password\" formControlName=\"password\" [placeholder]=\"'Enter Password'\">\n                    </ibm-label>\n                </fieldset>\n\n                <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedTokenType && this.checkedTokenValue == 'Token'\">\n                    <ibm-label>\n                        Token\n                        <input ibmText type=\"password\" formControlName=\"token\" [placeholder]=\"'Enter Token'\">\n                    </ibm-label>\n                </fieldset>\n                <div class=\"form-button\">\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\n                        [routerLink]=\"['/dashboard/manageresources/containerregistry']\"\n                        routerLinkActive=\"active\">Cancel</button>\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create\n                        Container Registry</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-notification/mr-create-notification.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-notification/mr-create-notification.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure Notification\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div toastContainer></div>\r\n    <div class=\"idbp-form-container\">\r\n        <h4>Create Notification</h4>\r\n        <form [formGroup]=\"notificationForm\" (ngSubmit)=\"onNotificationSubmit()\" class=\"signin-form\"\r\n            enctype=\"multipart/form-data\">\r\n            <div class=\"forms-gds\">\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\r\n                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\r\n                        Name\r\n                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\r\n                            [placeholder]=\"'Enter Name'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.port.pristine && f.port.errors\"\r\n                        [invalidText]=\"'* only numbers are allowed'\">\r\n                        Port\r\n                        <input ibmText formControlName=\"port\" [invalid]=\"submitted && f.port.errors\"\r\n                            [placeholder]=\"'Enter Port'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Authentication Type <br /><br />\r\n                    <table class=\"table hover\">\r\n                        <tbody>\r\n                            <tr *ngFor=\"let auth of this.authData\">\r\n                                <td><input type=\"checkbox\" formControlName=\"authType\" name=\"authType\" value=\"{{auth}}\"\r\n                                        (change)=\"onAuthCboxChangeHandler($event)\"> </td>\r\n                                <td>{{auth}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.authType.errors\">\r\n                        Authentication Type is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\"\r\n                    *ngIf=\"this.checkedUserType && this.checkedUserValue == 'User Credentials'\">\r\n                    <ibm-label>\r\n                        Username\r\n                        <input ibmText formControlName=\"username\" [placeholder]=\"'Enter Username'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\"\r\n                    *ngIf=\"this.checkedUserType && this.checkedUserValue  == 'User Credentials'\">\r\n                    <ibm-label>\r\n                        Password\r\n                        <input ibmText type=\"password\" formControlName=\"password\" [placeholder]=\"'Enter Password'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedCertType && this.checkedCertValue == 'Certificate'\">\r\n                    <ibm-label>\r\n                        Certificate\r\n                        <input ibmText formControlName=\"certificate\" [placeholder]=\"'Enter certificate'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    TLS Type <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"tlsType\">\r\n                        <option value=\"\">Choose your Type</option>\r\n                        <option value=\"One-Way\">One-Way</option>\r\n                        <option value=\"Two-Way\">Two-Way</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.tlsType.errors\">\r\n                        TLS Type is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    Purpose <br /><br />\r\n                    <select class=\"custom-select\" formControlName=\"purpose\">\r\n                        <option value=\"\">Choose your Purpose</option>\r\n                        <option value=\"IDBPUI\">IDBPUI</option>\r\n                        <option value=\"ACEFramework\">ACEFramework</option>\r\n                    </select>\r\n                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.purpose.errors\">\r\n                        Purpose is required\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.from.pristine && f.from.errors\" [invalidText]=\"'Email From is required'\">\r\n                        Email From\r\n                        <input ibmText formControlName=\"from\" [invalid]=\"submitted && f.from.errors\"\r\n                            [placeholder]=\"'Enter Email From'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.to.pristine && f.to.errors\" [invalidText]=\"'Email To is required'\">\r\n                        Email To <br />\r\n                        Please separate multiple addresses with comma\r\n                        <input ibmText formControlName=\"to\" [invalid]=\"submitted && f.to.errors\"\r\n                            [placeholder]=\"'Enter Email To'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"bx--fieldset\">\r\n                    <ibm-label [invalid]=\"!f.server.pristine && f.server.errors\"\r\n                        [invalidText]=\"'SMTP Server is required'\">\r\n                        SMTP Server\r\n                        <input ibmText formControlName=\"server\" [invalid]=\"submitted && f.server.errors\"\r\n                            [placeholder]=\"'Enter SMTP Server'\">\r\n                    </ibm-label>\r\n                </fieldset>\r\n                <div class=\"form-button\">\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n                        [routerLink]=\"['/dashboard/manageresources/notification']\"\r\n                        routerLinkActive=\"active\">Cancel</button>\r\n                    <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create\r\n                        Notification</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mrapic/mrapic.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mrapic/mrapic.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\n        <div _ngcontent-yve-c2=\"\">\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure APIC </div>\n        </div>\n    </header>\n    <div id=\"breadcrumb\"></div>\n</div>\n<div class=\"cb--page-content__container\">\n    <div class=\"idbp\">\n        <button ibmButton [routerLink]=\"['/dashboard/manageresources/apic/createapic']\" routerLinkActive=\"active\"\n            style=\"background-color: #3d70b2;\" [disabled]=\"this.apicRoutesMatched\">Create</button>\n    </div>\n    <div>\n        <table class=\"bx--data-table\" *ngIf=\"this.apicTemp\" style=\"width: 50%;\">\n            <thead>\n                <tr>\n                    <th><span class=\"bx--table-header-label\">Name</span></th>\n                    <th><span class=\"bx--table-header-label\">Prov Org</span></th>\n                    <th><span class=\"bx--table-header-label\">Catalog</span></th>\n                    <th><span class=\"bx--table-header-label\">Activities</span></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let apic of this.apicList\">\n                    <td>{{apic.name}}</td>\n                    <td>{{apic.provorg}}</td>\n                    <td>{{apic.catalog}}</td>\n                    <td>\n                        <ibm-overflow-menu>\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#editApicModal\"\n                                (click)=\"onEditApic(apic._id, apic.name, apic.platform, apic.realm, apic.provorg, apic.catalog)\">\n                                Edit\n                            </ibm-overflow-menu-option>\n                            <ibm-overflow-menu-option (click)=\"onDeleteApic(apic._id)\"> Delete\n                            </ibm-overflow-menu-option>\n                        </ibm-overflow-menu>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <table class=\"bx--data-table\" *ngIf=\"!this.apicTemp\">\n            <p> No Records Available</p>\n        </table>\n    </div>\n    <div class=\"modal fade\" id=\"editApicModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"editApicModalLabel\">Edit APIC</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <div toastContainer></div>\n                    <div class=\"idbp-form-container-modal\">\n                        <form [formGroup]=\"editApicForm\" (ngSubmit)=\"onEditApicSubmit()\" class=\"signin-form\">\n                            <div class=\"forms-gds\">\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\n                                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\n                                        Name\n                                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\n                                            value=\"{{this.name}}\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.platform.pristine && f.platform.errors\"\n                                        [invalidText]=\"'Platform Base URL is required'\">\n                                        Platform Base URL\n                                        <input ibmText formControlName=\"platform\"\n                                            [invalid]=\"submitted && f.platform.errors\" value=\"{{this.plat}}\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.realm.pristine && f.realm.errors\"\n                                        [invalidText]=\"'Realm is required'\">\n                                        Realm\n                                        <input ibmText formControlName=\"realm\" [invalid]=\"submitted && f.realm.errors\"\n                                            value=\"{{this.rel}}\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.username.pristine && f.username.errors\"\n                                        [invalidText]=\"'Username is required'\">\n                                        Username\n                                        <input ibmText formControlName=\"username\"\n                                            [invalid]=\"submitted && f.username.errors\" [placeholder]=\"'Enter Username'\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.password.pristine && f.password.errors\"\n                                        [invalidText]=\"'Password is required'\">\n                                        Password\n                                        <input ibmText type=\"password\" formControlName=\"password\"\n                                            [invalid]=\"submitted && f.password.errors\" [placeholder]=\"'Enter Password'\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.pOrg.pristine && f.pOrg.errors\"\n                                        [invalidText]=\"'Prov Organization is required'\">\n                                        Prov Organization\n                                        <input ibmText formControlName=\"pOrg\" [invalid]=\"submitted && f.pOrg.errors\"\n                                            value=\"{{this.prov}}\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.catalog.pristine && f.catalog.errors\"\n                                        [invalidText]=\"'Catalog Name is required'\">\n                                        Catalog Name\n                                        <input ibmText formControlName=\"catalog\"\n                                            [invalid]=\"submitted && f.catalog.errors\" value=\"{{this.cat}}\">\n                                    </ibm-label>\n                                </fieldset>\n                            </div>\n                            <div class=\"modal-footer-button\">\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\">Update</button>\n                            </div>\n                        </form>\n                    </div>\n                    <!--close of idbp-form-container-modal div-->\n                </div>\n                <!--close of modal-body div-->\n            </div>\n            <!--close of modal-content div-->\n        </div>\n        <!--close of modal-dialog div-->\n    </div>\n    <!--close of modal fade div-->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mrcontainer-registry/mrcontainer-registry.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mrcontainer-registry/mrcontainer-registry.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\n        <div _ngcontent-yve-c2=\"\">\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure Container Registry\n            </div>\n        </div>\n    </header>\n    <div id=\"breadcrumb\"></div>\n</div>\n<div class=\"cb--page-content__container\">\n    <div class=\"idbp\">\n        <button ibmButton [routerLink]=\"['/dashboard/manageresources/containerregistry/createcontainerregistry']\"\n            routerLinkActive=\"active\" style=\"background-color: #3d70b2;\"\n            [disabled]=\"this.cRegistryRoutesMatched\">Create</button>\n    </div>\n    <div>\n        <table class=\"bx--data-table\" *ngIf=\"this.containerRegistryTemp\" style=\"width: 30%;\">\n            <thead>\n                <tr>\n                    <th><span class=\"bx--table-header-label\">Name</span></th>\n                    <th><span class=\"bx--table-header-label\">Authentication Type</span></th>\n                    <th><span class=\"bx--table-header-label\">Activities</span></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let registry of this.containerRegistryList\">\n                    <td>{{registry.name}}</td>\n                    <td>{{registry.authType}}</td>\n                    <td>\n                        <ibm-overflow-menu>\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#editContainerRegistryModal\"\n                                (click)=\"onEditContainerRegistry(registry._id, registry.name, registry.address)\">\n                                Edit\n                            </ibm-overflow-menu-option>\n                            <ibm-overflow-menu-option (click)=\"onDeleteContainerRegistry(registry._id)\"> Delete\n                            </ibm-overflow-menu-option>\n                        </ibm-overflow-menu>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <table class=\"bx--data-table\" *ngIf=\"!this.containerRegistryTemp\">\n            <p> No Records Available</p>\n        </table>\n    </div>\n    <div class=\"modal fade\" id=\"editContainerRegistryModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"editContainerRegistryModalLabel\">Edit Container Registry</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <div toastContainer></div>\n                    <div class=\"idbp-form-container-modal\">\n                        <form [formGroup]=\"editContainerRegistryForm\" (ngSubmit)=\"onEditContainerRegistrySubmit()\"\n                            class=\"signin-form\">\n                            <div class=\"forms-gds\">\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\n                                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\n                                        Name\n                                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\n                                            value=\"{{this.name}}\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\">\n                                    <ibm-label [invalid]=\"!f.address.pristine && f.address.errors\"\n                                        [invalidText]=\"'Address is required'\">\n                                        Address\n                                        <input ibmText formControlName=\"address\"\n                                            [invalid]=\"submitted && f.address.errors\" value=\"{{this.add}}\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\">\n                                    Authentication Type <br /><br />\n                                    <table class=\"table hover\">\n                                        <tbody>\n                                            <tr *ngFor=\"let auth of this.authData\">\n                                                <td><input type=\"checkbox\" formControlName=\"authType\" name=\"authType\"\n                                                        value=\"{{auth}}\" (change)=\"onAuthCboxChangeHandler($event)\">\n                                                </td>\n                                                <td>{{auth}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.authType.errors\">\n                                        Authentication Type is required\n                                    </div>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\"\n                                    *ngIf=\"this.checkedUserType && this.checkedUserValue == 'User Credentials'\">\n                                    <ibm-label>\n                                        Username\n                                        <input ibmText formControlName=\"username\" [placeholder]=\"'Enter Username'\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\"\n                                    *ngIf=\"this.checkedUserType && this.checkedUserValue  == 'User Credentials'\">\n                                    <ibm-label>\n                                        Password\n                                        <input ibmText type=\"password\" formControlName=\"password\"\n                                            [placeholder]=\"'Enter Password'\">\n                                    </ibm-label>\n                                </fieldset>\n\n                                <fieldset class=\"bx--fieldset\"\n                                    *ngIf=\"this.checkedTokenType && this.checkedTokenValue == 'Token'\">\n                                    <ibm-label>\n                                        Token\n                                        <input ibmText type=\"password\" formControlName=\"token\"\n                                            [placeholder]=\"'Enter Token'\">\n                                    </ibm-label>\n                                </fieldset>\n                            </div>\n                            <div class=\"modal-footer-button\">\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\">Update</button>\n                            </div>\n                        </form>\n                    </div>\n                    <!--close of idbp-form-container-modal div-->\n                </div>\n                <!--close of modal-body div-->\n            </div>\n            <!--close of modal-content div-->\n        </div>\n        <!--close of modal-dialog div-->\n    </div>\n    <!--close of modal fade div-->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mrnotification/mrnotification.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mrnotification/mrnotification.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure Notification\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"idbp\">\r\n        <button ibmButton [routerLink]=\"['/dashboard/manageresources/notification/createnotification']\"\r\n            routerLinkActive=\"active\" style=\"background-color: #3d70b2;\"\r\n            [disabled]=\"this.notificationRoutesMatched\">Create</button>\r\n    </div>\r\n    <div>\r\n        <table class=\"bx--data-table\" *ngIf=\"this.notificationTemp\" style=\"width: 67%;\">\r\n            <thead>\r\n                <tr>\r\n                    <th><span class=\"bx--table-header-label\">Name</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Authentication Type</span></th>\r\n                    <th><span class=\"bx--table-header-label\">TLS Type</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Purpose</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Email From</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Email To</span></th>\r\n                    <th><span class=\"bx--table-header-label\">SMTP Server</span></th>\r\n                    <th><span class=\"bx--table-header-label\">Activities</span></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let notification of this.notificationList\">\r\n                    <td>{{notification.name}}</td>\r\n                    <td>{{notification.authType}}</td>\r\n                    <td>{{notification.tlsType}}</td>\r\n                    <td>{{notification.purpose}}</td>\r\n                    <td>{{notification.from}}</td>\r\n                    <td>{{notification.to}}</td>\r\n                    <td>{{notification.server}}</td>\r\n                    <td>\r\n                        <ibm-overflow-menu>\r\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#editNotificationModal\"\r\n                                (click)=\"onEditNotification(notification._id, notification.name, notification.port)\">\r\n                                Edit\r\n                            </ibm-overflow-menu-option>\r\n                            <ibm-overflow-menu-option (click)=\"onDeleteNotification(notification._id)\"> Delete\r\n                            </ibm-overflow-menu-option>\r\n                        </ibm-overflow-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"bx--data-table\" *ngIf=\"!this.notificationTemp\">\r\n            <p> No Records Available</p>\r\n        </table>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"editNotificationModal\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"editNotificationModalLabel\">Edit Notification</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div toastContainer></div>\r\n                    <div class=\"idbp-form-container-modal\">\r\n                        <form [formGroup]=\"editNotificationForm\" (ngSubmit)=\"onEditNotificationSubmit()\"\r\n                            class=\"signin-form\">\r\n                            <div class=\"forms-gds\">\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.name.pristine && f.name.errors\"\r\n                                        [invalidText]=\"'* only starting with small letters and hyphens are allowed'\">\r\n                                        Name\r\n                                        <input ibmText formControlName=\"name\" [invalid]=\"submitted && f.name.errors\"\r\n                                            value=\"{{this.name}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    <ibm-label [invalid]=\"!f.port.pristine && f.port.errors\"\r\n                                        [invalidText]=\"'* only numbers are allowed'\">\r\n                                        Port\r\n                                        <input ibmText formControlName=\"port\" [invalid]=\"submitted && f.port.errors\"\r\n                                            value=\"{{this.port}}\">\r\n                                    </ibm-label>\r\n                                </fieldset>\r\n\r\n                                <fieldset class=\"bx--fieldset\">\r\n                                    Purpose <br /><br />\r\n                                    <select class=\"custom-select\" formControlName=\"purpose\">\r\n                                        <option value=\"\">Choose your Purpose</option>\r\n                                        <option value=\"IDBPUI\">IDBPUI</option>\r\n                                        <option value=\"ACEFramework\">ACEFramework</option>\r\n                                    </select>\r\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.purpose.errors\">\r\n                                        Purpose is required\r\n                                    </div>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div class=\"modal-footer-button\">\r\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\r\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\r\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\">Update</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!--close of idbp-form-container-modal div-->\r\n                </div>\r\n                <!--close of modal-body div-->\r\n            </div>\r\n            <!--close of modal-content div-->\r\n        </div>\r\n        <!--close of modal-dialog div-->\r\n    </div>\r\n    <!--close of modal fade div-->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-banking/open-banking.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-banking/open-banking.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\n        <div _ngcontent-yve-c2=\"\">\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\">{{this.packParam}}</div>\n        </div>\n    </header>\n    <div id=\"breadcrumb\"></div>\n</div>\n<div class=\"cb--page-content__container\">\n    <div toastContainer></div>\n    <div class=\"open-banking\">\n        <div class=\"common-actions\">\n            <div class=\"tiles\" *ngFor=\"let bs of this.bsArray\">\n                <ibm-tile>\n                    <svg id=\"_Layer_\" width=\"25\" height=\"30\" data-name=\" Layer \" xmlns=\"http://www.w3.org/2000/svg\"\n                        viewBox=\"0 0 24 21.60004\">\n                        <path fill=\"#8cd211\"\n                            d=\"M9.44856,2.2H1V23.8H13V5.75142A3.55147,3.55147,0,0,0,9.44856,2.2ZM10.6,18.30909H3.4V17.5818h7.2Zm0-2.4H3.4v-.72729h7.2Zm0-2.40007H3.4v-.72729h7.2Zm0-2.4H3.4v-.72729h7.2Zm0-2.40007H3.4V7.98175h7.2Z\"\n                            transform=\"translate(-1 -2.19998)\"></path>\n                        <path fill=\"#00b4a0\"\n                            d=\"M16.55155,2.2a3.55157,3.55157,0,0,0-3.55161,3.55144V23.8H25V2.2ZM22.6,18.30909H15.4V17.5818h7.2Zm0-2.4H15.4v-.72729h7.2Zm0-2.40007H15.4v-.72729h7.2Zm0-2.4H15.4v-.72729h7.2Zm0-2.40007H15.4V7.98175h7.2Z\"\n                            transform=\"translate(-1 -2.19998)\"></path>\n                    </svg>\n\n                    <div class=\"overflow-menu\" style=\"margin-left: 80px; margin-top: -30px;\">\n                        <ibm-overflow-menu>\n                            <ibm-overflow-menu-option data-toggle=\"modal\" data-target=\"#servicesModal\"\n                                (click)=\"onDeployServices(bs.name)\"> Deploy\n                            </ibm-overflow-menu-option>\n                        </ibm-overflow-menu>\n                    </div>\n\n                    <div class=\"bank-std-data\">\n                        <p>{{bs.name}}</p>\n                        <p>{{bs.detail}}</p>\n                    </div>\n                </ibm-tile>\n            </div>\n        </div>\n        <!--close of common-actions div-->\n    </div>\n    <!--close of open-banking div-->\n    <div class=\"modal fade\" id=\"servicesModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"servicesModalLabel\">Deploy Services</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddExpenseModal>&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <div toastContainer></div>\n                    <div class=\"idbp-form-container-modal\">\n                        <form [formGroup]=\"servicesEnvForm\" (ngSubmit)=\"onDeploySubmit()\" class=\"signin-form\">\n                            <div class=\"forms-gds\">\n                                <fieldset class=\"bx--fieldset\" *ngIf=\"this.servicesClicked == 'Payments'\">\n                                    <ibm-label [invalid]=\"!f.token.pristine && f.token.errors\"\n                                        [invalidText]=\"'Token is required'\">\n                                        Openshift Token\n                                        <input ibmText type=\"password\" formControlName=\"token\"\n                                            [invalid]=\"submitted && f.token.errors\" [placeholder]=\"'Enter Token'\">\n                                    </ibm-label>\n                                </fieldset>\n                                <fieldset class=\"bx--fieldset\" *ngIf=\"this.servicesClicked == 'Payments'\">\n                                    <select class=\"custom-select\" formControlName=\"payEnvs\">\n                                        <option value=\"\">Choose your Environment</option>\n                                        <option *ngFor=\"let payment of this.paymentsServiceEnvs\"\n                                            [ngValue]=\"payment.name\">\n                                            {{payment.name}}</option>\n                                    </select>\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.payEnvs.errors\">\n                                        Environment is required for deployment\n                                    </div>\n                                </fieldset>\n                                <fieldset class=\"bx--fieldset\" *ngIf=\"this.servicesClicked == 'Accounts'\">\n                                    <ibm-label [invalid]=\"!f.token.pristine && f.token.errors\"\n                                        [invalidText]=\"'Token is required'\">\n                                        Openshift Token\n                                        <input ibmText type=\"password\" formControlName=\"token\"\n                                            [invalid]=\"submitted && f.token.errors\" [placeholder]=\"'Enter Token'\">\n                                    </ibm-label>\n                                </fieldset>\n                                <fieldset class=\"bx--fieldset\" *ngIf=\"this.servicesClicked == 'Accounts'\">\n                                    <select class=\"custom-select\" formControlName=\"accEnvs\">\n                                        <option value=\"\">Choose your Environment</option>\n                                        <option *ngFor=\"let account of this.accountsServiceEnvs\"\n                                            [ngValue]=\"account.name\">\n                                            {{account.name}}</option>\n                                    </select>\n                                    <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.accEnvs.errors\">\n                                        Environment is required for deployment\n                                    </div>\n                                </fieldset>\n                            </div>\n                            <div class=\"modal-footer-button\">\n                                <button class=\"bx--btn bx--btn--secondary\" type=\"button\" data-dismiss=\"modal\"\n                                    id=\"cancel\" #closeAddExpenseModal>Cancel</button>\n                                <button class=\"bx--btn bx--btn--primary\" type=\"submit\" id=\"submit\"\n                                    [disabled]=\"this.deployButtonClicked\">Deploy</button>\n                            </div>\n                        </form>\n                    </div>\n                    <!--close of idbp-form-container-modal div-->\n                </div>\n                <!--close of modal-body div-->\n            </div>\n            <!--close of modal-content div-->\n        </div>\n        <!--close of modal-dialog div-->\n    </div>\n    <!--close of modal fade div-->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n  <div class=\"login-left login-col\">\r\n    <div class=\"ibm-logo\"></div>\r\n    <div class=\"product-title\">\r\n      <h4>IBM Digital Banking Platform</h4>\r\n    </div>\r\n    <div toastContainer></div>\r\n    <div class=\"login-form\">\r\n      <fieldset class=\"bx--fieldset\">\r\n        <h4>Create Account</h4>\r\n      </fieldset>\r\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterSubmit()\" class=\"signin-form\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.firstName.pristine && f.firstName.errors\" [invalidText]=\"ctrl.firstName.invalidText\">\r\n            First Name\r\n            <input ibmText formControlName=\"firstName\" [invalid]=\"!f.firstName.pristine && f.firstName.errors\"\r\n              [disabled]=\"ctrl.firstName.disabled\" [placeholder]=\"'Enter First Name'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.lastName.pristine && f.lastName.errors\" [invalidText]=\"ctrl.lastName.invalidText\">\r\n            Last Name\r\n            <input ibmText formControlName=\"lastName\" [invalid]=\"!f.lastName.pristine && f.lastName.errors\"\r\n              [disabled]=\"ctrl.lastName.disabled\" [placeholder]=\"'Enter Last Name'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label>\r\n            Email\r\n            <input ibmText formControlName=\"email\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.password.pristine && f.password.errors\" [invalidText]=\"ctrl.password.invalidText\">\r\n            Password\r\n            <input ibmText type=\"password\" formControlName=\"password\"\r\n              [invalid]=\"!f.password.pristine && f.password.errors\" [disabled]=\"ctrl.password.disabled\"\r\n              [placeholder]=\"'Enter Password'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <div class=\"button-section\">\r\n          <button id=\"submit\" [ibmButton]=\"'primary'\" [size]=\"'normal'\" type=\"submit\">\r\n            Create Account\r\n            <svg class=\"bx--btn__icon\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path d=\"M18 6l-1.4 1.4 7.5 7.6H3v2h21.1l-7.5 7.6L18 26l10-10z\"></path>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"login-right login-col\"></div>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rule-engine-accelerator/rule-engine-accelerator.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rule-engine-accelerator/rule-engine-accelerator.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n  <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n    <div _ngcontent-yve-c2=\"\">\r\n      <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\">Rule Management Form </div>\r\n    </div>\r\n  </header>\r\n  <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n  <div toastContainer></div>\r\n  <div class=\"idbp-form-container\">\r\n    <h4>Rule Management</h4>\r\n    <h5>Please fill in required details.<br> As per inputs rules will be generated in the target enviornment</h5>\r\n    <br /><br />\r\n    <form [formGroup]=\"ruleengineacceleratorForm\" (ngSubmit)=\"onruleengineSubmit()\" class=\"signin-form\">\r\n      <div class=\"forms-gds\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.eName.pristine && f.eName.errors\" [invalidText]=\"'Environment Name is required'\">\r\n            Environment Name\r\n            <input ibmText formControlName=\"eName\" [invalid]=\"submitted && f.eName.errors\"\r\n              [placeholder]=\"'Enter Environment Name'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          Rule Type <br /><br />\r\n          <select class=\"custom-select\" formControlName=\"ruleType\" (change)=\"onRuleChangeHandler($event)\">\r\n            <option value=\"\">Choose your Rule Type</option>\r\n            <option value=\"All\">All</option>\r\n            <option value=\"Service Name\">Service Name</option>\r\n            <option value=\"Partner ID\">Partner ID</option>\r\n          </select>\r\n          <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.ruleType.errors\">\r\n            Rule Type is required\r\n          </div>\r\n        </fieldset>\r\n        <hr style=\"height:1.5px;\">\r\n        <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedRuleTypeValue == 'Service Name'\">\r\n          <ibm-label>\r\n            Service Name\r\n            <input ibmText formControlName=\"sName\" [placeholder]=\"'Enter Service Name'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedRuleTypeValue == 'Partner ID'\">\r\n          <ibm-label>\r\n            Partner ID\r\n            <input ibmText formControlName=\"pID\" [placeholder]=\"'Enter Partner ID'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n\r\n        <h4>Per Transaction Limit</h4>\r\n        <fieldset class=\"bx--fieldset\">\r\n          Currency Type <br /><br />\r\n          <select class=\"custom-select\" formControlName=\"currencyType\">\r\n            <option value=\"\">Choose your currency</option>\r\n            <option value=\"USD\">USD</option>\r\n            <option value=\"INR\">INR</option>\r\n            <option value=\"Euros\">Euros</option>\r\n          </select>\r\n          <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.currencyType.errors\">\r\n            Currency is required\r\n          </div>\r\n        </fieldset>\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.minLimit.pristine && f.minLimit.errors\" [invalidText]=\"'Minimum Limit is required'\">\r\n            Minimum Limit\r\n            <input ibmText formControlName=\"minLimit\" [invalid]=\"submitted && f.minLimit.errors\"\r\n              [placeholder]=\"'Enter Minimum Limit'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.maxLimit.pristine && f.maxLimit.errors\" [invalidText]=\"'Maximum Limit is required'\">\r\n            Maximum Limit\r\n            <input ibmText formControlName=\"maxLimit\" [invalid]=\"submitted && f.maxLimit.errors\"\r\n              [placeholder]=\"'Enter Maximum Limit'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <hr style=\"height:1.5px;\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <h4>Frequency Limit</h4>\r\n          <ibm-label [invalid]=\"!f.limit.pristine && f.limit.errors\" [invalidText]=\"'Limit is required'\">\r\n            Limit\r\n            <input ibmText formControlName=\"limit\" [invalid]=\"submitted && f.limit.errors\"\r\n              [placeholder]=\"'Enter Limit'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          Frequency Type <br /><br />\r\n          <select class=\"custom-select\" formControlName=\"frequencyType\">\r\n            <option value=\"\">Frequency Type</option>\r\n            <option value=\"Daily\">Daily</option>\r\n            <option value=\"Monthly\">Monthly</option>\r\n            <option value=\"Quarterly\">Quarterly</option>\r\n            <option value=\"Half\">Half-Yearly</option>\r\n          </select>\r\n          <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.frequencyType.errors\">\r\n            Frequency Type is required\r\n          </div>\r\n        </fieldset>\r\n        <hr style=\"height:1.5px;\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <h4>Time Limit</h4>\r\n          <ibm-label [invalid]=\"!f.start.pristine && f.start.errors\" [invalidText]=\"'Start Time is required'\">\r\n            Start Time\r\n            <input ibmText formControlName=\"start\" [invalid]=\"submitted && f.start.errors\"\r\n              [placeholder]=\"'Enter Start Time'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.end.pristine && f.end.errors\" [invalidText]=\"'End Time is required'\">\r\n            End Time\r\n            <input ibmText formControlName=\"end\" [invalid]=\"submitted && f.end.errors\" [placeholder]=\"'Enter End Time'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <hr style=\"height:1.5px;\">\r\n        <h4>Compliance</h4>\r\n        <fieldset class=\"bx--fieldset\">\r\n          Action <br /><br />\r\n          <select class=\"custom-select\" formControlName=\"actionType\">\r\n            <option value=\"\">Choose your action</option>\r\n            <option value=\"Reject\">Reject</option>\r\n            <option value=\"Warning\">Warning</option>\r\n            <option value=\"Alert\">Alert</option>\r\n          </select>\r\n          <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.actionType.errors\">\r\n            Action is required\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.Compliance.pristine && f.Compliance.errors\" [invalidText]=\"'Compliance is required'\">\r\n            Compliance\r\n            <input ibmText formControlName=\"Compliance\" [invalid]=\"submitted && f.Compliance.errors\"\r\n              [placeholder]=\"'Compliance'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.Value.pristine && f.Value.errors\" [invalidText]=\"'Value is required'\">\r\n            Value\r\n            <input ibmText formControlName=\"Value\" [invalid]=\"submitted && f.Value.errors\"\r\n              [placeholder]=\"'Value Limit'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <hr style=\"height:1.5px;\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          GDPR Protection\r\n          <ibm-radio-group aria-label=\"radiogroup\" formControlName=\"gdpr\">\r\n            <ibm-radio value=\"Yes\">\r\n              Yes\r\n            </ibm-radio>\r\n            <ibm-radio value=\"No\">\r\n              No\r\n            </ibm-radio>\r\n          </ibm-radio-group>\r\n        </fieldset>\r\n        <div class=\"form-button\">\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n            [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Cancel</button>\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ibm-sidenav *ngIf=\"authService.loggedIn\">\r\n    <a class=\"main-nav__item\" id=\"think\" [routerLink]=\"['/dashboard']\">\r\n        <i class=\"icon svg object home_18\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 14.41835\">\r\n                <defs></defs>\r\n                <path\r\n                    d=\"M14.486 8.486l-.407-3.281a.421.421 0 1 0-.408-.737L11.103 2.38c.001-.006.006-.01.007-.016a.422.422 0 0 0-.746-.359l-3.201-.841a.417.417 0 0 0-.04-.144.422.422 0 0 0-.796.231L3.38 2.764a.403.403 0 0 0-.072-.058.422.422 0 0 0-.516.648L1.258 6.292a.396.396 0 0 0-.064-.008.422.422 0 0 0-.103.821l.218 3.299a.422.422 0 0 0 .211.8.401.401 0 0 0 .086-.023l2.056 2.602a.422.422 0 0 0 .628.54.416.416 0 0 0 .098-.116l4.454.677a.422.422 0 0 0 .827-.034.415.415 0 0 0-.007-.138l2.842-1.737a.405.405 0 0 0 .08.055.422.422 0 0 0 .467-.683l1.317-3.039a.401.401 0 0 0 .062.005.422.422 0 0 0 .056-.826zm-.496.554l-1.524 1.336.43-3.065.014-.006 1.113 1.37a.414.414 0 0 0-.065.27.406.406 0 0 0 .032.095zm-1.57 3.356l-1.695-.446-.002-.017 1.29-.808a.414.414 0 0 0 .186.074l.302 1.112a.408.408 0 0 0-.082.085zm-3.174 1.976a.41.41 0 0 0-.152.03l-1.84-1.821a.42.42 0 0 0 .016-.053l2.682-.323a.407.407 0 0 0 .05.083.4.4 0 0 0 .041.031zm-7.241-3.594l3.528-1.24a.422.422 0 0 0 .289.145l.774 2.43a.405.405 0 0 0-.049.056zm-.386-4.192L4.647 4.28 2.89 6.907a.41.41 0 0 0-.12-.016.42.42 0 0 0-.282.138l-.846-.328.003-.024a.406.406 0 0 0-.025-.091zm8.742-4.09a.421.421 0 0 0 .039.045L9.046 5.513a.413.413 0 0 0-.253.074L5.713 3.66v-.022zm.356.177l1.763 3.95a.407.407 0 0 0-.04.038L9.45 5.88a.41.41 0 0 0-.075-.204.405.405 0 0 0-.04-.037l1.352-2.968.03.002zM7.274 12.21l2.06-2.197a.422.422 0 0 0 .127.029l.58 1.643-.011.007a.41.41 0 0 0-.116.2zM6.122 9.587a.42.42 0 0 0 .108-.136l2.845.302a.434.434 0 0 0 .026.049l-2.104 2.242a.414.414 0 0 0-.1-.027zm-2.974-2.5l2.038-3.044.467 4.858a.426.426 0 0 0-.043.023L3.206 7.386a.406.406 0 0 0 .013-.101.411.411 0 0 0-.071-.197zm9.213-.121a.417.417 0 0 0 .032.101L9.688 9.264a.407.407 0 0 0-.101-.043L9.245 6.29a.393.393 0 0 0 .046-.022.41.41 0 0 0 .074-.083zm-6.105 2.17v-.001a.387.387 0 0 0-.022-.04l2.652-2.78a.423.423 0 0 0 .047.016l.34 2.928a.404.404 0 0 0-.082.05.42.42 0 0 0-.095.13zM8.66 6.098L6.008 8.876a.43.43 0 0 0-.042-.012l-.47-4.908a.412.412 0 0 0 .049-.03l3.08 1.928a.415.415 0 0 0 .034.243zm1.895 5.57a.418.418 0 0 0-.213-.083l-.583-1.65h.001c.006-.005.008-.012.013-.017l2.055.87a.42.42 0 0 0 .011.075zm1.593-1.288a.412.412 0 0 0-.185.092c-.008.006-.01.016-.017.022l-2.05-.867a.423.423 0 0 0-.016-.11l2.695-2.19zM2.808 7.732c.006 0 .012.003.018.002a.41.41 0 0 0 .21-.082l2.406 1.54a.395.395 0 0 0-.008.046l-3.627 1.275a.416.416 0 0 0-.034-.044zm10.34-.634a.402.402 0 0 0 .039-.079.415.415 0 0 0-.077-.358l.67-1.302.369 2.971zm.41-1.995l-.72 1.398a.421.421 0 0 0-.07-.004L11.119 2.8l2.354 1.913a.416.416 0 0 0 .086.39zM5.643 3.329l1.043-1.705a.388.388 0 0 0 .394-.156l2.97.78zm-.275-.154a.419.419 0 0 0-.413.171l-1.394-.32 2.766-1.42zm-1.92.148l1.436.33a.416.416 0 0 0 .013.041L1.7 6.128 3.072 3.5a.417.417 0 0 0 .377-.177zM1.527 6.994l.852.331-.002.016a.42.42 0 0 0 .137.28L1.6 10.035l-.195-2.95a.42.42 0 0 0 .12-.09zm4.925 5.476l.002.017-2.16 1.186a.416.416 0 0 0-.383-.086l-1.977-2.501zm.156.292a.415.415 0 0 0 .386.077.396.396 0 0 0 .047-.026l1.765 1.746-4.285-.651zm3.736-.343a.414.414 0 0 0 .255-.102.402.402 0 0 0 .046-.062l1.697.446v.004l-2.766 1.691zm2.16-1.307c.008-.007.019-.009.027-.016a.422.422 0 0 0 .113-.456l1.296-1.136-1.152 2.66z\"\r\n                    class=\"cls-1\" transform=\"translate(-.8 -.79)\">\r\n                </path>\r\n            </svg>\r\n        </i>\r\n        <span>Dashboard</span>\r\n    </a>\r\n    <a class=\"main-nav__item\" id=\"develop\" [routerLink]=\"['/dashboard/settings']\">\r\n        <i class=\"icon svg object drafts_18\">\r\n            <svg x=\"0px\" y=\"0px\" width=\"60\" height=\"64\" viewBox=\"0 0 80 86\">\r\n                <path class=\"st0\" fill=\"#009BEF\"\r\n                    d=\"M45.8,40.3c-0.6,0.9-1.4,1.7-2.1,2.5l2.1,8.6l-10,4.3l-5-6.8c-2.5,0.3-5-0.1-7.4-0.8l-5.6,4.9l-9-6.3l2.7-7 c-1.5-2.1-2.8-4.1-3.4-6.5l-8-2.4L0.7,20l8.9-1c0.5-1,1-2,1.7-2.9c0.6-0.9,1.4-1.8,2.1-2.6l-2.1-8.7l10.1-4.4l5.1,6.6 c2.5-0.3,5.2-0.3,7.7,0.4l6.1-5.7l9,6.3l-3.2,7.7c1.5,2.1,2.3,4.8,2.9,7.3l8,2.4l-0.7,10.9l-8.9,1C46.9,38.5,46.4,39.4,45.8,40.3z M23.2,35.9c4.7,3.3,11.1,2.1,14.4-2.5c3.3-4.7,2.1-11.1-2.5-14.4c-4.7-3.3-11.1-2.1-14.4,2.5S18.6,32.7,23.2,35.9z\">\r\n                </path>\r\n                <g>\r\n                    <path class=\"st1\" fill=\"#5A6872\"\r\n                        d=\"M47.8,69.3l1.1-3L45.4,64l-2.3,2.3c-1-0.2-2-0.2-2.9,0l-2-2.5l-3.8,1.8l0.9,3.3c-0.3,0.3-0.5,0.6-0.8,1 c-0.2,0.4-0.4,0.7-0.6,1.1l-3.4,0.5l-0.1,4.2l3.1,0.8c0.3,0.9,0.8,1.7,1.4,2.5L34,81.6l3.5,2.3l2.1-2c1,0.2,1.9,0.3,2.9,0.2l2,2.5 l3.8-1.8l-0.9-3.3c0.3-0.3,0.5-0.6,0.8-1c0.2-0.4,0.4-0.7,0.6-1.1L52,77l0.1-4.2L49,72C48.7,71.1,48.4,70.1,47.8,69.3z M44.8,76.1 c-1.2,1.8-3.6,2.3-5.4,1.2c-1.8-1.2-2.3-3.6-1.2-5.4c1.2-1.8,3.6-2.3,5.4-1.2C45.5,71.8,46,74.3,44.8,76.1z\">\r\n                    </path>\r\n                    <path class=\"st1\" fill=\"#5A6872\"\r\n                        d=\"M75.3,51.1c-0.3-1.2-0.7-2.6-1.5-3.7l1.7-3.9l-4.6-3.2l-3.1,2.9c-1.3-0.3-2.6-0.3-3.9-0.2l-2.6-3.4l-5.1,2.3 l1.1,4.4c-0.4,0.4-0.8,0.8-1.1,1.3c-0.3,0.5-0.6,1-0.8,1.5l-4.5,0.5l-0.4,5.6l4.1,1.2c0.3,1.2,1,2.3,1.7,3.3l-1.4,3.6l4.6,3.2 l2.9-2.5c1.3,0.3,2.5,0.5,3.8,0.4l2.5,3.5l5.1-2.2l-1.1-4.4c0.4-0.4,0.7-0.8,1.1-1.3c0.3-0.5,0.6-1,0.8-1.5l4.5-0.5l0.4-5.6 L75.3,51.1z M69.5,56.3c-1.7,2.4-4.9,3-7.3,1.3c-2.4-1.7-3-4.9-1.3-7.3c1.7-2.4,4.9-3,7.3-1.3C70.6,50.7,71.2,53.9,69.5,56.3z\">\r\n                    </path>\r\n                </g>\r\n            </svg>\r\n        </i>\r\n        <span>Settings</span>\r\n    </a>\r\n    <a class=\"main-nav__item\" id=\"configuration\" [routerLink]=\"['/dashboard/cbs']\">\r\n        <i class=\"icon svg object resources_18\">\r\n            <svg x=\"0px\" y=\"0px\" width=\"64\" height=\"64\" viewBox=\"0 0 75 75\">\r\n                <polygon class=\"st0\" fill=\"#5A6872\" points=\"48,19.1 48,0 18.9,0 0,19.5 0,67 48,67 48,44.4 46,46.4 46,65 2,65 2,20.3 2.3,20 20,20 20,2 46,2\r\n                                        46,21.1 \"></polygon>\r\n                <g>\r\n                    <polygon class=\"st1\" fill=\"#009BEF\" points=\"57.6,13 53,17.5 62.1,26.5 66.7,22\"></polygon>\r\n                    <polygon class=\"st1\" fill=\"#009BEF\" points=\"33.6,37 29,50.7 42.6,46 60.9,28 51.8,19\"></polygon>\r\n                </g>\r\n            </svg>\r\n        </i>\r\n        <span>CBS</span>\r\n    </a>\r\n    <a class=\"main-nav__item\" id=\"help\" [routerLink]=\"['/dashboard/manageresources']\">\r\n        <i class=\"icon svg object help_18\">\r\n            <svg x=\"0px\" y=\"0px\" width=\"64\" height=\"64\" viewBox=\"0 0 75 75\">\r\n                <polygon class=\"st0\" fill=\"#5A6872\" points=\"48,19.1 48,0 18.9,0 0,19.5 0,67 48,67 48,44.4 46,46.4 46,65 2,65 2,20.3 2.3,20 20,20 20,2 46,2\r\n                        46,21.1 \"></polygon>\r\n                <g>\r\n                    <polygon class=\"st1\" fill=\"#009BEF\" points=\"57.6,13 53,17.5 62.1,26.5 66.7,22\"></polygon>\r\n                    <polygon class=\"st1\" fill=\"#009BEF\" points=\"33.6,37 29,50.7 42.6,46 60.9,28 51.8,19\">\r\n                    </polygon>\r\n                </g>\r\n            </svg>\r\n        </i>\r\n        <span>Resources</span>\r\n    </a>\r\n    <a class=\"main-nav__item\" id=\"manage\" [routerLink]=\"['/dashboard/manageenvironment']\">\r\n        <i class=\"icon svg object dashboard_18\">\r\n            <svg x=\"0px\" y=\"0px\" viewBox=\"-197 199 64 64\" width=\"64\" height=\"64\">\r\n                <g id=\"Layer_2\">\r\n                    <rect x=\"-197\" y=\"199\" fill=\"none\" width=\"64\" height=\"64\">\r\n                    </rect>\r\n                </g>\r\n                <g id=\"Layer_1\">\r\n                    <g>\r\n                        <rect id=\"XMLID_9_\" x=\"-184.4\" y=\"231.4\" fill=\"#009BEF\" width=\"17.2\" height=\"18.8\"></rect>\r\n                        <g>\r\n                            <polygon fill=\"#5B6973\"\r\n                                points=\"-145.6,222.7 -154.5,212.4 -155.1,211.8 -166.1,221.3 -156.5,232.2\">\r\n                            </polygon>\r\n                            <rect x=\"-184.4\" y=\"215.3\" fill=\"#5B6973\" width=\"17.2\" height=\"14\"></rect>\r\n                            <path class=\"st2\" d=\"M-165.1,250.2h16.7v-16.1h-16.7V250.2z M-164,235.2h14.5v14H-164V235.2z\">\r\n                            </path>\r\n                        </g>\r\n                    </g>\r\n                </g>\r\n            </svg>\r\n        </i>\r\n        <span>Environment</span>\r\n    </a>\r\n    <a class=\"main-nav__item\" id=\"configuration\" [routerLink]=\"['/dashboard/manageservices']\">\r\n        <i class=\"icon svg object resources_18\">\r\n            <svg x=\"0px\" y=\"0px\" viewBox=\"-197 199 64 64\" width=\"64\" height=\"64\">\r\n                <g id=\"Layer_2\">\r\n                    <rect x=\"-197\" y=\"199\" fill=\"none\" width=\"64\" height=\"64\"></rect>\r\n                </g>\r\n                <g id=\"Layer_1\">\r\n                    <g>\r\n                        <path fill=\"#009BEF\"\r\n                            d=\"M-175.9,222.7l10.9-5.4l10.9,5.3L-165,228L-175.9,222.7z M-165,214.4l-16.9,8.3l16.9,8.3l16.9-8.3L-165,214.4 z\">\r\n                        </path>\r\n                        <g>\r\n                            <polygon id=\"XMLID_2_\" fill=\"#65737C\"\r\n                                points=\"-148.1,230.9 -153.3,228.4 -165,234.2 -176.7,228.4 -181.8,230.9 -165,239.3\">\r\n                            </polygon>\r\n                            <polygon id=\"XMLID_1_\" fill=\"#65737C\"\r\n                                points=\"-165,242.6 -176.8,236.7 -181.9,239.3 -165,247.6 -148.1,239.3 -153.2,236.7 \">\r\n                            </polygon>\r\n                        </g>\r\n                    </g>\r\n                </g>\r\n            </svg>\r\n        </i>\r\n        <span>Services</span>\r\n    </a>\r\n    <a class=\"main-nav__item\" id=\"configuration\" href=\"https://developer.ibm.com/apiconnect/getting-started/\"\r\n        target=\"_blank\">\r\n        <i class=\"icon svg object resources_18\">\r\n            <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\" width=\"42\"\r\n                height=\"68\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" style=\"will-change: transform;\">\r\n                <path d=\"M21 16h2v2h-2zM9 16h8v2H9zm12-4h2v2h-2zM9 12h8v2H9zm0-4h14v2H9z\">\r\n                </path>\r\n                <path\r\n                    d=\"M25 2H7a2.002 2.002 0 0 0-2 2v25a1 1 0 0 0 1 1h1a.999.999 0 0 0 .8-.4l2.2-2.933 2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933 2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933 2.2 2.933a1 1 0 0 0 .8.4h1a1 1 0 0 0 1-1V4a2.002 2.002 0 0 0-2-2zm0 25.333L22.8 24.4a1.035 1.035 0 0 0-1.6 0L19 27.333 16.8 24.4a1.035 1.035 0 0 0-1.6 0L13 27.333 10.8 24.4a1.035 1.035 0 0 0-1.6 0L7 27.333V4h18z\">\r\n                </path>\r\n            </svg>\r\n        </i>\r\n        <span>Connect</span>\r\n    </a>\r\n    <a class=\"main-nav__item\" id=\"help\" [routerLink]=\"['/dashboard']\">\r\n        <i class=\"icon svg object help_18\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\">\r\n                <defs></defs>\r\n                <g>\r\n                    <path d=\"M0 0h18v18H0z\" class=\"cls-1\"></path>\r\n                    <path\r\n                        d=\"M8 12h2v2H8zm.9-7.4C7.2 4.6 6 5.3 6 7h2c0-.7.25-1 1-1s1 .38 1 1.1c.1 1.32-1.91 1.35-2 2.9v1h2v-1c.2-1.5 2-.8 1.9-3.1 0-.9-.7-2.3-3-2.3zM9 1a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7z\"\r\n                        class=\"cls-2\"></path>\r\n                </g>\r\n            </svg>\r\n        </i>\r\n        <span>Help</span>\r\n    </a>\r\n</ibm-sidenav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/smtp-configure/smtp-configure.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/smtp-configure/smtp-configure.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n  <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n    <div _ngcontent-yve-c2=\"\">\r\n      <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Create & Configure SMTP Server Options\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n  <div toastContainer></div>\r\n  <div class=\"idbp-form-container\">\r\n    <h4>Create SMTP Configure</h4>\r\n    <form [formGroup]=\"serverForm\" (ngSubmit)=\"onServerSubmit()\" class=\"signin-form\">\r\n      <div class=\"forms-gds\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.serviceName.pristine && f.serviceName.errors\"\r\n            [invalidText]=\"'Service Name is required'\">\r\n            Service Name\r\n            <input ibmText formControlName=\"serviceName\" [invalid]=\"submitted && f.serviceName.errors\"\r\n              [placeholder]=\"'Enter Service Name'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.host.pristine && f.host.errors\" [invalidText]=\"'Host is required'\">\r\n            Host\r\n            <input ibmText formControlName=\"host\" [invalid]=\"submitted && f.host.errors\" [placeholder]=\"'Enter Host'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.port.pristine && f.port.errors\" [invalidText]=\"'* only numbers are allowed'\">\r\n            Port\r\n            <input ibmText formControlName=\"port\" [invalid]=\"submitted && f.port.errors\" [placeholder]=\"'Enter Port'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.secure.pristine && f.secure.errors\" [invalidText]=\"'Secure is required'\">\r\n            Secure\r\n            <input ibmText formControlName=\"secure\" [invalid]=\"submitted && f.secure.errors\"\r\n              [placeholder]=\"'Enter Secure'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.username.pristine && f.username.errors\" [invalidText]=\"'Username is required'\">\r\n            Username\r\n            <input ibmText formControlName=\"username\" [invalid]=\"submitted && f.username.errors\"\r\n              [placeholder]=\"'Enter Username'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-label [invalid]=\"!f.password.pristine && f.password.errors\" [invalidText]=\"'Password is required'\">\r\n            Password\r\n            <input ibmText type=\"password\" formControlName=\"password\" [invalid]=\"submitted && f.password.errors\"\r\n              [placeholder]=\"'Enter Password'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <div class=\"form-button\">\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n            [routerLink]=\"['/dashboard/settings/listsmtpconfigure']\" routerLinkActive=\"active\">Cancel</button>\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Create SMTP</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/token-management-accelerator/token-management-accelerator.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/token-management-accelerator/token-management-accelerator.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n  <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n    <div _ngcontent-yve-c2=\"\">\r\n      <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Token Management Form </div>\r\n    </div>\r\n  </header>\r\n  <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n  <div toastContainer></div>\r\n  <div class=\"idbp-form-container\">\r\n    <h4>Token Management</h4>\r\n    <h5>Please fill in required details. <br /> As per inputs token will be revoked or reactivated</h5>\r\n    <br>\r\n    <form [formGroup]=\"aceacceleratorForm\" (ngSubmit)=\"ontokenmanagementSubmit()\" class=\"signin-form\">\r\n      <div class=\"forms-gds\">\r\n        <fieldset class=\"bx--fieldset\">\r\n          <ibm-radio-group aria-label=\"radiogroup\" formControlName=\"radio\" (change)=\"onRadioChangeHandler($event)\">\r\n            <ibm-radio value=\"Radio 1\">\r\n              Revoke Token\r\n            </ibm-radio>\r\n            <ibm-radio value=\"Radio 2\">\r\n              Reactivate Token\r\n            </ibm-radio>\r\n          </ibm-radio-group>\r\n          <div class=\"bx--form-requirement\" *ngIf=\"submitted && f.radio.errors\">\r\n            Radio is required\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedRadioTypeValue == 'Radio 1'\">\r\n          <ibm-radio-group aria-label=\"radiogroup\" formControlName=\"radio4\" (change)=\"onRadioChangeHandler($event)\">\r\n            <ibm-radio value=\"Radio 1\">\r\n              Revoke All\r\n            </ibm-radio>\r\n          </ibm-radio-group>\r\n        </fieldset>\r\n        <hr *ngIf=\"this.checkedRadioTypeValue == 'Radio 1'\" style=\"height:2px;\">\r\n        <p *ngIf=\"this.checkedRadioTypeValue == 'Radio 1'\" style=\"text-align: center;\">(OR)</p>\r\n        <br />\r\n        <hr *ngIf=\"this.checkedRadioTypeValue == 'Radio 1'\" style=\"height:2px;\">\r\n        <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedRadioTypeValue == 'Radio 1'\">\r\n          <ibm-label>\r\n            Revoke By Date\r\n            <input ibmText formControlName=\"revokeDate\" [placeholder]=\"'Enter Date'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedRadioTypeValue == 'Radio 1'\">\r\n          <ibm-label>\r\n            Revoke By ClientID\r\n            <input ibmText formControlName=\"revokeClientID\" [placeholder]=\"'Enter ClientID'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedRadioTypeValue == 'Radio 1'\">\r\n          <ibm-label>\r\n            Revoke By Resource Owner\r\n            <input ibmText formControlName=\"revokeOwner\" [placeholder]=\"'Enter Resource Owner'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"bx--fieldset\" *ngIf=\"this.checkedRadioTypeValue == 'Radio 2'\">\r\n          <ibm-label>\r\n            Token ID\r\n            <input ibmText formControlName=\"revokeToken\" [placeholder]=\"'Enter Token ID'\">\r\n          </ibm-label>\r\n        </fieldset>\r\n        <div class=\"form-button\">\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"cancel\" type=\"button\" class=\"ibtn\"\r\n            [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Cancel</button>\r\n          <button [ibmButton]=\"ibmButton\" [size]=\"'normal'\" id=\"submit\" type=\"submit\" class=\"ibtn\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n    <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n        <div _ngcontent-yve-c2=\"\">\r\n            <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Manage IDBP platform roles and\r\n                user\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n    <div class=\"idbp\">\r\n        <h3>Roles</h3>\r\n        <button ibmButton [routerLink]=\"['/dashboard/settings/listusers/createrole']\" routerLinkActive=\"active\"\r\n            style=\"background-color: #3d70b2;\" [disabled]=\"this.roleRoutesMatched\">Create</button>\r\n        <div>\r\n            <table class=\"bx--data-table\" *ngIf=\"this.roleTemp\" style=\"width: 50%;\">\r\n                <thead>\r\n                    <tr>\r\n                        <th><span class=\"bx--table-header-label\">Roles</span></th>\r\n                        <th><span class=\"bx--table-header-label\">Activities</span></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let role of this.rolesList\">\r\n                        <td>{{role.roleName}}</td>\r\n                        <td>\r\n                            <ibm-overflow-menu>\r\n                                <ibm-overflow-menu-option (click)=\"onDeleteRole(role._id)\"> Delete\r\n                                </ibm-overflow-menu-option>\r\n                            </ibm-overflow-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table class=\"bx--data-table\" *ngIf=\"!this.roleTemp\">\r\n                <p> No Records Available</p>\r\n            </table>\r\n        </div>\r\n\r\n        <h3>Users</h3>\r\n        <button ibmButton [routerLink]=\"['/dashboard/settings/listusers/createuser']\" routerLinkActive=\"active\"\r\n            style=\"background-color: #3d70b2;\" [disabled]=\"this.userRoutesMatched\">Create</button>\r\n\r\n        <div>\r\n            <table class=\"bx--data-table\" *ngIf=\"this.userTemp\" style=\"width: 50%;\">\r\n                <thead>\r\n                    <tr>\r\n                        <th><span class=\"bx--table-header-label\">Email</span></th>\r\n                        <th><span class=\"bx--table-header-label\">Role</span></th>\r\n                        <th><span class=\"bx--table-header-label\">Activities</span></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let user of this.usersList\">\r\n                        <td>{{user.email}}</td>\r\n                        <td>{{user.role}}</td>\r\n                        <td>\r\n                            <ibm-overflow-menu>\r\n                                <ibm-overflow-menu-option (click)=\"onDeleteUser(user._id)\"> Delete\r\n                                </ibm-overflow-menu-option>\r\n                            </ibm-overflow-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table class=\"bx--data-table\" *ngIf=\"!this.userTemp\">\r\n                <p> No Records Available</p>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <!--close of idbp div-->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-registry/user-registry.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-registry/user-registry.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cb--page-header__container\">\r\n  <header _ngcontent-yve-c2=\"\" class=\"cb--page-header\" role=\"banner\">\r\n    <div _ngcontent-yve-c2=\"\">\r\n      <div _ngcontent-yve-c2=\"\" class=\"cb--page-header__title\" id=\"page-title\"> Configure User Registries </div>\r\n    </div>\r\n  </header>\r\n  <div id=\"breadcrumb\"></div>\r\n</div>\r\n<div class=\"cb--page-content__container\">\r\n  <div toastContainer></div>\r\n  <h3>Select User Registry to configure:</h3>\r\n  <div class=\"idbp-tile-cards\">\r\n    <ibm-tile>\r\n      <div class=\"tile-header\">\r\n        <div class=\"tile-title\">\r\n          <input type=\"radio\" id=\"ldap\" name=\"ur\" value=\"ldap\" (change)=\"userRegistrySubmit($event)\"> Ldap User Registry\r\n          <br /> <br />\r\n          <a [routerLink]=\"['/dashboard/settings/userregistry/createldap']\" routerLinkActive=\"active\">\r\n            Configure Ldap\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </ibm-tile>\r\n\r\n    <ibm-tile>\r\n      <div class=\"tile-header\">\r\n        <div class=\"tile-title\">\r\n          <input type=\"radio\" id=\"local\" name=\"ur\" value=\"local\" (change)=\"userRegistrySubmit($event)\"> Local User\r\n          Registry\r\n          <br /><br />\r\n          <p>With this IDBP, setup a Local User Registry has already been configured, any new USER will be created\r\n            inside that User Registry </p>\r\n        </div>\r\n      </div>\r\n    </ibm-tile>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/ace-accelerator/ace-accelerator.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/ace-accelerator/ace-accelerator.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjZS1hY2NlbGVyYXRvci9hY2UtYWNjZWxlcmF0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ace-accelerator/ace-accelerator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ace-accelerator/ace-accelerator.component.ts ***!
  \**************************************************************/
/*! exports provided: AceAcceleratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceAcceleratorComponent", function() { return AceAcceleratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");






let AceAcceleratorComponent = class AceAcceleratorComponent {
    constructor(router, formBuilder, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
        this.selectedService = [];
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.aceacceleratorForm = this.formBuilder.group({
            initServer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            appName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            transformationFilePath: [''],
            aceConfiguration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            maxCPU: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            minCPU: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            replicas: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            maxRAM: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            minRAM: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            features: [''],
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.aceacceleratorForm.controls;
    }
    onFeaturesCboxChangeHandler(event) {
        console.log('selected >>', event.target.checked);
        console.log('Service value >>', event.target.value);
        if (event.target.checked) {
            this.selectedService.push(event.target.value);
        }
        else {
            if (this.selectedService.indexOf(event.target.value) > -1) {
                this.selectedService.splice(this.selectedService.indexOf(event.target.value), 1);
            }
        }
        console.log('final selectedService >>' + this.selectedService);
    }
    onaceaccelerationSubmit() {
        this.submitted = true;
        if (this.aceacceleratorForm.invalid) {
            return false;
        }
        else {
            this.createaceacceleratorIntegration();
        }
    }
    createaceacceleratorIntegration() {
        this.toastrService.success('ACE Accelerator Code Generated and Deployed Successfully.');
        setTimeout(() => {
            this.router.navigate(['/dashboard']);
        }, 2000);
    }
};
AceAcceleratorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastContainerDirective"], { static: true })
], AceAcceleratorComponent.prototype, "toastContainer", void 0);
AceAcceleratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ace-accelerator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ace-accelerator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ace-accelerator/ace-accelerator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ace-accelerator.component.scss */ "./src/app/ace-accelerator/ace-accelerator.component.scss")).default]
    })
], AceAcceleratorComponent);



/***/ }),

/***/ "./src/app/add-role/add-role.component.scss":
/*!**************************************************!*\
  !*** ./src/app/add-role/add-role.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yb2xlL2FkZC1yb2xlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/add-role/add-role.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-role/add-role.component.ts ***!
  \************************************************/
/*! exports provided: AddRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function() { return AddRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let AddRoleComponent = class AddRoleComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.selectedEntry = '';
        this.submitted = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.roleForm = this.formBuilder.group({
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z][a-zA-Z-]*$')]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.roleForm.controls;
    }
    onRoleSubmit() {
        this.submitted = true;
        if (this.roleForm.invalid) {
            return false;
        }
        else {
            this.createRole();
        }
    }
    createRole() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.roleURL, {
            roleName: this.roleForm.controls.role.value
        })
            .subscribe((roleCreated) => {
            console.log('Post role call successful value returned >>', roleCreated);
            this.toastrService.success('Role Created Successfully.');
        }, error => {
            console.log('Post role call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Role Created Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/settings/listusers']);
                }, 2000);
            }
            else {
                this.toastrService.error('Role name is already taken.');
            }
        });
    }
};
AddRoleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], AddRoleComponent.prototype, "toastContainer", void 0);
AddRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-role',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-role/add-role.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-role.component.scss */ "./src/app/add-role/add-role.component.scss")).default]
    })
], AddRoleComponent);



/***/ }),

/***/ "./src/app/add-user/add-user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);







//import userRegistryUrl from '../../idbp.config.json';
//import ldapUrUrl from '../../idbp.config.json';



let AddUserComponent = class AddUserComponent {
    //userRegistryList: any;
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        // this.http.get(userRegistryUrl.userRegistryURL)
        //   .subscribe((userRegistries: Response) => {
        //     console.log('Get user registries list call >>', userRegistries);
        //     this.userRegistryList = userRegistries;
        //   }, error => {
        //     console.log('Get user registries list call in error >>', error.message);
        //   });
        // this.http.get(ldapUrUrl.ldapUrURL)
        //   .subscribe((ldapList: Response) => {
        //     console.log('Get ldap user registries list call >>', ldapList);
        //     this.userRegistryList = ldapList;
        //   }, error => {
        //     console.log('Get ldap user registries list call in error >>', error.message);
        //   });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.roleURL)
            .subscribe((roles) => {
            console.log('Get roles list call >>', roles);
            this.rolesList = roles;
        }, error => {
            console.log('Get roles list call in error >>', error.message);
        });
        this.userForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            roleName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get roleName() {
        return this.userForm.get('roleName');
    }
    get f() {
        return this.userForm.controls;
    }
    onUserManagementSubmit() {
        this.submitted = true;
        if (this.userForm.invalid) {
            return false;
        }
        else {
            this.createUser();
        }
    }
    createUser() {
        // if (this.userRegistryList.defaultUserRegistry == 'ldap') {
        //   } else {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.nonAdminURL, {
            email: this.userForm.controls.email.value,
            role: this.userForm.controls.roleName.value
        })
            .subscribe((userCreated) => {
            console.log('Post user management call successful value returned >>', userCreated);
            this.toastrService.success('User Created Successfully. Mail sent to registered user email. Please click on the link in the email to continue.');
        }, error => {
            console.log('Post user management call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('User Created Successfully. Mail sent to registered user email. Please click on the link in the email to continue.');
                localStorage.setItem('nonAdminRegMail', this.userForm.controls.email.value);
                localStorage.setItem('role', this.userForm.controls.roleName.value);
                this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mailURL, {
                    email: this.userForm.controls.email.value,
                    // role: this.userForm.controls.roleName.value,
                    action: "sign-up"
                })
                    .subscribe((userRegMailConfirm) => {
                    console.log('Post user registration mail service call successful value returned >>', userRegMailConfirm);
                }, error => {
                    console.log('Post user registration mail service call in error >>', error);
                    setTimeout(() => {
                        this.router.navigate(['/dashboard/settings/listusers']);
                    }, 2000);
                });
            }
            else {
                this.toastrService.error('Email is already registered. Please create another email.');
            }
        });
        // }
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], AddUserComponent.prototype, "toastContainer", void 0);
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-user.component.scss */ "./src/app/add-user/add-user.component.scss")).default]
    })
], AddUserComponent);



/***/ }),

/***/ "./src/app/apic-accelerator/apic-accelerator.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/apic-accelerator/apic-accelerator.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaWMtYWNjZWxlcmF0b3IvYXBpYy1hY2NlbGVyYXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/apic-accelerator/apic-accelerator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/apic-accelerator/apic-accelerator.component.ts ***!
  \****************************************************************/
/*! exports provided: ApicAcceleratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicAcceleratorComponent", function() { return ApicAcceleratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let ApicAcceleratorComponent = class ApicAcceleratorComponent {
    constructor(router, formBuilder, http, breadcrumbService, toastrService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.breadcrumbService = breadcrumbService;
        this.toastrService = toastrService;
        this.submitted = false;
        this.features = ['Api key', 'Cert-verification', 'Schema Validation', 'Digital Signature Verification', 'Field Level Encryption Decryption'];
        this.selectedService = [];
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.apicacceleratorForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            basepath: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            desc: [''],
            operationpath: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            targeturl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            baseURL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            features: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            realm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            prov: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.apicacceleratorForm.controls;
    }
    onFeaturesCboxChangeHandler(event) {
        console.log('selected >>', event.target.checked);
        console.log('Service value >>', event.target.value);
        if (event.target.checked) {
            this.selectedService.push(event.target.value);
        }
        else {
            if (this.selectedService.indexOf(event.target.value) > -1) {
                this.selectedService.splice(this.selectedService.indexOf(event.target.value), 1);
            }
        }
        console.log('final selectedService >>' + this.selectedService);
    }
    onApicaccelerationSubmit() {
        this.submitted = true;
        if (this.apicacceleratorForm.invalid) {
            return false;
        }
        else {
            this.createCbsIntegration();
        }
    }
    createCbsIntegration() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.apicAccelURL, {
            title: this.apicacceleratorForm.controls.title.value,
            description: this.apicacceleratorForm.controls.desc.value,
            basepath: this.apicacceleratorForm.controls.basepath.value,
            operationPath: this.apicacceleratorForm.controls.operationpath.value,
            targetURL: this.apicacceleratorForm.controls.targeturl.value,
            features: this.selectedService,
            baseURL: this.apicacceleratorForm.controls.baseURL.value,
            username: this.apicacceleratorForm.controls.username.value,
            password: this.apicacceleratorForm.controls.password.value,
            realm: this.apicacceleratorForm.controls.realm.value,
            prov: this.apicacceleratorForm.controls.prov.value
        })
            .subscribe((cbs) => {
            console.log('Post cbs call successful value returned >>', cbs);
            this.toastrService.success('APIC Accelerator Deployed Successfully.');
            setTimeout(() => {
                this.router.navigate(['/dashboard']);
            }, 4000);
        }, error => {
            console.log('Post cbs call in error >>', error);
            if (error.status == 200) {
                this.toastrService.success('APIC Accelerator Saved Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard']);
                }, 2000);
            }
            else {
                this.toastrService.error('Internal Server Error.');
            }
        });
    }
};
ApicAcceleratorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], ApicAcceleratorComponent.prototype, "toastContainer", void 0);
ApicAcceleratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apic-accelerator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apic-accelerator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apic-accelerator/apic-accelerator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apic-accelerator.component.scss */ "./src/app/apic-accelerator/apic-accelerator.component.scss")).default]
    })
], ApicAcceleratorComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _manage_environment_manage_environment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage-environment/manage-environment.component */ "./src/app/manage-environment/manage-environment.component.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/user-management/user-management.component.ts");
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./license/license.component */ "./src/app/license/license.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _idbp_idbp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./idbp/idbp.component */ "./src/app/idbp/idbp.component.ts");
/* harmony import */ var _user_registry_user_registry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-registry/user-registry.component */ "./src/app/user-registry/user-registry.component.ts");
/* harmony import */ var _smtp_configure_smtp_configure_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./smtp-configure/smtp-configure.component */ "./src/app/smtp-configure/smtp-configure.component.ts");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/add-role/add-role.component.ts");
/* harmony import */ var _cbs_cbs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cbs/cbs.component */ "./src/app/cbs/cbs.component.ts");
/* harmony import */ var _get_templates_get_templates_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./get-templates/get-templates.component */ "./src/app/get-templates/get-templates.component.ts");
/* harmony import */ var _get_email_notifications_get_email_notifications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./get-email-notifications/get-email-notifications.component */ "./src/app/get-email-notifications/get-email-notifications.component.ts");
/* harmony import */ var _idbp_tls_profile_idbp_tls_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./idbp-tls-profile/idbp-tls-profile.component */ "./src/app/idbp-tls-profile/idbp-tls-profile.component.ts");
/* harmony import */ var _manage_resources_manage_resources_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manage-resources/manage-resources.component */ "./src/app/manage-resources/manage-resources.component.ts");
/* harmony import */ var _idbp_create_tls_server_idbp_create_tls_server_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./idbp-create-tls-server/idbp-create-tls-server.component */ "./src/app/idbp-create-tls-server/idbp-create-tls-server.component.ts");
/* harmony import */ var _manage_environment_create_manage_environment_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manage-environment-create/manage-environment-create.component */ "./src/app/manage-environment-create/manage-environment-create.component.ts");
/* harmony import */ var _manage_services_manage_services_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./manage-services/manage-services.component */ "./src/app/manage-services/manage-services.component.ts");
/* harmony import */ var _mr_create_notification_mr_create_notification_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mr-create-notification/mr-create-notification.component */ "./src/app/mr-create-notification/mr-create-notification.component.ts");
/* harmony import */ var _mrnotification_mrnotification_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mrnotification/mrnotification.component */ "./src/app/mrnotification/mrnotification.component.ts");
/* harmony import */ var _manage_env_config_details_manage_env_config_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./manage-env-config-details/manage-env-config-details.component */ "./src/app/manage-env-config-details/manage-env-config-details.component.ts");
/* harmony import */ var _cbs_integration_cbs_integration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cbs-integration/cbs-integration.component */ "./src/app/cbs-integration/cbs-integration.component.ts");
/* harmony import */ var _mr_create_container_registry_mr_create_container_registry_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mr-create-container-registry/mr-create-container-registry.component */ "./src/app/mr-create-container-registry/mr-create-container-registry.component.ts");
/* harmony import */ var _mr_create_container_platform_mr_create_container_platform_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mr-create-container-platform/mr-create-container-platform.component */ "./src/app/mr-create-container-platform/mr-create-container-platform.component.ts");
/* harmony import */ var _mrcontainer_registry_mrcontainer_registry_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mrcontainer-registry/mrcontainer-registry.component */ "./src/app/mrcontainer-registry/mrcontainer-registry.component.ts");
/* harmony import */ var _mrapic_mrapic_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mrapic/mrapic.component */ "./src/app/mrapic/mrapic.component.ts");
/* harmony import */ var _mr_create_apic_mr_create_apic_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mr-create-apic/mr-create-apic.component */ "./src/app/mr-create-apic/mr-create-apic.component.ts");
/* harmony import */ var _open_banking_open_banking_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./open-banking/open-banking.component */ "./src/app/open-banking/open-banking.component.ts");
/* harmony import */ var _apic_accelerator_apic_accelerator_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./apic-accelerator/apic-accelerator.component */ "./src/app/apic-accelerator/apic-accelerator.component.ts");
/* harmony import */ var _ace_accelerator_ace_accelerator_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ace-accelerator/ace-accelerator.component */ "./src/app/ace-accelerator/ace-accelerator.component.ts");
/* harmony import */ var _token_management_accelerator_token_management_accelerator_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./token-management-accelerator/token-management-accelerator.component */ "./src/app/token-management-accelerator/token-management-accelerator.component.ts");
/* harmony import */ var _rule_engine_accelerator_rule_engine_accelerator_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./rule-engine-accelerator/rule-engine-accelerator.component */ "./src/app/rule-engine-accelerator/rule-engine-accelerator.component.ts");







































// import { LdapUrComponent } from './ldap-ur/ldap-ur.component';
const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'license', component: _license_license_component__WEBPACK_IMPORTED_MODULE_11__["LicenseComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'resetpassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
    { path: 'changepassword', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/settings', component: _idbp_idbp_component__WEBPACK_IMPORTED_MODULE_13__["IdbpComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], },
    { path: 'dashboard/settings/userregistry', component: _user_registry_user_registry_component__WEBPACK_IMPORTED_MODULE_14__["UserRegistryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    // { path: 'dashboard/settings/userregistry/createldap', component: LdapUrComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/settings/listusers', component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_10__["UserManagementComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/settings/listusers/createrole', component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_16__["AddRoleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/settings/listusers/createuser', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_12__["AddUserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/settings/listsmtpconfigure', component: _get_email_notifications_get_email_notifications_component__WEBPACK_IMPORTED_MODULE_19__["GetEmailNotificationsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/settings/listsmtpconfigure/createsmtp', component: _smtp_configure_smtp_configure_component__WEBPACK_IMPORTED_MODULE_15__["SmtpConfigureComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/settings/listemailtemplates', component: _get_templates_get_templates_component__WEBPACK_IMPORTED_MODULE_18__["GetTemplatesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/settings/tlsprofile', component: _idbp_tls_profile_idbp_tls_profile_component__WEBPACK_IMPORTED_MODULE_20__["IdbpTlsProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/settings/tlsprofile/createtls', component: _idbp_create_tls_server_idbp_create_tls_server_component__WEBPACK_IMPORTED_MODULE_22__["IdbpCreateTlsServerComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/cbs', component: _cbs_cbs_component__WEBPACK_IMPORTED_MODULE_17__["CbsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/cbs/createcbs', component: _cbs_integration_cbs_integration_component__WEBPACK_IMPORTED_MODULE_28__["CbsIntegrationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageresources', component: _manage_resources_manage_resources_component__WEBPACK_IMPORTED_MODULE_21__["ManageResourcesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageresources/createcontainerplatform', component: _mr_create_container_platform_mr_create_container_platform_component__WEBPACK_IMPORTED_MODULE_30__["MrCreateContainerPlatformComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageresources/containerregistry', component: _mrcontainer_registry_mrcontainer_registry_component__WEBPACK_IMPORTED_MODULE_31__["MRContainerRegistryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageresources/containerregistry/createcontainerregistry', component: _mr_create_container_registry_mr_create_container_registry_component__WEBPACK_IMPORTED_MODULE_29__["MrCreateContainerRegistryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageresources/apic', component: _mrapic_mrapic_component__WEBPACK_IMPORTED_MODULE_32__["MRApicComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageresources/apic/createapic', component: _mr_create_apic_mr_create_apic_component__WEBPACK_IMPORTED_MODULE_33__["MrCreateApicComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageresources/notification', component: _mrnotification_mrnotification_component__WEBPACK_IMPORTED_MODULE_26__["MRNotificationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageresources/notification/createnotification', component: _mr_create_notification_mr_create_notification_component__WEBPACK_IMPORTED_MODULE_25__["MrCreateNotificationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageenvironment', component: _manage_environment_manage_environment_component__WEBPACK_IMPORTED_MODULE_9__["ManageEnvironmentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageenvironment/createenv', component: _manage_environment_create_manage_environment_create_component__WEBPACK_IMPORTED_MODULE_23__["ManageEnvironmentCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageenvironment/publish', component: _manage_env_config_details_manage_env_config_details_component__WEBPACK_IMPORTED_MODULE_27__["ManageEnvConfigDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageservices', component: _manage_services_manage_services_component__WEBPACK_IMPORTED_MODULE_24__["ManageServicesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/manageservices/bankingstandard', component: _open_banking_open_banking_component__WEBPACK_IMPORTED_MODULE_34__["OpenBankingComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/apicaccelerator', component: _apic_accelerator_apic_accelerator_component__WEBPACK_IMPORTED_MODULE_35__["ApicAcceleratorComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/aceaccelerator', component: _ace_accelerator_ace_accelerator_component__WEBPACK_IMPORTED_MODULE_36__["AceAcceleratorComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/rulemanagement', component: _rule_engine_accelerator_rule_engine_accelerator_component__WEBPACK_IMPORTED_MODULE_38__["RuleEngineAcceleratorComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/tokenmanagement', component: _token_management_accelerator_token_management_accelerator_component__WEBPACK_IMPORTED_MODULE_37__["TokenManagementAcceleratorComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-wrap {\n  display: flex;\n  min-height: 100vh;\n}\n\n.app-wrap.with-header {\n  padding-top: 3rem;\n}\n\n.app-wrap.with-footer {\n  padding-bottom: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTjpcXEJhbmtDb25uZWN0X0lEQlBfVGVjaFZpdGFsaXR5X0dpdFxcaWRicC1hbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5hcHAtd3JhcC53aXRoLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxufVxyXG4uYXBwLXdyYXAud2l0aC1mb290ZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMuNWVtO1xyXG59IiwiLmFwcC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5hcHAtd3JhcC53aXRoLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuXG4uYXBwLXdyYXAud2l0aC1mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMy41ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



let AppComponent = class AppComponent {
    //don't remove below declaration
    constructor(authService) {
        this.authService = authService;
        this.title = 'idbp-partner-portal';
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _carbon_components_angular_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./carbon-components-angular.module */ "./src/app/carbon-components-angular.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _cbs_cbs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cbs/cbs.component */ "./src/app/cbs/cbs.component.ts");
/* harmony import */ var _cbs_integration_cbs_integration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cbs-integration/cbs-integration.component */ "./src/app/cbs-integration/cbs-integration.component.ts");
/* harmony import */ var _manage_environment_manage_environment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./manage-environment/manage-environment.component */ "./src/app/manage-environment/manage-environment.component.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/user-management/user-management.component.ts");
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./license/license.component */ "./src/app/license/license.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _idbp_idbp_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./idbp/idbp.component */ "./src/app/idbp/idbp.component.ts");
/* harmony import */ var _user_registry_user_registry_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user-registry/user-registry.component */ "./src/app/user-registry/user-registry.component.ts");
/* harmony import */ var _smtp_configure_smtp_configure_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./smtp-configure/smtp-configure.component */ "./src/app/smtp-configure/smtp-configure.component.ts");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/add-role/add-role.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _dev_ops_dev_ops_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dev-ops/dev-ops.component */ "./src/app/dev-ops/dev-ops.component.ts");
/* harmony import */ var _get_templates_get_templates_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./get-templates/get-templates.component */ "./src/app/get-templates/get-templates.component.ts");
/* harmony import */ var _get_email_notifications_get_email_notifications_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./get-email-notifications/get-email-notifications.component */ "./src/app/get-email-notifications/get-email-notifications.component.ts");
/* harmony import */ var _idbp_tls_profile_idbp_tls_profile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./idbp-tls-profile/idbp-tls-profile.component */ "./src/app/idbp-tls-profile/idbp-tls-profile.component.ts");
/* harmony import */ var _manage_resources_manage_resources_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./manage-resources/manage-resources.component */ "./src/app/manage-resources/manage-resources.component.ts");
/* harmony import */ var _idbp_create_tls_server_idbp_create_tls_server_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./idbp-create-tls-server/idbp-create-tls-server.component */ "./src/app/idbp-create-tls-server/idbp-create-tls-server.component.ts");
/* harmony import */ var _manage_environment_create_manage_environment_create_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./manage-environment-create/manage-environment-create.component */ "./src/app/manage-environment-create/manage-environment-create.component.ts");
/* harmony import */ var _manage_services_manage_services_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./manage-services/manage-services.component */ "./src/app/manage-services/manage-services.component.ts");
/* harmony import */ var _mrnotification_mrnotification_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./mrnotification/mrnotification.component */ "./src/app/mrnotification/mrnotification.component.ts");
/* harmony import */ var _mr_create_notification_mr_create_notification_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./mr-create-notification/mr-create-notification.component */ "./src/app/mr-create-notification/mr-create-notification.component.ts");
/* harmony import */ var _manage_env_config_details_manage_env_config_details_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./manage-env-config-details/manage-env-config-details.component */ "./src/app/manage-env-config-details/manage-env-config-details.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _mrapic_mrapic_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./mrapic/mrapic.component */ "./src/app/mrapic/mrapic.component.ts");
/* harmony import */ var _mrcontainer_registry_mrcontainer_registry_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./mrcontainer-registry/mrcontainer-registry.component */ "./src/app/mrcontainer-registry/mrcontainer-registry.component.ts");
/* harmony import */ var _mr_create_apic_mr_create_apic_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./mr-create-apic/mr-create-apic.component */ "./src/app/mr-create-apic/mr-create-apic.component.ts");
/* harmony import */ var _mr_create_container_registry_mr_create_container_registry_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./mr-create-container-registry/mr-create-container-registry.component */ "./src/app/mr-create-container-registry/mr-create-container-registry.component.ts");
/* harmony import */ var _mr_create_container_platform_mr_create_container_platform_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./mr-create-container-platform/mr-create-container-platform.component */ "./src/app/mr-create-container-platform/mr-create-container-platform.component.ts");
/* harmony import */ var _open_banking_open_banking_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./open-banking/open-banking.component */ "./src/app/open-banking/open-banking.component.ts");
/* harmony import */ var _ace_accelerator_ace_accelerator_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./ace-accelerator/ace-accelerator.component */ "./src/app/ace-accelerator/ace-accelerator.component.ts");
/* harmony import */ var _apic_accelerator_apic_accelerator_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./apic-accelerator/apic-accelerator.component */ "./src/app/apic-accelerator/apic-accelerator.component.ts");
/* harmony import */ var _token_management_accelerator_token_management_accelerator_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./token-management-accelerator/token-management-accelerator.component */ "./src/app/token-management-accelerator/token-management-accelerator.component.ts");
/* harmony import */ var _rule_engine_accelerator_rule_engine_accelerator_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./rule-engine-accelerator/rule-engine-accelerator.component */ "./src/app/rule-engine-accelerator/rule-engine-accelerator.component.ts");





























































//import { LdapUrComponent } from './ldap-ur/ldap-ur.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"],
            _cbs_cbs_component__WEBPACK_IMPORTED_MODULE_27__["CbsComponent"],
            _cbs_integration_cbs_integration_component__WEBPACK_IMPORTED_MODULE_28__["CbsIntegrationComponent"],
            _manage_environment_manage_environment_component__WEBPACK_IMPORTED_MODULE_29__["ManageEnvironmentComponent"],
            _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_30__["UserManagementComponent"],
            _license_license_component__WEBPACK_IMPORTED_MODULE_31__["LicenseComponent"],
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_32__["AddUserComponent"],
            _idbp_idbp_component__WEBPACK_IMPORTED_MODULE_33__["IdbpComponent"],
            _user_registry_user_registry_component__WEBPACK_IMPORTED_MODULE_34__["UserRegistryComponent"],
            _smtp_configure_smtp_configure_component__WEBPACK_IMPORTED_MODULE_35__["SmtpConfigureComponent"],
            _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_36__["AddRoleComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__["SidebarComponent"],
            _dev_ops_dev_ops_component__WEBPACK_IMPORTED_MODULE_38__["DevOpsComponent"],
            _get_templates_get_templates_component__WEBPACK_IMPORTED_MODULE_39__["GetTemplatesComponent"],
            _get_email_notifications_get_email_notifications_component__WEBPACK_IMPORTED_MODULE_40__["GetEmailNotificationsComponent"],
            _idbp_tls_profile_idbp_tls_profile_component__WEBPACK_IMPORTED_MODULE_41__["IdbpTlsProfileComponent"],
            _manage_resources_manage_resources_component__WEBPACK_IMPORTED_MODULE_42__["ManageResourcesComponent"],
            _idbp_create_tls_server_idbp_create_tls_server_component__WEBPACK_IMPORTED_MODULE_43__["IdbpCreateTlsServerComponent"],
            _manage_environment_create_manage_environment_create_component__WEBPACK_IMPORTED_MODULE_44__["ManageEnvironmentCreateComponent"],
            _manage_services_manage_services_component__WEBPACK_IMPORTED_MODULE_45__["ManageServicesComponent"],
            _mrnotification_mrnotification_component__WEBPACK_IMPORTED_MODULE_46__["MRNotificationComponent"],
            _mr_create_notification_mr_create_notification_component__WEBPACK_IMPORTED_MODULE_47__["MrCreateNotificationComponent"],
            _manage_env_config_details_manage_env_config_details_component__WEBPACK_IMPORTED_MODULE_48__["ManageEnvConfigDetailsComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_49__["ForgotPasswordComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_50__["ChangePasswordComponent"],
            _mrapic_mrapic_component__WEBPACK_IMPORTED_MODULE_51__["MRApicComponent"],
            _mrcontainer_registry_mrcontainer_registry_component__WEBPACK_IMPORTED_MODULE_52__["MRContainerRegistryComponent"],
            _mr_create_apic_mr_create_apic_component__WEBPACK_IMPORTED_MODULE_53__["MrCreateApicComponent"],
            _mr_create_container_registry_mr_create_container_registry_component__WEBPACK_IMPORTED_MODULE_54__["MrCreateContainerRegistryComponent"],
            _mr_create_container_platform_mr_create_container_platform_component__WEBPACK_IMPORTED_MODULE_55__["MrCreateContainerPlatformComponent"],
            _open_banking_open_banking_component__WEBPACK_IMPORTED_MODULE_56__["OpenBankingComponent"],
            _ace_accelerator_ace_accelerator_component__WEBPACK_IMPORTED_MODULE_57__["AceAcceleratorComponent"],
            _apic_accelerator_apic_accelerator_component__WEBPACK_IMPORTED_MODULE_58__["ApicAcceleratorComponent"],
            _token_management_accelerator_token_management_accelerator_component__WEBPACK_IMPORTED_MODULE_59__["TokenManagementAcceleratorComponent"],
            _rule_engine_accelerator_rule_engine_accelerator_component__WEBPACK_IMPORTED_MODULE_60__["RuleEngineAcceleratorComponent"]
            //LdapUrComponent
        ],
        imports: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _carbon_components_angular_module__WEBPACK_IMPORTED_MODULE_20__["CarbonComponentsAngularModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({ positionClass: 'inline' }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastContainerModule"]
        ],
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__["CookieService"], _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);




let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('jwt')) {
            this.tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(localStorage.getItem('jwt'));
            if (this.tokenValidateData["role"] == 'admin') {
                return true;
            }
            else {
                if (state.url == '/dashboard') {
                    return true;
                }
                this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
                for (let i = 0; i < this.roleRoutesList.length; i++) {
                    if (state.url == this.roleRoutesList[i]) {
                        alert('Sorry, you dont have access to this URL.');
                        return false;
                    }
                }
                return true;
            }
        }
        localStorage.clear();
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() {
        this.loggedIn = false;
        this.sidebarShow = false;
        if (localStorage.getItem('jwt')) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/breadcrumb-service/breadcrumb.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/breadcrumb-service/breadcrumb.service.ts ***!
  \**********************************************************/
/*! exports provided: BreadcrumbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbService", function() { return BreadcrumbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes.json */ "./src/routes.json");
var _routes_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../routes.json */ "./src/routes.json", 1);




let BreadcrumbService = class BreadcrumbService {
    constructor(router) {
        this.router = router;
    }
    drawBreadcrumb() {
        this.breadcrumb = ''; //to clear the div / dom content
        this.pathname = this.router.url.split('/');
        for (let i = 1; i <= this.pathname.length - 2; i++) {
            _routes_json__WEBPACK_IMPORTED_MODULE_3__[this.pathname[i]];
            this.breadcrumb += "<a href='" + _routes_json__WEBPACK_IMPORTED_MODULE_3__[this.pathname[i]] + "'>" + this.pathname[i].toUpperCase() + " </a>" + "&nbsp;" + "&nbsp;";
            if (i < this.pathname.length - 2) {
                this.breadcrumb += ">>" + "&nbsp;" + "&nbsp;";
            }
        }
        let domObject = document.getElementById("breadcrumb");
        domObject.innerHTML = this.breadcrumb;
    }
};
BreadcrumbService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BreadcrumbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BreadcrumbService);



/***/ }),

/***/ "./src/app/carbon-components-angular.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/carbon-components-angular.module.ts ***!
  \*****************************************************/
/*! exports provided: CarbonComponentsAngularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarbonComponentsAngularModule", function() { return CarbonComponentsAngularModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbon-components-angular */ "./node_modules/carbon-components-angular/index.js");



const modules = [
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["UIShellModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["CodeSnippetModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ModalModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ComboBoxModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ContentSwitcherModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["DatePickerModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["DialogModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["DocumentationModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ExperimentalModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["FileUploaderModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["GridModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["I18nModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["InlineLoadingModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["InputModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["LinkModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ListModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["NFormsModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["NumberModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["PanelModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["PlaceholderModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ProgressIndicatorModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["RadioModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["SearchModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["SelectModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["SideNavModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["SliderModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["StructuredListModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["TabsModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["TagModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["TilesModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["TimePickerModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["TimePickerSelectModule"],
    carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ToggleModule"]
];
let CarbonComponentsAngularModule = class CarbonComponentsAngularModule {
};
CarbonComponentsAngularModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: modules,
        exports: modules,
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], CarbonComponentsAngularModule);



/***/ }),

/***/ "./src/app/cbs-integration/cbs-integration.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/cbs-integration/cbs-integration.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nicy1pbnRlZ3JhdGlvbi9jYnMtaW50ZWdyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cbs-integration/cbs-integration.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cbs-integration/cbs-integration.component.ts ***!
  \**************************************************************/
/*! exports provided: CbsIntegrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CbsIntegrationComponent", function() { return CbsIntegrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let CbsIntegrationComponent = class CbsIntegrationComponent {
    constructor(router, formBuilder, http, breadcrumbService, toastrService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.breadcrumbService = breadcrumbService;
        this.toastrService = toastrService;
        this.submitted = false;
        this.authData = ['User Credentials', 'Token'];
        this.checkedUserType = false;
        this.checkedTokenType = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.cbsForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            desc: [''],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            port: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            connectionProtocol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            mFormat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            authType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: [''],
            password: [''],
            token: [''],
            tlsType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.cbsForm.controls;
    }
    onAuthCboxChangeHandler(event) {
        if (event.target.value == 'User Credentials') {
            this.checkedUserType = event.target.checked;
            this.checkedUserValue = event.target.value;
        }
        else {
            this.checkedTokenType = event.target.checked;
            this.checkedTokenValue = event.target.value;
        }
    }
    onCbsIntegrationSubmit() {
        this.submitted = true;
        if (this.cbsForm.invalid) {
            return false;
        }
        else {
            this.createCbsIntegration();
        }
    }
    createCbsIntegration() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.cbsIntegrationURL, {
            name: this.cbsForm.controls.name.value,
            description: this.cbsForm.controls.desc.value,
            address: this.cbsForm.controls.address.value,
            port: this.cbsForm.controls.port.value,
            connectionProtocol: this.cbsForm.controls.connectionProtocol.value,
            mFormat: this.cbsForm.controls.mFormat.value,
            authType: this.checkedUserValue + ' , ' + this.checkedTokenValue,
            username: this.cbsForm.controls.username.value,
            password: this.cbsForm.controls.password.value,
            token: this.cbsForm.controls.token.value,
            tlsType: this.cbsForm.controls.tlsType.value
        })
            .subscribe((cbs) => {
            console.log('Post cbs call successful value returned >>', cbs);
            this.toastrService.success('Core Banking Data Saved Successfully.');
        }, error => {
            console.log('Post cbs call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Core Banking Data Saved Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/cbs']);
                }, 2000);
            }
            else {
                this.toastrService.error('Core Banking name is already taken.');
            }
        });
    }
    ;
};
CbsIntegrationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], CbsIntegrationComponent.prototype, "toastContainer", void 0);
CbsIntegrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cbs-integration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cbs-integration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cbs-integration/cbs-integration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cbs-integration.component.scss */ "./src/app/cbs-integration/cbs-integration.component.scss")).default]
    })
], CbsIntegrationComponent);



/***/ }),

/***/ "./src/app/cbs/cbs.component.scss":
/*!****************************************!*\
  !*** ./src/app/cbs/cbs.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".idbp {\n  margin: 20px 0px 20px 810px;\n}\n\n.bx--data-table {\n  margin-left: 500px !important;\n}\n\n/* Modal */\n\n.fade {\n  margin: 90px 0 0 15px;\n}\n\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2JzL046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcY2JzXFxjYnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nicy9jYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQSxVQUFBOztBQUNBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0csY0FBQTtBQ0VQIiwiZmlsZSI6InNyYy9hcHAvY2JzL2Nicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZGJwe1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDgxMHB4O1xyXG59XHJcblxyXG4uYngtLWRhdGEtdGFibGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1vZGFsICovXHJcbi5mYWRlIHtcclxuICAgIG1hcmdpbjogOTBweCAwIDAgMTVweDtcclxufVxyXG4gIFxyXG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIH1cclxufSIsIi5pZGJwIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDgxMHB4O1xufVxuXG4uYngtLWRhdGEtdGFibGUge1xuICBtYXJnaW4tbGVmdDogNTAwcHggIWltcG9ydGFudDtcbn1cblxuLyogTW9kYWwgKi9cbi5mYWRlIHtcbiAgbWFyZ2luOiA5MHB4IDAgMCAxNXB4O1xufVxuXG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiB7XG4gIG1hcmdpbjogMXJlbSAtMXJlbSAtMXJlbSAtMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RhbC1mb290ZXItYnV0dG9uIGJ1dHRvbiB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cbs/cbs.component.ts":
/*!**************************************!*\
  !*** ./src/app/cbs/cbs.component.ts ***!
  \**************************************/
/*! exports provided: CbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CbsComponent", function() { return CbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);









let CbsComponent = class CbsComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
        this.cbsTemp = false;
        this.cbsRoutesMatched = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.cbsIntegrationURL)
            .subscribe((cbs) => {
            console.log('Get cbs list call >>', cbs);
            this.cbsList = cbs;
            if (this.cbsList.length == []) {
                this.cbsTemp = false;
            }
            else {
                this.cbsTemp = true;
            }
        }, error => {
            console.log('Get cbs list call in error >>', error.message);
        });
        this.editCbsForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            desc: [''],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            port: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
        });
        this.toastrService.overlayContainer = this.toastContainer;
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/cbs/createcbs" == this.roleRoutesList[i]) {
                    this.cbsRoutesMatched = true;
                }
            }
        }
    }
    get f() {
        return this.editCbsForm.controls;
    }
    // onAuthCboxChangeHandler(event) {
    //   if (event.target.value == 'User Credentials') {
    //     this.checkedUserType = event.target.checked;
    //     this.checkedUserValue = event.target.value;
    //   } else {
    //     this.checkedTokenType = event.target.checked;
    //     this.checkedTokenValue = event.target.value;
    //   }
    // }
    onEditCbsSubmit() {
        this.submitted = true;
        if (this.editCbsForm.invalid) {
            return false;
        }
        else {
            this.editCbs();
        }
    }
    editCbs() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.cbsIntegrationURL, {
            cbsId: localStorage.getItem('cbsId'),
            name: this.editCbsForm.controls.name.value,
            description: this.editCbsForm.controls.desc.value,
            address: this.editCbsForm.controls.address.value,
            port: this.editCbsForm.controls.port.value
            // connectionProtocol: this.editCbsForm.controls.connectionProtocol.value,
            // mFormat: this.editCbsForm.controls.mFormat.value,
            // authType: this.checkedUserValue + ' , ' + this.checkedTokenValue,
            // username: this.editCbsForm.controls.username.value,
            // password: this.editCbsForm.controls.password.value,
            // token: this.editCbsForm.controls.token.value,
            // tlsType: this.editCbsForm.controls.tlsType.value
        })
            .subscribe((cbsUpdatedData) => {
            console.log('Put edit cbs call successful value returned >>', cbsUpdatedData);
            this.toastrService.success('Core Banking Data Updated Successfully.');
        }, error => {
            console.log('Put edit cbs call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Core Banking Data Updated Successfully.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/cbs']);
                }, 4000);
            }
            else {
                this.toastrService.error('Update incompleted. Please update all the fields.');
            }
        });
    }
    ;
    onEditCbs(id, name, description, address, port, messageFormat) {
        localStorage.setItem('cbsId', id);
        localStorage.setItem('cbsName', name);
        localStorage.setItem('cbsDescription', description);
        localStorage.setItem('cbsAddress', address);
        localStorage.setItem('cbsPort', port);
        //localStorage.setItem('cbsMessageFormat', messageFormat);
        this.name = localStorage.getItem('cbsName');
        this.desc = localStorage.getItem('cbsDescription');
        this.add = localStorage.getItem('cbsAddress');
        this.port = localStorage.getItem('cbsPort');
        //this.mf = localStorage.getItem('cbsMessageFormat');
    }
    onDeleteCbs(cbsId) {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.cbsIntegrationURL, { _id: cbsId })
            .subscribe((cbsDeleted) => {
            console.log('Delete cbs call successful value returned >>', cbsDeleted);
        }, error => {
            console.log('Delete cbs call in error >>', error);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/dashboard/cbs']);
        });
    }
};
CbsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], CbsComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], CbsComponent.prototype, "closeAddExpenseModal", void 0);
CbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cbs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cbs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cbs/cbs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cbs.component.scss */ "./src/app/cbs/cbs.component.scss")).default]
    })
], CbsComponent);



/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(router, formBuilder, http, toastrService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.submitted = false;
        this.ctrl = {
            np: {
                label: 'Password',
                invalidText: ''
            }
        };
    }
    ngOnInit() {
        this.changePasswordForm = this.formBuilder.group({
            np: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        for (const ctrl of Object.keys(this.ctrl)) {
            this.changePasswordForm.controls[ctrl].valueChanges.subscribe(value => {
                this.validateInput(ctrl);
            });
        }
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.changePasswordForm.controls;
    }
    validateInput(ctrl) {
        const field = this.changePasswordForm.controls[ctrl];
        if (!field.errors || !Object.keys(field.errors).length) {
            return;
        }
        for (const err of Object.keys(field.errors)) {
            this.checkErrorCase(ctrl, err);
        }
    }
    checkErrorCase(ctrlName, err) {
        const field = this.changePasswordForm.controls[ctrlName];
        switch (err) {
            case 'required':
                this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} is required`;
                break;
            case 'minlength':
                this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} must be at least ${field.errors.minlength.requiredLength} characters`;
                break;
        }
    }
    onChangePasswordSubmit() {
        this.submitted = true;
        if (this.changePasswordForm.invalid) {
            return false;
        }
        else {
            if ((this.changePasswordForm.controls.np.value == this.changePasswordForm.controls.cp.value)) {
                this.changePassword();
            }
            else {
                this.toastrService.error('Password doesn\'t match.');
            }
        }
    }
    changePassword() {
        // change password for non-admin users
        if (localStorage.getItem('role')) {
            this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.nonAdminURL, {
                np: this.changePasswordForm.controls.np.value,
                email: localStorage.getItem('email')
            })
                .subscribe((changePwdDetails) => {
                console.log('Put change password for non-admin users successful value returned >>', changePwdDetails);
                this.toastrService.success('Password Updated Successfully.');
            }, error => {
                console.log('Put change password for non-admin users in error >>', error);
                if (error.status == '401') {
                    this.toastrService.error('Password Updated Failed.');
                }
                else if (error.status == '200') {
                    this.toastrService.success('Password Updated Successfully.');
                    setTimeout(() => {
                        this.router.navigate(['/dashboard']);
                    }, 2000);
                }
            });
        }
        // change password for admin users
        else {
            this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.adminURL, {
                np: this.changePasswordForm.controls.np.value,
                resetEmail: localStorage.getItem('email')
            })
                .subscribe((changePwdDetails) => {
                console.log('Put change password for admin users successful value returned >>', changePwdDetails);
                this.toastrService.success('Password Updated Successfully.');
            }, error => {
                console.log('Put change password for admin users in error >>', error);
                if (error.status == '401') {
                    this.toastrService.error('Password Updated Failed.');
                }
                else if (error.status == '200') {
                    this.toastrService.success('Password Updated Successfully.');
                    setTimeout(() => {
                        this.router.navigate(['/dashboard']);
                    }, 2000);
                }
            });
        }
    }
    ;
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], ChangePasswordComponent.prototype, "toastContainer", void 0);
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .dashboard {\n  margin: 0 21em !important;\n}\n:host .dashboard .common-actions {\n  margin: 2em 0 0 0;\n}\n:host .dashboard .common-actions h4 {\n  font-size: 1rem;\n}\n:host .dashboard .tiles {\n  font-size: 1em;\n  display: flex;\n  flex-flow: row wrap;\n}\n:host .dashboard .tiles .bx--tile {\n  min-width: 15em;\n  max-width: 20em;\n  margin: 0 2em 2em 0;\n  background-color: #ffffff;\n  border-top: 3px solid #333333;\n}\n:host .dashboard .tiles .bx--tile h4 {\n  margin: 0 0 1em 0;\n  font-size: 1rem;\n}\n:host .dashboard .tiles .bx--tile p {\n  font-size: 0.85rem;\n  margin: 0 0 2em 0;\n}\n:host .dashboard .tiles .bx--tile:nth-child(0) {\n  border-top-color: #d95673;\n}\n:host .dashboard .tiles .bx--tile:nth-child(1) {\n  border-top-color: #3abb34;\n}\n:host .dashboard .tiles .bx--tile:nth-child(2) {\n  border-top-color: #0c39f8;\n}\n:host .dashboard .tiles .bx--tile:nth-child(3) {\n  border-top-color: #086ab7;\n}\n:host .dashboard .tiles .bx--tile:nth-child(4) {\n  border-top-color: #bb3195;\n}\n:host .dashboard .tiles .bx--tile:nth-child(5) {\n  border-top-color: #aa84cc;\n}\n:host .dashboard .tiles .bx--tile:nth-child(6) {\n  border-top-color: #2375e5;\n}\n:host .dashboard .tiles .bx--tile:nth-child(7) {\n  border-top-color: #e8d8ed;\n}\n:host .dashboard .tiles .bx--tile:nth-child(8) {\n  border-top-color: #8b58c8;\n}\n:host .dashboard .tiles .bx--tile:nth-child(9) {\n  border-top-color: #13516e;\n}\n:host .dashboard .tiles .bx--tile:nth-child(10) {\n  border-top-color: #fc3d4e;\n}\n:host .dashboard .tiles .bx--tile:nth-child(11) {\n  border-top-color: #c58a77;\n}\n:host .dashboard .tiles .bx--tile:nth-child(12) {\n  border-top-color: #0487db;\n}\n:host .dashboard .tiles .bx--tile:nth-child(13) {\n  border-top-color: #0b9cba;\n}\n:host .dashboard .tiles .bx--tile:nth-child(14) {\n  border-top-color: #c712a4;\n}\n:host .dashboard .tiles .bx--tile:nth-child(15) {\n  border-top-color: #bda658;\n}\n:host .dashboard .tiles .bx--tile:nth-child(16) {\n  border-top-color: #de7960;\n}\n:host .dashboard .tiles .bx--tile:nth-child(17) {\n  border-top-color: #6c137d;\n}\n:host .dashboard .tiles .bx--tile:nth-child(18) {\n  border-top-color: #c49b01;\n}\n:host .dashboard .tiles .bx--tile:nth-child(19) {\n  border-top-color: #d6654f;\n}\n:host .dashboard .tiles .bx--tile:nth-child(20) {\n  border-top-color: #74c8ab;\n}\n:host .dashboard .tiles .bx--tile:nth-child(21) {\n  border-top-color: #40c0e9;\n}\n:host .dashboard .tiles .bx--tile:nth-child(22) {\n  border-top-color: #317b1c;\n}\n:host .dashboard .tiles .bx--tile:nth-child(23) {\n  border-top-color: #477a53;\n}\n:host .dashboard .tiles .bx--tile:nth-child(24) {\n  border-top-color: #dfce4d;\n}\n:host .dashboard .tiles .bx--tile:nth-child(25) {\n  border-top-color: #de86d2;\n}\n:host .dashboard .tiles .bx--tile:nth-child(26) {\n  border-top-color: #1543a9;\n}\n:host .dashboard .tiles .bx--tile:nth-child(27) {\n  border-top-color: #5281d9;\n}\n:host .dashboard .tiles .bx--tile:nth-child(28) {\n  border-top-color: #b50660;\n}\n:host .dashboard .tiles .bx--tile:nth-child(29) {\n  border-top-color: #22535f;\n}\n:host .dashboard .tiles .bx--tile:nth-child(30) {\n  border-top-color: #a9c3ab;\n}\n:host .dashboard .tiles .bx--tile:nth-child(31) {\n  border-top-color: #37d843;\n}\n:host .dashboard .tiles .bx--tile:nth-child(32) {\n  border-top-color: #add495;\n}\n:host .dashboard .tiles .bx--tile:nth-child(33) {\n  border-top-color: #11b27c;\n}\n:host .dashboard .tiles .bx--tile:nth-child(34) {\n  border-top-color: #1cba52;\n}\n:host .dashboard .tiles .bx--tile:nth-child(35) {\n  border-top-color: #6acdd8;\n}\n:host .dashboard .tiles .bx--tile:nth-child(36) {\n  border-top-color: #0d1215;\n}\n:host .dashboard .tiles .bx--tile:nth-child(37) {\n  border-top-color: #6fbc75;\n}\n:host .dashboard .tiles .bx--tile:nth-child(38) {\n  border-top-color: #84255d;\n}\n:host .dashboard .tiles .bx--tile:nth-child(39) {\n  border-top-color: #ae8853;\n}\n:host .dashboard .tiles .bx--tile:nth-child(40) {\n  border-top-color: #48d397;\n}\n:host .dashboard .tiles .bx--tile:nth-child(41) {\n  border-top-color: #0fce44;\n}\n:host .dashboard .tiles .bx--tile:nth-child(42) {\n  border-top-color: #93e753;\n}\n:host .dashboard .tiles .bx--tile:nth-child(43) {\n  border-top-color: #df342d;\n}\n:host .dashboard .tiles .bx--tile:nth-child(44) {\n  border-top-color: #991e72;\n}\n:host .dashboard .tiles .bx--tile:nth-child(45) {\n  border-top-color: #b614f7;\n}\n:host .dashboard .tiles .bx--tile:nth-child(46) {\n  border-top-color: #8e9e17;\n}\n:host .dashboard .tiles .bx--tile:nth-child(47) {\n  border-top-color: #c31f3b;\n}\n:host .dashboard .tiles .bx--tile:nth-child(48) {\n  border-top-color: #342702;\n}\n:host .dashboard .tiles .bx--tile:nth-child(49) {\n  border-top-color: #b72999;\n}\n:host .dashboard .tiles .bx--tile:nth-child(50) {\n  border-top-color: #9e266a;\n}\n:host .dashboard .tiles .bx--tile:nth-child(51) {\n  border-top-color: #47b410;\n}\n:host .dashboard .tiles .bx--tile:nth-child(52) {\n  border-top-color: #1fd93f;\n}\n:host .dashboard .tiles .bx--tile:nth-child(53) {\n  border-top-color: #d771d8;\n}\n:host .dashboard .tiles .bx--tile:nth-child(54) {\n  border-top-color: #d9e6ab;\n}\n:host .dashboard .tiles .bx--tile:nth-child(55) {\n  border-top-color: #95506e;\n}\n:host .dashboard .tiles .bx--tile:nth-child(56) {\n  border-top-color: #9d9220;\n}\n:host .dashboard .tiles .bx--tile:nth-child(57) {\n  border-top-color: #f9e269;\n}\n:host .dashboard .tiles .bx--tile:nth-child(58) {\n  border-top-color: #67a526;\n}\n:host .dashboard .tiles .bx--tile:nth-child(59) {\n  border-top-color: #f6c2c3;\n}\n:host .dashboard .tiles .bx--tile:nth-child(60) {\n  border-top-color: #a2cc21;\n}\n:host .dashboard .tiles .bx--tile:nth-child(61) {\n  border-top-color: #a2b8a7;\n}\n:host .dashboard .tiles .bx--tile:nth-child(62) {\n  border-top-color: #326d03;\n}\n:host .dashboard .tiles .bx--tile:nth-child(63) {\n  border-top-color: #dbeae6;\n}\n:host .dashboard .tiles .bx--tile:nth-child(64) {\n  border-top-color: #8e894e;\n}\n:host .dashboard .tiles .bx--tile:nth-child(65) {\n  border-top-color: #939b40;\n}\n:host .dashboard .tiles .bx--tile:nth-child(66) {\n  border-top-color: #3b58ca;\n}\n:host .dashboard .tiles .bx--tile:nth-child(67) {\n  border-top-color: #96bd9b;\n}\n:host .dashboard .tiles .bx--tile:nth-child(68) {\n  border-top-color: #e91402;\n}\n:host .dashboard .tiles .bx--tile:nth-child(69) {\n  border-top-color: #bd91a5;\n}\n:host .dashboard .tiles .bx--tile:nth-child(70) {\n  border-top-color: #8e7771;\n}\n:host .dashboard .tiles .bx--tile:nth-child(71) {\n  border-top-color: #6f901d;\n}\n:host .dashboard .tiles .bx--tile:nth-child(72) {\n  border-top-color: #36d50d;\n}\n:host .dashboard .tiles .bx--tile:nth-child(73) {\n  border-top-color: #b2cd0c;\n}\n:host .dashboard .tiles .bx--tile:nth-child(74) {\n  border-top-color: #675609;\n}\n:host .dashboard .tiles .bx--tile:nth-child(75) {\n  border-top-color: #88853b;\n}\n:host .dashboard .tiles .bx--tile:nth-child(76) {\n  border-top-color: #a67855;\n}\n:host .dashboard .tiles .bx--tile:nth-child(77) {\n  border-top-color: #82396e;\n}\n:host .dashboard .tiles .bx--tile:nth-child(78) {\n  border-top-color: #cd0741;\n}\n:host .dashboard .tiles .bx--tile:nth-child(79) {\n  border-top-color: #f2d257;\n}\n:host .dashboard .tiles .bx--tile:nth-child(80) {\n  border-top-color: #ce92d8;\n}\n:host .dashboard .tiles .bx--tile:nth-child(81) {\n  border-top-color: #9629eb;\n}\n:host .dashboard .tiles .bx--tile:nth-child(82) {\n  border-top-color: #f65b18;\n}\n:host .dashboard .tiles .bx--tile:nth-child(83) {\n  border-top-color: #a6ecdb;\n}\n:host .dashboard .tiles .bx--tile:nth-child(84) {\n  border-top-color: #d05b69;\n}\n:host .dashboard .tiles .bx--tile:nth-child(85) {\n  border-top-color: #9849cd;\n}\n:host .dashboard .tiles .bx--tile:nth-child(86) {\n  border-top-color: #591e48;\n}\n:host .dashboard .tiles .bx--tile:nth-child(87) {\n  border-top-color: #761194;\n}\n:host .dashboard .tiles .bx--tile:nth-child(88) {\n  border-top-color: #215b44;\n}\n:host .dashboard .tiles .bx--tile:nth-child(89) {\n  border-top-color: #8cb34b;\n}\n:host .dashboard .tiles .bx--tile:nth-child(90) {\n  border-top-color: #1772b8;\n}\n:host .dashboard .tiles .bx--tile:nth-child(91) {\n  border-top-color: #056e2e;\n}\n:host .dashboard .tiles .bx--tile:nth-child(92) {\n  border-top-color: #cd276c;\n}\n:host .dashboard .tiles .bx--tile:nth-child(93) {\n  border-top-color: #aa2099;\n}\n:host .dashboard .tiles .bx--tile:nth-child(94) {\n  border-top-color: #2531a7;\n}\n:host .dashboard .tiles .bx--tile:nth-child(95) {\n  border-top-color: #a3a3fb;\n}\n:host .dashboard .tiles .bx--tile:nth-child(96) {\n  border-top-color: #25242c;\n}\n:host .dashboard .tiles .bx--tile:nth-child(97) {\n  border-top-color: #b88f88;\n}\n:host .dashboard .tiles .bx--tile:nth-child(98) {\n  border-top-color: #6db8d5;\n}\n:host .dashboard .tiles .bx--tile:nth-child(99) {\n  border-top-color: #bc8af2;\n}\n:host .dashboard button {\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSx5QkFBQTtBQ0hSO0FESVE7RUFDSSxpQkFBQTtBQ0ZaO0FER1k7RUFDSSxlQUFBO0FDRGhCO0FESVE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRlo7QURHWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FDRGhCO0FERWdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQXBCO0FERWdCO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0FwQjtBRE9vQjtFQWxDaEIseUJBQUE7QUM4Qko7QURJb0I7RUFsQ2hCLHlCQUFBO0FDaUNKO0FEQ29CO0VBbENoQix5QkFBQTtBQ29DSjtBREZvQjtFQWxDaEIseUJBQUE7QUN1Q0o7QURMb0I7RUFsQ2hCLHlCQUFBO0FDMENKO0FEUm9CO0VBbENoQix5QkFBQTtBQzZDSjtBRFhvQjtFQWxDaEIseUJBQUE7QUNnREo7QURkb0I7RUFsQ2hCLHlCQUFBO0FDbURKO0FEakJvQjtFQWxDaEIseUJBQUE7QUNzREo7QURwQm9CO0VBbENoQix5QkFBQTtBQ3lESjtBRHZCb0I7RUFsQ2hCLHlCQUFBO0FDNERKO0FEMUJvQjtFQWxDaEIseUJBQUE7QUMrREo7QUQ3Qm9CO0VBbENoQix5QkFBQTtBQ2tFSjtBRGhDb0I7RUFsQ2hCLHlCQUFBO0FDcUVKO0FEbkNvQjtFQWxDaEIseUJBQUE7QUN3RUo7QUR0Q29CO0VBbENoQix5QkFBQTtBQzJFSjtBRHpDb0I7RUFsQ2hCLHlCQUFBO0FDOEVKO0FENUNvQjtFQWxDaEIseUJBQUE7QUNpRko7QUQvQ29CO0VBbENoQix5QkFBQTtBQ29GSjtBRGxEb0I7RUFsQ2hCLHlCQUFBO0FDdUZKO0FEckRvQjtFQWxDaEIseUJBQUE7QUMwRko7QUR4RG9CO0VBbENoQix5QkFBQTtBQzZGSjtBRDNEb0I7RUFsQ2hCLHlCQUFBO0FDZ0dKO0FEOURvQjtFQWxDaEIseUJBQUE7QUNtR0o7QURqRW9CO0VBbENoQix5QkFBQTtBQ3NHSjtBRHBFb0I7RUFsQ2hCLHlCQUFBO0FDeUdKO0FEdkVvQjtFQWxDaEIseUJBQUE7QUM0R0o7QUQxRW9CO0VBbENoQix5QkFBQTtBQytHSjtBRDdFb0I7RUFsQ2hCLHlCQUFBO0FDa0hKO0FEaEZvQjtFQWxDaEIseUJBQUE7QUNxSEo7QURuRm9CO0VBbENoQix5QkFBQTtBQ3dISjtBRHRGb0I7RUFsQ2hCLHlCQUFBO0FDMkhKO0FEekZvQjtFQWxDaEIseUJBQUE7QUM4SEo7QUQ1Rm9CO0VBbENoQix5QkFBQTtBQ2lJSjtBRC9Gb0I7RUFsQ2hCLHlCQUFBO0FDb0lKO0FEbEdvQjtFQWxDaEIseUJBQUE7QUN1SUo7QURyR29CO0VBbENoQix5QkFBQTtBQzBJSjtBRHhHb0I7RUFsQ2hCLHlCQUFBO0FDNklKO0FEM0dvQjtFQWxDaEIseUJBQUE7QUNnSko7QUQ5R29CO0VBbENoQix5QkFBQTtBQ21KSjtBRGpIb0I7RUFsQ2hCLHlCQUFBO0FDc0pKO0FEcEhvQjtFQWxDaEIseUJBQUE7QUN5Sko7QUR2SG9CO0VBbENoQix5QkFBQTtBQzRKSjtBRDFIb0I7RUFsQ2hCLHlCQUFBO0FDK0pKO0FEN0hvQjtFQWxDaEIseUJBQUE7QUNrS0o7QURoSW9CO0VBbENoQix5QkFBQTtBQ3FLSjtBRG5Jb0I7RUFsQ2hCLHlCQUFBO0FDd0tKO0FEdElvQjtFQWxDaEIseUJBQUE7QUMyS0o7QUR6SW9CO0VBbENoQix5QkFBQTtBQzhLSjtBRDVJb0I7RUFsQ2hCLHlCQUFBO0FDaUxKO0FEL0lvQjtFQWxDaEIseUJBQUE7QUNvTEo7QURsSm9CO0VBbENoQix5QkFBQTtBQ3VMSjtBRHJKb0I7RUFsQ2hCLHlCQUFBO0FDMExKO0FEeEpvQjtFQWxDaEIseUJBQUE7QUM2TEo7QUQzSm9CO0VBbENoQix5QkFBQTtBQ2dNSjtBRDlKb0I7RUFsQ2hCLHlCQUFBO0FDbU1KO0FEaktvQjtFQWxDaEIseUJBQUE7QUNzTUo7QURwS29CO0VBbENoQix5QkFBQTtBQ3lNSjtBRHZLb0I7RUFsQ2hCLHlCQUFBO0FDNE1KO0FEMUtvQjtFQWxDaEIseUJBQUE7QUMrTUo7QUQ3S29CO0VBbENoQix5QkFBQTtBQ2tOSjtBRGhMb0I7RUFsQ2hCLHlCQUFBO0FDcU5KO0FEbkxvQjtFQWxDaEIseUJBQUE7QUN3Tko7QUR0TG9CO0VBbENoQix5QkFBQTtBQzJOSjtBRHpMb0I7RUFsQ2hCLHlCQUFBO0FDOE5KO0FENUxvQjtFQWxDaEIseUJBQUE7QUNpT0o7QUQvTG9CO0VBbENoQix5QkFBQTtBQ29PSjtBRGxNb0I7RUFsQ2hCLHlCQUFBO0FDdU9KO0FEck1vQjtFQWxDaEIseUJBQUE7QUMwT0o7QUR4TW9CO0VBbENoQix5QkFBQTtBQzZPSjtBRDNNb0I7RUFsQ2hCLHlCQUFBO0FDZ1BKO0FEOU1vQjtFQWxDaEIseUJBQUE7QUNtUEo7QURqTm9CO0VBbENoQix5QkFBQTtBQ3NQSjtBRHBOb0I7RUFsQ2hCLHlCQUFBO0FDeVBKO0FEdk5vQjtFQWxDaEIseUJBQUE7QUM0UEo7QUQxTm9CO0VBbENoQix5QkFBQTtBQytQSjtBRDdOb0I7RUFsQ2hCLHlCQUFBO0FDa1FKO0FEaE9vQjtFQWxDaEIseUJBQUE7QUNxUUo7QURuT29CO0VBbENoQix5QkFBQTtBQ3dRSjtBRHRPb0I7RUFsQ2hCLHlCQUFBO0FDMlFKO0FEek9vQjtFQWxDaEIseUJBQUE7QUM4UUo7QUQ1T29CO0VBbENoQix5QkFBQTtBQ2lSSjtBRC9Pb0I7RUFsQ2hCLHlCQUFBO0FDb1JKO0FEbFBvQjtFQWxDaEIseUJBQUE7QUN1Uko7QURyUG9CO0VBbENoQix5QkFBQTtBQzBSSjtBRHhQb0I7RUFsQ2hCLHlCQUFBO0FDNlJKO0FEM1BvQjtFQWxDaEIseUJBQUE7QUNnU0o7QUQ5UG9CO0VBbENoQix5QkFBQTtBQ21TSjtBRGpRb0I7RUFsQ2hCLHlCQUFBO0FDc1NKO0FEcFFvQjtFQWxDaEIseUJBQUE7QUN5U0o7QUR2UW9CO0VBbENoQix5QkFBQTtBQzRTSjtBRDFRb0I7RUFsQ2hCLHlCQUFBO0FDK1NKO0FEN1FvQjtFQWxDaEIseUJBQUE7QUNrVEo7QURoUm9CO0VBbENoQix5QkFBQTtBQ3FUSjtBRG5Sb0I7RUFsQ2hCLHlCQUFBO0FDd1RKO0FEdFJvQjtFQWxDaEIseUJBQUE7QUMyVEo7QUR6Um9CO0VBbENoQix5QkFBQTtBQzhUSjtBRDVSb0I7RUFsQ2hCLHlCQUFBO0FDaVVKO0FEL1JvQjtFQWxDaEIseUJBQUE7QUNvVUo7QURsU29CO0VBbENoQix5QkFBQTtBQ3VVSjtBRC9SUTtFQUNHLGtCQUFBO0FDaVNYIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiByYW5kb20tYmdyKCl7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IocmFuZG9tKDI1NSksIHJhbmRvbSgyNTUpLCByYW5kb20oMjU1KSk7XHJcbn1cclxuOmhvc3Qge1xyXG4gICAgLmRhc2hib2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIxZW0gIWltcG9ydGFudDsgICAgICAgIFxyXG4gICAgICAgIC5jb21tb24tYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMmVtIDAgMCAwO1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbGVzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICAuYngtLXRpbGUge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNWVtO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJlbSAyZW0gMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRudW0tY29sb3JzOiAxMDA7XHJcbiAgICAgICAgICAgICAgICAkYmFzZS1jb2xvcjogIzk5NkI0RDtcclxuICAgICAgICAgICAgICAgICRzcGVjdHJ1bTogMzYwZGVnO1xyXG4gICAgICAgICAgICAgICAgJG9mZnNldDo1MGRlZztcclxuICAgICAgICAgICAgICAgIEBmb3IgJGkgZnJvbSAwIHRvICRudW0tY29sb3JzIHtcclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByYW5kb20tYmdyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IC5kYXNoYm9hcmQge1xuICBtYXJnaW46IDAgMjFlbSAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmRhc2hib2FyZCAuY29tbW9uLWFjdGlvbnMge1xuICBtYXJnaW46IDJlbSAwIDAgMDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLmNvbW1vbi1hY3Rpb25zIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuOmhvc3QgLmRhc2hib2FyZCAudGlsZXMge1xuICBmb250LXNpemU6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZSB7XG4gIG1pbi13aWR0aDogMTVlbTtcbiAgbWF4LXdpZHRoOiAyMGVtO1xuICBtYXJnaW46IDAgMmVtIDJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMzMzMztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZSBoNCB7XG4gIG1hcmdpbjogMCAwIDFlbSAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG46aG9zdCAuZGFzaGJvYXJkIC50aWxlcyAuYngtLXRpbGUgcCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG59XG46aG9zdCAuZGFzaGJvYXJkIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Q5NTY3Mztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjM2FiYjM0O1xufVxuOmhvc3QgLmRhc2hib2FyZCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwYzM5Zjg7XG59XG46aG9zdCAuZGFzaGJvYXJkIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzA4NmFiNztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYmIzMTk1O1xufVxuOmhvc3QgLmRhc2hib2FyZCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhYTg0Y2M7XG59XG46aG9zdCAuZGFzaGJvYXJkIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzIzNzVlNTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZThkOGVkO1xufVxuOmhvc3QgLmRhc2hib2FyZCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4YjU4Yzg7XG59XG46aG9zdCAuZGFzaGJvYXJkIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzEzNTE2ZTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZjM2Q0ZTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2M1OGE3Nztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzA0ODdkYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzBiOWNiYTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2M3MTJhNDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2JkYTY1ODtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2RlNzk2MDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzZjMTM3ZDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2M0OWIwMTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMTkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Q2NjU0Zjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzc0YzhhYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQwYzBlOTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzMxN2IxYztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQ3N2E1Mztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2RmY2U0ZDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2RlODZkMjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzE1NDNhOTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzUyODFkOTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2I1MDY2MDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMjkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzIyNTM1Zjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2E5YzNhYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzM3ZDg0Mztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2FkZDQ5NTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzExYjI3Yztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFjYmE1Mjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzZhY2RkODtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzBkMTIxNTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzZmYmM3NTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzg0MjU1ZDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMzkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2FlODg1Mztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQ4ZDM5Nztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzBmY2U0NDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzkzZTc1Mztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2RmMzQyZDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk5MWU3Mjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2I2MTRmNztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzhlOWUxNztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2MzMWYzYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzM0MjcwMjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNDkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2I3Mjk5OTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzllMjY2YTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQ3YjQxMDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFmZDkzZjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Q3NzFkODtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Q5ZTZhYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk1NTA2ZTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzlkOTIyMDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y5ZTI2OTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzY3YTUyNjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNTkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y2YzJjMztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2EyY2MyMTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2EyYjhhNztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzMyNmQwMztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2RiZWFlNjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzhlODk0ZTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzkzOWI0MDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzNiNThjYTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk2YmQ5Yjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U5MTQwMjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNjkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2JkOTFhNTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzhlNzc3MTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzZmOTAxZDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzM2ZDUwZDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2IyY2QwYztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzY3NTYwOTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzg4ODUzYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2E2Nzg1NTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzgyMzk2ZTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2NkMDc0MTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNzkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2YyZDI1Nztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2NlOTJkODtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk2MjllYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y2NWIxODtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2E2ZWNkYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2QwNWI2OTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk4NDljZDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzU5MWU0ODtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzc2MTE5NDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzIxNWI0NDtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoODkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzhjYjM0Yjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTApIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzE3NzJiODtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzA1NmUyZTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2NkMjc2Yztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTMpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2FhMjA5OTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzI1MzFhNztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2EzYTNmYjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTYpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzI1MjQyYztcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2I4OGY4ODtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzZkYjhkNTtcbn1cbjpob3N0IC5kYXNoYm9hcmQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOTkpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2JjOGFmMjtcbn1cbjpob3N0IC5kYXNoYm9hcmQgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);




let DashboardComponent = class DashboardComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] != 'admin') {
            this.http.get("http:/uiusermanagement-idbp.apps.postings.os.fyre.ibm.com/idbp/roleroutes?role=" + tokenValidateData["role"])
                .subscribe((roleRoutesData) => {
                console.log('Get role routes list call >>', roleRoutesData);
                localStorage.setItem('nonAccessibleRoutes', JSON.stringify(roleRoutesData[0].routes));
            }, error => {
                console.log('Get role routes list call in error >>', error.message);
            });
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dev-ops/dev-ops.component.scss":
/*!************************************************!*\
  !*** ./src/app/dev-ops/dev-ops.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rldi1vcHMvZGV2LW9wcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/dev-ops/dev-ops.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dev-ops/dev-ops.component.ts ***!
  \**********************************************/
/*! exports provided: DevOpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevOpsComponent", function() { return DevOpsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);












let DevOpsComponent = class DevOpsComponent {
    constructor(router, route, formBuilder, http, toastrService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.submitted = false;
        this.servicesDeploy = ['Payments', 'Accounts'];
        this.selectedService = [];
        this.sandboxEmpty = false;
        this.isLoading = false;
        this.isSuccess = false;
        this.envDeployedStatus = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.manEnvCBParam = params['env'];
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.nonEnvURL)
            .subscribe((nonEnvData) => {
            console.log('Get devops env call >>', nonEnvData);
            for (let i = 0; i < nonEnvData.length; i++) {
                if (this.manEnvCBParam == nonEnvData[i].name) {
                    this.name = nonEnvData[i].name;
                    this.desc = nonEnvData[i].description;
                    this.containerPlat = nonEnvData[i].containerPlatform;
                    this.containerReg = nonEnvData[i].containerRegistry;
                    this.apic = nonEnvData[i].apic;
                    this.cbs = nonEnvData[i].coreBanking;
                    this.not = nonEnvData[i].notification;
                    //packServiceModule = for Bank Services & services 
                    for (let j = 0; j < nonEnvData[i].packServiceModule.length; j++) {
                        this.bankServices = nonEnvData[i].packServiceModule[j].name;
                        this.services = nonEnvData[i].packServiceModule[j].services.map(x => x); //services is an Array so map func
                    }
                    //to check any env deployment status
                    if (nonEnvData[i].deployed) {
                        this.envDeployedStatus = true;
                        this.isSuccess = true;
                    }
                    else {
                        this.envDeployedStatus = false;
                        this.isSuccess = false;
                    }
                }
            } //for loop ended
            //for idbp-sandbox env, if empty sandbox update its value in the same record of table
            for (let i = 0; i < nonEnvData.length; i++) {
                if (this.manEnvCBParam == 'idbp-sandbox' && nonEnvData[i].deployed == false && nonEnvData[i].containerPlatform == undefined) {
                    console.log('manage env core banking param - sandbox >>', this.manEnvCBParam);
                    this.sandboxEmpty = true;
                }
            }
        }, error => {
            console.log('Get devops env data in error >>', error);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.mrContainerPlatformURL)
            .subscribe((platformList) => {
            console.log('Get container platforms list call >>', platformList);
            this.cPlatformList = platformList;
        }, error => {
            console.log('Get container platforms list call  in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.mrContainerRegistryURL)
            .subscribe((registryList) => {
            console.log('Get container registries list call >>', registryList);
            this.cRegistryList = registryList;
        }, error => {
            console.log('Get container registries list call  in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.mrAPICURL)
            .subscribe((apicList) => {
            console.log('Get apics list call >>', apicList);
            this.apicList = apicList;
        }, error => {
            console.log('Get apics list call  in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.mrBSDetailsURL)
            .subscribe((bsServices) => {
            console.log('Get banking standard services list call >>', bsServices);
            this.bankList = bsServices;
        }, error => {
            console.log('Get banking standard services call in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.mrNotificationURL)
            .subscribe((notifications) => {
            console.log('Get notifications list call >>', notifications);
            this.notificationList = notifications;
        }, error => {
            console.log('Get notifications list call in error >>', error.message);
        });
        this.sandboxEnvForm = this.formBuilder.group({
            name: [{ value: 'idbp-sandbox', disabled: true }],
            desc: [''],
            containerPlatform: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            containerRegistry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            apic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bankingServices: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            notification: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            services: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.editEnvForm = this.formBuilder.group({
            name: [{ value: this.name, disabled: true }],
            description: [{ value: this.desc, disabled: true }],
            containerPlatform: [{ value: this.containerPlat, disabled: true }],
            containerRegister: [{ value: this.containerReg, disabled: true }],
            apic: [{ value: this.apic, disabled: true }],
            bankService: [{ value: this.bankServices, disabled: true }],
            coreBank: [{ value: this.cbs, disabled: true }],
            notification: [{ value: this.not, disabled: true }],
            services: [{ value: this.services, disabled: true }]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.sandboxEnvForm.controls;
    }
    onServicesCboxChangeHandler(event) {
        console.log('selected >>', event.target.checked);
        console.log('Service value >>', event.target.value);
        if (event.target.checked) {
            this.selectedService.push(event.target.value);
        }
        else {
            if (this.selectedService.indexOf(event.target.value) > -1) {
                this.selectedService.splice(this.selectedService.indexOf(event.target.value), 1);
            }
        }
        console.log('final selectedService >>' + this.selectedService);
    }
    onSandboxEnvSubmit() {
        this.submitted = true;
        if (this.sandboxEnvForm.invalid) {
            return false;
        }
        else {
            this.updateSandboxEnv();
        }
    }
    updateSandboxEnv() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.nonEnvURL, {
            name: this.sandboxEnvForm.controls.name.value,
            desc: this.sandboxEnvForm.controls.desc.value,
            containerPlatform: this.sandboxEnvForm.controls.containerPlatform.value,
            containerRegistry: this.sandboxEnvForm.controls.containerRegistry.value,
            apic: this.sandboxEnvForm.controls.apic.value,
            bankingServices: this.sandboxEnvForm.controls.bankingServices.value,
            notification: this.sandboxEnvForm.controls.notification.value,
            services: this.selectedService
        })
            .subscribe((nonEnv) => {
            console.log('Put sandbox env successfully updated value returned >>', nonEnv);
            this.toastrService.success('Environment details Saved. Please click Deploy button in the following page.');
            setTimeout(() => {
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                this.router.navigate(['/dashboard/manageenvironment/publish'], { queryParams: { env: this.sandboxEnvForm.controls.name.value } });
            }, 4000);
        }, error => {
            console.log('Put sandbox env update in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Environment details Saved. Please click Deploy button in the following page.');
                setTimeout(() => {
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageenvironment/publish'], { queryParams: { env: this.sandboxEnvForm.controls.name.value } });
                }, 4000);
            }
            else {
                this.toastrService.error('Environment Details Error. Please contact administrator.');
            }
        });
    }
    ;
    tokenFunc() {
        this.token = document.getElementById('oc-token').value; // cast from getElementById() to HTMLInputElement for value
        console.log('token >>', this.token);
    }
    deployEnvironment(event) {
        event.target.disabled = true;
        this.isLoading = true;
        this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/nonenv?env=' + this.manEnvCBParam)
            .subscribe((deployEnv) => {
            console.log('Get deploy env success call >>', deployEnv);
            this.envDeployedStatus = true;
            this.toastrService.success('Environment deployed successfully.');
            this.isSuccess = true;
            this.isLoading = false;
        }, error => {
            console.log('Get deploy env call in error >>', error);
            this.isSuccess = true;
            this.isLoading = false;
            this.envDeployedStatus = true;
            this.toastrService.success('Environment deployed successfully.');
            //this.envDeployedStatus = false;
            //this.toastrService.error('Deployment failed. Please contact administrator.');
            // this.isSuccess = false;
            // this.isLoading = false;
        });
    } // end of deployEnvironment() function
    deleteEnvironment(event) {
        event.target.disabled = true;
        this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/deleteenv?env=' + this.manEnvCBParam + '&openshifttoken=' + this.token)
            .subscribe((deleteEnv) => {
            console.log('Get env deleted call successfully returned >>', deleteEnv);
            this.toastrService.success('Environment deleted successfully.');
            setTimeout(() => {
                this.router.navigate(['/dashboard/manageenvironment']);
            }, 4000);
        }, error => {
            console.log('Get delete environment call in error >>', error);
            this.toastrService.success('Environment deleted successfully.');
            //this.toastrService.error('Deletion failed. Please contact administrator.');
            setTimeout(() => {
                this.router.navigate(['/dashboard/manageenvironment']);
            }, 4000);
        });
    }
};
DevOpsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], DevOpsComponent.prototype, "toastContainer", void 0);
DevOpsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dev-ops',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dev-ops.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dev-ops/dev-ops.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dev-ops.component.scss */ "./src/app/dev-ops/dev-ops.component.scss")).default]
    })
], DevOpsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  display: flex;\n  padding: 1em 4em 0.3em 4em;\n  margin: -3.5em 0 0 0;\n}\nfooter div.copyright {\n  margin-right: auto;\n  margin-left: 20px;\n  flex-grow: 1;\n}\nfooter .powered-by {\n  flex: 0 0 auto;\n  display: flex;\n  flex-flow: row nowrap;\n  align-content: center;\n}\nfooter .powered-by span {\n  margin-right: 1em;\n  display: inline-block;\n  align-self: center;\n}\nfooter .powered-by .ibm-footer-logo {\n  display: inline-block;\n  background: url('ibm_2x.s8.png') no-repeat;\n  background-size: contain;\n  width: 66px;\n  height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNFUjtBRERRO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDR1o7QUREUTtFQUNJLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxZW0gNGVtIDAuM2VtIDRlbTtcclxuICAgIG1hcmdpbjogIC0zLjVlbSAwIDAgMDtcclxuICAgIGRpdi5jb3B5cmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgICAucG93ZXJlZC1ieSB7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pYm0tZm9vdGVyLWxvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9pYm1fMnguczgucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMWVtIDRlbSAwLjNlbSA0ZW07XG4gIG1hcmdpbjogLTMuNWVtIDAgMCAwO1xufVxuZm9vdGVyIGRpdi5jb3B5cmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5mb290ZXIgLnBvd2VyZWQtYnkge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5mb290ZXIgLnBvd2VyZWQtYnkgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmZvb3RlciAucG93ZXJlZC1ieSAuaWJtLWZvb3Rlci1sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2libV8yeC5zOC5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA2NnB4O1xuICBoZWlnaHQ6IDI2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



let FooterComponent = class FooterComponent {
    //don't remove below declaration
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  height: 100%;\n}\n:host .forgot-password-col {\n  height: 100%;\n}\n:host .forgot-password-left {\n  margin-right: auto;\n  flex-grow: 1;\n  padding: 2rem;\n}\n:host .forgot-password-left .ibm-logo {\n  background: url('ibm_2x.s8.png') no-repeat;\n  height: 36px;\n  margin: 0 0 2em 0;\n  background-size: contain;\n}\n:host .forgot-password-left .product-title {\n  display: flex;\n  align-items: center;\n  margin: 0 0 2em 0;\n}\n:host .forgot-password-left .product-title h4 {\n  margin-right: auto;\n  flex-grow: 1;\n}\n:host .forgot-password-left .forgot-password-form {\n  max-width: 30em;\n  margin: 6em auto 2em auto;\n}\n:host .forgot-password-left .forgot-password-form .button-section {\n  display: flex;\n  align-items: center;\n}\n:host .forgot-password-left .forgot-password-form .button-section button#submit {\n  flex: 0 0 auto;\n  min-width: 115px;\n  margin-left: auto;\n}\n:host .forgot-password-right {\n  flex: 0 0 35%;\n  margin-left: auto;\n  background-image: url('login-side-bg.jpg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFUjtBRERRO0VBQ0ksMENBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0daO0FERFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0daO0FERlk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNJaEI7QUREUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ0daO0FERlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNJaEI7QURIZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0twQjtBREFJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAuZm9yZ290LXBhc3N3b3JkLWNvbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmZvcmdvdC1wYXNzd29yZC1sZWZ0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgLmlibS1sb2dvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2libV8yeC5zOC5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3Jnb3QtcGFzc3dvcmQtZm9ybSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzBlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiA2ZW0gYXV0byAyZW0gYXV0bztcclxuICAgICAgICAgICAgLmJ1dHRvbi1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uI3N1Ym1pdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3Jnb3QtcGFzc3dvcmQtcmlnaHQge1xyXG4gICAgICAgIGZsZXg6IDAgMCAzNSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLXNpZGUtYmcuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5mb3Jnb3QtcGFzc3dvcmQtY29sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmZvcmdvdC1wYXNzd29yZC1sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDJyZW07XG59XG46aG9zdCAuZm9yZ290LXBhc3N3b3JkLWxlZnQgLmlibS1sb2dvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pYm1fMnguczgucG5nXCIpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuOmhvc3QgLmZvcmdvdC1wYXNzd29yZC1sZWZ0IC5wcm9kdWN0LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG59XG46aG9zdCAuZm9yZ290LXBhc3N3b3JkLWxlZnQgLnByb2R1Y3QtdGl0bGUgaDQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbn1cbjpob3N0IC5mb3Jnb3QtcGFzc3dvcmQtbGVmdCAuZm9yZ290LXBhc3N3b3JkLWZvcm0ge1xuICBtYXgtd2lkdGg6IDMwZW07XG4gIG1hcmdpbjogNmVtIGF1dG8gMmVtIGF1dG87XG59XG46aG9zdCAuZm9yZ290LXBhc3N3b3JkLWxlZnQgLmZvcmdvdC1wYXNzd29yZC1mb3JtIC5idXR0b24tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuZm9yZ290LXBhc3N3b3JkLWxlZnQgLmZvcmdvdC1wYXNzd29yZC1mb3JtIC5idXR0b24tc2VjdGlvbiBidXR0b24jc3VibWl0IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1pbi13aWR0aDogMTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgLmZvcmdvdC1wYXNzd29yZC1yaWdodCB7XG4gIGZsZXg6IDAgMCAzNSU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLXNpZGUtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);







let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(router, route, formBuilder, http, toastrService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.submitted = false;
        this.ctrl = {
            np: {
                label: 'Password',
                invalidText: ''
            }
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.resetPwdEmail = params['email'];
        });
        this.resetPasswordForm = this.formBuilder.group({
            np: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        for (const ctrl of Object.keys(this.ctrl)) {
            this.resetPasswordForm.controls[ctrl].valueChanges.subscribe(value => {
                this.validateInput(ctrl);
            });
        }
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.resetPasswordForm.controls;
    }
    validateInput(ctrl) {
        const field = this.resetPasswordForm.controls[ctrl];
        if (!field.errors || !Object.keys(field.errors).length) {
            return;
        }
        for (const err of Object.keys(field.errors)) {
            this.checkErrorCase(ctrl, err);
        }
    }
    checkErrorCase(ctrlName, err) {
        const field = this.resetPasswordForm.controls[ctrlName];
        switch (err) {
            case 'required':
                this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} is required`;
                break;
            case 'minlength':
                this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} must be at least ${field.errors.minlength.requiredLength} characters`;
                break;
        }
    }
    onResetPasswordSubmit() {
        this.submitted = true;
        if (this.resetPasswordForm.invalid) {
            return false;
        }
        else {
            if ((this.resetPasswordForm.controls.np.value == this.resetPasswordForm.controls.cp.value)) {
                this.resetPassword();
            }
            else {
                this.toastrService.error('Password doesn\'t match.');
            }
        }
    }
    resetPassword() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.adminURL, {
            np: this.resetPasswordForm.controls.np.value,
            resetEmail: this.resetPwdEmail
        })
            .subscribe((resetPwdDetails) => {
            console.log('Put reset password successful value returned >>', resetPwdDetails);
            this.toastrService.success('Password Updated Successfully.');
        }, error => {
            console.log('Put reset password in error >>', error);
            if (error.status == '401') {
                this.toastrService.error('Password Update Failed.');
            }
            else if (error.status == '200') {
                this.toastrService.success('Password Updated Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000);
            }
        });
    }
    ;
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], ForgotPasswordComponent.prototype, "toastContainer", void 0);
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/get-email-notifications/get-email-notifications.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/get-email-notifications/get-email-notifications.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".idbp {\n  margin: 20px 0px 20px 950px;\n}\n\np {\n  margin-left: 350px;\n  margin-top: 30px;\n  margin-bottom: 15px;\n}\n\n/* Modal */\n\n.fade {\n  margin: 20px 0 0 15px;\n}\n\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LWVtYWlsLW5vdGlmaWNhdGlvbnMvTjpcXEJhbmtDb25uZWN0X0lEQlBfVGVjaFZpdGFsaXR5X0dpdFxcaWRicC1hbmd1bGFyL3NyY1xcYXBwXFxnZXQtZW1haWwtbm90aWZpY2F0aW9uc1xcZ2V0LWVtYWlsLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dldC1lbWFpbC1ub3RpZmljYXRpb25zL2dldC1lbWFpbC1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBLFVBQUE7O0FBQ0E7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQUk7RUFDRyxjQUFBO0FDRVAiLCJmaWxlIjoic3JjL2FwcC9nZXQtZW1haWwtbm90aWZpY2F0aW9ucy9nZXQtZW1haWwtbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZGJwIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjBweCA5NTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUwcHg7ICAgXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLyogTW9kYWwgKi9cclxuLmZhZGUge1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAxNXB4O1xyXG59XHJcbiAgXHJcbi5tb2RhbC1mb290ZXItYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbSAtMXJlbSAtMXJlbSAtMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgfVxyXG59IiwiLmlkYnAge1xuICBtYXJnaW46IDIwcHggMHB4IDIwcHggOTUwcHg7XG59XG5cbnAge1xuICBtYXJnaW4tbGVmdDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi8qIE1vZGFsICovXG4uZmFkZSB7XG4gIG1hcmdpbjogMjBweCAwIDAgMTVweDtcbn1cblxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xuICBtYXJnaW46IDFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiBidXR0b24ge1xuICBmbGV4OiAxIDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/get-email-notifications/get-email-notifications.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/get-email-notifications/get-email-notifications.component.ts ***!
  \******************************************************************************/
/*! exports provided: GetEmailNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEmailNotificationsComponent", function() { return GetEmailNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);









let GetEmailNotificationsComponent = class GetEmailNotificationsComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
        this.smtpTemp = false;
        this.smtpRoutesMatched = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.smtpURL)
            .subscribe((smtpServerList) => {
            console.log('Get smtp servers list call >>', smtpServerList);
            this.smtpsList = smtpServerList;
            if (this.smtpsList.length == []) {
                this.smtpTemp = false;
            }
            else {
                this.smtpTemp = true;
            }
        }, error => {
            console.log('Get smtp servers list call in error >>', error.message);
        });
        this.editEmailForm = this.formBuilder.group({
            serviceName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            host: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            port: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            secure: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/settings/listsmtpconfigure/createsmtp" == this.roleRoutesList[i]) {
                    this.smtpRoutesMatched = true;
                }
            }
        }
    }
    get f() {
        return this.editEmailForm.controls;
    }
    onEditEmailSubmit() {
        this.submitted = true;
        if (this.editEmailForm.invalid) {
            return;
        }
        else {
            this.editSmtp();
        }
    }
    editSmtp() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.smtpURL, {
            id: localStorage.getItem('smtpId'),
            servicename: this.editEmailForm.controls.serviceName.value,
            host: this.editEmailForm.controls.host.value,
            port: this.editEmailForm.controls.port.value,
            secure: this.editEmailForm.controls.secure.value,
            username: this.editEmailForm.controls.username.value,
            password: this.editEmailForm.controls.password.value
        })
            .subscribe((templateUpdated) => {
            console.log('Put smtp call successful value returned >>', templateUpdated);
            this.toastrService.success('SMTP Updated Successfully.');
        }, error => {
            console.log('Put smtp in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('SMTP Updated Successfully.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/settings/listsmtpconfigure']);
                }, 2000);
            }
            else {
                this.toastrService.error('Update incompleted. Please update the fields.');
            }
        });
    }
    onEditEmailNotification(id, servicename, host, port, secure) {
        localStorage.setItem('smtpId', id);
        localStorage.setItem('servicename', servicename);
        localStorage.setItem('host', host);
        localStorage.setItem('port', port);
        localStorage.setItem('secure', secure);
        this.servicename = localStorage.getItem('servicename');
        this.host = localStorage.getItem('host');
        this.port = localStorage.getItem('port');
        this.secure = localStorage.getItem('secure');
    }
};
GetEmailNotificationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], GetEmailNotificationsComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], GetEmailNotificationsComponent.prototype, "closeAddExpenseModal", void 0);
GetEmailNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-email-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-email-notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-email-notifications/get-email-notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-email-notifications.component.scss */ "./src/app/get-email-notifications/get-email-notifications.component.scss")).default]
    })
], GetEmailNotificationsComponent);



/***/ }),

/***/ "./src/app/get-templates/get-templates.component.scss":
/*!************************************************************!*\
  !*** ./src/app/get-templates/get-templates.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3, p {\n  margin-left: 340px;\n  margin-top: 30px;\n}\n\n/* Modal */\n\n.fade {\n  margin: 90px 0 0 15px;\n}\n\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LXRlbXBsYXRlcy9OOlxcQmFua0Nvbm5lY3RfSURCUF9UZWNoVml0YWxpdHlfR2l0XFxpZGJwLWFuZ3VsYXIvc3JjXFxhcHBcXGdldC10ZW1wbGF0ZXNcXGdldC10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dldC10ZW1wbGF0ZXMvZ2V0LXRlbXBsYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQSxVQUFBOztBQUNBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0csY0FBQTtBQ0VQIiwiZmlsZSI6InNyYy9hcHAvZ2V0LXRlbXBsYXRlcy9nZXQtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMsIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM0MHB4OyAgIFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLyogTW9kYWwgKi9cclxuLmZhZGUge1xyXG4gICAgbWFyZ2luOiA5MHB4IDAgMCAxNXB4O1xyXG59XHJcbiAgXHJcbi5tb2RhbC1mb290ZXItYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbSAtMXJlbSAtMXJlbSAtMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgfVxyXG59IiwiaDMsIHAge1xuICBtYXJnaW4tbGVmdDogMzQwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi8qIE1vZGFsICovXG4uZmFkZSB7XG4gIG1hcmdpbjogOTBweCAwIDAgMTVweDtcbn1cblxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xuICBtYXJnaW46IDFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiBidXR0b24ge1xuICBmbGV4OiAxIDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/get-templates/get-templates.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/get-templates/get-templates.component.ts ***!
  \**********************************************************/
/*! exports provided: GetTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTemplatesComponent", function() { return GetTemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);







let GetTemplatesComponent = class GetTemplatesComponent {
    constructor(formBuilder, http, toastrService, breadcrumbService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
        this.templateTemp = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.templateURL)
            .subscribe((emailTemplateList) => {
            console.log('Get email template list call >>', emailTemplateList);
            this.templateList = emailTemplateList;
            if (this.templateList.length == []) {
                this.templateTemp = false;
            }
            else {
                this.templateTemp = true;
            }
        }, error => {
            console.log('Get email template call in error >>', error.message);
        });
        this.editEmailTemplateForm = this.formBuilder.group({
            subject: [{ value: this.subject }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            body: [{ value: this.body }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.editEmailTemplateForm.controls;
    }
    onEditEmailTemplateSubmit() {
        this.submitted = true;
        if (this.editEmailTemplateForm.invalid) {
            return false;
        }
        else {
            this.editTemplate();
        }
    }
    editTemplate() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.templateURL, {
            id: localStorage.getItem('templateId'),
            subject: this.editEmailTemplateForm.controls.subject.value,
            body: this.editEmailTemplateForm.controls.body.value
        })
            .subscribe((templateUpdated) => {
            console.log('Put email template call successful value returned >>', templateUpdated);
            this.toastrService.success('Email Template Updated Successfully.');
        }, error => {
            console.log('Put email template call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Email Template Updated Successfully.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                }, 2000);
            }
            else {
                this.toastrService.error('Update incompleted. Please update all the fields.');
            }
        });
    }
    ;
    onEditTemplate(id, subject, body) {
        localStorage.setItem('templateId', id);
        localStorage.setItem('subject', subject);
        localStorage.setItem('body', body);
        this.subject = localStorage.getItem('subject');
        this.body = localStorage.getItem('body');
    }
};
GetTemplatesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastContainerDirective"], { static: true })
], GetTemplatesComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], GetTemplatesComponent.prototype, "closeAddExpenseModal", void 0);
GetTemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-templates',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-templates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-templates/get-templates.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-templates.component.scss */ "./src/app/get-templates/get-templates.component.scss")).default]
    })
], GetTemplatesComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-action-parent {\n  position: initial;\n}\n.header-action-parent::ng-deep .header-action-children {\n  background-color: #161616;\n  border-bottom: 1px solid #393939;\n  position: absolute;\n  top: 4em;\n  right: 0;\n  text-align: left;\n  min-width: 10em;\n  max-width: 20em;\n}\n.header-action-parent::ng-deep .header-action-children a.bx--header__menu-item {\n  line-height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFUjtBRERRO0VBQ0ksaUJBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWFjdGlvbi1wYXJlbnQge1xyXG4gICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAmOjpuZy1kZWVwIC5oZWFkZXItYWN0aW9uLWNoaWxkcmVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzkzOTM5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRlbTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTBlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwZW07XHJcbiAgICAgICAgYS5ieC0taGVhZGVyX19tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuaGVhZGVyLWFjdGlvbi1wYXJlbnQge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cbi5oZWFkZXItYWN0aW9uLXBhcmVudDo6bmctZGVlcCAuaGVhZGVyLWFjdGlvbi1jaGlsZHJlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzkzOTM5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNGVtO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWluLXdpZHRoOiAxMGVtO1xuICBtYXgtd2lkdGg6IDIwZW07XG59XG4uaGVhZGVyLWFjdGlvbi1wYXJlbnQ6Om5nLWRlZXAgLmhlYWRlci1hY3Rpb24tY2hpbGRyZW4gYS5ieC0taGVhZGVyX19tZW51LWl0ZW0ge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.userAction = false;
    }
    ngOnInit() { }
    logout() {
        localStorage.clear();
        this.authService.loggedIn = false;
        this.userAction = false;
        this.router.navigate(['/login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/idbp-create-tls-server/idbp-create-tls-server.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/idbp-create-tls-server/idbp-create-tls-server.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkYnAtY3JlYXRlLXRscy1zZXJ2ZXIvaWRicC1jcmVhdGUtdGxzLXNlcnZlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/idbp-create-tls-server/idbp-create-tls-server.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/idbp-create-tls-server/idbp-create-tls-server.component.ts ***!
  \****************************************************************************/
/*! exports provided: IdbpCreateTlsServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdbpCreateTlsServerComponent", function() { return IdbpCreateTlsServerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let IdbpCreateTlsServerComponent = class IdbpCreateTlsServerComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.tlsServerForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.tlsServerForm.controls;
    }
    onTLSServerSubmit() {
        this.submitted = true;
        if (this.tlsServerForm.invalid) {
            return false;
        }
        else {
            this.createTlsServerDetails();
        }
    }
    createTlsServerDetails() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.idbpTlsURL, {
            title: this.tlsServerForm.controls.title.value,
            name: this.tlsServerForm.controls.name.value,
            version: this.tlsServerForm.controls.version.value,
            type: this.tlsServerForm.controls.type.value
        })
            .subscribe((serverDetails) => {
            console.log('Post idbp TLS profile call successful value returned >>', serverDetails);
            this.toastrService.success('Idbp TLS Profile Data Saved Successfully.');
        }, error => {
            console.log('Post idbp TLS profile call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Idbp TLS Profile Data Saved Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/settings/tlsprofile']);
                }, 2000);
            }
            else {
                this.toastrService.error('Idbp TLS Server name is already taken.');
            }
        });
    }
    ;
};
IdbpCreateTlsServerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], IdbpCreateTlsServerComponent.prototype, "toastContainer", void 0);
IdbpCreateTlsServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idbp-create-tls-server',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./idbp-create-tls-server.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idbp-create-tls-server/idbp-create-tls-server.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./idbp-create-tls-server.component.scss */ "./src/app/idbp-create-tls-server/idbp-create-tls-server.component.scss")).default]
    })
], IdbpCreateTlsServerComponent);



/***/ }),

/***/ "./src/app/idbp-tls-profile/idbp-tls-profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/idbp-tls-profile/idbp-tls-profile.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".idbp {\n  margin: 20px 0px 20px 950px;\n}\n\n/* Modal */\n\n.fade {\n  margin: 90px 0 0 15px;\n}\n\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWRicC10bHMtcHJvZmlsZS9OOlxcQmFua0Nvbm5lY3RfSURCUF9UZWNoVml0YWxpdHlfR2l0XFxpZGJwLWFuZ3VsYXIvc3JjXFxhcHBcXGlkYnAtdGxzLXByb2ZpbGVcXGlkYnAtdGxzLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lkYnAtdGxzLXByb2ZpbGUvaWRicC10bHMtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUEsVUFBQTs7QUFDQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURBSTtFQUNHLGNBQUE7QUNFUCIsImZpbGUiOiJzcmMvYXBwL2lkYnAtdGxzLXByb2ZpbGUvaWRicC10bHMtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZGJwIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjBweCA5NTBweDtcclxufVxyXG5cclxuLyogTW9kYWwgKi9cclxuLmZhZGUge1xyXG4gICAgbWFyZ2luOiA5MHB4IDAgMCAxNXB4O1xyXG59XHJcbiAgXHJcbi5tb2RhbC1mb290ZXItYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbSAtMXJlbSAtMXJlbSAtMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgfVxyXG59IiwiLmlkYnAge1xuICBtYXJnaW46IDIwcHggMHB4IDIwcHggOTUwcHg7XG59XG5cbi8qIE1vZGFsICovXG4uZmFkZSB7XG4gIG1hcmdpbjogOTBweCAwIDAgMTVweDtcbn1cblxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xuICBtYXJnaW46IDFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiBidXR0b24ge1xuICBmbGV4OiAxIDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/idbp-tls-profile/idbp-tls-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/idbp-tls-profile/idbp-tls-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: IdbpTlsProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdbpTlsProfileComponent", function() { return IdbpTlsProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);









let IdbpTlsProfileComponent = class IdbpTlsProfileComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
        this.tlsTemp = false;
        this.tlsRoutesMatched = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.idbpTlsURL)
            .subscribe((tlsProfileList) => {
            console.log('Get idbp tls servers >>', tlsProfileList);
            this.tlsList = tlsProfileList;
            if (this.tlsList.length == []) {
                this.tlsTemp = false;
            }
            else {
                this.tlsTemp = true;
            }
        }, error => {
            console.log('Get idbp tls server in error >>', error.message);
        });
        this.editTlsForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/settings/tlsprofile/createtls" == this.roleRoutesList[i]) {
                    this.tlsRoutesMatched = true;
                }
            }
        }
    }
    get f() {
        return this.editTlsForm.controls;
    }
    onEditTlsSubmit() {
        this.submitted = true;
        if (this.editTlsForm.invalid) {
            return false;
        }
        else {
            this.editTlsServer();
        }
    }
    editTlsServer() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.idbpTlsURL, {
            id: localStorage.getItem('tlsId'),
            title: this.editTlsForm.controls.title.value,
            name: this.editTlsForm.controls.name.value,
            version: this.editTlsForm.controls.version.value,
            type: this.editTlsForm.controls.type.value
        })
            .subscribe((tlsUpdated) => {
            console.log('Put tls server call successful value returned >>', tlsUpdated);
            this.toastrService.success('Idbp TLS Profile Updated Successfully.');
        }, error => {
            console.log('Put tls server call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Idbp TLS Profile Updated Successfully.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/settings/tlsprofile']);
                }, 4000);
            }
            else {
                this.toastrService.error('Update incompleted. Please update all the fields.');
            }
        });
    }
    ;
    onEditTlsProfile(id, title, name, version) {
        localStorage.setItem('tlsId', id);
        localStorage.setItem('title', title);
        localStorage.setItem('name', name);
        localStorage.setItem('version', version);
        this.title = localStorage.getItem('title');
        this.name = localStorage.getItem('name');
        this.version = localStorage.getItem('version');
    }
    onDeleteTlsProfile(tlsId) {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.idbpTlsURL, { _id: tlsId })
            .subscribe((tlsDeleted) => {
            console.log('Delete TLS Profile call successful value returned >>', tlsDeleted);
        }, error => {
            console.log('Delete TLS Profile call in error >>', error);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/dashboard/settings/tlsprofile']);
        });
    }
};
IdbpTlsProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], IdbpTlsProfileComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], IdbpTlsProfileComponent.prototype, "closeAddExpenseModal", void 0);
IdbpTlsProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idbp-tls-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./idbp-tls-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idbp-tls-profile/idbp-tls-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./idbp-tls-profile.component.scss */ "./src/app/idbp-tls-profile/idbp-tls-profile.component.scss")).default]
    })
], IdbpTlsProfileComponent);



/***/ }),

/***/ "./src/app/idbp/idbp.component.scss":
/*!******************************************!*\
  !*** ./src/app/idbp/idbp.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".settings-tabs {\n  margin-left: 300px;\n}\n\n.mat-tab-nav-bar {\n  display: inline-block;\n}\n\n.idbp {\n  margin: 20px 0px 20px 883px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWRicC9OOlxcQmFua0Nvbm5lY3RfSURCUF9UZWNoVml0YWxpdHlfR2l0XFxpZGJwLWFuZ3VsYXIvc3JjXFxhcHBcXGlkYnBcXGlkYnAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lkYnAvaWRicC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2lkYnAvaWRicC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncy10YWJzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxufVxyXG5cclxuLm1hdC10YWItbmF2LWJhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pZGJwIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjBweCA4ODNweDtcclxufSIsIi5zZXR0aW5ncy10YWJzIHtcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xufVxuXG4ubWF0LXRhYi1uYXYtYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaWRicCB7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCA4ODNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/idbp/idbp.component.ts":
/*!****************************************!*\
  !*** ./src/app/idbp/idbp.component.ts ***!
  \****************************************/
/*! exports provided: IdbpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdbpComponent", function() { return IdbpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");


// import { MatToolbarModule } from '@angular/material/toolbar';
// import { Router } from '@angular/router';

let IdbpComponent = class IdbpComponent {
    //  activeLinkIndex = -1; 
    constructor(//private router: Router, 
    breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
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
        //   this.router.events.subscribe((res) => {
        //     this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        // });
    }
};
IdbpComponent.ctorParameters = () => [
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"] }
];
IdbpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idbp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./idbp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idbp/idbp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./idbp.component.scss */ "./src/app/idbp/idbp.component.scss")).default]
    })
], IdbpComponent);



/***/ }),

/***/ "./src/app/license/license.component.scss":
/*!************************************************!*\
  !*** ./src/app/license/license.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-check {\n  margin-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGljZW5zZS9OOlxcQmFua0Nvbm5lY3RfSURCUF9UZWNoVml0YWxpdHlfR2l0XFxpZGJwLWFuZ3VsYXIvc3JjXFxhcHBcXGxpY2Vuc2VcXGxpY2Vuc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpY2Vuc2UvbGljZW5zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9saWNlbnNlL2xpY2Vuc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jaGVjayB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufSIsIi5mb3JtLWNoZWNrIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/license/license.component.ts":
/*!**********************************************!*\
  !*** ./src/app/license/license.component.ts ***!
  \**********************************************/
/*! exports provided: LicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseComponent", function() { return LicenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);







let LicenseComponent = class LicenseComponent {
    constructor(router, formBuilder, http, cookieService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.cookieService = cookieService;
        this.submitted = false;
    }
    ngOnInit() {
        if (this.cookieService.get('license')) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/license']);
        }
        this.licenseForm = this.formBuilder.group({
            acceptTerms: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]]
        });
    }
    get f() {
        return this.licenseForm.controls;
    }
    onLicenseSubmit() {
        this.submitted = true;
        if (this.licenseForm.invalid) {
            return false;
        }
        else {
            this.acceptLicense();
        }
    }
    acceptLicense() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.licenseURL, {
            license: this.licenseForm.controls.acceptTerms.value
        })
            .subscribe((acceptedLicense) => {
            console.log('Post license call successful value returned >>', acceptedLicense);
        }, error => {
            console.log('Post license call in error >>', error);
            this.cookieService.set('license', error['message']);
            this.router.navigate(['/login']);
        });
    }
};
LicenseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
LicenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-license',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./license.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/license/license.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./license.component.scss */ "./src/app/license/license.component.scss")).default]
    })
], LicenseComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  height: 100%;\n}\n:host .login-col {\n  height: 100%;\n}\n:host .login-left {\n  margin-right: auto;\n  flex-grow: 1;\n  padding: 2rem;\n}\n:host .login-left .ibm-logo {\n  background: url('ibm_2x.s8.png') no-repeat;\n  height: 36px;\n  margin: 0 0 2em 0;\n  background-size: contain;\n}\n:host .login-left .product-title {\n  display: flex;\n  align-items: center;\n  margin: 0 0 2em 0;\n}\n:host .login-left .product-title h4 {\n  margin-right: auto;\n  flex-grow: 1;\n}\n:host .login-left .product-title #logIn {\n  flex: 0 0 auto;\n  min-width: 175px;\n  margin-left: auto;\n}\n:host .login-left .login-form {\n  max-width: 30em;\n  margin: 6em auto 2em auto;\n}\n:host .login-left .login-form .button-section {\n  display: flex;\n  align-items: center;\n}\n:host .login-left .login-form .button-section a#forgotPassword {\n  margin-right: auto;\n  flex-grow: 1;\n}\n:host .login-left .login-form .button-section button#submit {\n  flex: 0 0 auto;\n  min-width: 115px;\n  margin-left: auto;\n}\n:host .login-right {\n  flex: 0 0 35%;\n  margin-left: auto;\n  background-image: url('login-side-bg.jpg');\n  background-size: cover;\n}\n/* Modal */\n.fade {\n  margin: 90px 0 0 15px;\n}\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vTjpcXEJhbmtDb25uZWN0X0lEQlBfVGVjaFZpdGFsaXR5X0dpdFxcaWRicC1hbmd1bGFyL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRVI7QUREUTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNHWjtBREZZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDSWhCO0FERlk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0loQjtBRERRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDR1o7QURGWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0loQjtBREhnQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0twQjtBREhnQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS3BCO0FEQUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDRVI7QURFQSxVQUFBO0FBQ0E7RUFDSSxxQkFBQTtBQ0NKO0FERUE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0csY0FBQTtBQ0VQIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmxvZ2luLWNvbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWxlZnQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAuaWJtLWxvZ28ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWJtXzJ4LnM4LnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2xvZ0luIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNzVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMGVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDZlbSBhdXRvIDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAuYnV0dG9uLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhI2ZvcmdvdFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uI3N1Ym1pdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb2dpbi1yaWdodCB7XHJcbiAgICAgICAgZmxleDogMCAwIDM1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tc2lkZS1iZy5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNb2RhbCAqL1xyXG4uZmFkZSB7XHJcbiAgICBtYXJnaW46IDkwcHggMCAwIDE1cHg7XHJcbn1cclxuICBcclxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAubG9naW4tY29sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmxvZ2luLWxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMnJlbTtcbn1cbjpob3N0IC5sb2dpbi1sZWZ0IC5pYm0tbG9nbyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWJtXzJ4LnM4LnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbjpob3N0IC5sb2dpbi1sZWZ0IC5wcm9kdWN0LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG59XG46aG9zdCAubG9naW4tbGVmdCAucHJvZHVjdC10aXRsZSBoNCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZmxleC1ncm93OiAxO1xufVxuOmhvc3QgLmxvZ2luLWxlZnQgLnByb2R1Y3QtdGl0bGUgI2xvZ0luIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1pbi13aWR0aDogMTc1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgLmxvZ2luLWxlZnQgLmxvZ2luLWZvcm0ge1xuICBtYXgtd2lkdGg6IDMwZW07XG4gIG1hcmdpbjogNmVtIGF1dG8gMmVtIGF1dG87XG59XG46aG9zdCAubG9naW4tbGVmdCAubG9naW4tZm9ybSAuYnV0dG9uLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmxvZ2luLWxlZnQgLmxvZ2luLWZvcm0gLmJ1dHRvbi1zZWN0aW9uIGEjZm9yZ290UGFzc3dvcmQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbn1cbjpob3N0IC5sb2dpbi1sZWZ0IC5sb2dpbi1mb3JtIC5idXR0b24tc2VjdGlvbiBidXR0b24jc3VibWl0IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1pbi13aWR0aDogMTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgLmxvZ2luLXJpZ2h0IHtcbiAgZmxleDogMCAwIDM1JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tc2lkZS1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi8qIE1vZGFsICovXG4uZmFkZSB7XG4gIG1hcmdpbjogOTBweCAwIDAgMTVweDtcbn1cblxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xuICBtYXJnaW46IDFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiBidXR0b24ge1xuICBmbGV4OiAxIDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);












let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, http, toastrService, authService, cookieService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.submitted = false;
        this.ctrl = {
            email: {
                invalidText: ''
            },
            password: {
                invalidText: ''
            },
            fpEmail: {
                invalidText: ''
            }
        };
    }
    ngOnInit() {
        if (this.cookieService.get('license')) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/license']);
        }
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            role: ['admin', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.loginForm.controls.email.valueChanges.subscribe(value => {
            this.validateInput('email', this.loginForm.controls.email.errors);
        });
        this.loginForm.controls.password.valueChanges.subscribe(value => {
            this.validateInput('password', this.loginForm.controls.password.errors);
        });
        this.forgotPasswordForm = this.formBuilder.group({
            fpEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
        this.forgotPasswordForm.controls.fpEmail.valueChanges.subscribe(value => {
            this.validateInput('fpEmail', this.forgotPasswordForm.controls.fpEmail.errors);
        });
        this.toastrService.overlayContainer = this.toastContainer;
        if (localStorage.getItem('jwt')) {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    get f() {
        return this.loginForm.controls;
    }
    get fp() {
        return this.forgotPasswordForm.controls;
    }
    validateInput(type, ctrlErrors) {
        if (!ctrlErrors) {
            return;
        }
        switch (type) {
            case 'email':
                if (ctrlErrors.required) {
                    this.ctrl.email.invalidText = 'Email is required';
                }
                else if (ctrlErrors.email) {
                    this.ctrl.email.invalidText = 'Email must be a valid email address';
                }
                else {
                    this.ctrl.email.invalidText = '';
                }
                break;
            case 'password':
                if (ctrlErrors.required) {
                    this.ctrl.password.invalidText = 'Password is required';
                }
                else {
                    this.ctrl.email.invalidText = '';
                }
                break;
            case 'fpEmail':
                if (ctrlErrors.required) {
                    this.ctrl.fpEmail.invalidText = 'Email is required';
                }
                else if (ctrlErrors.fpEmail) {
                    this.ctrl.fpEmail.invalidText = 'Email must be a valid email address';
                }
                else {
                    this.ctrl.fpEmail.invalidText = '';
                }
                break;
        }
    }
    onLoginSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            for (const type of Object.keys(this.ctrl)) {
                this.validateInput(type, this.loginForm.controls[type].errors);
            }
        }
        else {
            this.login();
        }
    }
    login() {
        if (this.loginForm.controls.role.value == 'admin') {
            this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_9__.adminURL, {
                email: this.loginForm.controls.email.value,
                password: this.loginForm.controls.password.value
            })
                .subscribe((adminLogin) => {
                console.log('Post admin login call successful value returned in body >>', adminLogin);
                if (adminLogin["token"]) {
                    this.authService.loggedIn = true;
                    const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_8__(adminLogin["token"]);
                    console.log('Token Validate Data >>', tokenValidateData);
                    localStorage.setItem('jwt', adminLogin["token"]);
                    localStorage.setItem('email', adminLogin["email"]);
                    this.router.navigate(['/dashboard']);
                }
            }, error => {
                console.log('Post admin login error >>', error);
                if (error.status == '401') {
                    this.toastrService.error('Email or password is incorrect');
                }
                else {
                    this.toastrService.error('Account not activated. Please open your mail box to activate your account.');
                }
            });
        }
        else {
            this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_9__.nonAdminURL, {
                email: this.loginForm.controls.email.value,
                password: this.loginForm.controls.password.value
            })
                .subscribe((nonAdminLogin) => {
                console.log('Post non admin login call successful value returned in body >>', nonAdminLogin);
                if (nonAdminLogin["token"]) {
                    this.authService.loggedIn = true;
                    const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_8__(nonAdminLogin["token"]);
                    console.log('Token Validate Data >>', tokenValidateData);
                    localStorage.setItem('jwt', nonAdminLogin["token"]);
                    localStorage.setItem('email', nonAdminLogin["email"]);
                    localStorage.setItem('role', nonAdminLogin["role"]);
                    this.router.navigate(['/dashboard']);
                }
            }, error => {
                console.log('Post non admin login error >>', error);
                if (error.status == '401') {
                    this.toastrService.error('Email or password is incorrect');
                }
                else {
                    this.toastrService.error('Account not activated. Please open your mail box to activate your account.');
                }
            });
        }
    }
    onForgotPasswordSubmit() {
        this.submitted = true;
        if (this.forgotPasswordForm.invalid) {
            for (const type of Object.keys(this.ctrl)) {
                this.validateInput(type, this.forgotPasswordForm.controls[type].errors);
            }
        }
        else {
            this.toastrService.success('If account exists, an email is sent with further instructions.');
            this.forgotPassword();
        }
    }
    forgotPassword() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_9__.mailURL, {
            fpEmail: this.forgotPasswordForm.controls.fpEmail.value,
            action: "password-reset"
        })
            .subscribe((forgotPasswordMail) => {
            console.log('Post forgot password mail service call successful value returned >>', forgotPasswordMail);
        }, error => {
            console.log('Post forgot password mail service call in error >>', error);
            setTimeout(() => {
                this.closeAddExpenseModal.nativeElement.click();
            }, 4000);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], LoginComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], LoginComponent.prototype, "closeAddExpenseModal", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/manage-env-config-details/manage-env-config-details.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/manage-env-config-details/manage-env-config-details.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1lbnYtY29uZmlnLWRldGFpbHMvbWFuYWdlLWVudi1jb25maWctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/manage-env-config-details/manage-env-config-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/manage-env-config-details/manage-env-config-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ManageEnvConfigDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEnvConfigDetailsComponent", function() { return ManageEnvConfigDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");



let ManageEnvConfigDetailsComponent = class ManageEnvConfigDetailsComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
    }
};
ManageEnvConfigDetailsComponent.ctorParameters = () => [
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"] }
];
ManageEnvConfigDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-env-config-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-env-config-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-env-config-details/manage-env-config-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-env-config-details.component.scss */ "./src/app/manage-env-config-details/manage-env-config-details.component.scss")).default]
    })
], ManageEnvConfigDetailsComponent);



/***/ }),

/***/ "./src/app/manage-environment-create/manage-environment-create.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/manage-environment-create/manage-environment-create.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1lbnZpcm9ubWVudC1jcmVhdGUvbWFuYWdlLWVudmlyb25tZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/manage-environment-create/manage-environment-create.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/manage-environment-create/manage-environment-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ManageEnvironmentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEnvironmentCreateComponent", function() { return ManageEnvironmentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);














let ManageEnvironmentCreateComponent = class ManageEnvironmentCreateComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
        this.servicesDeploy = ['Payments', 'Accounts'];
        this.selectedService = [];
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrContainerPlatformURL)
            .subscribe((platformData) => {
            console.log('Get container platforms list call >>', platformData);
            this.cPlatformList = platformData;
        }, error => {
            console.log('Get container platforms list call  in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrContainerRegistryURL)
            .subscribe((registryData) => {
            console.log('Get container registries list call >>', registryData);
            this.cRegistryList = registryData;
        }, error => {
            console.log('Get container registries list call  in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrAPICURL)
            .subscribe((apicData) => {
            console.log('Get apics list call >>', apicData);
            this.apicList = apicData;
        }, error => {
            console.log('Get apics list call  in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrBSDetailsURL)
            .subscribe((bsServicesData) => {
            console.log('Get banking standard services list call >>', bsServicesData);
            this.bankList = bsServicesData;
        }, error => {
            console.log('Get banking standard services call in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.cbsIntegrationURL)
            .subscribe((cbsData) => {
            console.log('Get cbs list call >>', cbsData);
            this.cbsList = cbsData;
        }, error => {
            console.log('Get cbs list call in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrNotificationURL)
            .subscribe((notificationsData) => {
            console.log('Get notifications list call >>', notificationsData);
            this.notificationList = notificationsData;
        }, error => {
            console.log('Get notifications list call in error >>', error.message);
        });
        this.nonEnvForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^sit$|^uat$|^prod$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
            desc: [''],
            containerPlatform: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            containerRegistry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            apic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bankingServices: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cbs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            notification: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            services: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.nonEnvForm.controls;
    }
    onServicesCboxChangeHandler(event) {
        console.log('selected >>', event.target.checked);
        console.log('Service value >>', event.target.value);
        if (event.target.checked) {
            this.selectedService.push(event.target.value);
        }
        else {
            if (this.selectedService.indexOf(event.target.value) > -1) {
                this.selectedService.splice(this.selectedService.indexOf(event.target.value), 1);
            }
        }
        console.log('final selectedService >>' + this.selectedService);
    }
    onNonEnvSubmit() {
        this.submitted = true;
        if (this.nonEnvForm.invalid) {
            return false;
        }
        else {
            this.createNonEnv();
        }
    }
    createNonEnv() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.nonEnvURL, {
            name: this.nonEnvForm.controls.name.value,
            desc: this.nonEnvForm.controls.desc.value,
            containerPlatform: this.nonEnvForm.controls.containerPlatform.value,
            containerRegistry: this.nonEnvForm.controls.containerRegistry.value,
            apic: this.nonEnvForm.controls.apic.value,
            bankingServices: this.nonEnvForm.controls.bankingServices.value,
            cbs: this.nonEnvForm.controls.cbs.value,
            notification: this.nonEnvForm.controls.notification.value,
            services: this.selectedService
        })
            .subscribe((nonEnv) => {
            console.log('Put non env successful value returned >>', nonEnv);
            this.toastrService.success('Environment details Saved. Please click Deploy button in the following page.');
        }, error => {
            console.log('Put non env in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Environment details Saved. Please click Deploy button in the following page.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/manageenvironment/publish'], { queryParams: { env: "idbp-" + this.nonEnvForm.controls.name.value } });
                }, 4000);
            }
            else {
                this.toastrService.error('Environment name is already taken.');
            }
        });
    }
    ;
};
ManageEnvironmentCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], ManageEnvironmentCreateComponent.prototype, "toastContainer", void 0);
ManageEnvironmentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-environment-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-environment-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-environment-create/manage-environment-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-environment-create.component.scss */ "./src/app/manage-environment-create/manage-environment-create.component.scss")).default]
    })
], ManageEnvironmentCreateComponent);



/***/ }),

/***/ "./src/app/manage-environment/manage-environment.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/manage-environment/manage-environment.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .manage-environment {\n  margin: 0 30em !important;\n}\n:host .manage-environment .common-actions {\n  margin: 2em 0 0 5em;\n}\n:host .manage-environment .common-actions h3 {\n  font-size: 1rem;\n  margin-bottom: 1.5em;\n}\n:host .manage-environment .tiles {\n  font-size: 1em;\n  display: flex;\n  flex-flow: row wrap;\n}\n:host .manage-environment .tiles .bx--tile {\n  min-width: 15em;\n  max-width: 20em;\n  margin: 0 2em 2em 0;\n  background-color: #ffffff;\n  border-top: 3px solid #333333;\n}\n:host .manage-environment .tiles .bx--tile h4 {\n  margin: 0 0 1em 0;\n  font-size: 1rem;\n}\n:host .manage-environment .tiles .bx--tile p {\n  font-size: 0.85rem;\n  margin: 0 0 2em 0;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(0) {\n  border-top-color: #d94df8;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(1) {\n  border-top-color: #82a4b6;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(2) {\n  border-top-color: #a80d5c;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(3) {\n  border-top-color: #044e65;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(4) {\n  border-top-color: #be0a6a;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(5) {\n  border-top-color: #c19cf0;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(6) {\n  border-top-color: #198edd;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(7) {\n  border-top-color: #ce6fc4;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(8) {\n  border-top-color: #425e4d;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(9) {\n  border-top-color: #ff2bb1;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(10) {\n  border-top-color: #4262cd;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(11) {\n  border-top-color: #429718;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(12) {\n  border-top-color: #7f3702;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(13) {\n  border-top-color: #acb6ca;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(14) {\n  border-top-color: #9c914e;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(15) {\n  border-top-color: #4b9fc4;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(16) {\n  border-top-color: #0a3740;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(17) {\n  border-top-color: #ea8252;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(18) {\n  border-top-color: #de20dd;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(19) {\n  border-top-color: #4e7946;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(20) {\n  border-top-color: #96cc5b;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(21) {\n  border-top-color: #ca9edd;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(22) {\n  border-top-color: #8e417e;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(23) {\n  border-top-color: #7294b6;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(24) {\n  border-top-color: #4dd88b;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(25) {\n  border-top-color: #981562;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(26) {\n  border-top-color: #2e26d9;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(27) {\n  border-top-color: #1a060a;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(28) {\n  border-top-color: #7cd7e2;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(29) {\n  border-top-color: #170ba7;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(30) {\n  border-top-color: #dbae6e;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(31) {\n  border-top-color: #e5f4d7;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(32) {\n  border-top-color: #db6fc7;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(33) {\n  border-top-color: #bf967d;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(34) {\n  border-top-color: #e25c36;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(35) {\n  border-top-color: #adf0f9;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(36) {\n  border-top-color: #616862;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(37) {\n  border-top-color: #3fafd4;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(38) {\n  border-top-color: #7f386b;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(39) {\n  border-top-color: #55d36d;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(40) {\n  border-top-color: #ec9c2f;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(41) {\n  border-top-color: #480424;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(42) {\n  border-top-color: #c70e0e;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(43) {\n  border-top-color: #321830;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(44) {\n  border-top-color: #4e1b1f;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(45) {\n  border-top-color: #1640b4;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(46) {\n  border-top-color: #4e66cb;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(47) {\n  border-top-color: #c969a1;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(48) {\n  border-top-color: #17bc89;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(49) {\n  border-top-color: #27740e;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(50) {\n  border-top-color: #669e15;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(51) {\n  border-top-color: #afb962;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(52) {\n  border-top-color: #9a9a42;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(53) {\n  border-top-color: #663f2f;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(54) {\n  border-top-color: #1ad7d7;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(55) {\n  border-top-color: #c46684;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(56) {\n  border-top-color: #9fabe5;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(57) {\n  border-top-color: #264588;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(58) {\n  border-top-color: #ad4a45;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(59) {\n  border-top-color: #ff3c49;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(60) {\n  border-top-color: #d01757;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(61) {\n  border-top-color: #722b7d;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(62) {\n  border-top-color: #130afd;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(63) {\n  border-top-color: #e8d776;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(64) {\n  border-top-color: #cbae4c;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(65) {\n  border-top-color: #ea3b62;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(66) {\n  border-top-color: #b10f6a;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(67) {\n  border-top-color: #dde61a;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(68) {\n  border-top-color: #941938;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(69) {\n  border-top-color: #710c85;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(70) {\n  border-top-color: #e4bfb7;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(71) {\n  border-top-color: #665e4a;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(72) {\n  border-top-color: #efeed0;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(73) {\n  border-top-color: #f5d56b;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(74) {\n  border-top-color: #9b43b2;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(75) {\n  border-top-color: #afdaf0;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(76) {\n  border-top-color: #050db9;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(77) {\n  border-top-color: #7c4397;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(78) {\n  border-top-color: #4835cb;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(79) {\n  border-top-color: #75aa05;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(80) {\n  border-top-color: #27366f;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(81) {\n  border-top-color: #5b78ff;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(82) {\n  border-top-color: #711588;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(83) {\n  border-top-color: #9aee7f;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(84) {\n  border-top-color: #6a81f2;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(85) {\n  border-top-color: #4dc5dd;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(86) {\n  border-top-color: #7f1d4d;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(87) {\n  border-top-color: #4a93c4;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(88) {\n  border-top-color: #d27bfd;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(89) {\n  border-top-color: #1d9056;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(90) {\n  border-top-color: #b1b321;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(91) {\n  border-top-color: #4da569;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(92) {\n  border-top-color: #0674df;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(93) {\n  border-top-color: #18b501;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(94) {\n  border-top-color: #c00721;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(95) {\n  border-top-color: #acd8f1;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(96) {\n  border-top-color: #099153;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(97) {\n  border-top-color: #61aec5;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(98) {\n  border-top-color: #b5b48b;\n}\n:host .manage-environment .tiles .bx--tile:nth-child(99) {\n  border-top-color: #0e125b;\n}\n.idbp {\n  margin: 20px 0px 20px 800px;\n}\nbutton {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWVudmlyb25tZW50L046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcbWFuYWdlLWVudmlyb25tZW50XFxtYW5hZ2UtZW52aXJvbm1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hbmFnZS1lbnZpcm9ubWVudC9tYW5hZ2UtZW52aXJvbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSx5QkFBQTtBQ0hSO0FESVE7RUFDSSxtQkFBQTtBQ0ZaO0FER1k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNEaEI7QURJUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGWjtBREdZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNEaEI7QURFZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNBcEI7QURFZ0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQXBCO0FET29CO0VBbkNoQix5QkFBQTtBQytCSjtBRElvQjtFQW5DaEIseUJBQUE7QUNrQ0o7QURDb0I7RUFuQ2hCLHlCQUFBO0FDcUNKO0FERm9CO0VBbkNoQix5QkFBQTtBQ3dDSjtBRExvQjtFQW5DaEIseUJBQUE7QUMyQ0o7QURSb0I7RUFuQ2hCLHlCQUFBO0FDOENKO0FEWG9CO0VBbkNoQix5QkFBQTtBQ2lESjtBRGRvQjtFQW5DaEIseUJBQUE7QUNvREo7QURqQm9CO0VBbkNoQix5QkFBQTtBQ3VESjtBRHBCb0I7RUFuQ2hCLHlCQUFBO0FDMERKO0FEdkJvQjtFQW5DaEIseUJBQUE7QUM2REo7QUQxQm9CO0VBbkNoQix5QkFBQTtBQ2dFSjtBRDdCb0I7RUFuQ2hCLHlCQUFBO0FDbUVKO0FEaENvQjtFQW5DaEIseUJBQUE7QUNzRUo7QURuQ29CO0VBbkNoQix5QkFBQTtBQ3lFSjtBRHRDb0I7RUFuQ2hCLHlCQUFBO0FDNEVKO0FEekNvQjtFQW5DaEIseUJBQUE7QUMrRUo7QUQ1Q29CO0VBbkNoQix5QkFBQTtBQ2tGSjtBRC9Db0I7RUFuQ2hCLHlCQUFBO0FDcUZKO0FEbERvQjtFQW5DaEIseUJBQUE7QUN3Rko7QURyRG9CO0VBbkNoQix5QkFBQTtBQzJGSjtBRHhEb0I7RUFuQ2hCLHlCQUFBO0FDOEZKO0FEM0RvQjtFQW5DaEIseUJBQUE7QUNpR0o7QUQ5RG9CO0VBbkNoQix5QkFBQTtBQ29HSjtBRGpFb0I7RUFuQ2hCLHlCQUFBO0FDdUdKO0FEcEVvQjtFQW5DaEIseUJBQUE7QUMwR0o7QUR2RW9CO0VBbkNoQix5QkFBQTtBQzZHSjtBRDFFb0I7RUFuQ2hCLHlCQUFBO0FDZ0hKO0FEN0VvQjtFQW5DaEIseUJBQUE7QUNtSEo7QURoRm9CO0VBbkNoQix5QkFBQTtBQ3NISjtBRG5Gb0I7RUFuQ2hCLHlCQUFBO0FDeUhKO0FEdEZvQjtFQW5DaEIseUJBQUE7QUM0SEo7QUR6Rm9CO0VBbkNoQix5QkFBQTtBQytISjtBRDVGb0I7RUFuQ2hCLHlCQUFBO0FDa0lKO0FEL0ZvQjtFQW5DaEIseUJBQUE7QUNxSUo7QURsR29CO0VBbkNoQix5QkFBQTtBQ3dJSjtBRHJHb0I7RUFuQ2hCLHlCQUFBO0FDMklKO0FEeEdvQjtFQW5DaEIseUJBQUE7QUM4SUo7QUQzR29CO0VBbkNoQix5QkFBQTtBQ2lKSjtBRDlHb0I7RUFuQ2hCLHlCQUFBO0FDb0pKO0FEakhvQjtFQW5DaEIseUJBQUE7QUN1Sko7QURwSG9CO0VBbkNoQix5QkFBQTtBQzBKSjtBRHZIb0I7RUFuQ2hCLHlCQUFBO0FDNkpKO0FEMUhvQjtFQW5DaEIseUJBQUE7QUNnS0o7QUQ3SG9CO0VBbkNoQix5QkFBQTtBQ21LSjtBRGhJb0I7RUFuQ2hCLHlCQUFBO0FDc0tKO0FEbklvQjtFQW5DaEIseUJBQUE7QUN5S0o7QUR0SW9CO0VBbkNoQix5QkFBQTtBQzRLSjtBRHpJb0I7RUFuQ2hCLHlCQUFBO0FDK0tKO0FENUlvQjtFQW5DaEIseUJBQUE7QUNrTEo7QUQvSW9CO0VBbkNoQix5QkFBQTtBQ3FMSjtBRGxKb0I7RUFuQ2hCLHlCQUFBO0FDd0xKO0FEckpvQjtFQW5DaEIseUJBQUE7QUMyTEo7QUR4Sm9CO0VBbkNoQix5QkFBQTtBQzhMSjtBRDNKb0I7RUFuQ2hCLHlCQUFBO0FDaU1KO0FEOUpvQjtFQW5DaEIseUJBQUE7QUNvTUo7QURqS29CO0VBbkNoQix5QkFBQTtBQ3VNSjtBRHBLb0I7RUFuQ2hCLHlCQUFBO0FDME1KO0FEdktvQjtFQW5DaEIseUJBQUE7QUM2TUo7QUQxS29CO0VBbkNoQix5QkFBQTtBQ2dOSjtBRDdLb0I7RUFuQ2hCLHlCQUFBO0FDbU5KO0FEaExvQjtFQW5DaEIseUJBQUE7QUNzTko7QURuTG9CO0VBbkNoQix5QkFBQTtBQ3lOSjtBRHRMb0I7RUFuQ2hCLHlCQUFBO0FDNE5KO0FEekxvQjtFQW5DaEIseUJBQUE7QUMrTko7QUQ1TG9CO0VBbkNoQix5QkFBQTtBQ2tPSjtBRC9Mb0I7RUFuQ2hCLHlCQUFBO0FDcU9KO0FEbE1vQjtFQW5DaEIseUJBQUE7QUN3T0o7QURyTW9CO0VBbkNoQix5QkFBQTtBQzJPSjtBRHhNb0I7RUFuQ2hCLHlCQUFBO0FDOE9KO0FEM01vQjtFQW5DaEIseUJBQUE7QUNpUEo7QUQ5TW9CO0VBbkNoQix5QkFBQTtBQ29QSjtBRGpOb0I7RUFuQ2hCLHlCQUFBO0FDdVBKO0FEcE5vQjtFQW5DaEIseUJBQUE7QUMwUEo7QUR2Tm9CO0VBbkNoQix5QkFBQTtBQzZQSjtBRDFOb0I7RUFuQ2hCLHlCQUFBO0FDZ1FKO0FEN05vQjtFQW5DaEIseUJBQUE7QUNtUUo7QURoT29CO0VBbkNoQix5QkFBQTtBQ3NRSjtBRG5Pb0I7RUFuQ2hCLHlCQUFBO0FDeVFKO0FEdE9vQjtFQW5DaEIseUJBQUE7QUM0UUo7QUR6T29CO0VBbkNoQix5QkFBQTtBQytRSjtBRDVPb0I7RUFuQ2hCLHlCQUFBO0FDa1JKO0FEL09vQjtFQW5DaEIseUJBQUE7QUNxUko7QURsUG9CO0VBbkNoQix5QkFBQTtBQ3dSSjtBRHJQb0I7RUFuQ2hCLHlCQUFBO0FDMlJKO0FEeFBvQjtFQW5DaEIseUJBQUE7QUM4Uko7QUQzUG9CO0VBbkNoQix5QkFBQTtBQ2lTSjtBRDlQb0I7RUFuQ2hCLHlCQUFBO0FDb1NKO0FEalFvQjtFQW5DaEIseUJBQUE7QUN1U0o7QURwUW9CO0VBbkNoQix5QkFBQTtBQzBTSjtBRHZRb0I7RUFuQ2hCLHlCQUFBO0FDNlNKO0FEMVFvQjtFQW5DaEIseUJBQUE7QUNnVEo7QUQ3UW9CO0VBbkNoQix5QkFBQTtBQ21USjtBRGhSb0I7RUFuQ2hCLHlCQUFBO0FDc1RKO0FEblJvQjtFQW5DaEIseUJBQUE7QUN5VEo7QUR0Um9CO0VBbkNoQix5QkFBQTtBQzRUSjtBRHpSb0I7RUFuQ2hCLHlCQUFBO0FDK1RKO0FENVJvQjtFQW5DaEIseUJBQUE7QUNrVUo7QUQvUm9CO0VBbkNoQix5QkFBQTtBQ3FVSjtBRGxTb0I7RUFuQ2hCLHlCQUFBO0FDd1VKO0FENVJBO0VBQ0ksMkJBQUE7QUMrUko7QUQ1UkE7RUFDSSxZQUFBO0FDK1JKIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLWVudmlyb25tZW50L21hbmFnZS1lbnZpcm9ubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiByYW5kb20tYmdyKCl7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IocmFuZG9tKDI1NSksIHJhbmRvbSgyNTUpLCByYW5kb20oMjU1KSk7XHJcbn1cclxuOmhvc3Qge1xyXG4gICAgLm1hbmFnZS1lbnZpcm9ubWVudCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDMwZW0gIWltcG9ydGFudDtcclxuICAgICAgICAuY29tbW9uLWFjdGlvbnMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJlbSAwIDAgNWVtO1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGlsZXMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgIC5ieC0tdGlsZSB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1ZW07XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMmVtIDJlbSAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJG51bS1jb2xvcnM6IDEwMDtcclxuICAgICAgICAgICAgICAgICRiYXNlLWNvbG9yOiAjOTk2QjREO1xyXG4gICAgICAgICAgICAgICAgJHNwZWN0cnVtOiAzNjBkZWc7XHJcbiAgICAgICAgICAgICAgICAkb2Zmc2V0OjUwZGVnO1xyXG4gICAgICAgICAgICAgICAgQGZvciAkaSBmcm9tIDAgdG8gJG51bS1jb2xvcnMge1xyXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhbmRvbS1iZ3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pZGJwe1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDgwMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59IiwiOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCB7XG4gIG1hcmdpbjogMCAzMGVtICFpbXBvcnRhbnQ7XG59XG46aG9zdCAubWFuYWdlLWVudmlyb25tZW50IC5jb21tb24tYWN0aW9ucyB7XG4gIG1hcmdpbjogMmVtIDAgMCA1ZW07XG59XG46aG9zdCAubWFuYWdlLWVudmlyb25tZW50IC5jb21tb24tYWN0aW9ucyBoMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG59XG46aG9zdCAubWFuYWdlLWVudmlyb25tZW50IC50aWxlcyB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlIHtcbiAgbWluLXdpZHRoOiAxNWVtO1xuICBtYXgtd2lkdGg6IDIwZW07XG4gIG1hcmdpbjogMCAyZW0gMmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzMzMzO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlIGg0IHtcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbjpob3N0IC5tYW5hZ2UtZW52aXJvbm1lbnQgLnRpbGVzIC5ieC0tdGlsZSBwIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbn1cbjpob3N0IC5tYW5hZ2UtZW52aXJvbm1lbnQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZDk0ZGY4O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4MmE0YjY7XG59XG46aG9zdCAubWFuYWdlLWVudmlyb25tZW50IC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2E4MGQ1Yztcbn1cbjpob3N0IC5tYW5hZ2UtZW52aXJvbm1lbnQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDQ0ZTY1O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiZTBhNmE7XG59XG46aG9zdCAubWFuYWdlLWVudmlyb25tZW50IC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2MxOWNmMDtcbn1cbjpob3N0IC5tYW5hZ2UtZW52aXJvbm1lbnQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMTk4ZWRkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjZTZmYzQ7XG59XG46aG9zdCAubWFuYWdlLWVudmlyb25tZW50IC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQyNWU0ZDtcbn1cbjpob3N0IC5tYW5hZ2UtZW52aXJvbm1lbnQgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmYyYmIxO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxMCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNDI2MmNkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxMSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNDI5NzE4O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxMikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjN2YzNzAyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxMykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYWNiNmNhO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxNCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOWM5MTRlO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxNSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGI5ZmM0O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxNikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMGEzNzQwO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxNykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZWE4MjUyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxOCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZGUyMGRkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgxOSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGU3OTQ2O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyMCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOTZjYzViO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyMSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjY2E5ZWRkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyMikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOGU0MTdlO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyMykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNzI5NGI2O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyNCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGRkODhiO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyNSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOTgxNTYyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyNikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMmUyNmQ5O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyNykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMWEwNjBhO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyOCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjN2NkN2UyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgyOSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMTcwYmE3O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzMCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZGJhZTZlO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzMSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZTVmNGQ3O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzMikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZGI2ZmM3O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzMykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYmY5NjdkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzNCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZTI1YzM2O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzNSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYWRmMGY5O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzNikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNjE2ODYyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzNykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjM2ZhZmQ0O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzOCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjN2YzODZiO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzOSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNTVkMzZkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0MCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZWM5YzJmO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0MSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNDgwNDI0O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0Mikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYzcwZTBlO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0Mykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMzIxODMwO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0NCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGUxYjFmO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0NSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMTY0MGI0O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0Nikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGU2NmNiO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0Nykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYzk2OWExO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0OCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMTdiYzg5O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg0OSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMjc3NDBlO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1MCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNjY5ZTE1O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1MSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYWZiOTYyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1Mikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOWE5YTQyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1Mykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNjYzZjJmO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1NCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMWFkN2Q3O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1NSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYzQ2Njg0O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1Nikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOWZhYmU1O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1Nykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMjY0NTg4O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1OCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYWQ0YTQ1O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg1OSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmYzYzQ5O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2MCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZDAxNzU3O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2MSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNzIyYjdkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2Mikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMTMwYWZkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2Mykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZThkNzc2O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2NCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjY2JhZTRjO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2NSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZWEzYjYyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2Nikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYjEwZjZhO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2Nykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZGRlNjFhO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2OCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOTQxOTM4O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2OSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNzEwYzg1O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3MCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZTRiZmI3O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3MSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNjY1ZTRhO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3Mikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZWZlZWQwO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3Mykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZjVkNTZiO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3NCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOWI0M2IyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3NSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYWZkYWYwO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3Nikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDUwZGI5O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3Nykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjN2M0Mzk3O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3OCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNDgzNWNiO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg3OSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNzVhYTA1O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4MCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMjczNjZmO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4MSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNWI3OGZmO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4Mikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNzExNTg4O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4Mykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOWFlZTdmO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4NCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNmE4MWYyO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4NSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGRjNWRkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4Nikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjN2YxZDRkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4Nykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGE5M2M0O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4OCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZDI3YmZkO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg4OSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMWQ5MDU2O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5MCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYjFiMzIxO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5MSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGRhNTY5O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5Mikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDY3NGRmO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5Mykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMThiNTAxO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5NCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYzAwNzIxO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5NSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYWNkOGYxO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5Nikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDk5MTUzO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5Nykge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNjFhZWM1O1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5OCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYjViNDhiO1xufVxuOmhvc3QgLm1hbmFnZS1lbnZpcm9ubWVudCAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5OSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMGUxMjViO1xufVxuXG4uaWRicCB7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCA4MDBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/manage-environment/manage-environment.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/manage-environment/manage-environment.component.ts ***!
  \********************************************************************/
/*! exports provided: ManageEnvironmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEnvironmentComponent", function() { return ManageEnvironmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);






let ManageEnvironmentComponent = class ManageEnvironmentComponent {
    constructor(http, breadcrumbService) {
        this.http = http;
        this.breadcrumbService = breadcrumbService;
        this.envRoutesMatched = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_5__.nonEnvURL)
            .subscribe((nonEnvs) => {
            console.log('Get non environment list call >>', nonEnvs);
            this.nonList = nonEnvs;
        }, error => {
            console.log('Get non environment list call in error >>', error.message);
        });
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/manageenvironment/createenv" == this.roleRoutesList[i]) {
                    this.envRoutesMatched = true;
                }
            }
        }
    }
};
ManageEnvironmentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"] }
];
ManageEnvironmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-environment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-environment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-environment/manage-environment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-environment.component.scss */ "./src/app/manage-environment/manage-environment.component.scss")).default]
    })
], ManageEnvironmentComponent);



/***/ }),

/***/ "./src/app/manage-resources/manage-resources.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/manage-resources/manage-resources.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".manage-resources-tabs {\n  margin-left: 400px;\n}\n\n.mat-tab-nav-bar {\n  display: inline-block;\n}\n\n.idbp {\n  margin: 20px 0px 20px 777px;\n}\n\n.bx--data-table {\n  margin-left: 610px !important;\n}\n\n/* Modal */\n\n.fade {\n  margin: 120px 0 0 15px;\n}\n\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXJlc291cmNlcy9OOlxcQmFua0Nvbm5lY3RfSURCUF9UZWNoVml0YWxpdHlfR2l0XFxpZGJwLWFuZ3VsYXIvc3JjXFxhcHBcXG1hbmFnZS1yZXNvdXJjZXNcXG1hbmFnZS1yZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hbmFnZS1yZXNvdXJjZXMvbWFuYWdlLXJlc291cmNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUEsVUFBQTs7QUFDQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURBSTtFQUNHLGNBQUE7QUNFUCIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1yZXNvdXJjZXMvbWFuYWdlLXJlc291cmNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5hZ2UtcmVzb3VyY2VzLXRhYnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYi1uYXYtYmFyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlkYnAge1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDc3N3B4O1xyXG59XHJcblxyXG4uYngtLWRhdGEtdGFibGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1vZGFsICovXHJcbi5mYWRlIHtcclxuICAgIG1hcmdpbjogMTIwcHggMCAwIDE1cHg7XHJcbn1cclxuICBcclxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICB9XHJcbn0iLCIubWFuYWdlLXJlc291cmNlcy10YWJzIHtcbiAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xufVxuXG4ubWF0LXRhYi1uYXYtYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaWRicCB7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCA3NzdweDtcbn1cblxuLmJ4LS1kYXRhLXRhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IDYxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIE1vZGFsICovXG4uZmFkZSB7XG4gIG1hcmdpbjogMTIwcHggMCAwIDE1cHg7XG59XG5cbi5tb2RhbC1mb290ZXItYnV0dG9uIHtcbiAgbWFyZ2luOiAxcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1vZGFsLWZvb3Rlci1idXR0b24gYnV0dG9uIHtcbiAgZmxleDogMSAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/manage-resources/manage-resources.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manage-resources/manage-resources.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageResourcesComponent", function() { return ManageResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);









let ManageResourcesComponent = class ManageResourcesComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.containerPlatformTemp = false;
        this.submitted = false;
        this.cPlatformRoutesMatched = false;
        this.navLinks = [
            {
                label: 'Container Platform',
                link: './createcontainerplatform',
                index: 0
            },
            {
                label: 'Container Registry',
                link: './containerregistry',
                index: 1
            },
            {
                label: 'APIC',
                link: './apic',
                index: 2
            },
            {
                label: 'Notification',
                link: './notification',
                index: 3
            }
        ];
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrContainerPlatformURL)
            .subscribe((containerPlatforms) => {
            console.log('Get container platform list call >>', containerPlatforms);
            this.containerPlatformList = containerPlatforms;
            if (this.containerPlatformList.length == []) {
                this.containerPlatformTemp = false;
            }
            else {
                this.containerPlatformTemp = true;
            }
        }, error => {
            console.log('Get container platform call in error >>', error.message);
        });
        this.editContainerPlatForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            domain: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            platformType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            token: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.toastrService.overlayContainer = this.toastContainer;
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/manageresources/createcontainerplatform" == this.roleRoutesList[i]) {
                    this.cPlatformRoutesMatched = true;
                }
            }
        }
    }
    get f() {
        return this.editContainerPlatForm.controls;
    }
    onEditContainerPlatformSubmit() {
        this.submitted = true;
        if (this.editContainerPlatForm.invalid) {
            return false;
        }
        else {
            this.editMrContainerPlatform();
        }
    }
    editMrContainerPlatform() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrContainerPlatformURL, {
            cPlatformId: localStorage.getItem('cPlatformId'),
            name: this.editContainerPlatForm.controls.name.value,
            domain: this.editContainerPlatForm.controls.domain.value,
            platformType: this.editContainerPlatForm.controls.platformType.value,
            address: this.editContainerPlatForm.controls.address.value,
            token: this.editContainerPlatForm.controls.token.value,
        })
            .subscribe((cPlatformUpdatedData) => {
            console.log('Put edit container platform call successful value returned >>', cPlatformUpdatedData);
            this.toastrService.success('Container Platform Data Updated Successfully.');
        }, error => {
            console.log('Put edit container platform call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Container Platform Data Updated Successfully.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageresources']);
                }, 4000);
            }
            else {
                this.toastrService.error('Update incompleted. Please update all the fields.');
            }
        });
    }
    ;
    onEditContainerPlatform(id, name, domain, address) {
        localStorage.setItem('cPlatformId', id);
        localStorage.setItem('cPlatformName', name);
        localStorage.setItem('cPlatformDomain', domain);
        localStorage.setItem('cPlatformAddress', address);
        this.name = localStorage.getItem('cPlatformName');
        this.domain = localStorage.getItem('cPlatformDomain');
        this.add = localStorage.getItem('cPlatformAddress');
    }
    onDeleteContainerPlatform(cPlatformId) {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrContainerPlatformURL, { _id: cPlatformId })
            .subscribe((cPlatformDeleted) => {
            console.log('Delete container platform call successful value returned >>', cPlatformDeleted);
        }, error => {
            console.log('Delete container platform call in error >>', error);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/dashboard/manageresources']);
        });
    }
};
ManageResourcesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], ManageResourcesComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], ManageResourcesComponent.prototype, "closeAddExpenseModal", void 0);
ManageResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-resources',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-resources.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-resources/manage-resources.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-resources.component.scss */ "./src/app/manage-resources/manage-resources.component.scss")).default]
    })
], ManageResourcesComponent);



/***/ }),

/***/ "./src/app/manage-services/manage-services.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/manage-services/manage-services.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .manage-services {\n  margin: 0 30em !important;\n}\n:host .manage-services .common-actions {\n  margin: 2em 0 0 5em;\n}\n:host .manage-services .common-actions h3 {\n  font-size: 1rem;\n  margin-bottom: 1.5em;\n}\n:host .manage-services .tiles {\n  font-size: 1em;\n  display: flex;\n  flex-flow: row wrap;\n}\n:host .manage-services .tiles .bx--tile {\n  min-width: 15em;\n  max-width: 20em;\n  margin: 0 2em 2em 0;\n  background-color: #ffffff;\n  border-top: 3px solid #333333;\n}\n:host .manage-services .tiles .bx--tile h4 {\n  margin: 0 0 1em 0;\n  font-size: 1rem;\n}\n:host .manage-services .tiles .bx--tile p {\n  font-size: 0.85rem;\n  margin: 0 0 2em 0;\n}\n:host .manage-services .tiles .bx--tile:nth-child(0) {\n  border-top-color: #3bf8ed;\n}\n:host .manage-services .tiles .bx--tile:nth-child(1) {\n  border-top-color: #d3e910;\n}\n:host .manage-services .tiles .bx--tile:nth-child(2) {\n  border-top-color: #f1b033;\n}\n:host .manage-services .tiles .bx--tile:nth-child(3) {\n  border-top-color: #ce85b3;\n}\n:host .manage-services .tiles .bx--tile:nth-child(4) {\n  border-top-color: #f6a851;\n}\n:host .manage-services .tiles .bx--tile:nth-child(5) {\n  border-top-color: #d39111;\n}\n:host .manage-services .tiles .bx--tile:nth-child(6) {\n  border-top-color: #650ab2;\n}\n:host .manage-services .tiles .bx--tile:nth-child(7) {\n  border-top-color: #d55687;\n}\n:host .manage-services .tiles .bx--tile:nth-child(8) {\n  border-top-color: #60c6d2;\n}\n:host .manage-services .tiles .bx--tile:nth-child(9) {\n  border-top-color: #0da31a;\n}\n:host .manage-services .tiles .bx--tile:nth-child(10) {\n  border-top-color: #626d87;\n}\n:host .manage-services .tiles .bx--tile:nth-child(11) {\n  border-top-color: #f4ea8d;\n}\n:host .manage-services .tiles .bx--tile:nth-child(12) {\n  border-top-color: #69a5fa;\n}\n:host .manage-services .tiles .bx--tile:nth-child(13) {\n  border-top-color: #57962e;\n}\n:host .manage-services .tiles .bx--tile:nth-child(14) {\n  border-top-color: #84c0e4;\n}\n:host .manage-services .tiles .bx--tile:nth-child(15) {\n  border-top-color: #772080;\n}\n:host .manage-services .tiles .bx--tile:nth-child(16) {\n  border-top-color: #07f0fb;\n}\n:host .manage-services .tiles .bx--tile:nth-child(17) {\n  border-top-color: #ca6b7c;\n}\n:host .manage-services .tiles .bx--tile:nth-child(18) {\n  border-top-color: #0a610b;\n}\n:host .manage-services .tiles .bx--tile:nth-child(19) {\n  border-top-color: #c28689;\n}\n:host .manage-services .tiles .bx--tile:nth-child(20) {\n  border-top-color: #f8e9b2;\n}\n:host .manage-services .tiles .bx--tile:nth-child(21) {\n  border-top-color: #b5dd61;\n}\n:host .manage-services .tiles .bx--tile:nth-child(22) {\n  border-top-color: #a26b2c;\n}\n:host .manage-services .tiles .bx--tile:nth-child(23) {\n  border-top-color: #b8cf27;\n}\n:host .manage-services .tiles .bx--tile:nth-child(24) {\n  border-top-color: #bd117c;\n}\n:host .manage-services .tiles .bx--tile:nth-child(25) {\n  border-top-color: #43a547;\n}\n:host .manage-services .tiles .bx--tile:nth-child(26) {\n  border-top-color: #88aca7;\n}\n:host .manage-services .tiles .bx--tile:nth-child(27) {\n  border-top-color: #9f95c5;\n}\n:host .manage-services .tiles .bx--tile:nth-child(28) {\n  border-top-color: #33d5a3;\n}\n:host .manage-services .tiles .bx--tile:nth-child(29) {\n  border-top-color: #edcfa1;\n}\n:host .manage-services .tiles .bx--tile:nth-child(30) {\n  border-top-color: #36a636;\n}\n:host .manage-services .tiles .bx--tile:nth-child(31) {\n  border-top-color: #4fe6e0;\n}\n:host .manage-services .tiles .bx--tile:nth-child(32) {\n  border-top-color: #1fb158;\n}\n:host .manage-services .tiles .bx--tile:nth-child(33) {\n  border-top-color: #b4c3bd;\n}\n:host .manage-services .tiles .bx--tile:nth-child(34) {\n  border-top-color: #c00201;\n}\n:host .manage-services .tiles .bx--tile:nth-child(35) {\n  border-top-color: #110e94;\n}\n:host .manage-services .tiles .bx--tile:nth-child(36) {\n  border-top-color: #d2806c;\n}\n:host .manage-services .tiles .bx--tile:nth-child(37) {\n  border-top-color: #e71bd5;\n}\n:host .manage-services .tiles .bx--tile:nth-child(38) {\n  border-top-color: #62cc3c;\n}\n:host .manage-services .tiles .bx--tile:nth-child(39) {\n  border-top-color: #e8b35c;\n}\n:host .manage-services .tiles .bx--tile:nth-child(40) {\n  border-top-color: #6f14ee;\n}\n:host .manage-services .tiles .bx--tile:nth-child(41) {\n  border-top-color: #c30717;\n}\n:host .manage-services .tiles .bx--tile:nth-child(42) {\n  border-top-color: #a718d8;\n}\n:host .manage-services .tiles .bx--tile:nth-child(43) {\n  border-top-color: #4d9043;\n}\n:host .manage-services .tiles .bx--tile:nth-child(44) {\n  border-top-color: #137d41;\n}\n:host .manage-services .tiles .bx--tile:nth-child(45) {\n  border-top-color: #641c6b;\n}\n:host .manage-services .tiles .bx--tile:nth-child(46) {\n  border-top-color: #306c72;\n}\n:host .manage-services .tiles .bx--tile:nth-child(47) {\n  border-top-color: #43edf3;\n}\n:host .manage-services .tiles .bx--tile:nth-child(48) {\n  border-top-color: #96a439;\n}\n:host .manage-services .tiles .bx--tile:nth-child(49) {\n  border-top-color: #8af533;\n}\n:host .manage-services .tiles .bx--tile:nth-child(50) {\n  border-top-color: #dcc2d6;\n}\n:host .manage-services .tiles .bx--tile:nth-child(51) {\n  border-top-color: #3bcf36;\n}\n:host .manage-services .tiles .bx--tile:nth-child(52) {\n  border-top-color: #6b6e47;\n}\n:host .manage-services .tiles .bx--tile:nth-child(53) {\n  border-top-color: #e566c6;\n}\n:host .manage-services .tiles .bx--tile:nth-child(54) {\n  border-top-color: #9f2d8e;\n}\n:host .manage-services .tiles .bx--tile:nth-child(55) {\n  border-top-color: #9b1384;\n}\n:host .manage-services .tiles .bx--tile:nth-child(56) {\n  border-top-color: #cfc937;\n}\n:host .manage-services .tiles .bx--tile:nth-child(57) {\n  border-top-color: #e63edb;\n}\n:host .manage-services .tiles .bx--tile:nth-child(58) {\n  border-top-color: #03f236;\n}\n:host .manage-services .tiles .bx--tile:nth-child(59) {\n  border-top-color: #42aed1;\n}\n:host .manage-services .tiles .bx--tile:nth-child(60) {\n  border-top-color: #40e2e6;\n}\n:host .manage-services .tiles .bx--tile:nth-child(61) {\n  border-top-color: #22109e;\n}\n:host .manage-services .tiles .bx--tile:nth-child(62) {\n  border-top-color: #e09769;\n}\n:host .manage-services .tiles .bx--tile:nth-child(63) {\n  border-top-color: #ab60ea;\n}\n:host .manage-services .tiles .bx--tile:nth-child(64) {\n  border-top-color: #0395d7;\n}\n:host .manage-services .tiles .bx--tile:nth-child(65) {\n  border-top-color: #7146eb;\n}\n:host .manage-services .tiles .bx--tile:nth-child(66) {\n  border-top-color: #28e8cf;\n}\n:host .manage-services .tiles .bx--tile:nth-child(67) {\n  border-top-color: #108cdb;\n}\n:host .manage-services .tiles .bx--tile:nth-child(68) {\n  border-top-color: #01077d;\n}\n:host .manage-services .tiles .bx--tile:nth-child(69) {\n  border-top-color: #fd1d83;\n}\n:host .manage-services .tiles .bx--tile:nth-child(70) {\n  border-top-color: #ec3f69;\n}\n:host .manage-services .tiles .bx--tile:nth-child(71) {\n  border-top-color: #c2e6e2;\n}\n:host .manage-services .tiles .bx--tile:nth-child(72) {\n  border-top-color: #764979;\n}\n:host .manage-services .tiles .bx--tile:nth-child(73) {\n  border-top-color: #818d8f;\n}\n:host .manage-services .tiles .bx--tile:nth-child(74) {\n  border-top-color: #5d59ab;\n}\n:host .manage-services .tiles .bx--tile:nth-child(75) {\n  border-top-color: #a15a1d;\n}\n:host .manage-services .tiles .bx--tile:nth-child(76) {\n  border-top-color: #4ed4f3;\n}\n:host .manage-services .tiles .bx--tile:nth-child(77) {\n  border-top-color: #fc9ac9;\n}\n:host .manage-services .tiles .bx--tile:nth-child(78) {\n  border-top-color: #98d9d5;\n}\n:host .manage-services .tiles .bx--tile:nth-child(79) {\n  border-top-color: #28a5d2;\n}\n:host .manage-services .tiles .bx--tile:nth-child(80) {\n  border-top-color: #7a237b;\n}\n:host .manage-services .tiles .bx--tile:nth-child(81) {\n  border-top-color: #d9fd17;\n}\n:host .manage-services .tiles .bx--tile:nth-child(82) {\n  border-top-color: #816d65;\n}\n:host .manage-services .tiles .bx--tile:nth-child(83) {\n  border-top-color: #46552c;\n}\n:host .manage-services .tiles .bx--tile:nth-child(84) {\n  border-top-color: #17fae0;\n}\n:host .manage-services .tiles .bx--tile:nth-child(85) {\n  border-top-color: #e3e026;\n}\n:host .manage-services .tiles .bx--tile:nth-child(86) {\n  border-top-color: #2c5722;\n}\n:host .manage-services .tiles .bx--tile:nth-child(87) {\n  border-top-color: #f7b3a4;\n}\n:host .manage-services .tiles .bx--tile:nth-child(88) {\n  border-top-color: #a3501b;\n}\n:host .manage-services .tiles .bx--tile:nth-child(89) {\n  border-top-color: #015c75;\n}\n:host .manage-services .tiles .bx--tile:nth-child(90) {\n  border-top-color: #faaf9b;\n}\n:host .manage-services .tiles .bx--tile:nth-child(91) {\n  border-top-color: #ea8ad8;\n}\n:host .manage-services .tiles .bx--tile:nth-child(92) {\n  border-top-color: #8bd5a7;\n}\n:host .manage-services .tiles .bx--tile:nth-child(93) {\n  border-top-color: #8d772d;\n}\n:host .manage-services .tiles .bx--tile:nth-child(94) {\n  border-top-color: #5f9ba2;\n}\n:host .manage-services .tiles .bx--tile:nth-child(95) {\n  border-top-color: #f16473;\n}\n:host .manage-services .tiles .bx--tile:nth-child(96) {\n  border-top-color: #5b6348;\n}\n:host .manage-services .tiles .bx--tile:nth-child(97) {\n  border-top-color: #338485;\n}\n:host .manage-services .tiles .bx--tile:nth-child(98) {\n  border-top-color: #67da07;\n}\n:host .manage-services .tiles .bx--tile:nth-child(99) {\n  border-top-color: #91edaf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXNlcnZpY2VzL046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcbWFuYWdlLXNlcnZpY2VzXFxtYW5hZ2Utc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hbmFnZS1zZXJ2aWNlcy9tYW5hZ2Utc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSx5QkFBQTtBQ0hSO0FESVE7RUFDSSxtQkFBQTtBQ0ZaO0FER1k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNEaEI7QURJUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGWjtBREdZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNEaEI7QURFZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNBcEI7QURFZ0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQXBCO0FET29CO0VBbkNoQix5QkFBQTtBQytCSjtBRElvQjtFQW5DaEIseUJBQUE7QUNrQ0o7QURDb0I7RUFuQ2hCLHlCQUFBO0FDcUNKO0FERm9CO0VBbkNoQix5QkFBQTtBQ3dDSjtBRExvQjtFQW5DaEIseUJBQUE7QUMyQ0o7QURSb0I7RUFuQ2hCLHlCQUFBO0FDOENKO0FEWG9CO0VBbkNoQix5QkFBQTtBQ2lESjtBRGRvQjtFQW5DaEIseUJBQUE7QUNvREo7QURqQm9CO0VBbkNoQix5QkFBQTtBQ3VESjtBRHBCb0I7RUFuQ2hCLHlCQUFBO0FDMERKO0FEdkJvQjtFQW5DaEIseUJBQUE7QUM2REo7QUQxQm9CO0VBbkNoQix5QkFBQTtBQ2dFSjtBRDdCb0I7RUFuQ2hCLHlCQUFBO0FDbUVKO0FEaENvQjtFQW5DaEIseUJBQUE7QUNzRUo7QURuQ29CO0VBbkNoQix5QkFBQTtBQ3lFSjtBRHRDb0I7RUFuQ2hCLHlCQUFBO0FDNEVKO0FEekNvQjtFQW5DaEIseUJBQUE7QUMrRUo7QUQ1Q29CO0VBbkNoQix5QkFBQTtBQ2tGSjtBRC9Db0I7RUFuQ2hCLHlCQUFBO0FDcUZKO0FEbERvQjtFQW5DaEIseUJBQUE7QUN3Rko7QURyRG9CO0VBbkNoQix5QkFBQTtBQzJGSjtBRHhEb0I7RUFuQ2hCLHlCQUFBO0FDOEZKO0FEM0RvQjtFQW5DaEIseUJBQUE7QUNpR0o7QUQ5RG9CO0VBbkNoQix5QkFBQTtBQ29HSjtBRGpFb0I7RUFuQ2hCLHlCQUFBO0FDdUdKO0FEcEVvQjtFQW5DaEIseUJBQUE7QUMwR0o7QUR2RW9CO0VBbkNoQix5QkFBQTtBQzZHSjtBRDFFb0I7RUFuQ2hCLHlCQUFBO0FDZ0hKO0FEN0VvQjtFQW5DaEIseUJBQUE7QUNtSEo7QURoRm9CO0VBbkNoQix5QkFBQTtBQ3NISjtBRG5Gb0I7RUFuQ2hCLHlCQUFBO0FDeUhKO0FEdEZvQjtFQW5DaEIseUJBQUE7QUM0SEo7QUR6Rm9CO0VBbkNoQix5QkFBQTtBQytISjtBRDVGb0I7RUFuQ2hCLHlCQUFBO0FDa0lKO0FEL0ZvQjtFQW5DaEIseUJBQUE7QUNxSUo7QURsR29CO0VBbkNoQix5QkFBQTtBQ3dJSjtBRHJHb0I7RUFuQ2hCLHlCQUFBO0FDMklKO0FEeEdvQjtFQW5DaEIseUJBQUE7QUM4SUo7QUQzR29CO0VBbkNoQix5QkFBQTtBQ2lKSjtBRDlHb0I7RUFuQ2hCLHlCQUFBO0FDb0pKO0FEakhvQjtFQW5DaEIseUJBQUE7QUN1Sko7QURwSG9CO0VBbkNoQix5QkFBQTtBQzBKSjtBRHZIb0I7RUFuQ2hCLHlCQUFBO0FDNkpKO0FEMUhvQjtFQW5DaEIseUJBQUE7QUNnS0o7QUQ3SG9CO0VBbkNoQix5QkFBQTtBQ21LSjtBRGhJb0I7RUFuQ2hCLHlCQUFBO0FDc0tKO0FEbklvQjtFQW5DaEIseUJBQUE7QUN5S0o7QUR0SW9CO0VBbkNoQix5QkFBQTtBQzRLSjtBRHpJb0I7RUFuQ2hCLHlCQUFBO0FDK0tKO0FENUlvQjtFQW5DaEIseUJBQUE7QUNrTEo7QUQvSW9CO0VBbkNoQix5QkFBQTtBQ3FMSjtBRGxKb0I7RUFuQ2hCLHlCQUFBO0FDd0xKO0FEckpvQjtFQW5DaEIseUJBQUE7QUMyTEo7QUR4Sm9CO0VBbkNoQix5QkFBQTtBQzhMSjtBRDNKb0I7RUFuQ2hCLHlCQUFBO0FDaU1KO0FEOUpvQjtFQW5DaEIseUJBQUE7QUNvTUo7QURqS29CO0VBbkNoQix5QkFBQTtBQ3VNSjtBRHBLb0I7RUFuQ2hCLHlCQUFBO0FDME1KO0FEdktvQjtFQW5DaEIseUJBQUE7QUM2TUo7QUQxS29CO0VBbkNoQix5QkFBQTtBQ2dOSjtBRDdLb0I7RUFuQ2hCLHlCQUFBO0FDbU5KO0FEaExvQjtFQW5DaEIseUJBQUE7QUNzTko7QURuTG9CO0VBbkNoQix5QkFBQTtBQ3lOSjtBRHRMb0I7RUFuQ2hCLHlCQUFBO0FDNE5KO0FEekxvQjtFQW5DaEIseUJBQUE7QUMrTko7QUQ1TG9CO0VBbkNoQix5QkFBQTtBQ2tPSjtBRC9Mb0I7RUFuQ2hCLHlCQUFBO0FDcU9KO0FEbE1vQjtFQW5DaEIseUJBQUE7QUN3T0o7QURyTW9CO0VBbkNoQix5QkFBQTtBQzJPSjtBRHhNb0I7RUFuQ2hCLHlCQUFBO0FDOE9KO0FEM01vQjtFQW5DaEIseUJBQUE7QUNpUEo7QUQ5TW9CO0VBbkNoQix5QkFBQTtBQ29QSjtBRGpOb0I7RUFuQ2hCLHlCQUFBO0FDdVBKO0FEcE5vQjtFQW5DaEIseUJBQUE7QUMwUEo7QUR2Tm9CO0VBbkNoQix5QkFBQTtBQzZQSjtBRDFOb0I7RUFuQ2hCLHlCQUFBO0FDZ1FKO0FEN05vQjtFQW5DaEIseUJBQUE7QUNtUUo7QURoT29CO0VBbkNoQix5QkFBQTtBQ3NRSjtBRG5Pb0I7RUFuQ2hCLHlCQUFBO0FDeVFKO0FEdE9vQjtFQW5DaEIseUJBQUE7QUM0UUo7QUR6T29CO0VBbkNoQix5QkFBQTtBQytRSjtBRDVPb0I7RUFuQ2hCLHlCQUFBO0FDa1JKO0FEL09vQjtFQW5DaEIseUJBQUE7QUNxUko7QURsUG9CO0VBbkNoQix5QkFBQTtBQ3dSSjtBRHJQb0I7RUFuQ2hCLHlCQUFBO0FDMlJKO0FEeFBvQjtFQW5DaEIseUJBQUE7QUM4Uko7QUQzUG9CO0VBbkNoQix5QkFBQTtBQ2lTSjtBRDlQb0I7RUFuQ2hCLHlCQUFBO0FDb1NKO0FEalFvQjtFQW5DaEIseUJBQUE7QUN1U0o7QURwUW9CO0VBbkNoQix5QkFBQTtBQzBTSjtBRHZRb0I7RUFuQ2hCLHlCQUFBO0FDNlNKO0FEMVFvQjtFQW5DaEIseUJBQUE7QUNnVEo7QUQ3UW9CO0VBbkNoQix5QkFBQTtBQ21USjtBRGhSb0I7RUFuQ2hCLHlCQUFBO0FDc1RKO0FEblJvQjtFQW5DaEIseUJBQUE7QUN5VEo7QUR0Um9CO0VBbkNoQix5QkFBQTtBQzRUSjtBRHpSb0I7RUFuQ2hCLHlCQUFBO0FDK1RKO0FENVJvQjtFQW5DaEIseUJBQUE7QUNrVUo7QUQvUm9CO0VBbkNoQix5QkFBQTtBQ3FVSjtBRGxTb0I7RUFuQ2hCLHlCQUFBO0FDd1VKIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLXNlcnZpY2VzL21hbmFnZS1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiByYW5kb20tYmdyKCl7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IocmFuZG9tKDI1NSksIHJhbmRvbSgyNTUpLCByYW5kb20oMjU1KSk7XHJcbn1cclxuOmhvc3Qge1xyXG4gICAgLm1hbmFnZS1zZXJ2aWNlcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDMwZW0gIWltcG9ydGFudDtcclxuICAgICAgICAuY29tbW9uLWFjdGlvbnMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJlbSAwIDAgNWVtO1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGlsZXMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgIC5ieC0tdGlsZSB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1ZW07XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMmVtIDJlbSAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJG51bS1jb2xvcnM6IDEwMDtcclxuICAgICAgICAgICAgICAgICRiYXNlLWNvbG9yOiAjOTk2QjREO1xyXG4gICAgICAgICAgICAgICAgJHNwZWN0cnVtOiAzNjBkZWc7XHJcbiAgICAgICAgICAgICAgICAkb2Zmc2V0OjUwZGVnO1xyXG4gICAgICAgICAgICAgICAgQGZvciAkaSBmcm9tIDAgdG8gJG51bS1jb2xvcnMge1xyXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhbmRvbS1iZ3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCAubWFuYWdlLXNlcnZpY2VzIHtcbiAgbWFyZ2luOiAwIDMwZW0gIWltcG9ydGFudDtcbn1cbjpob3N0IC5tYW5hZ2Utc2VydmljZXMgLmNvbW1vbi1hY3Rpb25zIHtcbiAgbWFyZ2luOiAyZW0gMCAwIDVlbTtcbn1cbjpob3N0IC5tYW5hZ2Utc2VydmljZXMgLmNvbW1vbi1hY3Rpb25zIGgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cbjpob3N0IC5tYW5hZ2Utc2VydmljZXMgLnRpbGVzIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGUge1xuICBtaW4td2lkdGg6IDE1ZW07XG4gIG1heC13aWR0aDogMjBlbTtcbiAgbWFyZ2luOiAwIDJlbSAyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzMzMzM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGUgaDQge1xuICBtYXJnaW46IDAgMCAxZW0gMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuOmhvc3QgLm1hbmFnZS1zZXJ2aWNlcyAudGlsZXMgLmJ4LS10aWxlIHAge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xufVxuOmhvc3QgLm1hbmFnZS1zZXJ2aWNlcyAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzYmY4ZWQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2QzZTkxMDtcbn1cbjpob3N0IC5tYW5hZ2Utc2VydmljZXMgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZjFiMDMzO1xufVxuOmhvc3QgLm1hbmFnZS1zZXJ2aWNlcyAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjZTg1YjM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y2YTg1MTtcbn1cbjpob3N0IC5tYW5hZ2Utc2VydmljZXMgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZDM5MTExO1xufVxuOmhvc3QgLm1hbmFnZS1zZXJ2aWNlcyAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2NTBhYjI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Q1NTY4Nztcbn1cbjpob3N0IC5tYW5hZ2Utc2VydmljZXMgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNjBjNmQyO1xufVxuOmhvc3QgLm1hbmFnZS1zZXJ2aWNlcyAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwZGEzMWE7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDEwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2MjZkODc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDExKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmNGVhOGQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDEyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2OWE1ZmE7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDEzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1Nzk2MmU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4NGMwZTQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM3NzIwODA7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwN2YwZmI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjYTZiN2M7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwYTYxMGI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjMjg2ODk7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmOGU5YjI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiNWRkNjE7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhMjZiMmM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiOGNmMjc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiZDExN2M7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0M2E1NDc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4OGFjYTc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5Zjk1YzU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzM2Q1YTM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlZGNmYTE7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzNmE2MzY7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0ZmU2ZTA7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxZmIxNTg7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiNGMzYmQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjMDAyMDE7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxMTBlOTQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkMjgwNmM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlNzFiZDU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2MmNjM2M7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlOGIzNWM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2ZjE0ZWU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjMzA3MTc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhNzE4ZDg7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0ZDkwNDM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxMzdkNDE7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2NDFjNmI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzMDZjNzI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0M2VkZjM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5NmE0Mzk7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4YWY1MzM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkY2MyZDY7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzYmNmMzY7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2YjZlNDc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlNTY2YzY7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5ZjJkOGU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5YjEzODQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjZmM5Mzc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlNjNlZGI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwM2YyMzY7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0MmFlZDE7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0MGUyZTY7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyMjEwOWU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlMDk3Njk7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhYjYwZWE7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMzk1ZDc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM3MTQ2ZWI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyOGU4Y2Y7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxMDhjZGI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMTA3N2Q7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZDFkODM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDcwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlYzNmNjk7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDcxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjMmU2ZTI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDcyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM3NjQ5Nzk7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDczKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4MThkOGY7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1ZDU5YWI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhMTVhMWQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0ZWQ0ZjM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmYzlhYzk7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5OGQ5ZDU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyOGE1ZDI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM3YTIzN2I7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkOWZkMTc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4MTZkNjU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0NjU1MmM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxN2ZhZTA7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlM2UwMjY7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyYzU3MjI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmN2IzYTQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhMzUwMWI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMTVjNzU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmYWFmOWI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlYThhZDg7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4YmQ1YTc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4ZDc3MmQ7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1ZjliYTI7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmMTY0NzM7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1YjYzNDg7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzMzg0ODU7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2N2RhMDc7XG59XG46aG9zdCAubWFuYWdlLXNlcnZpY2VzIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5MWVkYWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/manage-services/manage-services.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/manage-services/manage-services.component.ts ***!
  \**************************************************************/
/*! exports provided: ManageServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageServicesComponent", function() { return ManageServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);





let ManageServicesComponent = class ManageServicesComponent {
    constructor(http, breadcrumbService) {
        this.http = http;
        this.breadcrumbService = breadcrumbService;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_4__.mrBSDetailsURL)
            .subscribe((bsData) => {
            console.log('Get bs list call >>', bsData);
            this.bsList = bsData;
        }, error => {
            console.log('Get bs call in error >>', error.message);
        });
    }
};
ManageServicesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"] }
];
ManageServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-services/manage-services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-services.component.scss */ "./src/app/manage-services/manage-services.component.scss")).default]
    })
], ManageServicesComponent);



/***/ }),

/***/ "./src/app/mr-create-apic/mr-create-apic.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/mr-create-apic/mr-create-apic.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21yLWNyZWF0ZS1hcGljL21yLWNyZWF0ZS1hcGljLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/mr-create-apic/mr-create-apic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mr-create-apic/mr-create-apic.component.ts ***!
  \************************************************************/
/*! exports provided: MrCreateApicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrCreateApicComponent", function() { return MrCreateApicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let MrCreateApicComponent = class MrCreateApicComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.apicForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            platform: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            realm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pOrg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            catalog: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.apicForm.controls;
    }
    onAPICSubmit() {
        this.submitted = true;
        if (this.apicForm.invalid) {
            return false;
        }
        else {
            this.createMrAPICDetails();
        }
    }
    createMrAPICDetails() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrAPICURL, {
            name: this.apicForm.controls.name.value,
            platform: this.apicForm.controls.platform.value,
            realm: this.apicForm.controls.realm.value,
            username: this.apicForm.controls.username.value,
            password: this.apicForm.controls.password.value,
            pOrg: this.apicForm.controls.pOrg.value,
            catalog: this.apicForm.controls.catalog.value
        })
            .subscribe((mrAPICDetails) => {
            console.log('Post Manage Resources APIC call successful value returned >>', mrAPICDetails);
            this.toastrService.success('Manage Resources APIC Data Saved Successfully.');
        }, error => {
            console.log('Post Manage Resources APIC call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Manage Resources APIC Data Saved Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/manageresources/apic']);
                }, 2000);
            }
            else {
                this.toastrService.error('APIC name is already taken.');
            }
        });
    }
    ;
};
MrCreateApicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], MrCreateApicComponent.prototype, "toastContainer", void 0);
MrCreateApicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mr-create-apic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mr-create-apic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-apic/mr-create-apic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mr-create-apic.component.scss */ "./src/app/mr-create-apic/mr-create-apic.component.scss")).default]
    })
], MrCreateApicComponent);



/***/ }),

/***/ "./src/app/mr-create-container-platform/mr-create-container-platform.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/mr-create-container-platform/mr-create-container-platform.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21yLWNyZWF0ZS1jb250YWluZXItcGxhdGZvcm0vbXItY3JlYXRlLWNvbnRhaW5lci1wbGF0Zm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/mr-create-container-platform/mr-create-container-platform.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/mr-create-container-platform/mr-create-container-platform.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MrCreateContainerPlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrCreateContainerPlatformComponent", function() { return MrCreateContainerPlatformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let MrCreateContainerPlatformComponent = class MrCreateContainerPlatformComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.containerPlatForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            domain: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            platformType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            token: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.containerPlatForm.controls;
    }
    onContainerPlatformSubmit() {
        this.submitted = true;
        if (this.containerPlatForm.invalid) {
            return false;
        }
        else {
            this.createMrContainerPlatformDetails();
        }
    }
    createMrContainerPlatformDetails() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrContainerPlatformURL, {
            name: this.containerPlatForm.controls.name.value,
            domain: this.containerPlatForm.controls.domain.value,
            platformType: this.containerPlatForm.controls.platformType.value,
            address: this.containerPlatForm.controls.address.value,
            token: this.containerPlatForm.controls.token.value
        })
            .subscribe((mrCPlatformDetails) => {
            console.log('Post Manage Resources Container Platform call successful value returned >>', mrCPlatformDetails);
            this.toastrService.success('Manage Resources Container Platform Data Saved Successfully.');
        }, error => {
            console.log('Post Manage Resources Container Platform call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Manage Resources Container Platform Data Saved Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/manageresources']);
                }, 2000);
            }
            else {
                this.toastrService.error('Container Platform name is already taken.');
            }
        });
    }
    ;
};
MrCreateContainerPlatformComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], MrCreateContainerPlatformComponent.prototype, "toastContainer", void 0);
MrCreateContainerPlatformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mr-create-container-platform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mr-create-container-platform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-container-platform/mr-create-container-platform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mr-create-container-platform.component.scss */ "./src/app/mr-create-container-platform/mr-create-container-platform.component.scss")).default]
    })
], MrCreateContainerPlatformComponent);



/***/ }),

/***/ "./src/app/mr-create-container-registry/mr-create-container-registry.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/mr-create-container-registry/mr-create-container-registry.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21yLWNyZWF0ZS1jb250YWluZXItcmVnaXN0cnkvbXItY3JlYXRlLWNvbnRhaW5lci1yZWdpc3RyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/mr-create-container-registry/mr-create-container-registry.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/mr-create-container-registry/mr-create-container-registry.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MrCreateContainerRegistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrCreateContainerRegistryComponent", function() { return MrCreateContainerRegistryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let MrCreateContainerRegistryComponent = class MrCreateContainerRegistryComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
        this.authData = ['User Credentials', 'Token'];
        this.checkedUserType = false;
        this.checkedTokenType = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.containerRegistryForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            authType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: [''],
            password: [''],
            token: ['']
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.containerRegistryForm.controls;
    }
    onAuthCboxChangeHandler(event) {
        if (event.target.value == 'User Credentials') {
            this.checkedUserType = event.target.checked;
            this.checkedUserValue = event.target.value;
        }
        else {
            this.checkedTokenType = event.target.checked;
            this.checkedTokenValue = event.target.value;
        }
    }
    onContainerRegistrySubmit() {
        this.submitted = true;
        if (this.containerRegistryForm.invalid) {
            return false;
        }
        else {
            this.createMrContainerRegistryDetails();
        }
    }
    createMrContainerRegistryDetails() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrContainerRegistryURL, {
            name: this.containerRegistryForm.controls.name.value,
            address: this.containerRegistryForm.controls.address.value,
            authType: this.checkedUserValue + ' , ' + this.checkedTokenValue,
            username: this.containerRegistryForm.controls.username.value,
            password: this.containerRegistryForm.controls.password.value,
            token: this.containerRegistryForm.controls.token.value
        })
            .subscribe((mrCRegistryDetails) => {
            console.log('Post Manage Resources Container Registry call successful value returned >>', mrCRegistryDetails);
            this.toastrService.success('Manage Resources Container Registry Data Saved Successfully.');
        }, error => {
            console.log('Post Manage Resources Container Registry call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Manage Resources Container Registry Data Saved Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/manageresources/containerregistry']);
                }, 2000);
            }
            else {
                this.toastrService.error('Container Registry name is already taken.');
            }
        });
    }
    ;
};
MrCreateContainerRegistryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], MrCreateContainerRegistryComponent.prototype, "toastContainer", void 0);
MrCreateContainerRegistryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mr-create-container-registry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mr-create-container-registry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-container-registry/mr-create-container-registry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mr-create-container-registry.component.scss */ "./src/app/mr-create-container-registry/mr-create-container-registry.component.scss")).default]
    })
], MrCreateContainerRegistryComponent);



/***/ }),

/***/ "./src/app/mr-create-notification/mr-create-notification.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/mr-create-notification/mr-create-notification.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21yLWNyZWF0ZS1ub3RpZmljYXRpb24vbXItY3JlYXRlLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/mr-create-notification/mr-create-notification.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/mr-create-notification/mr-create-notification.component.ts ***!
  \****************************************************************************/
/*! exports provided: MrCreateNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrCreateNotificationComponent", function() { return MrCreateNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let MrCreateNotificationComponent = class MrCreateNotificationComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
        this.authData = ['User Credentials', 'Certificate'];
        this.checkedUserType = false;
        this.checkedCertType = false;
        // for multiple email addresses, separated with comma
        this.commaSepEmail = (control) => {
            const emails = control.value.split(',').map(e => e.trim());
            const forbidden = emails.some(email => _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](email)));
            return forbidden ? { 'to': { value: control.value } } : null;
        };
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.notificationForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            port: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            authType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: [''],
            password: [''],
            certificate: [''],
            tlsType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            purpose: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            from: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            to: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.commaSepEmail]],
            server: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.notificationForm.controls;
    }
    onAuthCboxChangeHandler(event) {
        if (event.target.value == 'User Credentials') {
            this.checkedUserType = event.target.checked;
            this.checkedUserValue = event.target.value;
        }
        else {
            this.checkedCertType = event.target.checked;
            this.checkedCertValue = event.target.value;
        }
    }
    onNotificationSubmit() {
        this.submitted = true;
        if (this.notificationForm.invalid) {
            return false;
        }
        else {
            this.createNotificationDetails();
        }
    }
    createNotificationDetails() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.mrNotificationURL, {
            name: this.notificationForm.controls.name.value,
            port: this.notificationForm.controls.port.value,
            authType: this.checkedUserValue + ' , ' + this.checkedCertValue,
            username: this.notificationForm.controls.username.value,
            password: this.notificationForm.controls.password.value,
            certificate: this.notificationForm.controls.certificate.value,
            tlsType: this.notificationForm.controls.tlsType.value,
            purpose: this.notificationForm.controls.purpose.value,
            from: this.notificationForm.controls.from.value,
            to: this.notificationForm.controls.to.value,
            server: this.notificationForm.controls.server.value
        })
            .subscribe((notificationDetails) => {
            console.log('Post Manage Resources Notification call successful value returned >>', notificationDetails);
            this.toastrService.success('Manage Resources Notification Data Saved Successfully.');
        }, error => {
            console.log('Post Manage Resources Notification call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Manage Resources Notification Data Saved Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/manageresources/notification']);
                }, 2000);
            }
            else {
                this.toastrService.error('Notification name is already taken.');
            }
        });
    }
    ;
};
MrCreateNotificationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], MrCreateNotificationComponent.prototype, "toastContainer", void 0);
MrCreateNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mr-create-notification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mr-create-notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mr-create-notification/mr-create-notification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mr-create-notification.component.scss */ "./src/app/mr-create-notification/mr-create-notification.component.scss")).default]
    })
], MrCreateNotificationComponent);



/***/ }),

/***/ "./src/app/mrapic/mrapic.component.scss":
/*!**********************************************!*\
  !*** ./src/app/mrapic/mrapic.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".idbp {\n  margin: 20px 0px 20px 960px;\n}\n\n.bx--data-table {\n  margin-left: 360px !important;\n}\n\n/* Modal */\n\n.fade {\n  margin: 20px 0 0 15px;\n}\n\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXJhcGljL046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcbXJhcGljXFxtcmFwaWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21yYXBpYy9tcmFwaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQSxVQUFBOztBQUNBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0csY0FBQTtBQ0VQIiwiZmlsZSI6InNyYy9hcHAvbXJhcGljL21yYXBpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZGJwIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjBweCA5NjBweDtcclxufVxyXG5cclxuLmJ4LS1kYXRhLXRhYmxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBNb2RhbCAqL1xyXG4uZmFkZSB7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwIDE1cHg7XHJcbn1cclxuICBcclxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICB9XHJcbn0iLCIuaWRicCB7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCA5NjBweDtcbn1cblxuLmJ4LS1kYXRhLXRhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IDM2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIE1vZGFsICovXG4uZmFkZSB7XG4gIG1hcmdpbjogMjBweCAwIDAgMTVweDtcbn1cblxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xuICBtYXJnaW46IDFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiBidXR0b24ge1xuICBmbGV4OiAxIDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/mrapic/mrapic.component.ts":
/*!********************************************!*\
  !*** ./src/app/mrapic/mrapic.component.ts ***!
  \********************************************/
/*! exports provided: MRApicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRApicComponent", function() { return MRApicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);









let MRApicComponent = class MRApicComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.apicTemp = false;
        this.submitted = false;
        this.apicRoutesMatched = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrAPICURL)
            .subscribe((apics) => {
            console.log('Get apic list call >>', apics);
            this.apicList = apics;
            if (this.apicList.length == []) {
                this.apicTemp = false;
            }
            else {
                this.apicTemp = true;
            }
        }, error => {
            console.log('Get apic list call in error >>', error.message);
        });
        this.editApicForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            platform: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            realm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pOrg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            catalog: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/manageresources/apic/createapic" == this.roleRoutesList[i]) {
                    this.apicRoutesMatched = true;
                }
            }
        }
    }
    get f() {
        return this.editApicForm.controls;
    }
    onEditApicSubmit() {
        this.submitted = true;
        if (this.editApicForm.invalid) {
            return false;
        }
        else {
            this.editMrApic();
        }
    }
    editMrApic() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrAPICURL, {
            apicId: localStorage.getItem('apicId'),
            name: this.editApicForm.controls.name.value,
            platform: this.editApicForm.controls.platform.value,
            realm: this.editApicForm.controls.realm.value,
            username: this.editApicForm.controls.username.value,
            password: this.editApicForm.controls.password.value,
            pOrg: this.editApicForm.controls.pOrg.value,
            catalog: this.editApicForm.controls.catalog.value
        })
            .subscribe((apicUpdatedData) => {
            console.log('Put edit apic call successful value returned >>', apicUpdatedData);
            this.toastrService.success('APIC Data Updated Successfully.');
        }, error => {
            console.log('Put edit apic call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('APIC Data Updated Successfully.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageresources/apic']);
                }, 4000);
            }
            else {
                this.toastrService.error('Update incompleted. Please update all the fields.');
            }
        });
    }
    ;
    onEditApic(id, name, platform, realm, provorg, catalog) {
        localStorage.setItem('apicId', id);
        localStorage.setItem('apicName', name);
        localStorage.setItem('apicPlatform', platform);
        localStorage.setItem('apicRealm', realm);
        localStorage.setItem('apicProvorg', provorg);
        localStorage.setItem('apicCatalog', catalog);
        this.name = localStorage.getItem('apicName');
        this.plat = localStorage.getItem('apicPlatform');
        this.rel = localStorage.getItem('apicRealm');
        this.prov = localStorage.getItem('apicProvorg');
        this.cat = localStorage.getItem('apicCatalog');
    }
    onDeleteApic(apicId) {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrAPICURL, { _id: apicId })
            .subscribe((apicDeleted) => {
            console.log('Delete apic call successful value returned >>', apicDeleted);
        }, error => {
            console.log('Delete apic call in error >>', error);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/dashboard/manageresources/apic']);
        });
    }
};
MRApicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], MRApicComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], MRApicComponent.prototype, "closeAddExpenseModal", void 0);
MRApicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mrapic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mrapic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mrapic/mrapic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mrapic.component.scss */ "./src/app/mrapic/mrapic.component.scss")).default]
    })
], MRApicComponent);



/***/ }),

/***/ "./src/app/mrcontainer-registry/mrcontainer-registry.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/mrcontainer-registry/mrcontainer-registry.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".idbp {\n  margin: 20px 0px 20px 843px;\n}\n\n.bx--data-table {\n  margin-left: 530px !important;\n}\n\n/* Modal */\n\n.fade {\n  margin: 20px 0 0 15px;\n}\n\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXJjb250YWluZXItcmVnaXN0cnkvTjpcXEJhbmtDb25uZWN0X0lEQlBfVGVjaFZpdGFsaXR5X0dpdFxcaWRicC1hbmd1bGFyL3NyY1xcYXBwXFxtcmNvbnRhaW5lci1yZWdpc3RyeVxcbXJjb250YWluZXItcmVnaXN0cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21yY29udGFpbmVyLXJlZ2lzdHJ5L21yY29udGFpbmVyLXJlZ2lzdHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUEsVUFBQTs7QUFDQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURBSTtFQUNHLGNBQUE7QUNFUCIsImZpbGUiOiJzcmMvYXBwL21yY29udGFpbmVyLXJlZ2lzdHJ5L21yY29udGFpbmVyLXJlZ2lzdHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlkYnAge1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDg0M3B4O1xyXG59XHJcblxyXG4uYngtLWRhdGEtdGFibGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1vZGFsICovXHJcbi5mYWRlIHtcclxuICAgIG1hcmdpbjogMjBweCAwIDAgMTVweDtcclxufVxyXG4gIFxyXG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIH1cclxufSIsIi5pZGJwIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDg0M3B4O1xufVxuXG4uYngtLWRhdGEtdGFibGUge1xuICBtYXJnaW4tbGVmdDogNTMwcHggIWltcG9ydGFudDtcbn1cblxuLyogTW9kYWwgKi9cbi5mYWRlIHtcbiAgbWFyZ2luOiAyMHB4IDAgMCAxNXB4O1xufVxuXG4ubW9kYWwtZm9vdGVyLWJ1dHRvbiB7XG4gIG1hcmdpbjogMXJlbSAtMXJlbSAtMXJlbSAtMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RhbC1mb290ZXItYnV0dG9uIGJ1dHRvbiB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/mrcontainer-registry/mrcontainer-registry.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/mrcontainer-registry/mrcontainer-registry.component.ts ***!
  \************************************************************************/
/*! exports provided: MRContainerRegistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRContainerRegistryComponent", function() { return MRContainerRegistryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);









let MRContainerRegistryComponent = class MRContainerRegistryComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.containerRegistryTemp = false;
        this.submitted = false;
        this.authData = ['User Credentials', 'Token'];
        this.checkedUserType = false;
        this.checkedTokenType = false;
        this.cRegistryRoutesMatched = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrContainerRegistryURL)
            .subscribe((containerRegistries) => {
            console.log('Get container registries list call >>', containerRegistries);
            this.containerRegistryList = containerRegistries;
            if (this.containerRegistryList.length == []) {
                this.containerRegistryTemp = false;
            }
            else {
                this.containerRegistryTemp = true;
            }
        }, error => {
            console.log('Get container registries list call in error >>', error.message);
        });
        this.editContainerRegistryForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            authType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: [''],
            password: [''],
            token: ['']
        });
        this.toastrService.overlayContainer = this.toastContainer;
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/manageresources/containerregistry/createcontainerregistry" == this.roleRoutesList[i]) {
                    this.cRegistryRoutesMatched = true;
                }
            }
        }
    }
    get f() {
        return this.editContainerRegistryForm.controls;
    }
    onAuthCboxChangeHandler(event) {
        if (event.target.value == 'User Credentials') {
            this.checkedUserType = event.target.checked;
            this.checkedUserValue = event.target.value;
        }
        else {
            this.checkedTokenType = event.target.checked;
            this.checkedTokenValue = event.target.value;
        }
    }
    onEditContainerRegistrySubmit() {
        this.submitted = true;
        if (this.editContainerRegistryForm.invalid) {
            return false;
        }
        else {
            this.editMrContainerRegistry();
        }
    }
    editMrContainerRegistry() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrContainerRegistryURL, {
            cRegistryId: localStorage.getItem('cRegistryId'),
            name: this.editContainerRegistryForm.controls.name.value,
            address: this.editContainerRegistryForm.controls.address.value,
            authType: this.checkedUserValue + ' , ' + this.checkedTokenValue,
            username: this.editContainerRegistryForm.controls.username.value,
            password: this.editContainerRegistryForm.controls.password.value,
            token: this.editContainerRegistryForm.controls.token.value
        })
            .subscribe((cRegistryUpdatedData) => {
            console.log('Put edit container registry call successful value returned >>', cRegistryUpdatedData);
            this.toastrService.success('Container Registry Data Updated Successfully.');
        }, error => {
            console.log('Put edit container registry call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Container Registry Data Updated Successfully.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageresources/containerregistry']);
                }, 4000);
            }
            else {
                this.toastrService.error('Update incompleted. Please update all the fields.');
            }
        });
    }
    ;
    onEditContainerRegistry(id, name, address) {
        localStorage.setItem('cRegistryId', id);
        localStorage.setItem('cRegistryName', name);
        localStorage.setItem('cRegistryAddress', address);
        this.name = localStorage.getItem('cRegistryName');
        this.add = localStorage.getItem('cRegistryAddress');
    }
    onDeleteContainerRegistry(cRegistryId) {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrContainerRegistryURL, { _id: cRegistryId })
            .subscribe((registryDeleted) => {
            console.log('Delete container registry call successful value returned >>', registryDeleted);
        }, error => {
            console.log('Delete container registry call in error >>', error);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/dashboard/manageresources/containerregistry']);
        });
    }
};
MRContainerRegistryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], MRContainerRegistryComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], MRContainerRegistryComponent.prototype, "closeAddExpenseModal", void 0);
MRContainerRegistryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mrcontainer-registry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mrcontainer-registry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mrcontainer-registry/mrcontainer-registry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mrcontainer-registry.component.scss */ "./src/app/mrcontainer-registry/mrcontainer-registry.component.scss")).default]
    })
], MRContainerRegistryComponent);



/***/ }),

/***/ "./src/app/mrnotification/mrnotification.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/mrnotification/mrnotification.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".idbp {\n  margin: 20px 0px 20px 1075px;\n}\n\n.bx--data-table {\n  margin-left: 230px !important;\n}\n\n/* Modal */\n\n.fade {\n  margin: 90px 0 0 15px;\n}\n\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXJub3RpZmljYXRpb24vTjpcXEJhbmtDb25uZWN0X0lEQlBfVGVjaFZpdGFsaXR5X0dpdFxcaWRicC1hbmd1bGFyL3NyY1xcYXBwXFxtcm5vdGlmaWNhdGlvblxcbXJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21ybm90aWZpY2F0aW9uL21ybm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUEsVUFBQTs7QUFDQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURBSTtFQUNHLGNBQUE7QUNFUCIsImZpbGUiOiJzcmMvYXBwL21ybm90aWZpY2F0aW9uL21ybm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlkYnAge1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDEwNzVweDtcclxufVxyXG5cclxuLmJ4LS1kYXRhLXRhYmxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBNb2RhbCAqL1xyXG4uZmFkZSB7XHJcbiAgICBtYXJnaW46IDkwcHggMCAwIDE1cHg7XHJcbn1cclxuICBcclxuLm1vZGFsLWZvb3Rlci1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICB9XHJcbn0iLCIuaWRicCB7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAxMDc1cHg7XG59XG5cbi5ieC0tZGF0YS10YWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBNb2RhbCAqL1xuLmZhZGUge1xuICBtYXJnaW46IDkwcHggMCAwIDE1cHg7XG59XG5cbi5tb2RhbC1mb290ZXItYnV0dG9uIHtcbiAgbWFyZ2luOiAxcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1vZGFsLWZvb3Rlci1idXR0b24gYnV0dG9uIHtcbiAgZmxleDogMSAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/mrnotification/mrnotification.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mrnotification/mrnotification.component.ts ***!
  \************************************************************/
/*! exports provided: MRNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRNotificationComponent", function() { return MRNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);









let MRNotificationComponent = class MRNotificationComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.notificationTemp = false;
        this.submitted = false;
        this.notificationRoutesMatched = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrNotificationURL)
            .subscribe((notifiList) => {
            console.log('Get notification list call >>', notifiList);
            this.notificationList = notifiList;
            if (this.notificationList.length == []) {
                this.notificationTemp = false;
            }
            else {
                this.notificationTemp = true;
            }
        }, error => {
            console.log('Get notification list call in error >>', error.message);
        });
        this.editNotificationForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z][a-z0-9-]*$')]],
            port: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            purpose: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/manageresources/notification/createnotification" == this.roleRoutesList[i]) {
                    this.notificationRoutesMatched = true;
                }
            }
        }
    }
    get f() {
        return this.editNotificationForm.controls;
    }
    onEditNotificationSubmit() {
        this.submitted = true;
        if (this.editNotificationForm.invalid) {
            return false;
        }
        else {
            this.editMrNotification();
        }
    }
    editMrNotification() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrNotificationURL, {
            notificationId: localStorage.getItem('notificationId'),
            name: this.editNotificationForm.controls.name.value,
            port: this.editNotificationForm.controls.port.value,
            purpose: this.editNotificationForm.controls.purpose.value
        })
            .subscribe((notUpdatedData) => {
            console.log('Put edit notification call successful value returned >>', notUpdatedData);
            this.toastrService.success('Notification Data Updated Successfully.');
        }, error => {
            console.log('Put edit notification call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Notification Data Updated Successfully.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageresources/notification']);
                }, 4000);
            }
            else {
                this.toastrService.error('Update incompleted. Please update all the fields.');
            }
        });
    }
    ;
    onEditNotification(id, name, port) {
        localStorage.setItem('notificationId', id);
        localStorage.setItem('notificationName', name);
        localStorage.setItem('notificationPort', port);
        this.name = localStorage.getItem('notificationName');
        this.port = localStorage.getItem('notificationPort');
    }
    onDeleteNotification(notificationId) {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_8__.mrNotificationURL, { _id: notificationId })
            .subscribe((notificationDeleted) => {
            console.log('Delete notification call successful value returned >>', notificationDeleted);
        }, error => {
            console.log('Delete notification call in error >>', error);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/dashboard/manageresources/notification']);
        });
    }
};
MRNotificationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], MRNotificationComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], MRNotificationComponent.prototype, "closeAddExpenseModal", void 0);
MRNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mrnotification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mrnotification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mrnotification/mrnotification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mrnotification.component.scss */ "./src/app/mrnotification/mrnotification.component.scss")).default]
    })
], MRNotificationComponent);



/***/ }),

/***/ "./src/app/open-banking/open-banking.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/open-banking/open-banking.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .open-banking {\n  margin: 0 30em !important;\n}\n:host .open-banking .common-actions {\n  margin: 2em 0 0 5em;\n}\n:host .open-banking .common-actions h3 {\n  font-size: 1rem;\n  margin-bottom: 1.5em;\n}\n:host .open-banking .tiles {\n  font-size: 1em;\n  display: flex;\n  flex-flow: row wrap;\n}\n:host .open-banking .tiles .bx--tile {\n  min-width: 15em;\n  max-width: 20em;\n  margin: 0 2em 2em 0;\n  background-color: #ffffff;\n  border-top: 3px solid #333333;\n}\n:host .open-banking .tiles .bx--tile h4 {\n  margin: 0 0 1em 0;\n  font-size: 1rem;\n}\n:host .open-banking .tiles .bx--tile p {\n  font-size: 0.85rem;\n  margin: 0 0 2em 0;\n}\n:host .open-banking .tiles .bx--tile:nth-child(0) {\n  border-top-color: #1c8220;\n}\n:host .open-banking .tiles .bx--tile:nth-child(1) {\n  border-top-color: #1f403d;\n}\n:host .open-banking .tiles .bx--tile:nth-child(2) {\n  border-top-color: #753ffc;\n}\n:host .open-banking .tiles .bx--tile:nth-child(3) {\n  border-top-color: #e94d76;\n}\n:host .open-banking .tiles .bx--tile:nth-child(4) {\n  border-top-color: #a06ce8;\n}\n:host .open-banking .tiles .bx--tile:nth-child(5) {\n  border-top-color: #c96942;\n}\n:host .open-banking .tiles .bx--tile:nth-child(6) {\n  border-top-color: #326189;\n}\n:host .open-banking .tiles .bx--tile:nth-child(7) {\n  border-top-color: #913423;\n}\n:host .open-banking .tiles .bx--tile:nth-child(8) {\n  border-top-color: #ceb8f6;\n}\n:host .open-banking .tiles .bx--tile:nth-child(9) {\n  border-top-color: #68e9ef;\n}\n:host .open-banking .tiles .bx--tile:nth-child(10) {\n  border-top-color: #40fd8f;\n}\n:host .open-banking .tiles .bx--tile:nth-child(11) {\n  border-top-color: #1a9216;\n}\n:host .open-banking .tiles .bx--tile:nth-child(12) {\n  border-top-color: #ed0641;\n}\n:host .open-banking .tiles .bx--tile:nth-child(13) {\n  border-top-color: #19d495;\n}\n:host .open-banking .tiles .bx--tile:nth-child(14) {\n  border-top-color: #d66a74;\n}\n:host .open-banking .tiles .bx--tile:nth-child(15) {\n  border-top-color: #eb8ce9;\n}\n:host .open-banking .tiles .bx--tile:nth-child(16) {\n  border-top-color: #ad40bd;\n}\n:host .open-banking .tiles .bx--tile:nth-child(17) {\n  border-top-color: #bacaac;\n}\n:host .open-banking .tiles .bx--tile:nth-child(18) {\n  border-top-color: #056d91;\n}\n:host .open-banking .tiles .bx--tile:nth-child(19) {\n  border-top-color: #8681a6;\n}\n:host .open-banking .tiles .bx--tile:nth-child(20) {\n  border-top-color: #071948;\n}\n:host .open-banking .tiles .bx--tile:nth-child(21) {\n  border-top-color: #459e68;\n}\n:host .open-banking .tiles .bx--tile:nth-child(22) {\n  border-top-color: #d04520;\n}\n:host .open-banking .tiles .bx--tile:nth-child(23) {\n  border-top-color: #beb8a2;\n}\n:host .open-banking .tiles .bx--tile:nth-child(24) {\n  border-top-color: #d5ac0e;\n}\n:host .open-banking .tiles .bx--tile:nth-child(25) {\n  border-top-color: #36179e;\n}\n:host .open-banking .tiles .bx--tile:nth-child(26) {\n  border-top-color: #319573;\n}\n:host .open-banking .tiles .bx--tile:nth-child(27) {\n  border-top-color: #a6ccfe;\n}\n:host .open-banking .tiles .bx--tile:nth-child(28) {\n  border-top-color: #944a83;\n}\n:host .open-banking .tiles .bx--tile:nth-child(29) {\n  border-top-color: #8b4f21;\n}\n:host .open-banking .tiles .bx--tile:nth-child(30) {\n  border-top-color: #319b9e;\n}\n:host .open-banking .tiles .bx--tile:nth-child(31) {\n  border-top-color: #80c622;\n}\n:host .open-banking .tiles .bx--tile:nth-child(32) {\n  border-top-color: #3e6e69;\n}\n:host .open-banking .tiles .bx--tile:nth-child(33) {\n  border-top-color: #7aa3e5;\n}\n:host .open-banking .tiles .bx--tile:nth-child(34) {\n  border-top-color: #82b2cc;\n}\n:host .open-banking .tiles .bx--tile:nth-child(35) {\n  border-top-color: #b061fa;\n}\n:host .open-banking .tiles .bx--tile:nth-child(36) {\n  border-top-color: #38fce4;\n}\n:host .open-banking .tiles .bx--tile:nth-child(37) {\n  border-top-color: #d80db4;\n}\n:host .open-banking .tiles .bx--tile:nth-child(38) {\n  border-top-color: #4cb8c3;\n}\n:host .open-banking .tiles .bx--tile:nth-child(39) {\n  border-top-color: #0ddaa8;\n}\n:host .open-banking .tiles .bx--tile:nth-child(40) {\n  border-top-color: #8d26d8;\n}\n:host .open-banking .tiles .bx--tile:nth-child(41) {\n  border-top-color: #298ff9;\n}\n:host .open-banking .tiles .bx--tile:nth-child(42) {\n  border-top-color: #522aa4;\n}\n:host .open-banking .tiles .bx--tile:nth-child(43) {\n  border-top-color: #3f9290;\n}\n:host .open-banking .tiles .bx--tile:nth-child(44) {\n  border-top-color: #e6451e;\n}\n:host .open-banking .tiles .bx--tile:nth-child(45) {\n  border-top-color: #d1aab3;\n}\n:host .open-banking .tiles .bx--tile:nth-child(46) {\n  border-top-color: #e20c48;\n}\n:host .open-banking .tiles .bx--tile:nth-child(47) {\n  border-top-color: #dca57e;\n}\n:host .open-banking .tiles .bx--tile:nth-child(48) {\n  border-top-color: #fe6aaa;\n}\n:host .open-banking .tiles .bx--tile:nth-child(49) {\n  border-top-color: #0d0a0f;\n}\n:host .open-banking .tiles .bx--tile:nth-child(50) {\n  border-top-color: #5d8ccd;\n}\n:host .open-banking .tiles .bx--tile:nth-child(51) {\n  border-top-color: #a30aa3;\n}\n:host .open-banking .tiles .bx--tile:nth-child(52) {\n  border-top-color: #c3cac2;\n}\n:host .open-banking .tiles .bx--tile:nth-child(53) {\n  border-top-color: #cd79a4;\n}\n:host .open-banking .tiles .bx--tile:nth-child(54) {\n  border-top-color: #618cb4;\n}\n:host .open-banking .tiles .bx--tile:nth-child(55) {\n  border-top-color: #b024a8;\n}\n:host .open-banking .tiles .bx--tile:nth-child(56) {\n  border-top-color: #c3f861;\n}\n:host .open-banking .tiles .bx--tile:nth-child(57) {\n  border-top-color: #167ba1;\n}\n:host .open-banking .tiles .bx--tile:nth-child(58) {\n  border-top-color: #cd408f;\n}\n:host .open-banking .tiles .bx--tile:nth-child(59) {\n  border-top-color: #adea94;\n}\n:host .open-banking .tiles .bx--tile:nth-child(60) {\n  border-top-color: #180143;\n}\n:host .open-banking .tiles .bx--tile:nth-child(61) {\n  border-top-color: #9db049;\n}\n:host .open-banking .tiles .bx--tile:nth-child(62) {\n  border-top-color: #ce55cb;\n}\n:host .open-banking .tiles .bx--tile:nth-child(63) {\n  border-top-color: #04013c;\n}\n:host .open-banking .tiles .bx--tile:nth-child(64) {\n  border-top-color: #833a47;\n}\n:host .open-banking .tiles .bx--tile:nth-child(65) {\n  border-top-color: #b64fb1;\n}\n:host .open-banking .tiles .bx--tile:nth-child(66) {\n  border-top-color: #33e6fb;\n}\n:host .open-banking .tiles .bx--tile:nth-child(67) {\n  border-top-color: #c84c82;\n}\n:host .open-banking .tiles .bx--tile:nth-child(68) {\n  border-top-color: #d44e27;\n}\n:host .open-banking .tiles .bx--tile:nth-child(69) {\n  border-top-color: #70ea0a;\n}\n:host .open-banking .tiles .bx--tile:nth-child(70) {\n  border-top-color: #c6e2ab;\n}\n:host .open-banking .tiles .bx--tile:nth-child(71) {\n  border-top-color: #39d674;\n}\n:host .open-banking .tiles .bx--tile:nth-child(72) {\n  border-top-color: #b9d61d;\n}\n:host .open-banking .tiles .bx--tile:nth-child(73) {\n  border-top-color: #fe0dd8;\n}\n:host .open-banking .tiles .bx--tile:nth-child(74) {\n  border-top-color: #204673;\n}\n:host .open-banking .tiles .bx--tile:nth-child(75) {\n  border-top-color: #37a016;\n}\n:host .open-banking .tiles .bx--tile:nth-child(76) {\n  border-top-color: #f2e12e;\n}\n:host .open-banking .tiles .bx--tile:nth-child(77) {\n  border-top-color: #55fbe1;\n}\n:host .open-banking .tiles .bx--tile:nth-child(78) {\n  border-top-color: #bc507d;\n}\n:host .open-banking .tiles .bx--tile:nth-child(79) {\n  border-top-color: #85c9ec;\n}\n:host .open-banking .tiles .bx--tile:nth-child(80) {\n  border-top-color: #d072d5;\n}\n:host .open-banking .tiles .bx--tile:nth-child(81) {\n  border-top-color: #a614a8;\n}\n:host .open-banking .tiles .bx--tile:nth-child(82) {\n  border-top-color: #80c484;\n}\n:host .open-banking .tiles .bx--tile:nth-child(83) {\n  border-top-color: #2c5012;\n}\n:host .open-banking .tiles .bx--tile:nth-child(84) {\n  border-top-color: #105523;\n}\n:host .open-banking .tiles .bx--tile:nth-child(85) {\n  border-top-color: #d95ada;\n}\n:host .open-banking .tiles .bx--tile:nth-child(86) {\n  border-top-color: #5ba843;\n}\n:host .open-banking .tiles .bx--tile:nth-child(87) {\n  border-top-color: #cb9839;\n}\n:host .open-banking .tiles .bx--tile:nth-child(88) {\n  border-top-color: #5ec79b;\n}\n:host .open-banking .tiles .bx--tile:nth-child(89) {\n  border-top-color: #38feaa;\n}\n:host .open-banking .tiles .bx--tile:nth-child(90) {\n  border-top-color: #385a2f;\n}\n:host .open-banking .tiles .bx--tile:nth-child(91) {\n  border-top-color: #802ac4;\n}\n:host .open-banking .tiles .bx--tile:nth-child(92) {\n  border-top-color: #8a49e3;\n}\n:host .open-banking .tiles .bx--tile:nth-child(93) {\n  border-top-color: #841155;\n}\n:host .open-banking .tiles .bx--tile:nth-child(94) {\n  border-top-color: #2a6804;\n}\n:host .open-banking .tiles .bx--tile:nth-child(95) {\n  border-top-color: #1942c2;\n}\n:host .open-banking .tiles .bx--tile:nth-child(96) {\n  border-top-color: #200c26;\n}\n:host .open-banking .tiles .bx--tile:nth-child(97) {\n  border-top-color: #7f1c23;\n}\n:host .open-banking .tiles .bx--tile:nth-child(98) {\n  border-top-color: #457a95;\n}\n:host .open-banking .tiles .bx--tile:nth-child(99) {\n  border-top-color: #a57825;\n}\n/* Modal */\n.fade {\n  margin-top: 25px;\n}\n.modal-footer-button {\n  margin: 1rem -1rem -1rem -1rem;\n  display: flex;\n}\n.modal-footer-button button {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi1iYW5raW5nL046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcb3Blbi1iYW5raW5nXFxvcGVuLWJhbmtpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wZW4tYmFua2luZy9vcGVuLWJhbmtpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSx5QkFBQTtBQ0hSO0FESVE7RUFDSSxtQkFBQTtBQ0ZaO0FER1k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNEaEI7QURJUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGWjtBREdZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNEaEI7QURFZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNBcEI7QURFZ0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQXBCO0FET29CO0VBbkNoQix5QkFBQTtBQytCSjtBRElvQjtFQW5DaEIseUJBQUE7QUNrQ0o7QURDb0I7RUFuQ2hCLHlCQUFBO0FDcUNKO0FERm9CO0VBbkNoQix5QkFBQTtBQ3dDSjtBRExvQjtFQW5DaEIseUJBQUE7QUMyQ0o7QURSb0I7RUFuQ2hCLHlCQUFBO0FDOENKO0FEWG9CO0VBbkNoQix5QkFBQTtBQ2lESjtBRGRvQjtFQW5DaEIseUJBQUE7QUNvREo7QURqQm9CO0VBbkNoQix5QkFBQTtBQ3VESjtBRHBCb0I7RUFuQ2hCLHlCQUFBO0FDMERKO0FEdkJvQjtFQW5DaEIseUJBQUE7QUM2REo7QUQxQm9CO0VBbkNoQix5QkFBQTtBQ2dFSjtBRDdCb0I7RUFuQ2hCLHlCQUFBO0FDbUVKO0FEaENvQjtFQW5DaEIseUJBQUE7QUNzRUo7QURuQ29CO0VBbkNoQix5QkFBQTtBQ3lFSjtBRHRDb0I7RUFuQ2hCLHlCQUFBO0FDNEVKO0FEekNvQjtFQW5DaEIseUJBQUE7QUMrRUo7QUQ1Q29CO0VBbkNoQix5QkFBQTtBQ2tGSjtBRC9Db0I7RUFuQ2hCLHlCQUFBO0FDcUZKO0FEbERvQjtFQW5DaEIseUJBQUE7QUN3Rko7QURyRG9CO0VBbkNoQix5QkFBQTtBQzJGSjtBRHhEb0I7RUFuQ2hCLHlCQUFBO0FDOEZKO0FEM0RvQjtFQW5DaEIseUJBQUE7QUNpR0o7QUQ5RG9CO0VBbkNoQix5QkFBQTtBQ29HSjtBRGpFb0I7RUFuQ2hCLHlCQUFBO0FDdUdKO0FEcEVvQjtFQW5DaEIseUJBQUE7QUMwR0o7QUR2RW9CO0VBbkNoQix5QkFBQTtBQzZHSjtBRDFFb0I7RUFuQ2hCLHlCQUFBO0FDZ0hKO0FEN0VvQjtFQW5DaEIseUJBQUE7QUNtSEo7QURoRm9CO0VBbkNoQix5QkFBQTtBQ3NISjtBRG5Gb0I7RUFuQ2hCLHlCQUFBO0FDeUhKO0FEdEZvQjtFQW5DaEIseUJBQUE7QUM0SEo7QUR6Rm9CO0VBbkNoQix5QkFBQTtBQytISjtBRDVGb0I7RUFuQ2hCLHlCQUFBO0FDa0lKO0FEL0ZvQjtFQW5DaEIseUJBQUE7QUNxSUo7QURsR29CO0VBbkNoQix5QkFBQTtBQ3dJSjtBRHJHb0I7RUFuQ2hCLHlCQUFBO0FDMklKO0FEeEdvQjtFQW5DaEIseUJBQUE7QUM4SUo7QUQzR29CO0VBbkNoQix5QkFBQTtBQ2lKSjtBRDlHb0I7RUFuQ2hCLHlCQUFBO0FDb0pKO0FEakhvQjtFQW5DaEIseUJBQUE7QUN1Sko7QURwSG9CO0VBbkNoQix5QkFBQTtBQzBKSjtBRHZIb0I7RUFuQ2hCLHlCQUFBO0FDNkpKO0FEMUhvQjtFQW5DaEIseUJBQUE7QUNnS0o7QUQ3SG9CO0VBbkNoQix5QkFBQTtBQ21LSjtBRGhJb0I7RUFuQ2hCLHlCQUFBO0FDc0tKO0FEbklvQjtFQW5DaEIseUJBQUE7QUN5S0o7QUR0SW9CO0VBbkNoQix5QkFBQTtBQzRLSjtBRHpJb0I7RUFuQ2hCLHlCQUFBO0FDK0tKO0FENUlvQjtFQW5DaEIseUJBQUE7QUNrTEo7QUQvSW9CO0VBbkNoQix5QkFBQTtBQ3FMSjtBRGxKb0I7RUFuQ2hCLHlCQUFBO0FDd0xKO0FEckpvQjtFQW5DaEIseUJBQUE7QUMyTEo7QUR4Sm9CO0VBbkNoQix5QkFBQTtBQzhMSjtBRDNKb0I7RUFuQ2hCLHlCQUFBO0FDaU1KO0FEOUpvQjtFQW5DaEIseUJBQUE7QUNvTUo7QURqS29CO0VBbkNoQix5QkFBQTtBQ3VNSjtBRHBLb0I7RUFuQ2hCLHlCQUFBO0FDME1KO0FEdktvQjtFQW5DaEIseUJBQUE7QUM2TUo7QUQxS29CO0VBbkNoQix5QkFBQTtBQ2dOSjtBRDdLb0I7RUFuQ2hCLHlCQUFBO0FDbU5KO0FEaExvQjtFQW5DaEIseUJBQUE7QUNzTko7QURuTG9CO0VBbkNoQix5QkFBQTtBQ3lOSjtBRHRMb0I7RUFuQ2hCLHlCQUFBO0FDNE5KO0FEekxvQjtFQW5DaEIseUJBQUE7QUMrTko7QUQ1TG9CO0VBbkNoQix5QkFBQTtBQ2tPSjtBRC9Mb0I7RUFuQ2hCLHlCQUFBO0FDcU9KO0FEbE1vQjtFQW5DaEIseUJBQUE7QUN3T0o7QURyTW9CO0VBbkNoQix5QkFBQTtBQzJPSjtBRHhNb0I7RUFuQ2hCLHlCQUFBO0FDOE9KO0FEM01vQjtFQW5DaEIseUJBQUE7QUNpUEo7QUQ5TW9CO0VBbkNoQix5QkFBQTtBQ29QSjtBRGpOb0I7RUFuQ2hCLHlCQUFBO0FDdVBKO0FEcE5vQjtFQW5DaEIseUJBQUE7QUMwUEo7QUR2Tm9CO0VBbkNoQix5QkFBQTtBQzZQSjtBRDFOb0I7RUFuQ2hCLHlCQUFBO0FDZ1FKO0FEN05vQjtFQW5DaEIseUJBQUE7QUNtUUo7QURoT29CO0VBbkNoQix5QkFBQTtBQ3NRSjtBRG5Pb0I7RUFuQ2hCLHlCQUFBO0FDeVFKO0FEdE9vQjtFQW5DaEIseUJBQUE7QUM0UUo7QUR6T29CO0VBbkNoQix5QkFBQTtBQytRSjtBRDVPb0I7RUFuQ2hCLHlCQUFBO0FDa1JKO0FEL09vQjtFQW5DaEIseUJBQUE7QUNxUko7QURsUG9CO0VBbkNoQix5QkFBQTtBQ3dSSjtBRHJQb0I7RUFuQ2hCLHlCQUFBO0FDMlJKO0FEeFBvQjtFQW5DaEIseUJBQUE7QUM4Uko7QUQzUG9CO0VBbkNoQix5QkFBQTtBQ2lTSjtBRDlQb0I7RUFuQ2hCLHlCQUFBO0FDb1NKO0FEalFvQjtFQW5DaEIseUJBQUE7QUN1U0o7QURwUW9CO0VBbkNoQix5QkFBQTtBQzBTSjtBRHZRb0I7RUFuQ2hCLHlCQUFBO0FDNlNKO0FEMVFvQjtFQW5DaEIseUJBQUE7QUNnVEo7QUQ3UW9CO0VBbkNoQix5QkFBQTtBQ21USjtBRGhSb0I7RUFuQ2hCLHlCQUFBO0FDc1RKO0FEblJvQjtFQW5DaEIseUJBQUE7QUN5VEo7QUR0Um9CO0VBbkNoQix5QkFBQTtBQzRUSjtBRHpSb0I7RUFuQ2hCLHlCQUFBO0FDK1RKO0FENVJvQjtFQW5DaEIseUJBQUE7QUNrVUo7QUQvUm9CO0VBbkNoQix5QkFBQTtBQ3FVSjtBRGxTb0I7RUFuQ2hCLHlCQUFBO0FDd1VKO0FENVJBLFVBQUE7QUFDQTtFQUNJLGdCQUFBO0FDK1JKO0FENVJBO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0FDK1JKO0FEOVJJO0VBQ0csY0FBQTtBQ2dTUCIsImZpbGUiOiJzcmMvYXBwL29wZW4tYmFua2luZy9vcGVuLWJhbmtpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcmFuZG9tLWJncigpe1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKHJhbmRvbSgyNTUpLCByYW5kb20oMjU1KSwgcmFuZG9tKDI1NSkpO1xyXG59XHJcbjpob3N0IHtcclxuICAgIC5vcGVuLWJhbmtpbmcge1xyXG4gICAgICAgIG1hcmdpbjogMCAzMGVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNvbW1vbi1hY3Rpb25zIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyZW0gMCAwIDVlbTtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbGVzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICAuYngtLXRpbGUge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNWVtO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJlbSAyZW0gMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRudW0tY29sb3JzOiAxMDA7XHJcbiAgICAgICAgICAgICAgICAkYmFzZS1jb2xvcjogIzk5NkI0RDtcclxuICAgICAgICAgICAgICAgICRzcGVjdHJ1bTogMzYwZGVnO1xyXG4gICAgICAgICAgICAgICAgJG9mZnNldDo1MGRlZztcclxuICAgICAgICAgICAgICAgIEBmb3IgJGkgZnJvbSAwIHRvICRudW0tY29sb3JzIHtcclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByYW5kb20tYmdyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNb2RhbCAqL1xyXG4uZmFkZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbiAgXHJcbi5tb2RhbC1mb290ZXItYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbSAtMXJlbSAtMXJlbSAtMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICB9XHJcbn0iLCI6aG9zdCAub3Blbi1iYW5raW5nIHtcbiAgbWFyZ2luOiAwIDMwZW0gIWltcG9ydGFudDtcbn1cbjpob3N0IC5vcGVuLWJhbmtpbmcgLmNvbW1vbi1hY3Rpb25zIHtcbiAgbWFyZ2luOiAyZW0gMCAwIDVlbTtcbn1cbjpob3N0IC5vcGVuLWJhbmtpbmcgLmNvbW1vbi1hY3Rpb25zIGgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cbjpob3N0IC5vcGVuLWJhbmtpbmcgLnRpbGVzIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGUge1xuICBtaW4td2lkdGg6IDE1ZW07XG4gIG1heC13aWR0aDogMjBlbTtcbiAgbWFyZ2luOiAwIDJlbSAyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzMzMzM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGUgaDQge1xuICBtYXJnaW46IDAgMCAxZW0gMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuOmhvc3QgLm9wZW4tYmFua2luZyAudGlsZXMgLmJ4LS10aWxlIHAge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xufVxuOmhvc3QgLm9wZW4tYmFua2luZyAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxYzgyMjA7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFmNDAzZDtcbn1cbjpob3N0IC5vcGVuLWJhbmtpbmcgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoMikge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNzUzZmZjO1xufVxuOmhvc3QgLm9wZW4tYmFua2luZyAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCgzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlOTRkNzY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2EwNmNlODtcbn1cbjpob3N0IC5vcGVuLWJhbmtpbmcgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoNSkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYzk2OTQyO1xufVxuOmhvc3QgLm9wZW4tYmFua2luZyAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzMjYxODk7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDcpIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzkxMzQyMztcbn1cbjpob3N0IC5vcGVuLWJhbmtpbmcgLnRpbGVzIC5ieC0tdGlsZTpudGgtY2hpbGQoOCkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjY2ViOGY2O1xufVxuOmhvc3QgLm9wZW4tYmFua2luZyAudGlsZXMgLmJ4LS10aWxlOm50aC1jaGlsZCg5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2OGU5ZWY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDEwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0MGZkOGY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDExKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxYTkyMTY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDEyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlZDA2NDE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDEzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxOWQ0OTU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkNjZhNzQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlYjhjZTk7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhZDQwYmQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiYWNhYWM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwNTZkOTE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDE5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4NjgxYTY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwNzE5NDg7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0NTllNjg7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkMDQ1MjA7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDIzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiZWI4YTI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkNWFjMGU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzNjE3OWU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzMTk1NzM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhNmNjZmU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5NDRhODM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDI5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4YjRmMjE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzMTliOWU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4MGM2MjI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzZTZlNjk7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDMzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM3YWEzZTU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4MmIyY2M7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiMDYxZmE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzOGZjZTQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkODBkYjQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0Y2I4YzM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDM5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwZGRhYTg7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4ZDI2ZDg7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyOThmZjk7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1MjJhYTQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzZjkyOTA7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlNjQ1MWU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkMWFhYjM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlMjBjNDg7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkY2E1N2U7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZTZhYWE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDQ5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwZDBhMGY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1ZDhjY2Q7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhMzBhYTM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjM2NhYzI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDUzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjZDc5YTQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM2MThjYjQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiMDI0YTg7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjM2Y4NjE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxNjdiYTE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjZDQwOGY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDU5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhZGVhOTQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxODAxNDM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5ZGIwNDk7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjZTU1Y2I7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDYzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwNDAxM2M7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4MzNhNDc7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiNjRmYjE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzM2U2ZmI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjODRjODI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkNDRlMjc7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDY5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM3MGVhMGE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDcwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjNmUyYWI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDcxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzOWQ2NzQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDcyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiOWQ2MWQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDczKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZTBkZDg7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyMDQ2NzM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzN2EwMTY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmMmUxMmU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1NWZiZTE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiYzUwN2Q7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDc5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4NWM5ZWM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkMDcyZDU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhNjE0YTg7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4MGM0ODQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDgzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyYzUwMTI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxMDU1MjM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkOTVhZGE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1YmE4NDM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjYjk4Mzk7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1ZWM3OWI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDg5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzOGZlYWE7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkwKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzODVhMmY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkxKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4MDJhYzQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkyKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4YTQ5ZTM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDkzKSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4NDExNTU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk0KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyYTY4MDQ7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk1KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxOTQyYzI7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk2KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyMDBjMjY7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk3KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM3ZjFjMjM7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk4KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0NTdhOTU7XG59XG46aG9zdCAub3Blbi1iYW5raW5nIC50aWxlcyAuYngtLXRpbGU6bnRoLWNoaWxkKDk5KSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhNTc4MjU7XG59XG5cbi8qIE1vZGFsICovXG4uZmFkZSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tb2RhbC1mb290ZXItYnV0dG9uIHtcbiAgbWFyZ2luOiAxcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1vZGFsLWZvb3Rlci1idXR0b24gYnV0dG9uIHtcbiAgZmxleDogMSAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/open-banking/open-banking.component.ts":
/*!********************************************************!*\
  !*** ./src/app/open-banking/open-banking.component.ts ***!
  \********************************************************/
/*! exports provided: OpenBankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenBankingComponent", function() { return OpenBankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");







let OpenBankingComponent = class OpenBankingComponent {
    constructor(router, route, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.bsArray = [];
        this.deployButtonClicked = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.route.queryParams.subscribe(params => {
            this.packParam = params['pack'];
        });
        this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/mrbsdetails?pack=' + this.packParam)
            .subscribe((bsData) => {
            console.log('Get bs list call >>', bsData);
            for (let i = 0; i < bsData.data.services.length; i++) {
                this.bsArray = bsData.data.services.map(x => x);
                console.log('this.bsArray services list >> ', this.bsArray);
            }
        }, error => {
            console.log('Get bs call in error >>', error.message);
        });
        this.servicesEnvForm = this.formBuilder.group({
            payEnvs: [''],
            accEnvs: [''],
            token: ['']
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.servicesEnvForm.controls;
    }
    onDeploySubmit() {
        if (this.servicesClicked == 'Payments' && this.servicesEnvForm.controls.payEnvs.value && this.servicesEnvForm.controls.token.value) {
            this.deployButtonClicked = true;
            this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/manageservicesnewdeploy?env=' + this.servicesEnvForm.controls.payEnvs.value + '&openshifttoken=' + this.servicesEnvForm.controls.token.value + '&pack=' + this.packParam + '&services=' + this.servicesClicked)
                .subscribe((paymentsMsg) => {
                console.log('Get payments service env deployed list call >>', paymentsMsg);
                this.toastrService.success('Service Deployed in target environment.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageservices']);
                }, 4000);
            }, error => {
                console.log('Get payments service env deployed call in error >>', error);
                this.toastrService.error('Service Deployment Failed in target environment.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageservices']);
                }, 4000);
            });
        }
        else if (this.servicesClicked == 'Accounts' && this.servicesEnvForm.controls.accEnvs.value && this.servicesEnvForm.controls.token.value) {
            this.deployButtonClicked = true;
            this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/manageservicesnewdeploy?env=' + this.servicesEnvForm.controls.accEnvs.value + '&openshifttoken=' + this.servicesEnvForm.controls.token.value + '&pack=' + this.packParam + '&services=' + this.servicesClicked)
                .subscribe((accountsMsg) => {
                console.log('Get accounts service env deployed list call >>', accountsMsg);
                this.toastrService.success('Service Deployed in target environment.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageservices']);
                }, 4000);
            }, error => {
                console.log('Get accounts service env deployed call in error >>', error);
                this.toastrService.error('Service Deployment Failed in target environment.');
                setTimeout(() => {
                    this.closeAddExpenseModal.nativeElement.click();
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.navigate(['/dashboard/manageservices']);
                }, 4000);
            });
        }
        else {
            this.toastrService.error('Please enter all fields to deploy.');
        }
    }
    onDeployServices(services) {
        this.servicesClicked = services;
        this.http.get('http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/nonenv?services=' + services + '&pack=' + this.packParam)
            .subscribe((servicesData) => {
            console.log('Get services from env call >>', servicesData);
            if (servicesData.length == []) {
                this.toastrService.error('No environment to be deployed.');
            }
            else {
                for (let i = 0; i < servicesData.length; i++) {
                    if (this.servicesClicked == 'Payments') {
                        this.paymentsServiceEnvs = servicesData.map(x => x);
                        console.log('Payments Service Envs >>', this.paymentsServiceEnvs);
                    }
                    else if (this.servicesClicked == 'Accounts') {
                        this.accountsServiceEnvs = servicesData.map(x => x);
                        console.log('Accounts Service Envs >>', this.accountsServiceEnvs);
                    }
                }
            }
        }, error => {
            console.log('Get services from env data in error >>', error);
        });
    }
};
OpenBankingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], OpenBankingComponent.prototype, "toastContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeAddExpenseModal', { static: true })
], OpenBankingComponent.prototype, "closeAddExpenseModal", void 0);
OpenBankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-banking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-banking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-banking/open-banking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-banking.component.scss */ "./src/app/open-banking/open-banking.component.scss")).default]
    })
], OpenBankingComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  height: 100%;\n}\n:host .login-col {\n  height: 100%;\n}\n:host .login-left {\n  margin-right: auto;\n  flex-grow: 1;\n  padding: 2rem;\n}\n:host .login-left .ibm-logo {\n  background: url('ibm_2x.s8.png') no-repeat;\n  height: 36px;\n  margin: 0 0 2em 0;\n  background-size: contain;\n}\n:host .login-left .product-title {\n  display: flex;\n  align-items: center;\n  margin: 0 0 2em 0;\n}\n:host .login-left .product-title h4 {\n  margin-right: auto;\n  flex-grow: 1;\n}\n:host .login-left .product-title #createAccount {\n  flex: 0 0 auto;\n  min-width: 175px;\n  margin-left: auto;\n}\n:host .login-left .login-form {\n  max-width: 30em;\n  margin: 6em auto 2em auto;\n}\n:host .login-left .login-form .button-section {\n  display: flex;\n  align-items: center;\n}\n:host .login-left .login-form .button-section a#forgotPassword {\n  margin-right: auto;\n  flex-grow: 1;\n}\n:host .login-left .login-form .button-section button#submit {\n  flex: 0 0 auto;\n  min-width: 115px;\n  margin-left: auto;\n}\n:host .login-right {\n  flex: 0 0 35%;\n  margin-left: auto;\n  background-image: url('login-side-bg.jpg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvTjpcXEJhbmtDb25uZWN0X0lEQlBfVGVjaFZpdGFsaXR5X0dpdFxcaWRicC1hbmd1bGFyL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRVI7QUREUTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNHWjtBREZZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDSWhCO0FERlk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0loQjtBRERRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDR1o7QURGWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0loQjtBREhnQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0twQjtBREhnQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS3BCO0FEQUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAubG9naW4tY29sIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubG9naW4tbGVmdCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIC5pYm0tbG9nbyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9pYm1fMnguczgucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjY3JlYXRlQWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzBlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiA2ZW0gYXV0byAyZW0gYXV0bztcclxuICAgICAgICAgICAgLmJ1dHRvbi1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYSNmb3Jnb3RQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbiNzdWJtaXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9naW4tcmlnaHQge1xyXG4gICAgICAgIGZsZXg6IDAgMCAzNSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLXNpZGUtYmcuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5sb2dpbi1jb2wge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAubG9naW4tbGVmdCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAycmVtO1xufVxuOmhvc3QgLmxvZ2luLWxlZnQgLmlibS1sb2dvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pYm1fMnguczgucG5nXCIpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuOmhvc3QgLmxvZ2luLWxlZnQgLnByb2R1Y3QtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbn1cbjpob3N0IC5sb2dpbi1sZWZ0IC5wcm9kdWN0LXRpdGxlIGg0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG59XG46aG9zdCAubG9naW4tbGVmdCAucHJvZHVjdC10aXRsZSAjY3JlYXRlQWNjb3VudCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtaW4td2lkdGg6IDE3NXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbjpob3N0IC5sb2dpbi1sZWZ0IC5sb2dpbi1mb3JtIHtcbiAgbWF4LXdpZHRoOiAzMGVtO1xuICBtYXJnaW46IDZlbSBhdXRvIDJlbSBhdXRvO1xufVxuOmhvc3QgLmxvZ2luLWxlZnQgLmxvZ2luLWZvcm0gLmJ1dHRvbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5sb2dpbi1sZWZ0IC5sb2dpbi1mb3JtIC5idXR0b24tc2VjdGlvbiBhI2ZvcmdvdFBhc3N3b3JkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG59XG46aG9zdCAubG9naW4tbGVmdCAubG9naW4tZm9ybSAuYnV0dG9uLXNlY3Rpb24gYnV0dG9uI3N1Ym1pdCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtaW4td2lkdGg6IDExNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbjpob3N0IC5sb2dpbi1yaWdodCB7XG4gIGZsZXg6IDAgMCAzNSU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLXNpZGUtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);







let RegisterComponent = class RegisterComponent {
    constructor(router, route, formBuilder, http, toastrService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.email = "";
        this.ctrl = {
            firstName: {
                label: 'First Name',
                invalidText: '',
                disabled: false
            },
            lastName: {
                label: 'Last Name',
                invalidText: '',
                disabled: false
            },
            email: {
                invalidText: '',
                disabled: true
            },
            password: {
                label: 'Password',
                invalidText: '',
                disabled: false
            }
        };
        this.route.queryParams.subscribe(params => {
            this.email = params['email'];
            console.log('email >>', this.email);
        });
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [{ value: this.email, disabled: true }],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]]
        });
        for (const ctrl of Object.keys(this.ctrl)) {
            this.registerForm.controls[ctrl].valueChanges.subscribe(value => {
                this.validateInput(ctrl);
            });
        }
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.registerForm.controls;
    }
    validateInput(ctrl) {
        const field = this.registerForm.controls[ctrl];
        if (!field.errors || !Object.keys(field.errors).length) {
            return;
        }
        for (const err of Object.keys(field.errors)) {
            this.checkErrorCase(ctrl, err);
        }
    }
    checkErrorCase(ctrlName, err) {
        const field = this.registerForm.controls[ctrlName];
        switch (err) {
            case 'required':
                this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} is required`;
                break;
            case 'minlength':
                this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} must be at least ${field.errors.minlength.requiredLength} characters`;
                break;
            case 'email':
                this.ctrl[ctrlName].invalidText = `${this.ctrl[ctrlName].label} must be a valid email address`;
                break;
        }
    }
    onRegisterSubmit() {
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            for (const ctrl of Object.keys(this.ctrl)) {
                this.validateInput(ctrl);
            }
            return;
        }
        else {
            this.nonAdminRegister();
        }
    }
    nonAdminRegister() {
        this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.nonAdminURL, {
            firstName: this.registerForm.controls.firstName.value,
            lastName: this.registerForm.controls.lastName.value,
            password: this.registerForm.controls.password.value,
            email: this.registerForm.controls.email.value,
            status: true
        })
            .subscribe((nonAdminRegister) => {
            console.log('Put Non Admin register >>', nonAdminRegister);
            this.toastrService.success('Registration Successfully done. Redirecting you to the login page.');
        }, error => {
            console.log('Put non admin register call in error >>', error);
            if (error.status == '200') {
                this.toastrService.success('Registration Successfully done. Redirecting you to the login page.');
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 3000);
            }
            else {
                this.toastrService.error('Email is not registered by admin. Contact your administrator.');
            }
        });
    }
    ;
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], RegisterComponent.prototype, "toastContainer", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/rule-engine-accelerator/rule-engine-accelerator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/rule-engine-accelerator/rule-engine-accelerator.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1bGUtZW5naW5lLWFjY2VsZXJhdG9yL3J1bGUtZW5naW5lLWFjY2VsZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/rule-engine-accelerator/rule-engine-accelerator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/rule-engine-accelerator/rule-engine-accelerator.component.ts ***!
  \******************************************************************************/
/*! exports provided: RuleEngineAcceleratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleEngineAcceleratorComponent", function() { return RuleEngineAcceleratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");







let RuleEngineAcceleratorComponent = class RuleEngineAcceleratorComponent {
    constructor(router, formBuilder, http, breadcrumbService, toastrService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.breadcrumbService = breadcrumbService;
        this.toastrService = toastrService;
        this.submitted = false;
        this.selectedService = [];
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.ruleengineacceleratorForm = this.formBuilder.group({
            eName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ruleType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sName: [''],
            pID: [''],
            currencyType: [''],
            minLimit: [''],
            maxLimit: [''],
            limit: [''],
            frequencyType: [''],
            start: [''],
            end: [''],
            actionType: [''],
            Compliance: [''],
            Value: [''],
            gdpr: [''],
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.ruleengineacceleratorForm.controls;
    }
    onRuleChangeHandler(event) {
        this.checkedRuleTypeValue = event.target.value;
    }
    onFeaturesCboxChangeHandler(event) {
        console.log('selected >>', event.target.checked);
        console.log('Service value >>', event.target.value);
        if (event.target.checked) {
            this.selectedService.push(event.target.value);
        }
        else {
            if (this.selectedService.indexOf(event.target.value) > -1) {
                this.selectedService.splice(this.selectedService.indexOf(event.target.value), 1);
            }
        }
        console.log('final selectedService >>' + this.selectedService);
    }
    onruleengineSubmit() {
        this.submitted = true;
        if (this.ruleengineacceleratorForm.invalid) {
            return false;
        }
        else {
            this.createruleengineIntegration();
        }
    }
    createruleengineIntegration() {
        this.toastrService.success('Rules created in target environment successfully.');
        setTimeout(() => {
            this.router.navigate(['/dashboard']);
        }, 2000);
    }
};
RuleEngineAcceleratorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], RuleEngineAcceleratorComponent.prototype, "toastContainer", void 0);
RuleEngineAcceleratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rule-engine-accelerator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rule-engine-accelerator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rule-engine-accelerator/rule-engine-accelerator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rule-engine-accelerator.component.scss */ "./src/app/rule-engine-accelerator/rule-engine-accelerator.component.scss")).default]
    })
], RuleEngineAcceleratorComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ibm-sidenav.bx--side-nav {\n  box-shadow: 3px 0px 3px 0px #ccc;\n  visibility: block;\n  width: 58px;\n}\n\n.bx--side-nav:not(.bx--side-nav--fixed):hover, .bx--side-nav--expanded {\n  width: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9OOlxcQmFua0Nvbm5lY3RfSURCUF9UZWNoVml0YWxpdHlfR2l0XFxpZGJwLWFuZ3VsYXIvc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpYm0tc2lkZW5hdi5ieC0tc2lkZS1uYXYge1xyXG4gIGJveC1zaGFkb3c6IDNweCAwcHggM3B4IDBweCAjY2NjO1xyXG4gIHZpc2liaWxpdHk6IGJsb2NrO1xyXG4gIHdpZHRoOiA1OHB4O1xyXG59XHJcblxyXG4uYngtLXNpZGUtbmF2Om5vdCguYngtLXNpZGUtbmF2LS1maXhlZCk6aG92ZXIsIC5ieC0tc2lkZS1uYXYtLWV4cGFuZGVkIHtcclxuICB3aWR0aDogMTByZW1cclxufSIsImlibS1zaWRlbmF2LmJ4LS1zaWRlLW5hdiB7XG4gIGJveC1zaGFkb3c6IDNweCAwcHggM3B4IDBweCAjY2NjO1xuICB2aXNpYmlsaXR5OiBibG9jaztcbiAgd2lkdGg6IDU4cHg7XG59XG5cbi5ieC0tc2lkZS1uYXY6bm90KC5ieC0tc2lkZS1uYXYtLWZpeGVkKTpob3ZlciwgLmJ4LS1zaWRlLW5hdi0tZXhwYW5kZWQge1xuICB3aWR0aDogMTByZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



let SidebarComponent = class SidebarComponent {
    //don't remove below declaration
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
};
SidebarComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/smtp-configure/smtp-configure.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/smtp-configure/smtp-configure.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NtdHAtY29uZmlndXJlL3NtdHAtY29uZmlndXJlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/smtp-configure/smtp-configure.component.ts":
/*!************************************************************!*\
  !*** ./src/app/smtp-configure/smtp-configure.component.ts ***!
  \************************************************************/
/*! exports provided: SmtpConfigureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmtpConfigureComponent", function() { return SmtpConfigureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let SmtpConfigureComponent = class SmtpConfigureComponent {
    constructor(router, formBuilder, http, toastrService, breadcrumbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
        this.submitted = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.serverForm = this.formBuilder.group({
            serviceName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            host: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            port: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            secure: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.serverForm.controls;
    }
    onServerSubmit() {
        this.submitted = true;
        if (this.serverForm.invalid) {
            return;
        }
        else {
            this.createSmtp();
        }
    }
    createSmtp() {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_7__.smtpURL, {
            servicename: this.serverForm.controls.serviceName.value,
            host: this.serverForm.controls.host.value,
            port: this.serverForm.controls.port.value,
            secure: this.serverForm.controls.secure.value,
            username: this.serverForm.controls.username.value,
            password: this.serverForm.controls.password.value
        })
            .subscribe((smtpConfigure) => {
            console.log('Post smtp configuration call successful value returned in body >>', smtpConfigure);
            this.toastrService.success('SMTP Configuration Data Saved Successfully.');
            this.router.navigate(['/dashboard/settings/listsmtpconfigure']);
        }, error => {
            console.log('Post smtp configuration call in error >>', error);
            if (error.status == '401') {
                this.toastrService.error('SMTP name is already taken.');
            }
            else {
                this.toastrService.success('SMTP Configuration Data Saved Successfully.');
                setTimeout(() => {
                    this.router.navigate(['/dashboard/settings/listsmtpconfigure']);
                }, 2000);
            }
        });
    }
    ;
};
SmtpConfigureComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], SmtpConfigureComponent.prototype, "toastContainer", void 0);
SmtpConfigureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-smtp-configure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./smtp-configure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/smtp-configure/smtp-configure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./smtp-configure.component.scss */ "./src/app/smtp-configure/smtp-configure.component.scss")).default]
    })
], SmtpConfigureComponent);



/***/ }),

/***/ "./src/app/token-management-accelerator/token-management-accelerator.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/token-management-accelerator/token-management-accelerator.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rva2VuLW1hbmFnZW1lbnQtYWNjZWxlcmF0b3IvdG9rZW4tbWFuYWdlbWVudC1hY2NlbGVyYXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/token-management-accelerator/token-management-accelerator.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/token-management-accelerator/token-management-accelerator.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TokenManagementAcceleratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenManagementAcceleratorComponent", function() { return TokenManagementAcceleratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");







let TokenManagementAcceleratorComponent = class TokenManagementAcceleratorComponent {
    constructor(router, formBuilder, http, breadcrumbService, toastrService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.breadcrumbService = breadcrumbService;
        this.toastrService = toastrService;
        this.submitted = false;
        this.selectedService = [];
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.aceacceleratorForm = this.formBuilder.group({
            radio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            revokeDate: [''],
            revokeClientID: [''],
            revokeOwner: [''],
            revokeToken: [''],
            radio4: ['']
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    get f() {
        return this.aceacceleratorForm.controls;
    }
    onRadioChangeHandler(event) {
        this.checkedRadioTypeValue = event.value;
    }
    onFeaturesCboxChangeHandler(event) {
        console.log('selected >>', event.target.checked);
        console.log('Service value >>', event.target.value);
        if (event.target.checked) {
            this.selectedService.push(event.target.value);
        }
        else {
            if (this.selectedService.indexOf(event.target.value) > -1) {
                this.selectedService.splice(this.selectedService.indexOf(event.target.value), 1);
            }
        }
        console.log('final selectedService >>' + this.selectedService);
    }
    ontokenmanagementSubmit() {
        this.submitted = true;
        if (this.aceacceleratorForm.invalid) {
            return false;
        }
        else {
            this.createaceacceleratorIntegration();
        }
    }
    createaceacceleratorIntegration() {
        this.toastrService.success('Updated in target environment succesfully.');
        setTimeout(() => {
            this.router.navigate(['/dashboard']);
        }, 2000);
    }
};
TokenManagementAcceleratorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], { static: true })
], TokenManagementAcceleratorComponent.prototype, "toastContainer", void 0);
TokenManagementAcceleratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-token-management-accelerator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./token-management-accelerator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/token-management-accelerator/token-management-accelerator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./token-management-accelerator.component.scss */ "./src/app/token-management-accelerator/token-management-accelerator.component.scss")).default]
    })
], TokenManagementAcceleratorComponent);



/***/ }),

/***/ "./src/app/user-management/user-management.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user-management/user-management.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3, p {\n  margin: 10px 0px 20px 350px;\n}\n\n.idbp button {\n  margin-top: -55px;\n  margin-left: 940px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L046XFxCYW5rQ29ubmVjdF9JREJQX1RlY2hWaXRhbGl0eV9HaXRcXGlkYnAtYW5ndWxhci9zcmNcXGFwcFxcdXNlci1tYW5hZ2VtZW50XFx1c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzLCBwIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMjBweCAzNTBweDtcclxufVxyXG5cclxuLmlkYnAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IC01NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDk0MHB4O1xyXG59IiwiaDMsIHAge1xuICBtYXJnaW46IDEwcHggMHB4IDIwcHggMzUwcHg7XG59XG5cbi5pZGJwIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IC01NXB4O1xuICBtYXJnaW4tbGVmdDogOTQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/user-management/user-management.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-management/user-management.component.ts ***!
  \**************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);








let UserManagementComponent = class UserManagementComponent {
    constructor(router, http, breadcrumbService) {
        this.router = router;
        this.http = http;
        this.breadcrumbService = breadcrumbService;
        this.roleTemp = false;
        this.userTemp = false;
        this.roleRoutesMatched = false;
        this.userRoutesMatched = false;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.roleURL)
            .subscribe((rolesList) => {
            console.log('Get roles list call >>', rolesList);
            this.rolesList = rolesList;
            if (this.rolesList.length == []) {
                this.roleTemp = false;
            }
            else {
                this.roleTemp = true;
            }
        }, error => {
            console.log('Get roles list call in error >>', error.message);
        });
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.nonAdminURL)
            .subscribe((nonAdminsList) => {
            console.log('Get non admins list call >>', nonAdminsList);
            this.usersList = nonAdminsList;
            if (this.usersList.length == []) {
                this.userTemp = false;
            }
            else {
                this.userTemp = true;
            }
        }, error => {
            console.log('Get non admins list call in error >>', error.message);
        });
        const tokenValidateData = jwt_decode__WEBPACK_IMPORTED_MODULE_5__(localStorage.getItem('jwt'));
        if (tokenValidateData["role"] == 'editor' || tokenValidateData["role"] == 'reader') {
            this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));
            for (let i = 0; i < this.roleRoutesList.length; i++) {
                if ("/dashboard/settings/listusers/createrole" == this.roleRoutesList[i] || "/dashboard/settings/listusers/createuser" == this.roleRoutesList[i]) {
                    this.roleRoutesMatched = true;
                    this.userRoutesMatched = true;
                }
            }
        }
    }
    onDeleteRole(roleId) {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.roleURL, { _id: roleId })
            .subscribe((roleDeleted) => {
            console.log('Delete role call successful value returned >>', roleDeleted);
        }, error => {
            console.log('Delete role call in error >>', error);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/dashboard/settings/listusers']);
        });
    }
    onDeleteUser(userId) {
        this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_6__.nonAdminURL, { _id: userId })
            .subscribe((userDeleted) => {
            console.log('Delete user call successful value returned >>', userDeleted);
        }, error => {
            console.log('Delete user call in error >>', error);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/dashboard/settings/listusers']);
        });
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"] }
];
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management.component.scss */ "./src/app/user-management/user-management.component.scss")).default]
    })
], UserManagementComponent);



/***/ }),

/***/ "./src/app/user-registry/user-registry.component.scss":
/*!************************************************************!*\
  !*** ./src/app/user-registry/user-registry.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ibm-tile {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZWdpc3RyeS9OOlxcQmFua0Nvbm5lY3RfSURCUF9UZWNoVml0YWxpdHlfR2l0XFxpZGJwLWFuZ3VsYXIvc3JjXFxhcHBcXHVzZXItcmVnaXN0cnlcXHVzZXItcmVnaXN0cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXItcmVnaXN0cnkvdXNlci1yZWdpc3RyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnaXN0cnkvdXNlci1yZWdpc3RyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlibS10aWxlIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn0iLCJpYm0tdGlsZSB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-registry/user-registry.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-registry/user-registry.component.ts ***!
  \**********************************************************/
/*! exports provided: UserRegistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistryComponent", function() { return UserRegistryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breadcrumb-service/breadcrumb.service */ "./src/app/breadcrumb-service/breadcrumb.service.ts");
/* harmony import */ var _idbp_config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../idbp.config.json */ "./src/idbp.config.json");
var _idbp_config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../idbp.config.json */ "./src/idbp.config.json", 1);






let UserRegistryComponent = class UserRegistryComponent {
    constructor(http, toastrService, breadcrumbService) {
        this.http = http;
        this.toastrService = toastrService;
        this.breadcrumbService = breadcrumbService;
    }
    ngOnInit() {
        this.breadcrumbService.drawBreadcrumb();
        this.http.get(_idbp_config_json__WEBPACK_IMPORTED_MODULE_5__.userRegistryURL)
            .subscribe((userRegistries) => {
            console.log('Get user registries list call >>', userRegistries);
            this.userRegistryList = userRegistries;
        }, error => {
            console.log('Get user registries list call in error >>', error.message);
        });
        this.toastrService.overlayContainer = this.toastContainer;
    }
    userRegistrySubmit(event) {
        if (this.userRegistryList[0].isRegistryConfigured) {
            this.http.put(_idbp_config_json__WEBPACK_IMPORTED_MODULE_5__.userRegistryURL, {
                ur: event.target.value,
                _id: this.userRegistryList[0]._id
            })
                .subscribe((urDetails) => {
                console.log('Put user registry details call successful value returned >>', urDetails);
                this.toastrService.success('User Registry configuration updated Successfully. Updated registry configured for entire app.');
            }, error => {
                console.log('Put user registry Details call in error >>', error);
                if (error.status == '200') {
                    this.toastrService.success('User Registry configuration updated Successfully. Updated registry configured for entire app.');
                }
                else {
                    this.toastrService.error('User Registry configured Failed. Cant modify the configuration.');
                }
            });
        }
        else {
            this.http.post(_idbp_config_json__WEBPACK_IMPORTED_MODULE_5__.userRegistryURL, {
                ur: event.target.value,
                isRegistryConfigured: true
            })
                .subscribe((urDetails) => {
                console.log('Post user registry details call successful value returned >>', urDetails);
                this.toastrService.success('User Registry configured Successfully. Selected registry configured for entire app.');
            }, error => {
                console.log('Post ldap user registry Details call in error >>', error);
                if (error.status == '200') {
                    this.toastrService.success('User Registry configured Successfully. Selected registry configured for entire app.');
                }
                else {
                    this.toastrService.error('Existing document present, can not create a new one.');
                }
            });
        }
    }
};
UserRegistryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _breadcrumb_service_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastContainerDirective"], { static: true })
], UserRegistryComponent.prototype, "toastContainer", void 0);
UserRegistryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-registry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-registry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-registry/user-registry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-registry.component.scss */ "./src/app/user-registry/user-registry.component.scss")).default]
    })
], UserRegistryComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/idbp.config.json":
/*!******************************!*\
  !*** ./src/idbp.config.json ***!
  \******************************/
/*! exports provided: licenseURL, adminURL, nonAdminURL, roleURL, roleRoutesURL, cbsIntegrationURL, smtpURL, templateURL, idbpTlsURL, mrBSDetailsURL, mrContainerPlatformURL, mrContainerRegistryURL, mrAPICURL, mrNotificationURL, apicAccelURL, nonEnvURL, deleteEnvURL, servicesEnvURL, mailURL, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"licenseURL\":\"http://uiusermanagement-idbp.apps.postings.os.fyre.ibm.com/idbp/license\",\"adminURL\":\"http://uiusermanagement-idbp.apps.postings.os.fyre.ibm.com/idbp/admin\",\"nonAdminURL\":\"http://uiusermanagement-idbp.apps.postings.os.fyre.ibm.com/idbp/nonadmin\",\"roleURL\":\"http://uiusermanagement-idbp.apps.postings.os.fyre.ibm.com/idbp/role\",\"roleRoutesURL\":\"http://uiusermanagement-idbp.apps.postings.os.fyre.ibm.com/idbp/routes\",\"cbsIntegrationURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/cbs\",\"smtpURL\":\"http://uiemailservice-idbp.apps.postings.os.fyre.ibm.com/email/smtp-config\",\"templateURL\":\"http://uiemailservice-idbp.apps.postings.os.fyre.ibm.com/email/template\",\"idbpTlsURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/idbptlsserver\",\"mrBSDetailsURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/mrbsdetails\",\"mrContainerPlatformURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/mrcontainerplatform\",\"mrContainerRegistryURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/mrcontainerregistry\",\"mrAPICURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/mrapic\",\"mrNotificationURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/mrnotification\",\"apicAccelURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/apicacce\",\"nonEnvURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/nonenv\",\"deleteEnvURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/deleteenv\",\"servicesEnvURL\":\"http://idbpuicbs-idbp.apps.postings.os.fyre.ibm.com/idbp/manageservicesnewdeploy\",\"mailURL\":\"http://uiemailservice-idbp.apps.postings.os.fyre.ibm.com/email\"}");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/routes.json":
/*!*************************!*\
  !*** ./src/routes.json ***!
  \*************************/
/*! exports provided: dashboard, settings, userregistry, createldap, listusers, createrole, createuser, listsmtpconfigure, createsmtp, listemailtemplates, tlsprofile, createtls, cbs, createcbs, manageresources, createcontainerplatform, containerregistry, createcontainerregistry, apic, createapic, notification, createnotification, manageenvironment, createenv, manageservices, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"dashboard\":\"/dashboard\",\"settings\":\"/dashboard/settings\",\"userregistry\":\"/dashboard/settings/userregistry\",\"createldap\":\"/dashboard/settings/userregistry/createldap\",\"listusers\":\"/dashboard/settings/listusers\",\"createrole\":\"/dashboard/settings/listusers/createrole\",\"createuser\":\"/dashboard/settings/listusers/createuser\",\"listsmtpconfigure\":\"/dashboard/settings/listsmtpconfigure\",\"createsmtp\":\"/dashboard/settings/listsmtpconfigure/createsmtp\",\"listemailtemplates\":\"/dashboard/settings/listemailtemplates\",\"tlsprofile\":\"/dashboard/settings/tlsprofile\",\"createtls\":\"/dashboard/settings/tlsprofile/createtls\",\"cbs\":\"/dashboard/cbs\",\"createcbs\":\"/dashboard/cbs/createcbs\",\"manageresources\":\"/dashboard/manageresources\",\"createcontainerplatform\":\"/dashboard/manageresources/createcontainerplatform\",\"containerregistry\":\"/dashboard/manageresources/containerregistry\",\"createcontainerregistry\":\"/dashboard/manageresources/containerregistry/createcontainerregistry\",\"apic\":\"/dashboard/manageresources/apic\",\"createapic\":\"/dashboard/manageresources/apic/createapic\",\"notification\":\"/dashboard/manageresources/notification\",\"createnotification\":\"/dashboard/manageresources/notification/createnotification\",\"manageenvironment\":\"/dashboard/manageenvironment\",\"createenv\":\"/dashboard/manageenvironment/createenv\",\"manageservices\":\"/dashboard/manageservices\"}");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! N:\BankConnect_IDBP_TechVitality_Git\idbp-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map