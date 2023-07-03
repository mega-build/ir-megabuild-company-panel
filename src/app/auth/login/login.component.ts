import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Component(
	{
		selector: 'app-login',
		templateUrl: './login.component.html',
		styleUrls: ['./login.component.css']
	}
)

export class LoginComponent
	{

		constructor(
			private router: Router,
			private localStorageService: LocalStorageService
		) {
			let auth = this.localStorageService.getAuthToken();
			if(auth){
				this.router.navigate(['home']);
			}
		}
	
		ngOnInit(): void {}
		
	}
