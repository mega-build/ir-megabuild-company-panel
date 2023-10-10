import { Injectable } from '@angular/core';
import { PriceHelper } from '../priceHelper';
import { CustomerHelper } from '../customerHelper';
import { ProjectItemHelper } from '../projectItemHelper';
import { ChequeContractPaymentHelper } from './chequeContractPaymentHelper';
import { DipositContractPaymentHelper } from './dipositContractPaymentHelper';
import { DeedContractPaymentHelper } from './deedContractPaymentHelper';
import { DateHelper } from '../dateHelper';
import { ReportHelper } from '../reportHelper';

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
            private projectItemHelper: ProjectItemHelper,
            private chequeContractPaymentHelper: ChequeContractPaymentHelper,
            private dipositContractPaymentHelper: DipositContractPaymentHelper,
            private deedContractPaymentHelper: DeedContractPaymentHelper,
            private dateHelper: DateHelper,
            private reportHelper:ReportHelper
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

        generateContractPaymentReportTableTitle
        (
            reportTitle:string,
            companyName:string,
            startDateShamsi:string,
            endDateShamsi:string,
        ):string
            {
                const reportDateShamsi = this.dateHelper.getTodayShamsi();
                const result = `
                    <h1>
                        ${reportTitle}
                    </h1>
                    <table>
                        <tr>
                            <th>شرکت</th>
                            <th>از تاریخ</th>
                            <th>تا تاریخ</th>
                            <th>تاریخ گزارشگیری</th>
                        </tr>
                        <tr>
                            <td>${companyName}</td>
                            <td>${startDateShamsi}</td>
                            <td>${endDateShamsi}</td>
                            <td>${reportDateShamsi}</td>
                        </tr>
                    </table>
                    </hr>
                `;

                return result;
            }
            
        generateContractPaymentReportTable
        (
            reportTitle:string,
            companyName:string,
            startDateShamsi:string,
            endDateShamsi:string,
            contractPaymentList:any[]
        ):string
            {
                const reportHeader = this.generateContractPaymentReportTableTitle(
                    reportTitle,
                    companyName,
                    startDateShamsi,
                    endDateShamsi
                );
                const tableHeader = this.generateContractPaymentReportTableHeader();
                
                let tableRowList:string ="";

                for (let index = 0; index < contractPaymentList.length; index++) {
                    const contractPayment:any = contractPaymentList[index];
                    tableRowList = tableRowList + this.generateContractPaymentReportTableRow(contractPayment)
                }

                const tableContent = `<table>${tableHeader}${tableRowList}</table>`;

                const sourceHTML = this.reportHelper.HEADER + reportHeader + tableContent + this.reportHelper.FOOTER;

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

        getTotalPaymentPriceFromList
        (
            contractPaymentList:any[]
        ):number
        {
            let total = contractPaymentList.reduce(
                (
                    total,
                    contractPayment:any
                )=>
                    {
                        return parseInt(total) + parseInt(contractPayment.price)
                    }
                ,0
            )
            return total;
        }

        getContractContent
        (
            contractPayment:any
        ):string
            {
                if
                (
                    contractPayment.contractPaymentMethod.componentName == "CHEQUE"
                )
                    {
                        let result = this.chequeContractPaymentHelper.getContractContent(
                            contractPayment
                        );
                        return `<li>${result}</li>`
                    }
                else if
                (
                    contractPayment.contractPaymentMethod.componentName == "DIPOSIT"
                )
                    {
                        let result = this.dipositContractPaymentHelper.getContractContent(
                            contractPayment
                        );
                        return `<li>${result}</li>`
                    }
                else if
                (
                    contractPayment.contractPaymentMethod.componentName == "DEED"
                )
                    {
                        let result =  this.deedContractPaymentHelper.getContractContent(
                            contractPayment
                        );
                        return `<li>${result}</li>`
                    }
                else
                    {
                        return '';
                    }
            }
    }