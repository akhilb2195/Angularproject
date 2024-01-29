import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      regForm = new FormGroup({
        password:new FormControl([Validators.required,Validators.minLength(8),this.uppercase])
      })
      uppercase(c){
        let pattren =/[A-Z]/
        pattren.test("ms")
          if (pattren.test(c.value)){


            return {
              'noupper':true
            }
          }
          return null
      }
}
