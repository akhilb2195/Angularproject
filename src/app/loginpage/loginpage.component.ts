import { Component } from '@angular/core';
import { FormControl, FormGroup,NgModel,NgModelGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { register } from 'module';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule ],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
 refForm = new FormGroup({
    uname: new FormControl("john",[Validators.required,Validators.email]),
    password: new FormControl("pass",[Validators.required,Validators.minLength(8),])
  })
  signInUser:any = [
    {
      userName: "hi",
      password: "bi"
    },{
      userName: "hi",
      password: "bi"
    }
  ]
  login(){
    const uName = this.signInUser.username;
      const pWord = this.signInUser.password;
      console.log(uName,pWord)
  }
}

