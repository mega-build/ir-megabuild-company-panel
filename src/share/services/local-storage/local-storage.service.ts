import { Injectable } from '@angular/core';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class LocalStorageService 
	{
		AUTH_TOKEN_KEY : string = 'AUTH_TOKEN';
		FIRSTNAME_KEY : string = 'FIRSTNAME';
		LASTNAME_KEY : string = 'LASTNAME';
		ID_KEY: string = 'ID';
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

		setFirstname
		(
			firstname: string
		):void
			{
				localStorage.setItem(this.FIRSTNAME_KEY, firstname);
			}
	
		getFirstname
		(): string
			{
				let value: string = localStorage.getItem(this.FIRSTNAME_KEY) || "";
				return value;
			}

		setLastname
		(
			lastname: string
		):void
			{
				localStorage.setItem(this.LASTNAME_KEY, lastname);
			}
	
		getLastname
		(): string
			{
				let value: string = localStorage.getItem(this.LASTNAME_KEY) || "";
				return value;
			}

		setId
		(
			_id: string
		):void
			{
				localStorage.setItem(this.ID_KEY, _id);
			}
	
		getId
		(): string
			{
				let value: string = localStorage.getItem(this.ID_KEY) || "";
				return value;
			}

		getUser
		():any
			{
				let _id = this.getId();
				let firstname = this.getFirstname();
				let lastname = this.getLastname();

				if
				(
					_id && 
					_id != "" &&
					firstname && 
					firstname != "" &&
					lastname && 
					lastname != "" 

				)
					{
						const user = {
							_id: _id,
							firstname: firstname,
							lastname: lastname
						}
		
						return user;
					}
				else
					{
						return undefined;
					}

				
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
