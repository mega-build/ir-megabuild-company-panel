import { Injectable } from '@angular/core';
import { PriceHelper } from '../priceHelper'
@Injectable(
	{
		providedIn: 'root'
	}
)

export class ChequeContractPaymentHelper
	{

        constructor(
            private priceHelper: PriceHelper
        ) { }
        getContractContent
        (
            chequeContractPayment: any
        ):string
            {
                
                return `بخشی از بهای موضوع قرارداد به مبلغ ${this.priceHelper.priceWithCommasForContractContent(chequeContractPayment.price)} (${this.priceHelper.priceToWord(chequeContractPayment.price)} ريال) طی چک شماره ${chequeContractPayment.chequeNumber} مورخ ${chequeContractPayment.dueDateShamsi} عهده ی ${chequeContractPayment.bank.title_fa} به فروشنده تحویل میگردد.`
            }

        
    
    }

