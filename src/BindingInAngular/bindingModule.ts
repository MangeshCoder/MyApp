import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { bindingClass } from "./bindingComponent";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[bindingClass],
    bootstrap:[bindingClass]
})
export class bindingModuleClass{

}