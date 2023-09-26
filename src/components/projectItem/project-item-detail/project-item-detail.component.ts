import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-item-detail',
		templateUrl: './project-item-detail.component.html',
		styleUrls: ['./project-item-detail.component.css']
	}
)	

export class ProjectItemDetailComponent
	{
		@Input() projectItem!: any;
		@Input() projectType!: any;

		isResidentailProjectItem
		():boolean
			{
				if
				(
					this.projectType&&
					this.projectType.componentName == "RESIDENTIAL"
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
		():boolean
			{
				if
				(
					this.projectType&&
					this.projectType.componentName == "LANDPARCEL"
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
