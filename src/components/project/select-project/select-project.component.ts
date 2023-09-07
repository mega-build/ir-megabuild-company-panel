import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectService } from 'src/services/project/project.service';

@Component(
	{
		selector: 'select-project',
		templateUrl: './select-project.component.html',
		styleUrls: ['./select-project.component.css']
	}
)

export class SelectProjectComponent implements OnInit
	{
		@Output() setProject = new EventEmitter<any>();
		@Input() selectedProject:any ={};

		projectList: any[]= [];
		isLoading: boolean = false;

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


		remove
		():void
			{
				this.selectedProject = {};
				this.setProject.emit(undefined);
			}

		selectProject
		(
			project:any
		):void
			{
				this.selectedProject = project;
				this.setProject.emit(this.selectedProject);
			}
	}
