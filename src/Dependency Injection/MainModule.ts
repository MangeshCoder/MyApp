import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { StudentComponent } from "./MainComponent";
import { StudentService } from "./MainService";

// import { Adddetails, Operations } from "./MainService";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[StudentComponent],
    bootstrap:[StudentComponent],
    providers:[StudentService]

})
export class mainModuleClass{

}