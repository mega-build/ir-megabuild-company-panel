import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractPaymentService
	{
		private URL_CONTRACT_PAYMENT_GETALL_BY_CONTRACT: string = `${environment.API_URL}/contractPayment/byContractId`;
		private URL_CONTRACT_PAYMENT_GETALL_BY_FROM_DATE_AND_TO_DATE: string = `${environment.API_URL}/contractPayment/fromDateAndToDate`;
		private URL_CONTRACT_PAYMENT_ADD_DIPOSIT: string = `${environment.API_URL}/contractPayment/deposit`;
		private URL_CONTRACT_PAYMENT_ADD_CHEQUE: string = `${environment.API_URL}/contractPayment/cheque`;
		private URL_CONTRACT_PAYMENT_ADD_DICKER: string = `${environment.API_URL}/contractPayment/d_icker`;
		private URL_CONTRACT_PAYMENT_ADD_DEED: string = `${environment.API_URL}/contractPayment/deed`;
		private URL_CONTRACT_PAYMENT_REMOVE: string = `${environment.API_URL}/contractPayment`;
		


		constructor(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		async addDeposit
		(
			contractId: string,
			price:number,
			bankAccountId: string,
			dueDate: Date,
			dueDateShamsi: string,
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					contractId: contractId,
					price: price,
					bankAccountId: bankAccountId,
					dueDate: dueDate,
					dueDateShamsi: dueDateShamsi
				};

				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_CONTRACT_PAYMENT_ADD_DIPOSIT,
					headers,
					body
				);

				return result;
			}

		async addCheque
		(
			contractId: string,
			price:number,
			bankAccountId: string,
			dueDate: Date,
			dueDateShamsi: string,
			chequeNumber: string,
			bankId: string,
			drawer: string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					contractId: contractId,
					price: price,
					bankAccountId: bankAccountId,
					dueDate: dueDate,
					dueDateShamsi: dueDateShamsi,
					chequeNumber: chequeNumber,
					bankId: bankId,
					drawer: drawer
				};

				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_CONTRACT_PAYMENT_ADD_CHEQUE,
					headers,
					body
				);

				return result;
			}
		async addDicker
		(
			contractId: string,
			price:number
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					contractId: contractId,
					price: price
				};
				
				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_CONTRACT_PAYMENT_ADD_DICKER,
					headers,
					body
				);

				return result;
			}

		async addDeed
		(
			contractId: string,
			price:number,
			bankAccountId: string,
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					contractId: contractId,
					price: price,
					bankAccountId: bankAccountId
				};

				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_CONTRACT_PAYMENT_ADD_DEED,
					headers,
					body
				);

				return result;
			}
		async getAllByContract
		(
			contractId: string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_CONTRACT_PAYMENT_GETALL_BY_CONTRACT}/${contractId}`;

				const result = await this.httpInteceptor.getWithAuth_(
					url,
					headers
				);

				return result;
			}

		async getAllFromDateToDate
		(
			fromDate:Date,
			toDate:Date
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					fromDate: fromDate,
					toDate: toDate
				};

				const result = await this.httpInteceptor.postWithAuth_(
					this.URL_CONTRACT_PAYMENT_GETALL_BY_FROM_DATE_AND_TO_DATE,
					headers,
					body
				);

				return result;
			}


		async remove
		(
			contractPaymentId: string
		):Promise<any>
			{
				{
					let headers: HttpHeaders = new HttpHeaders();
					
					const url = `${this.URL_CONTRACT_PAYMENT_REMOVE}/${contractPaymentId}`;
					
					const result = await this.httpInteceptor.deleteWithAuth_(
						url,
						headers,
						{}
					);

					return result;
				}
			}

	}
