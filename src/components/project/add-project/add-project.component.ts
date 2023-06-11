import { Component } from '@angular/core';
import { ProjectService } from 'src/services/project/project.service';

@Component(
	{
		selector: 'add-project',
		templateUrl: './add-project.component.html',
		styleUrls: ['./add-project.component.css']
	}
)

export class AddProjectComponent
	{
		project:any = {};
		isLoading:boolean= false;

		constructor
		(
			private projectService: ProjectService
		)
			{}

		setProjectType
		(
			projectType:any
		):void
			{
				this.project.projectType = projectType;
				console.log(this.project);
				
			}
		
		save
		():void
			{
				this.isLoading = true;
				this.projectService
				.add(
					this.project.title,
					this.project.projectType._id,
					this.project.address
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data.projectId);
							this.project._id = data.projectId
							this.isLoading = false;
						}
				)
			}
	}
