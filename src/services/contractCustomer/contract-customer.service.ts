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

		async add
		(
			contractId: string,
			customerId: string
		):Promise<any>
			{
				{
					let headers: HttpHeaders = new HttpHeaders();
					let body: any = {
						contractId: contractId,
						customerId: customerId
					};
					const result = await this.httpInteceptor.postWithAuth_(
						this.URL_CONTRACT_CUSTOMER_ADD,
						headers,
						body
					);

					return result;
				}
			}

		async getAllByContract
		(
			contractId: string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_CONTRACT_CUSTOMER_GETALL_BY_CONTRACT}/${contractId}`;

				const result = await  this.httpInteceptor.getWithAuth_(
					url,
					headers
				);

				return result;
			}

		async remove
		(
			contractCustomerId: string
		):Promise<any>
			{
				{
					let headers: HttpHeaders = new HttpHeaders();
					
					const url = `${this.URL_CONTRACT_CUSTOMER_REMOVE}/${contractCustomerId}`;
					
					const result = await this.httpInteceptor.deleteWithAuth_(
						url,
						headers,
						{}
					);

					return result;
				}
			}
	}
