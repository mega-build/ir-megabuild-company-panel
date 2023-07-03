import { Injectable } from '@angular/core';
import { PriceHelper } from '../priceHelper'
@Injectable(
	{
		providedIn: 'root'
	}
)

export class DeedContractPaymentHelper
	{

        constructor(
            private priceHelper: PriceHelper
        ) { }
        getContractContent
        (
            deedContractPayment: any
        ):string
            {
                return `باقیمانده بهای موضوع قرارداد به مبلغ ${this.priceHelper.priceWithCommas(deedContractPayment.price)} (${this.priceHelper.priceToWord(deedContractPayment.price)} ريال) در روز انتقال سند واگذاری و قبل از واگذاری پرداخت میگردد.`
            }

        
    
    }

