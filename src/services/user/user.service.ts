import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService
	{

		private URL_USER_GET: string = `${environment.API_URL}/user`;
		private URL_USER_GETALL: string = `${environment.API_URL}/user`;
		private URL_USER_ADD: string = `${environment.API_URL}/user`;
		private URL_USER_SET_ACCESS: string = `${environment.API_URL}/user/setAccess`;

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }


		get(
			userId:string
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();

				const url = `${this.URL_USER_GET}/${userId}` 

				return this.httpInteceptor.getWithAuth(
					url,
					headers
				);
			}

		getAll
		(): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				return this.httpInteceptor.getWithAuth(
					this.URL_USER_GETALL,
					headers
				);
			}

		create
		(
			firstname:string,
			lastname:string,
			username: number,
			password:string
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					firstname: firstname,
					lastname: lastname,
					username: username,
					password: password
				};
				return this.httpInteceptor.postWithAuth(
					this.URL_USER_ADD,
					headers,
					body
				);
			}

		setAccess
		(
			userId:string,
            isAddContract:boolean,
			isUserManager:boolean,
			isCustomerManager:boolean,
			isContractManager:boolean,
			isContractPaymentManager:boolean,
			isContractReviwer:boolean,
			isActive:boolean
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					userId:userId,
					isAddContract: isAddContract,
					isUserManager: isUserManager,
					isCustomerManager: isCustomerManager,
					isContractManager: isContractManager,
					isContractPaymentManager: isContractPaymentManager,
					isContractReviwer: isContractReviwer,
					isActive: isActive
				};
				return this.httpInteceptor.postWithAuth(
					this.URL_USER_SET_ACCESS,
					headers,
					body
				);
			}
	}
