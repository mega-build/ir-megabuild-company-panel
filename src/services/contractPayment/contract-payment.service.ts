import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractPaymentService
	{
		private URL_CONTRACT_PAYMENT_GETALL_BY_CONTRACT: string = 'http://localhost:2001/contractPayment';
		private URL_CONTRACT_PAYMENT_ADD_DIPOSIT: string = 'http://localhost:2001/contractPayment/deposit';
		private URL_CONTRACT_PAYMENT_ADD_CHEQUE: string = 'http://localhost:2001/contractPayment/cheque';
		private URL_CONTRACT_PAYMENT_ADD_DICKER: string = 'http://localhost:2001/contractPayment/dicker';

		constructor(
			private httpInteceptor: AuthHttpInterceptorService,
		) { }

		addDeposit
		(
			contractId: string,
			price:number,
			bankAccountId: string,
			dueDate: Date
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let body: any = {
					contractId: contractId,
					price: price,
					bankAccountId: bankAccountId,
					dueDate: dueDate
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
			chequeNumber: string,
			bankId: string
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					contractId: contractId,
					price: price,
					bankAccountId: bankAccountId,
					dueDate: dueDate,
					chequeNumber: chequeNumber,
					bankId: bankId
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

		getAllByContract
		(
			contractId: string
		):any
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_CONTRACT_PAYMENT_GETALL_BY_CONTRACT}/${contractId}`;

				return this.httpInteceptor.getWithAuth(
					url,
					headers
				);
			}

	}
