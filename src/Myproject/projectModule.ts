import { BrowserModule } from "@angular/platform-browser";
import { NgModule} from "@angular/core";
import { projectClass } from "./projectComponent";

@NgModule({
    imports:[BrowserModule],
    declarations:[projectClass],
    bootstrap:[projectClass]
})
export class projectModuleClass
{

}