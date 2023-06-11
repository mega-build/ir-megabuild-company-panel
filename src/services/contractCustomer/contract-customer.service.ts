import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ContractCustomerService {

	private URL_CONTRACT_CUSTOMER_GETALL_BY_CONTRACT: string = 'http://localhost:2001/contractCustomer';
	private URL_CONTRACT_CUSTOMER_ADD: string = 'http://localhost:2001/contractCustomer';

	constructor(
		private httpInteceptor: AuthHttpInterceptorService,
	) { }

	add
	(
		contractId: string,
		customerId: string
	):any
		{
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					contractId: contractId,
					customerId: customerId
				};
				return this.httpInteceptor.postWithAuth(
					this.URL_CONTRACT_CUSTOMER_ADD,
					headers,
					body
				);
			}
		}

	getAllByContract
	(
		contractId: string
	):any
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_CONTRACT_CUSTOMER_GETALL_BY_CONTRACT}/${contractId}`;

			return this.httpInteceptor.getWithAuth(
				url,
				headers
			);
		}
}
