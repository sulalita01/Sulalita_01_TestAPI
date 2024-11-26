import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  data_detailMen:any =[];

  constructor(
    public http:HttpClient,
  ) { }

  //ฟังชันก์การเพิ่มที่ส่งไปยัง API
  addMember(data:any){
    console.log("ค่ามาจากแอพ",data);
    return this.http.post('http://127.0.0.1/PHP_01/api/insert.php',data);
  }
  //ฟังก์ชันแสดงผลข้อมูล
  listMember(){
    return this.http.get('http://127.0.0.1/PHP_01/API_ME/list_member.php');
  }
  //ฟังก์ชันสำหรับแก้ไขข้อมูล
  editMember(dataEdit:any){
    return this.http.put('http://127.0.0.1/PHP_01/api/update.php',dataEdit);
  }
  //ฟังก์ชันการลบข้อมูล
  delMember(id:any){
    return this.http.delete('http://127.0.0.1/PHP_01/api/delete.php?id='+id);
  }
}
