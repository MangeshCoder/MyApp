import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { employeeClass } from "./employeeComponent";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[employeeClass],
    bootstrap:[employeeClass]
})
export class moduleClass{
    
}