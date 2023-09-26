import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-item-residential-detail',
		templateUrl: './project-item-residential-detail.component.html',
		styleUrls: ['./project-item-residential-detail.component.css']
	}
)

export class ProjectItemResidentialDetailComponent
	{
		@Input() residentialprojectItem: any = {};
	}
