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
		validationResult: any ={};

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
				this.landParcelProjectItem.unitPrice = price;
			}

		validate
		(
			landParcelProjectItem: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!landParcelProjectItem.unit
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش واحد را وارد کنید.");
					}
			
				if
				(
					!landParcelProjectItem.unitPrice
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش واحد را وارد کنید.");
					}
			
			
				if
				(
					!landParcelProjectItem.area
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش مساحت را وارد کنید.");
					}

				return validationResult;
			}
			
		async saveProjectItem
		():Promise<void>
			{
				this.validationResult = this.validate(this.landParcelProjectItem);

				if
				(
					this.validationResult.hasError
				)
					{
						return;
					}
				else
					{
						try
							{
								this.isLoading = true;
								
								const data = await this.projectItemService
									.createLandParcel(
										this.projectId,
										this.landParcelProjectItem.unit,
										this.landParcelProjectItem.unitPrice,
										this.landParcelProjectItem.area
									)
								
								console.log(data.projectItemId);
								this.projectItemId = data.projectItemId;
								this.landParcelProjectItem._id = data.projectItemId
								this.onProjectItemAdded.emit(this.landParcelProjectItem);
								
								this.isLoading = false;
							}
						catch
						(
							error:any
						)
							{
								this.isLoading = false;
								if
								(
									error.error &&
									error.error.message
								)
									{
										alert(error.error.message);
									}
								else
									{
										alert(error)
									}
							}
					}

			}

		calculateTotalPrice
		():number
			{
				if
				(
					this.landParcelProjectItem.area &&
					this.landParcelProjectItem.unitPrice
				)
					{
						const totalPriceNumber = this.landParcelProjectItem.area * this.landParcelProjectItem.unitPrice;
						return totalPriceNumber;
					}
				else
					{
						return 0
					}
				
			}
	}
