import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ContractService {

	private URL_CONTRACT_GET: string =  `${environment.API_URL}/contract`;
	private URL_CONTRACT_GET_BY_PROJECT: string = `${environment.API_URL}/contract/byProject`;
	private URL_CONTRACT_ADD: string = `${environment.API_URL}/contract`;
	private URL_CONTRACT_SET_PAYABEL_PRICE: string = `${environment.API_URL}/contract/setPayablePrice`;
	private URL_CONTRACT_REMOVE_PROJECT_ITEM: string = `${environment.API_URL}/contract/removeProjectItem`;
	private URL_CONTRACT_SET_PROJECT_AND_PROJECTITEM: string = `${environment.API_URL}/contract/setProjectAndProjectItem`;

	constructor
	(
		private httpInteceptor: AuthHttpInterceptorService,
	) { }

	get
		(
			contractId: string
		): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_CONTRACT_GET}/${contractId}`;

				return this.httpInteceptor.getWithAuth(
					url,
					headers
				);
			}

	getAll
	(): any
		{
			let headers: HttpHeaders = new HttpHeaders();

			return this.httpInteceptor.getWithAuth(
				this.URL_CONTRACT_GET,
				headers
			);
		};

	draft
	(
		contractTypeId:string,
		contractNumber:string,
		contractDate: Date,
		contractDateShamsi: string,
		contractFinishDate:Date,
		contractFinishDateShamsi: string
	):any
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractTypeId: contractTypeId,
				contractNumber: contractNumber,
				contractDate: contractDate,
				contractDateShamsi: contractDateShamsi,
				contractFinishDate: contractFinishDate,
				contractFinishDateShamsi: contractFinishDateShamsi
			};

			return this.httpInteceptor.postWithAuth(
				this.URL_CONTRACT_ADD,
				headers,
				body
			);
		}

	setPayablePrice
	(
		contractId:string,
		payablePrice:number,
		discount:number
	):any
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId,
				discount: discount,
				payablePrice: payablePrice
			};
			
			return this.httpInteceptor.postWithAuth(
				this.URL_CONTRACT_SET_PAYABEL_PRICE,
				headers,
				body
			);
		}

	removeProjectItem
	(
		contractId:string
	):any
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId
			};

			return this.httpInteceptor.postWithAuth(
				this.URL_CONTRACT_REMOVE_PROJECT_ITEM,
				headers,
				body
			);
		}

	setProjectAndProjectItem
	(
		contractId:string,
		projectId:string,
		projectItemId:string,
	):any
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId,
				projectId: projectId,
				projectItemId: projectItemId
			};

			return this.httpInteceptor.postWithAuth(
				this.URL_CONTRACT_SET_PROJECT_AND_PROJECTITEM,
				headers,
				body
			);
		}

	getAllByProject
	(
		projectId:string
	): any
		{
			let headers: HttpHeaders = new HttpHeaders();

			const url = `${this.URL_CONTRACT_GET_BY_PROJECT}/${projectId}`;

			return this.httpInteceptor.getWithAuth(
				url,
				headers
			);
		};
}
