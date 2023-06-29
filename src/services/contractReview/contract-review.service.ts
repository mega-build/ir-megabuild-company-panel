import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ContractReviewService
	{

		private URL_CONTRACT_CUSTOMER_GETALL_BY_CONTRACT: string = 'http://localhost:2001/contractCustomer';
		private URL_CONTRACT_REVIEW_ADD: string = `${environment.API_URL}/contractReview`;
		private URL_CONTRACT_REVIEW_GET: string = `${environment.API_URL}/contractReview`;
		private URL_CONTRACT_REVIEW_GET_ALL: string = `${environment.API_URL}/contractReview`;
		private URL_CONTRACT_REVIEW_SET_REVIEW_RESULT: string = `${environment.API_URL}/contractReview/setReviewResult`;

		constructor(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }
		

		add
		(
			contractId: string,
			userId: string
		):any
			{
				{
					let headers: HttpHeaders = new HttpHeaders();

					let body: any = {
						contractId: contractId,
						userId: userId
					};

					return this.httpInteceptor.postWithAuth(
						this.URL_CONTRACT_REVIEW_ADD,
						headers,
						body
					);
				}
			}

		getAll
		(): any
			{
				let headers: HttpHeaders = new HttpHeaders();
	
				return this.httpInteceptor.getWithAuth(
					this.URL_CONTRACT_REVIEW_GET_ALL,
					headers
				);
			};

		get
		(
			contractReviewId: string
		): any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_CONTRACT_REVIEW_GET}/${contractReviewId}`;

				return this.httpInteceptor.getWithAuth(
					url,
					headers
				);
			}

		setReviewResult
		(
			contractReviewId: string,
			isApproved:boolean,
			isRejected:boolean
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					contractReviewId: contractReviewId,
					isApproved: isApproved,
					isRejected: isRejected,
				};

				return this.httpInteceptor.postWithAuth(
					this.URL_CONTRACT_REVIEW_SET_REVIEW_RESULT,
					headers,
					body
				);
			}
		
	}
