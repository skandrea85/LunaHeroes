import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid=''

  password=''

  autenticato=true;





  errorMsg='Spiacente , la sua userid e password sono errati'


  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  gestAut(){
    if(this.userid==='Andrea'&&this.password==='123Stella'){

      this.route.navigate(['lista']);

      //this.autenticato=true;
      //this.consentito=true;


    }
else{

 this.autenticato=false;
 // this.consentito=false;


}
  }

}
