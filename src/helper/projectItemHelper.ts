
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
    }