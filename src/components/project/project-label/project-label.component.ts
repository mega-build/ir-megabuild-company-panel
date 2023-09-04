import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-label',
		templateUrl: './project-label.component.html',
		styleUrls: ['./project-label.component.css']
	}
)
export class ProjectLabelComponent
	{
		@Input() project:any ={};
	}
