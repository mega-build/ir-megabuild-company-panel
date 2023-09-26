import { Component, Input } from '@angular/core';
import { ProjectItemHelper } from 'src/helper/projectItemHelper';

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

		constructor(
			public projectItemHelper:ProjectItemHelper
		){}

	}
