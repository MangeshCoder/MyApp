import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { studentClass } from "./studentComponent";
import { NgModel } from "@angular/forms";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[studentClass],
    bootstrap:[studentClass]
})
export class moduleClass{
    
}