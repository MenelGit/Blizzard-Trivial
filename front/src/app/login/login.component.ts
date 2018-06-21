import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { importType } from '@angular/compiler/src/output/output_ast';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [],
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    loginForm: FormGroup;
    responseMessage: string = null;
    isErrorMsg: boolean = false;
    user: User;

    constructor(private router: Router,) {
        
    }

    ngOnInit() {
        this.newUser()
        this.loginForm = new FormGroup({
            user: new FormControl('', [Validators.required]),
            pass: new FormControl('', [Validators.required]),
        });
    }

    return() {
        this.router.navigate(["/menu"]);
    }

    newUser() {
        this.user = new User(null, null, null, null);
    }

    submit(){
        this.user.username = this.loginForm.value.username;
        this.user.password = this.loginForm.value.pass;
        // this.questionService.create(this.question).then((res) => {
        //     this.responseMessage = "Pregunta creada con éxito";
        // }).catch((error) => {
        //     this.responseMessage = error;
        // });
    }
}