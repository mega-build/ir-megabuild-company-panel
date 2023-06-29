import { Injectable } from '@angular/core';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class LocalStorageService 
	{
		AUTH_TOKEN_KEY : string = 'AUTH_TOKEN';
		COMPANY_KEY : string = 'COMPANY';
		USER_COMPANY_ACCESS_KEY: string = 'USER_COMPANY_ACCESS';

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

		setUserCompanyAccess
		(
			userCompanyAccess: any
		):void
			{
				let value: string = JSON.stringify(userCompanyAccess)
				localStorage.setItem(this.USER_COMPANY_ACCESS_KEY, value);
			}
	
		getUserCompanyAccess
		(): any
			{
				let stringValue = localStorage.getItem(this.USER_COMPANY_ACCESS_KEY) || ""
				if
				(
					!stringValue
				)
					{
						return undefined;
					}

				try
					{
						let value: any = JSON.parse(stringValue);
						return value;
					}
				catch (error)
					{
						localStorage.removeItem(this.USER_COMPANY_ACCESS_KEY);
					}
				
			}

		logout
		():void
			{
				localStorage.clear();
			}
	}
