import { Injectable } from '@angular/core';
import { PriceHelper } from '../priceHelper'
@Injectable(
	{
		providedIn: 'root'
	}
)

export class DipositContractPaymentHelper
	{

        constructor(
            private priceHelper: PriceHelper
        ) { }
        getContractContent
        (
            dipositContractPayment: any
        ):string
            {
                
                return `بخشی از بهای موضوع قرارداد به مبلغ ${this.priceHelper.priceWithCommas(dipositContractPayment.price)} (${this.priceHelper.priceToWord(dipositContractPayment.price)} ريال)  ريال در تاریخ ${dipositContractPayment.dueDate} پرداخت میگردد.`
            }

        
    
    }

