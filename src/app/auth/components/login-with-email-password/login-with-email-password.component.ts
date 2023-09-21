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
		validationResult: any ={};
		isLoading: boolean = false;
	
		constructor(
			private router: Router,
			private authService: AuthService,
			private localStorageService: LocalStorageService
		){}
	
		ngOnInit(): void {}
	
		validate
		(): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};

				if
				(
					!this.email
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش نام کاربری را وارد کنید");
					}
			
				if
				(
					!this.password
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش کلمه ی عبور را وارد کنید");
					}
			
				return validationResult;
			}
	
	
		async login
		():Promise<void>
			{
				this.validationResult = this.validate();

				if
				(
					this.validationResult.hasError
				)
					{
						return;
					}
				else
					{
						this.isLoading = true;

						try 
							{
								console.log('login');
								
								const data : any = await this.authService
									.login(
										this.email,
										this.password
									);
								
								this.isLoading = false;
								
								var authToken: string = data.token;
								this.localStorageService.setAutToken(authToken);
								this.router.navigate(['company']);
							}
						catch
						(
							error: any
						)
							{
								this.isLoading = false;
								if
								(
									error.error &&
									error.error.message
								)
									{
										alert(error.error.message);
									}
								else
									{
										alert(error)
									}
							}
					}

			}
	}
