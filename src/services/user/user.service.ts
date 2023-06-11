import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class UserService
	{

		private URL_USER_GETALL: string = 'http://localhost:2001/user';
		private URL_USER_ADD: string = 'http://localhost:2001/user';

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

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
	}
