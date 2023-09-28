import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
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

	projectList!: any[];
	isLoading: boolean = false;

	constructor
	(
		private projectService: ProjectService,
		private errorHelper:ErrorHelper
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
					this.projectList = data.projectList;

					this.isLoading = false;
				}
			catch
			(
				error:any
			)
				{
					this.isLoading = false;
					this.errorHelper.showErrorAsAlert(error);
				}

		}

}