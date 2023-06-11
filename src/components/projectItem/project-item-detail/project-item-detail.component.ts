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
		@Input() projectItem: any;
	}
