import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class CustomerService {

	private URL_CUSTOMER_GET: string = `${environment.API_URL}/customer`;
	private URL_CUSTOMER_ADD: string = `${environment.API_URL}/customer`;

	constructor(
		private httpInteceptor: AuthHttpInterceptorService,
	) { }

	async findByNationalCode
	(
		nationalCode:string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_CUSTOMER_GET}/${nationalCode}`;

			const result = await this.httpInteceptor.getWithAuth_(
				url,
				headers
			);
			
			return result;
		}

	async add
	(
		firstname: string,
		lastname: string,
		nationalCode: string,
		mobileNumber: string,
		phoneNumber: string,
		postalCode: string,
		address: string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();
			let body: any = {
				firstname: firstname,
				lastname: lastname,
				nationalCode: nationalCode,
				mobileNumber: mobileNumber,
				phoneNumber: phoneNumber,
				postalCode: postalCode,
				address: address
			};
			
			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CUSTOMER_ADD,
				headers,
				body
			);

			return result;
		}
}
