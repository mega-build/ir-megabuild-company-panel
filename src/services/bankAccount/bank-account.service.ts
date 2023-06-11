import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class BankAccountService
	{

		private URL_BANK_ACCOUNT_GETALL: string = 'http://localhost:2001/bankAccount';

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		getAll
		(): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				return this.httpInteceptor.getWithAuth(
					this.URL_BANK_ACCOUNT_GETALL,
					headers
				);
			}
	}
