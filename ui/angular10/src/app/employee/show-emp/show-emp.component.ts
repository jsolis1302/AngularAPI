import { Component, OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  constructor(private service:SharedService){}
  EmpList:any = []
  ModalTitle:string=""
  ActivateAddEditEmp:boolean=false; 
  emp:any

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.PNG"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmp=true;
  }

  editClick(item: any){
    console.log(item)
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmp=true;
    
  }

  deleteClick(item:any){
    if(confirm("Are you sure??")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmp=false
    this.refreshEmpList()
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmpList = data;
    });
  }


}
