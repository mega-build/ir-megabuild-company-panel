import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-item-abbreviation',
		templateUrl: './project-item-abbreviation.component.html',
		styleUrls: ['./project-item-abbreviation.component.css']
	}
)

export class ProjectItemAbbreviationComponent
	{
		@Input() projectItem: any = {};
	}
