import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-item-land-parcel-detail',
		templateUrl: './project-item-land-parcel-detail.component.html',
		styleUrls: ['./project-item-land-parcel-detail.component.css']
	}
)

export class ProjectItemLandParcelDetailComponent
	{
		@Input() landParcelprojectItem: any = {};
	}
