import { Injectable } from '@angular/core';
import { PriceHelper } from '../priceHelper'
@Injectable(
	{
		providedIn: 'root'
	}
)

export class DickerContractPaymentHelper
	{

        constructor(
            private priceHelper: PriceHelper
        ) { }
        getContractContent
        (
            dickerContractPayment: any
        ):string
            {
                
                return `بخشی از بهای موضوع قرارداد به مبلغ ${this.priceHelper.priceWithCommasForContractContent(dickerContractPayment.price)} (${this.priceHelper.priceToWord(dickerContractPayment.price)} به صورت تهاتر انجام میپذرید.`
            }

        
    
    }
