import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Userloginfo } from '../userloginfo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  datasaved = false;
  message: string = '';
  status: string = '';
  // errorStatus: string = '';

  constructor(private formBuilder: FormBuilder, private accountService: AccountserviceService,private router:Router) {
    if(localStorage.getItem('Loginuser')){
      router.navigate(['/']);
    }
   }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    let userinfo: Userloginfo = this.loginForm.value;
    this.userLogin(userinfo);
  }

  userLogin(logininfo: Userloginfo) {
    this.accountService.userlogin(logininfo).subscribe(
      (resResult: any) => {
        console.log(resResult);
        this.datasaved = true;
        this.message = resResult.message;
        this.status = resResult.status;
        if (resResult.status === 'success') {
          localStorage.setItem('Loginuser', JSON.stringify(resResult));
        } else {
          localStorage.removeItem('Loginuser');
        }
        this.loginForm.reset();
      },
      (error: any) => {
        console.error(error);
        // Handle error
      }
    );
  }
}
