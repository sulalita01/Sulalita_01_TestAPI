import { DataapiService } from './../dataapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    member:any=[];
    id_stu:any;
    name:any;
    nname:any;
    age:any;
    phone:any;
    address:any;
    status:any;


  constructor(
    public dataapi:DataapiService,
    private route:Router ) { }

  ngOnInit() {
    this.member = this.dataapi.data_detailMen;
  }

  editmember(){
    let dataEdit ={
      id:this.member.id,
      id_stu:this.member.id_stu,
      name:this.member.name,
      nname:this.member.nname,
      age:this.member.age,
      phone:this.member.phone,
      address:this.member.address,
      status:this.member.status,
    };
    this.dataapi.editMember(dataEdit).subscribe({
      next:(res:any)=> {
        console.log('การแก้ไขข้อมูลสำเร็จ',res);
        this.route.navigateByUrl('/show')
      },
      error:(err:any)=>{
        console.log('เกิดข้อผิดพลาดในการแก้ไข',err)
      }
    })
  }

}
