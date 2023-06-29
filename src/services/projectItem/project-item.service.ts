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
		) { }

		get
		(
			projectItemId: string
		): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_ITEM_GET}/${projectItemId}`;

				return this.httpInteceptor.getWithAuth(
					url,
					headers
				);
			}

		getByContractId
		(
			contractId: string
		): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_ITEM_GET_BY_CONTRACT_ID}/${contractId}`;

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
					this.URL_PROJECT_ITEM_GETALL,
					headers
				);
			}

		createResidential
		(
			projectId:string,
			unit:string,
			unitPrice: number,
			block:string,
			floor: number,
			buildupArea: number
		):any
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

				return this.httpInteceptor.postWithAuth(
					this.URL_PROJECT_ITEM_ADD_RESIDENTIAL,
					headers,
					body
				);
			}

		createLandParcel
		(
			projectId:string,
			unit:string,
			unitPrice: number,
			area: number
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					projectId: projectId,
					unit: unit,
					unitPrice: unitPrice,
					area: area
				};
				return this.httpInteceptor.postWithAuth(
					this.URL_PROJECT_ITEM_ADD_LAND_PACEL,
					headers,
					body
				);
			}
			
	}
