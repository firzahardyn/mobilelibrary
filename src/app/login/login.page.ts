//import { PostProvider } from './../../providers/post-provider';
import { Component, OnInit } from '@angular/core';
//import { from } from 'rxjs';
import { NavController } from '@ionic/angular';
//import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    member_id : string;
    mpasswd : string;
  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }

  /* login(){
    if(this.member_id!="" && this.mpasswd!=""){
      //buat variable untuk inputan
      let body = {
        member_id : this.member_id,
        mpasswd : this.mpasswd,
      }
      //kirim data array ke  server menggubakan provider
      this.postPvdr.postData(body,'member.php').subscribe(data=>{
       
        if(data.success){
          console.log(data);
        }
      });
    }else{

    } */
  }


