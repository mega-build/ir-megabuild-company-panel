import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ProjectService } from 'src/services/project/project.service';

@Component(
	{
		selector: 'project-list-item',
		templateUrl: './project-list-item.component.html',
		styleUrls: ['./project-list-item.component.css']
	}
)

export class ProjectListItemComponent
	{
		@Input() project!: any;
		@Output() onProjectRemoved = new EventEmitter();
		isLoading:boolean = false;

		constructor
		(
			private projectService:ProjectService,
			private errorHelper:ErrorHelper
		){}

		async remove
		():Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.projectService.remove(
							this.project._id
						);
						this.isLoading = false;
						this.onProjectRemoved.emit();
					}
				catch
				(
					error
				)
					{
						console.log('herher');
						
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
				
			}
	}
