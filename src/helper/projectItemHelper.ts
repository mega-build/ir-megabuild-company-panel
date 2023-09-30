
import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ProjectItemHelper
	{
        isResidentailProjectItem
		(
            projectType: any
        ):boolean
			{
                console.log('hee');
                
				if
				(
					projectType &&
					projectType.componentName == "RESIDENTIAL"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
				
			}

		isLandParcelProjectItem
		(
            projectType: any
        ):boolean
			{
				if
				(
					projectType &&
					projectType.componentName == "LANDPARCEL"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		calculateTotalPrice
		(
			area:number,
			unitPrice:number
		):number
			{
				if
				(
					area &&
					unitPrice
				)
					{
						const totalPriceNumber = area * unitPrice;
						return totalPriceNumber;
					}
				else
					{
						return 0
					}
			}
    }