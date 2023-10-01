import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';
import { AuthService } from '../../services/auth/auth.service';
import { ErrorHelper } from 'src/helper/errorHelper';

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
			private localStorageService: LocalStorageService,
			private errorHelper:ErrorHelper
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
								const data : any = await this.authService
									.login(
										this.email,
										this.password
									);
								
								this.isLoading = false;
								
								let authToken: string = data.token;
								let firstname: string = data.firstname;
								var lastname: string = data.lastname;
								this.localStorageService.setAutToken(authToken);
								this.localStorageService.setFirstname(firstname);
								this.localStorageService.setLastname(lastname);
								this.navigate_company();
							}
						catch
						(
							error: any
						)
							{
								this.isLoading = false;
								this.errorHelper.showErrorAsAlert(error);
							}
					}

			}

		navigate_company
		():void
			{
				this.router.navigate(['company']);
			}
	}
