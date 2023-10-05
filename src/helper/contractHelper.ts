
import { Injectable } from '@angular/core';
import { PriceHelper } from './priceHelper';
import { ContractPaymentHelper } from './contractPayment/contractPaymentHelper';
import { CustomerHelper } from './customerHelper';

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
            private customerHelper: CustomerHelper
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
                return `
                    <tr>
                        <td>${this.customerHelper.getCustomerListText(contract.customers)}</td>
                        <td>${contract.projectItem.block}</td>
                        <td>${contract.projectItem.floor}</td>
                        <td>${contract.projectItem.unit}</td>
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