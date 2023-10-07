import { Injectable } from '@angular/core';
import { PriceHelper } from '../priceHelper';
import { CustomerHelper } from '../customerHelper';
import { ProjectItemHelper } from '../projectItemHelper';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ContractPaymentHelper
	{
        constructor(
            private priceHelper: PriceHelper,
            private customerHelper: CustomerHelper,
            private projectItemHelper: ProjectItemHelper
        ){}

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

        getPaymentListWithoutDicker
        (
            paymentList: any[]
        ):any[]
            {
                let filteredPaymentList:any[] = [];

                for (let index = 0; index < paymentList.length; index++) {
                    const currentPayment = paymentList[index];
                    const currantPaymentComponentName = currentPayment.contractPaymentMethod.componentName;
                    if
                    (
                        currantPaymentComponentName != "DICKER"
                    )
                        {
                            filteredPaymentList.push(currentPayment) 
                        }
                    
                }

                return filteredPaymentList;
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

        generateContractReportTable
        (
            contractPaymentList:any[]
        ):string
            {
                let tableHeader = this.generateContractPaymentReportTableHeader();
                
                let tableRowList:string ="";

                for (let index = 0; index < contractPaymentList.length; index++) {
                    const contractPayment:any = contractPaymentList[index];
                    tableRowList = tableRowList + this.generateContractPaymentReportTableRow(contractPayment)
                }

                const tableContent = `<table>${tableHeader}${tableRowList}</table>`;

                const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office'
                        xmlns:w='urn:schemas-microsoft-com:office:word' 
                        xmlns='http://www.w3.org/TR/REC-html40' lang='fa' dir='rtl'>
                        <head><meta charset='utf-8'><title>لیست قراردادها</title>
                        <style>
                        @font-face {
                                font-family:"IRANSansWeb";
                                src: url('https://assets.megabuild.ir/fonts/IRANSansWeb_Bold.woff2');
                        }
                        @page WordSection1
                            {size:792.0pt 612.0pt;
                            mso-page-orientation:landscape;
                            margin:72.0pt 72.0pt 72.0pt 72.0pt;
                            mso-header-margin:36.0pt;
                            mso-footer-margin:36.0pt;
                            mso-paper-source:0;}
                        div.WordSection1
                            {page:WordSection1;}
                        body{
                            font-family:"Tahoma","2  Koodak","B Jadid", "IRANSansWeb";
                        }
                        </style>
                        </head><body><div class=WordSection1>`;
                const footer = "</div></body></html>";
                const sourceHTML = header+tableContent+footer;

                return sourceHTML;
            }

        generateContractPaymentReportTableHeader():string
            {
                return `
                    <tr>
                        <th>خریدار</th>
                        <th>بلوک</th>
                        <th>طبقه</th>
                        <th>واحد</th>
                        <th>شماره قرارداد</th>
                        <th>تاریخ قرارداد</th>
                        <th>سند پرداختی</th>
                        <th>حساب واریزی</th>
                        <th>تاریخ پرداخت</th>
                        <th>مبلغ پرداخت</th>
                    </tr>
                `;
            }

        generateContractPaymentReportTableRow
        (
            contractPayment:any
        ):string
            {

                const contractPaymentMethodContent = contractPayment.contractPaymentMethod.title;

                let customers = contractPayment.contract.contractCustomers.map(
                    (contractCustomer:any)=>{
                        return contractCustomer.customer
                    }
                );

                let customersContent = this.customerHelper.getCustomerListText(customers);

                let accounNumberContnet = '-';
                if
                (
                    contractPayment &&
                    contractPayment.bankAccount &&
                    contractPayment.bankAccount.accounNumber
                )
                    {
                        accounNumberContnet = contractPayment.bankAccount.accounNumber;
                    }

                let dueDateShamsiContent = '-';
                if
                (
                    contractPayment &&
                    contractPayment.dueDateShamsi
                )
                    {
                        dueDateShamsiContent = contractPayment.dueDateShamsi;
                    }

                const projectItemCellsContetn = this.projectItemHelper.getProjectItemReportCells(contractPayment.contract.projectItem);

                return `
                    <tr>
                        <td>${customersContent}</td>
                        ${projectItemCellsContetn}
                        <td>${contractPayment.contract.contractNumber}</td>
                        <td>${contractPayment.contract.contractDateShamsi}</td>
                        <td>${contractPaymentMethodContent}</td>
                        <td>${accounNumberContnet}</td>
                        <td>${dueDateShamsiContent}</td>
                        <td>${this.priceHelper.priceWithCommas(contractPayment.price)}</td>
                    </tr>
                `
            }
    }