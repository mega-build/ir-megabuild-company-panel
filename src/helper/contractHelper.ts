
import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ContractHelper
	{
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
    }