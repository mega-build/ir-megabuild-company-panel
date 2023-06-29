import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ContractCustomerService
	{

		private URL_CONTRACT_CUSTOMER_GETALL_BY_CONTRACT: string = `${environment.API_URL}/contractCustomer`;
		private URL_CONTRACT_CUSTOMER_ADD: string = `${environment.API_URL}/contractCustomer`;
		private URL_CONTRACT_CUSTOMER_REMOVE: string = `${environment.API_URL}/contractCustomer`;

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

		remove
		(
			contractCustomerId: string
		):any
			{
				{
					let headers: HttpHeaders = new HttpHeaders();
					
					const url = `${this.URL_CONTRACT_CUSTOMER_REMOVE}/${contractCustomerId}`
					return this.httpInteceptor.deleteWithAuth(
						url,
						headers,
						{}
					);
				}
			}
	}
