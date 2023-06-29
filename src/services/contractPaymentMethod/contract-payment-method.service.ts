import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ContractPaymentMethodService {

	private URL_CONTRACT_PAYMENT_METHOD_GETALL: string = `${environment.API_URL}/contractPaymentMethod`;

  	constructor
	(
		private httpInteceptor: AuthHttpInterceptorService,
	) { }

  	getAll
	(): any
		{
			let headers: HttpHeaders = new HttpHeaders();

			return this.httpInteceptor.getWithAuth(
				this.URL_CONTRACT_PAYMENT_METHOD_GETALL,
				headers
			);
		}
}
