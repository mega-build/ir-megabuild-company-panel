import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from '../../environments/environment';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class BankService
	{

		private URL_BANK_GETALL: string = `${environment.API_URL}/bank`;

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		getAll
		(): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				return this.httpInteceptor.getWithAuth(
					this.URL_BANK_GETALL,
					headers
				);
			}
	}
