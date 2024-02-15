import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup | any;
  constructor(private fb: FormBuilder){}
  ngOnInit(){
this.initializationForm()
  }
  initializationForm() {
    this.form= this.fb.group({
       email: ['',[Validators.required,Validators.email]],
       password: ['',[Validators.required,Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')]],
     });
   }


  onSubmit(){

  }
}

