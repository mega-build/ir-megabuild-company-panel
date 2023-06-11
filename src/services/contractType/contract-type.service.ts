import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ContractTypeService
	{

		private URL_CONTRACT_TYPE_GETALL: string = 'http://localhost:2001/contractType';

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		getAll
		(): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				return this.httpInteceptor.getWithAuth(
					this.URL_CONTRACT_TYPE_GETALL,
					headers
				);
			}
	}
