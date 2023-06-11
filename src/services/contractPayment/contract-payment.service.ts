import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractPaymentService
	{
		private URL_CONTRACT_PAYMENT_GETALL_BY_CONTRACT: string = 'http://localhost:2001/contractPayment';

		constructor(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		add
		(
			contractId: string,
			customerId: string
		):void
			{
				
			}

		getAllByContract
		(
			contractId: string
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_CONTRACT_PAYMENT_GETALL_BY_CONTRACT}/${contractId}`;

				return this.httpInteceptor.getWithAuth(
					url,
					headers
				);
			}

	}
