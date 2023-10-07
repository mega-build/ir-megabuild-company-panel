
import { Injectable } from '@angular/core';
import { PriceHelper } from './priceHelper';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ProjectItemHelper
	{

		constructor(
            private priceHelper: PriceHelper
        ){}

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

		calculateTotalPrice1
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

		getProjectItemReportCells
		(
			projectItem:any
		):string
		{
			let blockContent = '-'
			let floorContent = '-'
			let unitContent = '-'

			if
			(
				projectItem &&
				projectItem.block
			)
				{
					blockContent = projectItem.block
				}

			if
			(
				projectItem &&
				projectItem.floor
			)
				{
					floorContent = projectItem.floor
				}

			if
			(
				projectItem &&
				projectItem.unit
			)
				{
					unitContent = projectItem.unit
				}
			
			return `
				<td>${blockContent}</td>
                <td>${floorContent}</td>
                <td>${unitContent}</td>
			`
		}

		calculateTotalPrice
		(
			projectItem:any
		):number
			{
				if
				(
					projectItem &&
					projectItem.unitPrice &&
					projectItem.area 
					
				)
					{
						const totla = projectItem.area * projectItem.unitPrice;
						return totla;
					}
				else if
				(
					projectItem &&
					projectItem.unitPrice &&
					projectItem.buildupArea 
				)
					{
						const totla = projectItem.buildupArea * projectItem.unitPrice;
						return totla;
					}
				else
					{
						return 0;
					}
				
			}

		getProjectItemCalculationPrice
		(
			projectItem:any
		):string
			{
				const area = projectItem.area || projectItem.buildupArea;
				const unitPrice = projectItem.unitPrice;
				const totla = area * unitPrice;
				
				return `
				مساحت ثبت شده در موضوع قرارداد، برابر با ${area} متر مربع به ارزش متری ${this.priceHelper.priceWithCommas(unitPrice)} ریال که در مجموع ${this.priceHelper.priceWithCommas(totla)} ریال میباشد.
				`;
			}
    }