import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectItemService
	{

		private URL_PROJECT_ITEM_GETALL: string = 'http://localhost:2001/projectItem';
		private URL_PROJECT_ITEM_GET: string = 'http://localhost:2001/projectItem';
		private URL_PROJECT_ITEM_GET_BY_CONTRACT_ID: string = 'http://localhost:2001/projectItem/byContractId';
		private URL_PROJECT_ITEM_ADD: string = 'http://localhost:2001/projectItem';

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

		create
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
				return this.httpInteceptor.postWithAuth(this.URL_PROJECT_ITEM_ADD, headers, body);
			}
	}
