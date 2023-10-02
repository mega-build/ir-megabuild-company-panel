import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserCompanyAccessService {

	private URL_USER_COMPANY_ACCESS_GET: string = `${environment.API_URL}/userCompanyAccess/byId`;
	private URL_USER_COMPANY_ACCESS_GETALL: string = `${environment.API_URL}/userCompanyAccess`;
	private URL_USER_COMPANY_ACCESS_GETALL_BY_COMPANY: string = `${environment.API_URL}/userCompanyAccess/byCompany`;
	private URL_USER_COMPANY_ACCESS_SET_PERMISSION: string = `${environment.API_URL}/userCompanyAccess`;
	private URL_USER_COMPANY_ACCESS_GETALL_BY_FILTER: string = `${environment.API_URL}/userCompanyAccess/filter`;

	constructor
	(
		private httpInteceptor: AuthHttpInterceptorService,
	){}

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

	async getAllByCompany
	(): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			const result =  await this.httpInteceptor.getWithAuth_(
				this.URL_USER_COMPANY_ACCESS_GETALL_BY_COMPANY,
				headers
			);

			return result;
		}

	async get
	(
		userCompanyAccessId: string
	): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_USER_COMPANY_ACCESS_GET}/${userCompanyAccessId}`;

			const result =  await this.httpInteceptor.getWithAuth_(
				url,
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

	async setAccess
	(
		userCompanyAccessId:string,
		isAddContractTemplate:boolean,
		isAddProject:boolean,
		isAddContract:boolean,
		isUserManager:boolean,
		isCustomerManager:boolean,
		isContractManager:boolean,
		isContractPaymentManager:boolean,
		isContractReviwer:boolean,
		isActive:boolean
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();
			let body: any = {
				userCompanyAccessId:userCompanyAccessId,
				isAddContractTemplate: isAddContractTemplate,
				isAddProject: isAddProject,
				isAddContract: isAddContract,
				isUserManager: isUserManager,
				isCustomerManager: isCustomerManager,
				isContractManager: isContractManager,
				isContractPaymentManager: isContractPaymentManager,
				isContractReviwer: isContractReviwer,
				isActive: isActive
			};
			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_USER_COMPANY_ACCESS_SET_PERMISSION,
				headers,
				body
			);

			return result;
		}
}
