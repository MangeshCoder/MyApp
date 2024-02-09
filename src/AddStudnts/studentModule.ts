import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { studentClass } from "./studentComponents";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[studentClass],
    bootstrap:[studentClass]
})
export class studentModuleClass{
    
}