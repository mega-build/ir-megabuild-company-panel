import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

		projectTypeList: any[]=[]
		
		constructor
			(
				private projectTypeService: ProjectTypeService
			)
				{}
			
		ngOnInit
		(): void 
			{
				this.getAllProjectTypeList();
			}

		getAllProjectTypeList
			(): void
				{
					this.projectTypeService
						.getAll()
						.subscribe(
							(data: any) => 
								{
									console.log(data.projectTypeList);
									this.projectTypeList = data.projectTypeList;
									
								}
						)
				}

		selectProjectType
		(
			projectType:any
		):void
			{
				this.setProjectType.emit(projectType);
			}
	}
