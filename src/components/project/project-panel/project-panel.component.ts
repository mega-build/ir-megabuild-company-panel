import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectService } from 'src/services/project/project.service';

@Component(
	{
		selector: 'project-panel',
		templateUrl: './project-panel.component.html',
		styleUrls: ['./project-panel.component.css']
	}
)

export class ProjectPanelComponent implements OnInit
{
	@Output() setProject = new EventEmitter<any>();

	projectList: any[]= [];

	constructor
	(
		private projectService: ProjectService
	)
		{}
				
	ngOnInit
	(): void 
		{
			this.getAllProjectList();
		}

	getAllProjectList
		(): void
			{
				this.projectService
					.getAll()
					.subscribe(
						(data: any) => 
							{
								console.log(data.projectList);
								this.projectList = data.projectList;
								
							}
					)
			}

}