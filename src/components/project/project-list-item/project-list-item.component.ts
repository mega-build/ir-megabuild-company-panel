import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-list-item',
		templateUrl: './project-list-item.component.html',
		styleUrls: ['./project-list-item.component.css']
	}
)

export class ProjectListItemComponent
	{
		@Input() project!: any;
	}
