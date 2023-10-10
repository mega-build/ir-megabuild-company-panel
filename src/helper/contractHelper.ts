
import { Injectable } from '@angular/core';
import { PriceHelper } from './priceHelper';
import { ContractPaymentHelper } from './contractPayment/contractPaymentHelper';
import { CustomerHelper } from './customerHelper';
import { ProjectItemHelper } from './projectItemHelper';
import { DateHelper } from './dateHelper';
import { ReportHelper } from './reportHelper';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ContractHelper
	{
        constructor(
            private priceHelper: PriceHelper,
            private contractPaymentHelper: ContractPaymentHelper,
            private customerHelper: CustomerHelper,
            private projectItemHelper: ProjectItemHelper,
            private dateHelper:DateHelper,
            private reportHelper:ReportHelper
        ){}

        getContractTitle
        (
            contractType: any,
            projectType: any,
            project:any
        ):string
        {
            const result: string = `قرارداد ${contractType.title} ${projectType.title} ${project.title}`;
            return result;
        }

        isContractDataCompleted
        (
            contract:any
        ):boolean
            {
                if
                (
                    contract &&
                    contract.customers &&
                    contract.customers.length > 0 &&
                    contract.projectItem &&
                    contract.payablePrice &&
                    contract.contractPayments &&
                    contract.contractPayments.length > 0 &&
                    contract.content
                )
                    {
                        return true;
                    }
                else
                    {
                        return false;
                    }
            }

        generateContractReportTableTitle
        (
            companyName:string,
            projectTitle:string,
            startDateShamsi:string,
            endDateShamsi:string,
        ):string
            {
                const reportDateShamsi = this.dateHelper.getTodayShamsi();
                const result = `
                    <h1>فهرست قرارداد های صادره</h1>
                    <table>
                        <tr>
                            <th>شرکت</th>
                            <th>پروژه</th>
                            <th>از تاریخ</th>
                            <th>تا تاریخ</th>
                            <th>تاریخ گزارشگیری</th>
                        </tr>
                        <tr>
                            <td>${companyName}</td>
                            <td>${projectTitle}</td>
                            <td>${startDateShamsi}</td>
                            <td>${endDateShamsi}</td>
                            <td>${reportDateShamsi}</td>
                        </tr>
                    </table>
                    </hr>
                `;

                return result;
            }

        generateContractReportTable
        (
            companyName:string,
            projectTitle:string,
            startDateShamsi:string,
            endDateShamsi:string,
            contractList:any[]
        ):string
            {
                const reportHeader = this.generateContractReportTableTitle(
                    companyName,
                    projectTitle,
                    startDateShamsi,
                    endDateShamsi
                );

                let tableHeader = this.generateContractReportTableHeader();
				
				let tableRowListContent:string ="";

				for (let index = 0; index < contractList.length; index++) {
					const contract:any = contractList[index];
					tableRowListContent = tableRowListContent + this.generateContractReportTableRow(contract)
				}

				const tableContent = `<table>${tableHeader}${tableRowListContent}</table>`;

				const sourceHTML = this.reportHelper.HEADER + reportHeader + tableContent + this.reportHelper.FOOTER;

                return sourceHTML;
            }

        generateContractReportTableHeader():string
            {
                return `
                    <tr>
                        <th>خریدار</th>
                        <th>بلوک</th>
                        <th>طبقه</th>
                        <th>واحد</th>
                        <th>شماره قرارداد</th>
                        <th>تاریخ قرارداد</th>
                        <th>تاریخ تحویل</th>
                        <th>مبلغ قرارداد(ريال)</th>
                        <th>سند پرداختی</th>
                        <th>مبلغ سر سند</th>
                    </tr>
                `;
            }

        generateContractReportTableRow
        (
            contract:any
        ):string
            {
                const contractPaymentMethodContent = this.contractPaymentHelper.getContractPaymentTypeListText(contract.contractPayments);
                const projectItemCellsContetn = this.projectItemHelper.getProjectItemReportCells(contract.projectItem);
                return `
                    <tr>
                        <td>${this.customerHelper.getCustomerListText(contract.customers)}</td>
                        ${projectItemCellsContetn}
                        <td>${contract.contractNumber}</td>
                        <td>${contract.contractDateShamsi}</td>
                        <td>${contract.contractFinishDateShamsi}</td>
                        <td>${this.priceHelper.priceWithCommas(contract.payablePrice)}</td>
                        <td>${contractPaymentMethodContent}</td>
                        <td>${this.priceHelper.priceWithCommas(this.contractPaymentHelper.getDeedPriceFromPaymentList(contract.contractPayments))}</td>
                    </tr>
                `
            }

        getContractPayablePriceDescription
        (
            contract:any,
            totalRegisteredPaymentListPrice: number
        ):string
            {
                const payablePrice = contract.payablePrice;
                const remainingPrice = contract.payablePrice - totalRegisteredPaymentListPrice;
                return `
                    بهای موضوع قرارداد برابر با  ${this.priceHelper.priceWithCommasForContractContent(payablePrice)} ریال میباشد. مجموع پرداخت های ثبت شده تاکنون   ${this.priceHelper.priceWithCommasForContractContent(totalRegisteredPaymentListPrice)} ریال است. مبلغ باقی مانده تا تکمیل پرداخت ها برابر با ${this.priceHelper.priceWithCommasForContractContent(remainingPrice)}ریال می باشد.
                `;
            }
    }