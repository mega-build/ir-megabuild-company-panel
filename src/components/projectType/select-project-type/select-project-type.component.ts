import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ProjectTypeService } from 'src/services/projectType/project-type.service';

@Component(
	{
		selector: 'select-project-type',
		templateUrl: './select-project-type.component.html',
		styleUrls: ['./select-project-type.component.css']
	}
)

export class SelectProjectTypeComponent implements OnInit
	{

		@Output() setProjectType = new EventEmitter<any>();
		@Input() selectedProjectType:any ={};

		projectTypeList!: any[];
		isLoading: boolean = false;
		
		constructor
		(
			private projectTypeService: ProjectTypeService,
			private errorHelper: ErrorHelper
		){}
			
		ngOnInit
		(): void 
			{
				this.getAllProjectTypeList();
			}

		async getAllProjectTypeList
		(): Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.projectTypeService.getAll();
						console.log(data.projectTypeList);
						this.projectTypeList = data.projectTypeList;
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

		selectProjectType
		(
			projectType:any
		):void
			{
				this.selectedProjectType = projectType;
				this.setProjectType.emit(this.selectedProjectType);
			}
	}
