import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectService
	{

		private URL_PROJECT_GETALL: string = 'http://localhost:2001/project/list';
		private URL_PROJECT_GET: string = 'http://localhost:2001/project';
		private URL_PROJECT_ADD: string = 'http://localhost:2001/project';

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		getAll
		(): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				return this.httpInteceptor.getWithAuth(
					this.URL_PROJECT_GETALL,
					headers
				);
			}

		get
		(
			projectId: string
		): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_GET}/${projectId}`;

				return this.httpInteceptor.getWithAuth(
					url,
					headers
				);
			}
		
		add
		(
			title: string,
			projectTypeId: string,
			address: string
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					title: title,
					projectTypeId: projectTypeId,
					address: address
				};
				return this.httpInteceptor.postWithAuth(
					this.URL_PROJECT_ADD,
					headers,
					body
				);
			}
	}
