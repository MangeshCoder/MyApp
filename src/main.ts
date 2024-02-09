import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
//import{ModuleClass}from './BindingDemo/BindingModule'
//import {ModuleClass}from './BindingDemo/BindingModule'
//import { projectModule } from './project/projectModule';
//import{ModuleClass}from './studentTask/studentModule';
//import{moduleClass}from './AddStudent/studentModule'
//mport { bindingModuleClass } from './BindingInAngular/bindingModule';
//import { projectModuleClass } from './Myproject/projectModule';
//import { studentModuleClass } from './AddStudnts/studentModule';
//import { moduleClass } from './Employee/employeeModule';
import { mainModuleClass } from './Dependency Injection/MainModule';

platformBrowserDynamic().bootstrapModule(mainModuleClass)
  .catch(err => console.error(err));
