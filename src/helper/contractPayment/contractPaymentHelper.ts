import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ContractPaymentHelper
	{

        getDeedPriceFromPaymentList(
            paymentList:any[]
        ):number
            {
                for (let index = 0; index < paymentList.length; index++) {
                    const payment = paymentList[index];
                    if
                    (
                        payment.contractPaymentMethod.componentName == "DEED"
                    )
                        {
                            return payment.price;
                        }
                }
                return 0;
            }
        getContractPaymentTypeListText
        (
            paymentList:any[]
        ):string
            {
                console.log('paymenr');

                const paymentMethodComponentNameList = this.getPaymentMethodComponentNameListFromPaymentList(paymentList);

                return this.getContractPaymentTypeTextFromPaymentMethodComponentNameList(paymentMethodComponentNameList);
               

            }

        getPaymentMethodComponentNameListFromPaymentList
        (
            paymentList: any[]
        ):string[]
            {
                let paymentMethodComponentNameList :string[] = [];

                for (let index = 0; index < paymentList.length; index++) {
                    const element = paymentList[index].contractPaymentMethod.componentName;
                    paymentMethodComponentNameList.push(element);
                    
                }

                return paymentMethodComponentNameList;
            }

        getContractPaymentTypeTextFromPaymentMethodComponentNameList
        (
            paymentMethodComponentNameList:string[]
        ):string
        {
            if
            (
                paymentMethodComponentNameList.length == 1 &&
                paymentMethodComponentNameList.includes("DICKER")
            )
                {
                    return "تهاتر"
                }
            else if
            (
                paymentMethodComponentNameList.length >= 1
            )
                {
                    if
                    (
                        paymentMethodComponentNameList.includes("DICKER")
                    )
                        {
                            return "پولی-تهاتر"
                        }
                    else
                        {
                            return "پولی"
                        }
                }
            else
                {
                    return 'نامشخص'
                }
        }
    }