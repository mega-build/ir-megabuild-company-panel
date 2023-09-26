
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
    }