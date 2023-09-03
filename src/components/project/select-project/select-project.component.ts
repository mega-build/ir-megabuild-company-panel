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
