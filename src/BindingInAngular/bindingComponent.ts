import { Component } from "@angular/core";
@Component({
    selector:"app-root",
    templateUrl:"binding.html"
})
export class bindingClass{
    fname:any="";
    lname:any="";
    num1:any="";
    num2:any="";
    result:any="";

    rno:any="";
    name:any="";
    eng:any="";
    math:any="";
    sci:any="";
    total:any="";
    percentage:any="";
    status:any="";

    city_id:any="";
    city_name:any="";
    cities:any=[];
    Addition(x:any,y:any){
        var c=Number(x)+Number(y);
        this.result="Addtion = "+ c;
    }

    Subtraction(x:any,y:any){
        var c=Number(x)-Number(y);
        this.result="Subtraction = "+c;
    }
    Multiplication(x:any,y:any){
        var c=Number(x)*Number(y);
        this.result="Subtraction = "+c;
    }
    Division(x:any,y:any){
        var c=Number(x)/Number(y);
        this.result="Subtraction = "+c;
    }

    Calculate(e:any,m:any,s:any){
        this.total=Number(e)+Number(m)+Number(s);
        this.percentage=(this.total/3);
        if(this.percentage>=40){
            this.status="pass";
        }
        else{
            this.status="fail";
        }
    }

    AddCity(cid:any,cname:any){
        var st={"city_id":cid,"city_name":cname};
        this.cities.push(st);
        this.clearData();
    }

    clearData(){
        this.city_id="";
        this.city_name="";
    }
}