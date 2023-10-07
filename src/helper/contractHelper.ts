
import { Injectable } from '@angular/core';
import { PriceHelper } from './priceHelper';
import { ContractPaymentHelper } from './contractPayment/contractPaymentHelper';
import { CustomerHelper } from './customerHelper';
import { ProjectItemHelper } from './projectItemHelper';

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
            private projectItemHelper: ProjectItemHelper
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

        generateContractReportTable
        (
            contractList:any[]
        ):string
            {
                let tableHeader = this.generateContractReportTableHeader();
				
				let tableRowListContent:string ="";

				for (let index = 0; index < contractList.length; index++) {
					const contract:any = contractList[index];
					tableRowListContent = tableRowListContent + this.generateContractReportTableRow(contract)
				}

				const tableContent = `<table>${tableHeader}${tableRowListContent}</table>`;

				const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office'
						xmlns:w='urn:schemas-microsoft-com:office:word' 
						xmlns='http://www.w3.org/TR/REC-html40' lang='fa' dir='rtl'>
						<head><meta charset='utf-8'><title>لیست قراردادها</title>
						<style>
                            @font-face {
                                font-family: "IRANSansWeb";
                                src: url("https://assets.megabuild.ir/fonts/IRANSansWeb_Bold.woff2");
                            }
                            @page WordSection1 {
                                size: 792pt 612pt;
                                mso-page-orientation: landscape;
                                margin: 72pt 72pt 72pt 72pt;
                                mso-header-margin: 36pt;
                                mso-footer-margin: 36pt;
                                mso-paper-source: 0;
                            }
                            div.WordSection1 {
                                page: WordSection1;
                            }
                            body {
                                font-family: "Tahoma", "2  Koodak", "B Jadid", "IRANSansWeb";
                            }
                            table {
                                border-spacing: 0;
                            }
                            th{
                                border:1px solid #000;
                            }
                            td {
                                border-bottom: 1px solid #000;
                                border-left:1px solid #000;
                                border-right: 1px solid #000;
                            }
                            </style>
						</head><body><div class=WordSection1>`;
				const footer = "</div></body></html>";
				const sourceHTML = header+tableContent+footer;

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
    }