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
		private URL_CONTRACT_PAYMENT_ADD_DICKER: string = `${environment.API_URL}/contractPayment/dicker`;
		private URL_CONTRACT_PAYMENT_ADD_DEED: string = `${environment.API_URL}/contractPayment/deed`;
		


		constructor(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		addDeposit
		(
			contractId: string,
			price:number,
			bankAccountId: string,
			dueDate: Date,
			dueDateShamsi: string,
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					contractId: contractId,
					price: price,
					bankAccountId: bankAccountId,
					dueDate: dueDate,
					dueDateShamsi: dueDateShamsi
				};

				return this.httpInteceptor.postWithAuth(
					this.URL_CONTRACT_PAYMENT_ADD_DIPOSIT,
					headers,
					body
				);
			}

		addCheque
		(
			contractId: string,
			price:number,
			bankAccountId: string,
			dueDate: Date,
			dueDateShamsi: string,
			chequeNumber: string,
			bankId: string,
			drawer: string
		):any
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
				return this.httpInteceptor.postWithAuth(
					this.URL_CONTRACT_PAYMENT_ADD_CHEQUE,
					headers,
					body
				);
			}
		addDicker
		(
			contractId: string,
			price:number
		):any
			{
				console.log('hh');
				
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					contractId: contractId,
					price: price
				};
				return this.httpInteceptor.postWithAuth(
					this.URL_CONTRACT_PAYMENT_ADD_DICKER,
					headers,
					body
				);
			}

		addDeed
		(
			contractId: string,
			price:number,
			bankAccountId: string,
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					contractId: contractId,
					price: price,
					bankAccountId: bankAccountId
				};

				return this.httpInteceptor.postWithAuth(
					this.URL_CONTRACT_PAYMENT_ADD_DEED,
					headers,
					body
				);
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

		getAllFromDateToDate
		(
			fromDate:Date,
			toDate:Date
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					fromDate: fromDate,
					toDate: toDate
				};

				return this.httpInteceptor.postWithAuth(
					this.URL_CONTRACT_PAYMENT_GETALL_BY_FROM_DATE_AND_TO_DATE,
					headers,
					body
				);
			}

	}
