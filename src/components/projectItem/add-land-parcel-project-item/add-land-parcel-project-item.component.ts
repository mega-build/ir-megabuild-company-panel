import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectItemService } from 'src/services/projectItem/project-item.service';

@Component(
	{
		selector: 'add-land-parcel-project-item',
		templateUrl: './add-land-parcel-project-item.component.html',
		styleUrls: ['./add-land-parcel-project-item.component.css']
	}
)

export class AddLandParcelProjectItemComponent
	{
		@Input() projectId :string = "";
		
		@Output() onProjectItemAdded = new EventEmitter<any>();

		landParcelProjectItem:any = {};
		projectItemId: string="";
		isLoading:boolean = false;

		constructor
		(
			private projectItemService: ProjectItemService
		)
			{}

		
		saveProjectItem
		():void
			{
				this.projectItemService
				.createLandParcel(
					this.projectId,
					this.landParcelProjectItem.unit,
					this.landParcelProjectItem.unitPrice,
					this.landParcelProjectItem.area
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data.projectItemId);
							this.projectItemId = data.projectItemId;
							this.landParcelProjectItem._id = data.projectItemId
							this.onProjectItemAdded.emit(this.landParcelProjectItem);
							
							this.isLoading = false;
						}
				)
			}

		calculateTotalPrice():string
			{
				let totalPriceNumber = this.landParcelProjectItem.area * this.landParcelProjectItem.unitPrice;
				return totalPriceNumber + "ريال";
			}
	}
