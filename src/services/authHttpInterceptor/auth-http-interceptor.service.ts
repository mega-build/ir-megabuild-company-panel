import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class AuthHttpInterceptorService 
	{

		constructor
		(
			private http: HttpClient,
			private localStorageService: LocalStorageService,
		) { }

		private getAuthHeader
		(
			headers: HttpHeaders
		): HttpHeaders
			{
				const localStorageToken = this.localStorageService.getAuthToken();
				const localStorageUserCompanyAccess = this.localStorageService.getUserCompanyAccess();

				console.log(localStorageUserCompanyAccess);
				

				

				if
				(
					localStorageToken &&
					localStorageToken.toString().trim() != "" &&
					!localStorageUserCompanyAccess
				)
					{
						let headerWithAuth:HttpHeaders = headers
							.append(
								"token",
								localStorageToken
							);
						
						return headerWithAuth;
					}
				else if
				(
					localStorageToken &&
					localStorageToken.toString().trim() != "" &&
					localStorageUserCompanyAccess
				)
					{
						const localStorageUserCompanyAccessId = localStorageUserCompanyAccess._id;

						let headerWithAuth:HttpHeaders = headers
							.append(
								"token",
								localStorageToken
							)
							.append(
								"usercompanyaccessid",
								localStorageUserCompanyAccessId
							);
						
						return headerWithAuth;
					}
				else
					{
						//this.router.navigate(['auth/loginWithMobileNumber']);
						return headers;
					}
			}
		
		getWithAuth
		(
			url: string, headers: HttpHeaders
		):any
			{
				return this.http
					.get(url,
						{
							headers: this.getAuthHeader(headers)
						}
					);
			}

		async getWithAuth_
		(
			url: string, headers: HttpHeaders
		):Promise<any>
			{
				const result = await this.http
					.get(url,
						{
							headers: this.getAuthHeader(headers)
						}
					).toPromise();

				return result;
			}

		postWithAuth(
			url: string,
			headers: HttpHeaders,
			body: any
		): any
			{
				return this.http
					.post(url,body,
						{
							headers: this.getAuthHeader(headers)
						}
					);
			}

		async postWithAuth_(
			url: string,
			headers: HttpHeaders,
			body: any
		): Promise<any>
			{
				const reuslt = await this.http
					.post(
						url,
						body,
						{
							headers: this.getAuthHeader(headers)
						}
					).toPromise();

				return reuslt;
			}

		async putWithAuth_(
			url: string,
			headers: HttpHeaders,
			body: any
		): Promise<any>
			{
				const reuslt = await this.http
					.put(
						url,
						body,
						{
							headers: this.getAuthHeader(headers)
						}
					).toPromise();

				return reuslt;
			}

		deleteWithAuth(
			url: string,
			headers: HttpHeaders,
			body: any
		): any
			{
				return this.http
					.delete(url,{
						headers:this.getAuthHeader(headers),
						body: body
					});
			}

		async deleteWithAuth_(
			url: string,
			headers: HttpHeaders,
			body: any
		): Promise<any>
			{
				const result = await this.http
					.delete(
						url,
						{
							headers:this.getAuthHeader(headers),
							body: body
						}
					)
					.toPromise();

				return result;
			}

		async uploadWithAuth
		(
			url: string,
			headers: HttpHeaders,
			formData: any
		):Promise<any>
			{
				const reuslt = await this.http
					.post(
						url,
						formData,
						{
							headers: this.getAuthHeader(headers)
						}
					).toPromise();

				return reuslt;
			}
	}
