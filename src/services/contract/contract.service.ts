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
	private URL_CONTRACT_GET_BY_PROJECT_AND_STARTDATE_AND_ENDDATE: string = `${environment.API_URL}/contract/byProjectAndStartDateAndEndDate`;
	private URL_CONTRACT_ADD: string = `${environment.API_URL}/contract`;
	private URL_CONTRACT_SET_PAYABEL_PRICE: string = `${environment.API_URL}/contract/setPayablePrice`;
	private URL_CONTRACT_REMOVE_PAYABEL_PRICE: string = `${environment.API_URL}/contract/removePayablePrice`;
	private URL_CONTRACT_REMOVE_PROJECT_ITEM: string = `${environment.API_URL}/contract/removeProjectItem`;
	private URL_CONTRACT_SET_PROJECT_AND_PROJECTITEM: string = `${environment.API_URL}/contract/setProjectAndProjectItem`;
	private URL_CONTRACT_REQUEST_CONFIRMATION: string = `${environment.API_URL}/contract/requestConfirmation`;
	private URL_CONTRACT_ACCEPT_REQUESTED_CONTRACT: string = `${environment.API_URL}/contract/acceptRequestedContract`;
	private URL_CONTRACT_REJECT_REQUESTED_CONTRACT: string = `${environment.API_URL}/contract/rejectRequestedContract`;
	private URL_CONTRACT_SET_CONTENT: string = `${environment.API_URL}/contract/setContent`;
	private URL_CONTRACT_GET_ALL_BY_FILTER: string =  `${environment.API_URL}/contract/filter`;
	private URL_CONTRACT_REMOVE: string = `${environment.API_URL}/contract`;


	constructor
	(
		private httpInteceptor: AuthHttpInterceptorService,
	){}

	async get
		(
			contractId: string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_CONTRACT_GET}/${contractId}`;

				const result = await this.httpInteceptor.getWithAuth_(
					url,
					headers
				);

				return result;
			}

	async getAll
	(): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			const result = await this.httpInteceptor.getWithAuth_(
				this.URL_CONTRACT_GET,
				headers
			);

			return result;
		};

	async getAllDrafed
	(): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_CONTRACT_GET_ALL_BY_FILTER}/draft`;

			const result = await this.httpInteceptor.getWithAuth_(
				url,
				headers
			);

			return result;
		};

	async getAllRequested
	(): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_CONTRACT_GET_ALL_BY_FILTER}/requested`;

			const result = await this.httpInteceptor.getWithAuth_(
				url,
				headers
			);

			return result;
		};

		
	async getAllAccepted
	(): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_CONTRACT_GET_ALL_BY_FILTER}/accepted`;

			const result = await this.httpInteceptor.getWithAuth_(
				url,
				headers
			);

			return result;
		};

	async draft
	(
		contractTypeId:string,
		contractNumber:string,
		contractDate: Date,
		contractDateShamsi: string,
		contractFinishDate:Date,
		contractFinishDateShamsi: string
	):Promise<any>
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

			const result =  await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_ADD,
				headers,
				body
			);

			return result;
		}

	async setPayablePrice
	(
		contractId:string,
		payablePrice:number,
		discount:number
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId,
				discount: discount,
				payablePrice: payablePrice
			};
			
			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_SET_PAYABEL_PRICE,
				headers,
				body
			);

			return result;
		}

	async removePayablePrice
	(
		contractId:string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId
			};
			
			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_REMOVE_PAYABEL_PRICE,
				headers,
				body
			);

			return result;
		}

	async removeProjectItem
	(
		contractId:string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId
			};

			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_REMOVE_PROJECT_ITEM,
				headers,
				body
			);

			return result;
		}

	async setProjectAndProjectItem
	(
		contractId:string,
		projectId:string,
		projectItemId:string,
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId,
				projectId: projectId,
				projectItemId: projectItemId
			};

			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_SET_PROJECT_AND_PROJECTITEM,
				headers,
				body
			);

			return result;
		}

	async getAllByProject
	(
		projectId:string
	): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			const url = `${this.URL_CONTRACT_GET_BY_PROJECT}/${projectId}`;

			const result = await this.httpInteceptor.getWithAuth_(
				url,
				headers
			);

			return result;
		};

	async getAllByProjectAndStartDateAndEndDate
	(
		projectId:string,
		startDate:Date,
		endDate:Date
	): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				projectId: projectId,
				startDate: startDate,
				endDate: endDate
			};

			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_GET_BY_PROJECT_AND_STARTDATE_AND_ENDDATE,
				headers,
				body
			);

			return result;
		};

	async requestContractConfirmation
	(
		contractId:string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId
			};

			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_REQUEST_CONFIRMATION,
				headers,
				body
			);

			return result;
		}

	async acceptRequestedContract
	(
		contractId:string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId
			};

			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_ACCEPT_REQUESTED_CONTRACT,
				headers,
				body
			);

			return result;
		}

	async rejectRequestedContract
	(
		contractId:string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId
			};

			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_REJECT_REQUESTED_CONTRACT,
				headers,
				body
			);

			return result;
		}

	async setContent
	(
		contractId:string,
		content:string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let body: any = {
				contractId: contractId,
				content: content
			};

			const result = await this.httpInteceptor.postWithAuth_(
				this.URL_CONTRACT_SET_CONTENT,
				headers,
				body
			);

			return result;
		}

	async remove
	(
		contractId: string
	):Promise<any>
		{
			{
				let headers: HttpHeaders = new HttpHeaders();
				
				const url = `${this.URL_CONTRACT_REMOVE}/${contractId}`;
				
				const result = await this.httpInteceptor.deleteWithAuth_(
					url,
					headers,
					{}
				);

				return result;
			}
		}
	
}
