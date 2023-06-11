import { Injectable } from '@angular/core';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class LocalStorageService 
	{
		AUTH_TOKEN_KEY : string = 'AUTH_TOKEN';

		constructor() { }

		setAutToken
		(
			autToken: string
		):void
			{
				localStorage.setItem(this.AUTH_TOKEN_KEY, autToken);
			}
	
		getAuthToken
		(): string
			{
				let value: string = localStorage.getItem(this.AUTH_TOKEN_KEY) || "";
				return value;
			}

		logout
		():void
			{
				localStorage.clear();
			}
	}
