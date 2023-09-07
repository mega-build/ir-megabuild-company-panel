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
		validationResult: any ={};

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
	
							//this.onItemAdded.emit(this.contractPayment);
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
	}
