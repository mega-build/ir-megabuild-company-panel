import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserCompanyAccessService {

	private URL_USER_COMPANY_ACCESS_GETALL: string = `${environment.API_URL}/userCompanyAccess`;
	private URL_USER_COMPANY_ACCESS_GETALL_BY_FILTER: string = `${environment.API_URL}/userCompanyAccess/filter`;

	constructor
	(
		private httpInteceptor: AuthHttpInterceptorService,
	) { }

	async getAll
	(): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			const result =  await this.httpInteceptor.getWithAuth_(
				this.URL_USER_COMPANY_ACCESS_GETALL,
				headers
			);

			return result;

		}

	async getAllReviewer
	(): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_USER_COMPANY_ACCESS_GETALL_BY_FILTER}/contractReviewer`

			const result = await this.httpInteceptor.getWithAuth_(
				url,
				headers
			);
			
			return result;
		}
}
