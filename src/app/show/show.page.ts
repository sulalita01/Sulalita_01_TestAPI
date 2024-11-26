import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  member:any = [];
  constructor(
    public dataapi: DataapiService,
    private nav: NavController,
    private http: HttpClient
  ) {
    this.loaddataMem();
  }

  ngOnInit() {
    this.loaddataMem();
  }

  loaddataMem(){
    this.dataapi.listMember().subscribe(
      {next: (res:any) => {
          console.log ("แสดงผลสำเร็จ",res);
          this.member = res ;
      },
      error: (err:any) =>{
        console.log ("ข้อผิดพลาดในการแสดงผล",err);
      }
    }
    );
  }

  edit(datamem:any){
    this.dataapi.data_detailMen = datamem;
    console.log(datamem);
    this.nav.navigateForward('/edit');
  }

  delMem(id: any){
    this.dataapi.delMember(id).subscribe({
      next: (res:any) => {
        console.log("ลบข้อมูลสำเร็จ", res);
        this.loaddataMem();
      },
      error: (err: any) => {
        console.log("เกิดข้อผิดพลาดในการลบข้อมูล", err);
      }
    });
  }

}
