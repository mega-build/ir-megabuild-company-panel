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

		@Input() projectId :string = "647615ae6e8bc9cf0e8ae675";
		
		@Output() onProjectItemAdded = new EventEmitter<any>();

		residentialProjectItem:any = {};
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
				.create(
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
		
	}

