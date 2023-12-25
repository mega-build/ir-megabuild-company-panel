import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ContractTemplateService
	{

		private URL_CONTRACT_TEMPLATE_ADD: string = `${environment.API_URL}/contractTemplate`;
		private URL_CONTRACT_TEMPLATE_GETALL: string = `${environment.API_URL}/contractTemplate`;
		private URL_CONTRACT_TEMPLATE_GET: string = `${environment.API_URL}/contractTemplate`;
		private URL_CONTRACT_TEMPLATE_EDIT: string = `${environment.API_URL}/contractTemplate`;
		private URL_CONTRACT_TEMPLATE_REMOVE: string = `${environment.API_URL}/contractTemplate`;
		

		constructor(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		async add
		(
			title:string,
			htmlContent:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					title: title,
					htmlContent: htmlContent
				};

				const result =  await this.httpInteceptor.postWithAuth_(
					this.URL_CONTRACT_TEMPLATE_ADD,
					headers,
					body
				);

				return result;
			}

		async edit
		(
			contractTemplateId: string,
			contractTemplate:any
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = contractTemplate;

				const url = `${this.URL_CONTRACT_TEMPLATE_EDIT}/${contractTemplateId}`

				const result =  await this.httpInteceptor.putWithAuth_(
					url,
					headers,
					body
				);

				return result;
			}

		async getAll
		(): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const result = await this.httpInteceptor.getWithAuth_(
					this.URL_CONTRACT_TEMPLATE_GETALL,
					headers
				);

				return result;
			}

		async get
		(
			contractTemplateId:string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const url:string = `${this.URL_CONTRACT_TEMPLATE_GET}/${contractTemplateId}`

				const result = await this.httpInteceptor.getWithAuth_(
					url,
					headers
				);

				return result;
			}

		async remove
		(
			contractTemplateId: string
		):Promise<any>
			{
				{
					let headers: HttpHeaders = new HttpHeaders();
					
					const url = `${this.URL_CONTRACT_TEMPLATE_REMOVE}/${contractTemplateId}`;
					
					const result = await this.httpInteceptor.deleteWithAuth_(
						url,
						headers,
						{}
					);

					return result;
				}
			}
	}
