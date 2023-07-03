import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';
import { AuthService } from '../../services/auth/auth.service';

@Component(
	{
		selector: 'login-with-email-password',
		templateUrl: './login-with-email-password.component.html',
		styleUrls: ['./login-with-email-password.component.css']
	}
)

export class LoginWithEmailPasswordComponent
	{
		email:string = "";
		password:string = "";
		isValidForm: boolean = false;
	
		constructor(
			private router: Router,
			private authService: AuthService,
			private localStorageService: LocalStorageService
		){}
	
		ngOnInit(): void {}
	
		// private isValid(){
		// 	var result:boolean = false;
	
		// 	if(this.email == undefined){
		// 		result = false;
		// 	}else{
		// 		result = true;
		// 	}
		// 	return result;
		// }
	
	
		login
		():void
			{
				this.authService
				.login(
					this.email,
					this.password
				)
				.subscribe(
					(
						data:any
					) => 
						{
							//this.localStorageService.setUserEmail(this.email);
							var authToken: string = data.token;
							this.localStorageService.setAutToken(authToken);
							this.router.navigate(['home']);
						}
				);
			}
	}
