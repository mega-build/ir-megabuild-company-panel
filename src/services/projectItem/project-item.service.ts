import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectItemService
	{

		private URL_PROJECT_ITEM_GETALL: string = `${environment.API_URL}/projectItem`;
		private URL_PROJECT_ITEM_GET: string = `${environment.API_URL}/projectItem`;;
		private URL_PROJECT_ITEM_GET_BY_CONTRACT_ID: string = `${environment.API_URL}/projectItem/byContractId`;
		private URL_PROJECT_ITEM_ADD_RESIDENTIAL: string = `${environment.API_URL}/projectItem/residential`;
		private URL_PROJECT_ITEM_ADD_LAND_PACEL: string = `${environment.API_URL}/projectItem/landParcel`;
		

		constructor
		(
			private httpInteceptor: AuthHttpInterceptorService,
		){}

		async get
		(
			projectItemId: string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_ITEM_GET}/${projectItemId}`;

				const result = await this.httpInteceptor.getWithAuth_(
					url,
					headers
				);

				return result;
			}

		async getByContractId
		(
			contractId: string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_ITEM_GET_BY_CONTRACT_ID}/${contractId}`;

				const result = await  this.httpInteceptor.getWithAuth_(
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
					this.URL_PROJECT_ITEM_GETALL,
					headers
				);

				return result;
			}

		async createResidential
		(
			projectId:string,
			unit:string,
			unitPrice: number,
			block:string,
			floor: number,
			buildupArea: number
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					projectId: projectId,
					unit: unit,
					unitPrice: unitPrice,
					block: block,
					floor: floor,
					buildupArea: buildupArea
				};

				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_PROJECT_ITEM_ADD_RESIDENTIAL,
					headers,
					body
				);

				return result;
			}

		async createLandParcel
		(
			projectId:string,
			unit:string,
			unitPrice: number,
			area: number
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					projectId: projectId,
					unit: unit,
					unitPrice: unitPrice,
					area: area
				};
				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_PROJECT_ITEM_ADD_LAND_PACEL,
					headers,
					body
				);

				return result;
			}
			
	}
