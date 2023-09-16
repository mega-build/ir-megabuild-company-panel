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
	isLoading: boolean = false;

	constructor
	(
		private projectService: ProjectService
	){}
				
	ngOnInit
	(): void 
		{
			this.getAllProjectList();
		}

	async getAllProjectList
		(): Promise<void>
			{
				try
					{
						this.isLoading = true;

						const data = await this.projectService.getAll();
						console.log(data.projectList);
						this.projectList = data.projectList;

						this.isLoading = false;
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						if
						(
							error.error &&
							error.error.message
						)
							{
								alert(error.error.message);
							}
						else
							{
								alert(error)
							}
					}

			}

}