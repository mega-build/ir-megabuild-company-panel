import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class CompanyService
{
	private URL_COMPANY_GETALL: string = `${environment.API_URL}/company`;

	constructor
	(
		private httpInteceptor: AuthHttpInterceptorService,
	) { }

	async getAll
	(): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			const result = await this.httpInteceptor.getWithAuth_(
				this.URL_COMPANY_GETALL,
				headers
			);

			return result;
		}
}
