import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class CustomerHelper
	{

        getCustomerListText
        (
            customers:any[]
        ):string
            {
                let result:string = "";

                for (let index = 0; index < customers.length; index++) {
                    const customer = customers[index];
                    result = result + ',' + customer.firstname + ' ' + customer.lastname
                }

                return result;
            }
    }