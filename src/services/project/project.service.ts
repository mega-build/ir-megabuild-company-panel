import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectService
	{
	
		private URL_PROJECT_GETALL: string = `${environment.API_URL}/project/list`;
		private URL_PROJECT_GET: string = `${environment.API_URL}/project`;
		private URL_PROJECT_ADD: string = `${environment.API_URL}/project`;

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		){}

		async getAll
		(): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const result = await this.httpInteceptor.getWithAuth_(
					this.URL_PROJECT_GETALL,
					headers
				);

				return result;
			}

		async get
		(
			projectId: string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_GET}/${projectId}`;

				const result = await this.httpInteceptor.getWithAuth_(
					url,
					headers
				);

				return result;
			}
		
		async add
		(
			title: string,
			projectTypeId: string,
			address: string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					title: title,
					projectTypeId: projectTypeId,
					address: address
				};
				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_PROJECT_ADD,
					headers,
					body
				);

				return result;
			}
	}
