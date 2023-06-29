import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectTypeService
	{

		private URL_PROJECT_TYPE_GETALL: string = `${environment.API_URL}/projectType`;

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
