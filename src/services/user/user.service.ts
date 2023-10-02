import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class UserService
	{

		private URL_USER_GET: string = `${environment.API_URL}/user`;
		private URL_USER_GETALL: string = `${environment.API_URL}/user`;
		private URL_USER_ADD: string = `${environment.API_URL}/user`;

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		){}


		async get(
			userId:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const url = `${this.URL_USER_GET}/${userId}` 

				const result = await this.httpInteceptor.getWithAuth_(
					url,
					headers
				);

				return result;
			}

		async getAll
		(): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const result = await this.httpInteceptor.getWithAuth_(
					this.URL_USER_GETALL,
					headers
				);
				
				return result;
			}

		

		async create
		(
			firstname:string,
			lastname:string,
			username: number,
			password:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				
				let body: any = {
					firstname: firstname,
					lastname: lastname,
					username: username,
					password: password
				};

				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_USER_ADD,
					headers,
					body
				);

				return result;
			}

		
	}
