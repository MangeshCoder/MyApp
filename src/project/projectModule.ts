import { BrowserModule } from "@angular/platform-browser";
import { NgModel } from "@angular/forms";
import { projectClass } from "./projectcomponent";
import { NgModule } from "@angular/core";

@NgModule({
    imports:[BrowserModule],
    declarations:[projectClass],
    bootstrap:[projectClass]
})
export class projectModule{
    
}