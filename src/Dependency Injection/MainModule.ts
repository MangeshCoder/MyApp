import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { mainClass } from "./MainComponent";
import { Adddetails, Operations } from "./MainService";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[mainClass],
    bootstrap:[mainClass],
    providers:[Operations,Adddetails]

})
export class mainModuleClass{

}