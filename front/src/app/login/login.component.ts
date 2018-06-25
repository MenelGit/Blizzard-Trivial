import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { importType } from '@angular/compiler/src/output/output_ast';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user'
import { UserService } from '../services/user.service';
import { CommunicationService } from '../services/communication.service';

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

    constructor(private router: Router, private userService: UserService, private comService: CommunicationService) {
        
    }

    ngOnInit() {
        this.newUser()
        this.loginForm = new FormGroup({
            user: new FormControl('', [Validators.required]),
            pass: new FormControl('', [Validators.required])
        });
    }

    return() {
        this.router.navigate(["/menu"]);
    }

    newUser() {
        this.user = new User(null, null, null, null);
    }

    submit(){
        this.userService.login(this.user).then((res) => {
            this.user = res;
            this.comService.emit({user: this.user});
            this.router.navigate(['/menu']);
        }).catch((error) => {
            this.responseMessage = error;
            this.isErrorMsg = true;
        });
    }
}