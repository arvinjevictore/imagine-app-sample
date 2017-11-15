import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';

declare var gapi: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  gmail = {
  	username:"",
  	email:""
  }

  buttonFlag = 0;
  status = "";
  flag = " ";
  params: any;
  request: any;
  constructor( private zone: NgZone, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
  }
  
  gotoLogIn(){
      gapi.client.setApiKey('AIzaSyByDqytdTMjkhelyHCOic9n4_pbQHAKggM');
      gapi.client.load('plus', 'v1', ()=>{});
      let params = {
            'clientid' : '312312177205-mf82kaf6um26qgd5a028gm2ap5319os0.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback':(result) =>{
                if(result['status']['signed_in']){
                    let request = gapi.client.plus.people.get(
                        { 'userId':"me"
                        }
                    );
                    request.execute((resp) => {
                            this.gmail.username = resp.displayName;
                            this.gmail.email = resp.emails[0].value;
                            this.status = "Signed In";
                                            console.log('name: ', this.gmail.username);
                console.log('email: ', this.gmail.email);
                console.log('status: ', this.status);                            
                    });
                }

            },
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
        };
        gapi.auth.signIn(params);
  }

  buttonSignIn(){
        if(this.gmail.username == ""){
            return true;
        }
        return false;
    }

  buttonSignedIn(){
        if(this.gmail.username == ""){
            return false;
        }
        return true;
    }
}
