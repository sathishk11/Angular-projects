import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent {
  dataobject:any;
  show=true;
  GetData(data:NgForm){
    this.dataobject=data;
  }
  
  Toggle(){
    this.show= !this.show;
  }
}
