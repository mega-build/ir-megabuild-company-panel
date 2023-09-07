import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-list',
		templateUrl: './project-list.component.html',
		styleUrls: ['./project-list.component.css']
	}
)

export class ProjectListComponent
	{
		@Input() projectList: any[]=[];
	}
