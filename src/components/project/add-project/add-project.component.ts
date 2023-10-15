import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
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
		validationResult: any ={};

		constructor
		(
			private router: Router,
			private route: ActivatedRoute,
			private projectService: ProjectService,
			private errorHelper:ErrorHelper
		){}

		setProjectType
		(
			projectType:any
		):void
			{
				this.project.projectType = projectType;
				console.log(this.project);
				
			}

		validate
		(
			project: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!project.title
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش عنوان را وارد کنید.");
					}
			
				if
				(
					!project.projectType
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("نوع پروژه را انتخاب کنید.");
					}
			
			
				if
				(
					!project.address
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش آدرس را وارد کنید.");
					}

				return validationResult;
			}
		
		async save
		():Promise<void>
			{
				this.validationResult  = this.validate(this.project);

				if
				(
					this.validationResult .hasError
				)
					{
						return;
					}
				else
					{
						try
						{
	
							this.isLoading = true;
	
							const data = await this.projectService
								.add(
									this.project.title,
									this.project.projectType._id,
									this.project.address
								);
	
							console.log(data.projectId);
							this.project._id = data.projectId
	
							this.isLoading = false;
	
							this.router.navigate(
								["../list"],
								{
									relativeTo:this.route
								}
							);
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
	}
