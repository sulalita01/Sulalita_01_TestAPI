import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    //การประกาศตัวแปรเพื่อรับค่าจากหน้า Home.page.html
    dataMember:any={};

    txtidstu: any;
    txtname: any;
    txtnname: any;
    txtage: any;
    txtphone: any;
    txtaddress: any;
    txtstatus: any;

  constructor(
    public dataapi: DataapiService,
    private route:Router
  ) {}

  //ฟังชันก์สำหรับการเพิ่มข้อมูล
  addmember(){
    let data = {
      id_stu:this.txtidstu,
      name:this.txtname,
      nname:this.txtnname,
      age:this.txtage,
      phone:this.txtphone,
      address:this.txtaddress,
      status:this.txtstatus,
    }

    this.dataapi.addMember(data).subscribe({
      next:(res:any)=>{
        console.log ("เพิ่มข้อมูลสำเร็จ",res);
        this.route.navigateByUrl('/show');
      },
      error:(err) =>{
        console.log("เพิ่มข้อมูลไม่สำเร็จ",err);
      }
    });
    this.clearForm();
  }
  //ฟังก์ชันสำหรับล้างข้อมูล
  clearForm(){
    this.txtidstu="";
    this.txtname="";
    this.txtnname="";
    this.txtage="";
    this.txtphone="";
    this.txtaddress="";
    this.txtstatus="";
  }
  showdata(){
    this.route.navigateByUrl('/show');
  }
}
