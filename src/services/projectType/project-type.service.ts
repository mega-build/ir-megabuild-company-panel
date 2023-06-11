import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectTypeService
	{

		private URL_PROJECT_TYPE_GETALL: string = 'http://localhost:2001/projectType';

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		getAll
		(): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				return this.httpInteceptor.getWithAuth(
					this.URL_PROJECT_TYPE_GETALL,
					headers
				);
			}
	}
