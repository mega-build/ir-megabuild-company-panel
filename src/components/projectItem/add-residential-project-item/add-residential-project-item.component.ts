import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectItemService } from 'src/services/projectItem/project-item.service';

@Component(
	{
		selector: 'add-residential-project-item',
		templateUrl: './add-residential-project-item.component.html',
		styleUrls: ['./add-residential-project-item.component.css']
	}
)

export class AddResidentialProjectItemComponent
	{

		@Input() projectId :string = "";
		
		@Output() onProjectItemAdded = new EventEmitter<any>();

		residentialProjectItem:any = {};
		projectItemId: string="";
		isLoading:boolean = false;

		constructor
		(
			private projectItemService: ProjectItemService
		)
			{}

		setPrice
		(
			price:number
		):void
			{
				this.residentialProjectItem.unitPrice = price;
			}
		
		saveProjectItem
		():void
			{
				this.projectItemService
				.createResidential(
					this.projectId,
					this.residentialProjectItem.unit,
					this.residentialProjectItem.unitPrice,
					this.residentialProjectItem.block,
					this.residentialProjectItem.floor,
					this.residentialProjectItem.buildupArea
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data.projectItemId);
							this.projectItemId = data.projectItemId;
							this.residentialProjectItem._id = data.projectItemId
							this.onProjectItemAdded.emit(this.residentialProjectItem);
							
							this.isLoading = false;
						}
				)
			}

		calculateTotalPrice():string
			{
				let totalPriceNumber = this.residentialProjectItem.buildupArea * this.residentialProjectItem.unitPrice;
				return totalPriceNumber + "ريال";
			}
		
	}

