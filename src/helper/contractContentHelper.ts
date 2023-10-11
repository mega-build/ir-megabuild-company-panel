
import { Injectable } from '@angular/core';
import { PriceHelper } from './priceHelper';
import { ProjectItemHelper } from './projectItemHelper';
import { ContractPaymentHelper } from './contractPayment/contractPaymentHelper';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ContractContentHelper
	{
        TITLE_PALACE_HOLDER = '{{عنوان قرارداد}}';
        CUSTOMERS_PALACE_HOLDER = '{{مشتریان}}';
        PAYMENTS_PALACE_HOLDER = '{{پرداخت ها}}';
        SUBJECT_PALACE_HOLDER = '{{موضوع قرارداد}}'
        PAYABLE_PRICE_PALACE_HOLDER = '{{بهای موضوع قراردادی}}'

        constructor
        (
            private priceHelper:PriceHelper,
            private projectItemHelper: ProjectItemHelper,
            private contractPaymentHelper:ContractPaymentHelper

        ){}

        getSampleTemplate():string
        {
            const sample = `
            بسمه تعالی
            <h1>
            ${this.TITLE_PALACE_HOLDER}
            </h1>
            <p>
            شما میتوانید متن دلخواه خود را در این بخش اضافه کنید و ${this.CUSTOMERS_PALACE_HOLDER} را نمایش دهید.
            </p>
            <h2>
            ماده 1) موضوع قرارداد:
            </h2>
            <p>
            ${this.SUBJECT_PALACE_HOLDER}
            </p>
            <h3>
            تبصره1:
            </h3>
            <p>
                محتوای تبصره را در این بخش اضافه کنید.
            </p>
            <h2>
            ماده 2) بهای موضوع قرارداد
            </h2>
            <p>
            ${this.PAYABLE_PRICE_PALACE_HOLDER}
            </p>
            <h3>
            تبصره2
            </h3>
            <p>
                محتوای تبصره را در این بخش اضافه کنید.
            </p>
            <h2>
            ماده 3) نحوه پرداخت:
            </h2>
            <p>
                ${this.PAYMENTS_PALACE_HOLDER}
            </p>
            <h3>
            تبصره3
            </h3>
            <p>
                محتوای تبصره را در این بخش اضافه کنید.
            </p>
            <h2>
            ماده 4) مدت قرارداد
            </h2>
            <p>
            محتوای مدت قرارداد در این بخش قرار میگیرد.
            </p>
            <h2>
            ماده 5) تعهدات فروشنده:
            </h2>
            <p>
                شما میتوانید لیست زیر را تغییر دهید
                <ol>
                    <li>
                    اولین ایتم از لیست تعهدات فروشنده
                    </li>
                    <li>
                    دومین ایتم از لیست تعهدات فروشنده
                    </li>
                </ol>
            </p>
            <h2>
            ماده 6) تعهدات خریدار:
            </h2>
            <p>
                شما میتوانید لیست زیر را تغییر دهید
                <ol>
                    <li>
                    اولین ایتم از لیست تعهدات خریدار
                    </li>
                    <li>
                    دومین ایتم از لیست تعهدات خریدار
                    </li>
                </ol>
            </p>
            <h2>
            ماده 7) شرایط فسخ:
            </h2>
            <p>
                شرایط فسخ را در این بخش جایگزین کنید
            </p>
            <h2>
            ماده 8) سایر شرایط:
            </h2>
            <p>
                شما میتوانید لیست زیر را تغییر دهید
                <ol>
                    <li>
                    اولین ایتم از لیست سایر شرایط
                    </li>
                    <li>
                    دومین ایتم از لیست سایز شرایط
                    </li>
                </ol>
            </p>
            <h2>
            ماده 9) مواد قرارداد:
            </h2>
            <p>
                مواد قرارداد را در این بخش جایگزین کنید
            </p>
            `
            return sample;
        }

        getPayablePriceContent
		(
			contract:any,
			projectItem:any
		):string
			{
                const total : number = this.projectItemHelper.calculateTotalPrice(projectItem);
				return `بهای موضوع قرارداد از قرار هر مترمربع ${this.priceHelper.priceWithCommasForContractContent(projectItem.unitPrice)} (${this.priceHelper.priceToWord(projectItem.unitPrice)} ريال) که با توجه مساحت تقریبی موضوع قرارداد(${projectItem.buildupArea} متر مربع)، جمعا  ${this.priceHelper.priceWithCommasForContractContent(total)} ريال میباشد که با احتساب ${this.priceHelper.priceWithCommasForContractContent(contract.discount)} ريال تخفیف، به شرح آتی پرداخت میگردد.`
			}

        getCustomersContent
        (
            customerList:any[]
        ):string
            {

                let result:string = customerList.map(
                    (
                        currentCustomer:any
                    ) => 
                        {
                            return `${currentCustomer.firstname} ${currentCustomer.lastname} با شماره ملی ${currentCustomer.nationalCode} به عنوان خریدار به نشانی ${currentCustomer.address} کد پستی ${currentCustomer.postalCode} شماره تماس ${currentCustomer.mobileNumber}`
                        }
                ).join(' و ');

                return result;
            }

        getPaymentListContent
        (
            contractPaymentList:any[]
        ):string
            {
                let result:string = contractPaymentList.map(
                    (
                        currentContractPayment:any
                    ) => 
                        {
                            return this.contractPaymentHelper.getContractContent(currentContractPayment)
                        }
                ).join('</br>');

                result = `
                    <ol>
                        ${result}
                    </ol>
                `

                return result;
            }

        getProjectItemContent
        (
            contractType:any,
            projectType:any,
            project:any,
            projectItem:any
        ):string
            {
                if
                (
                    projectItem &&
                    projectItem.unit &&
                    projectItem.floor &&
                    projectItem.block &&
                    projectItem.buildupArea
                )
                    {
                        return `
                        موضوع قرارداد عبارت است از ${contractType.title} ${projectType.title} شماره ${projectItem.unit} واقع در طبقه ${projectItem.floor} بلوک ${projectItem.block} ${project.title} با زیربنای حدودا ${projectItem.buildupArea} متر مربع طبق نقشه پیوست به نشانی ${project.address}
                        `        
                    }
                else if
                (
                    projectItem &&
                    projectItem.unit &&
                    projectItem.area
                )
                    {
                        return `
                        موضوع قرارداد عبارت است از ${contractType.title} ${projectType.title} شماره ${projectItem.unit} ${project.title} با زیربنای حدودا ${projectItem.area} متر مربع طبق نقشه پیوست به نشانی ${project.address}
                        ` 
                    }
                else
                    {
                        return `
                        <<اطلاعات صحیح نمیباشد>>
                        `
                    }
                    
                
            }
    }