import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component(
	{
		selector: 'project-list',
		templateUrl: './project-list.component.html',
		styleUrls: ['./project-list.component.css']
	}
)

export class ProjectListComponent
	{
		@Output() onProjectRemoved = new EventEmitter();
		@Input() projectList!: any[];

		projectRemoved
		():void
			{
				this.onProjectRemoved.emit();
			}
	}
