import { Component,Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
  constructor(private service:SharedService){}

  @Input() dep:any;
  DepartmentId:string="";
  DepartmentName:string="";
  DepartmentCode:string="";

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
    this.DepartmentCode = this.dep.DepartmentCode;
  }

  addDeparmtnet(){
    var val = {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName,
      DepartmentCode:this.DepartmentCode
    };

    this.service.addDepartment(val).subscribe(res=>{
      //alert(res.toString())
      console.log(res)
      this.service.msgAlert('success','Succes !!',res.toString())
    });

  }

  updateDeparmtnet(){

    var val = {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName,
      DepartmentCode:this.DepartmentCode
    };

    this.service.updateDepartment(val).subscribe(res=>{
      alert(res.toString())
    });

  }
}
