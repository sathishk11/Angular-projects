import { Component } from '@angular/core';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent {
  title='Employee Details'
  userarray=['ram','sathish','akki'];
  userlist=[
    {name:'ram', salary:30000,location:'hydrabad',skillset:['angular', 'dotnet','mysql']},
    {name:'sathish', salary:30000,location:'tamilnadu',skillset:['angular', 'dotnet','entity']},
    {name:'akki', salary:30000,location:'mumbai',skillset:['angular', 'dotnet','jquery']}
  ]
}