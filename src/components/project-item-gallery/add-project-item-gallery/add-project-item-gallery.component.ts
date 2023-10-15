import { Component } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ProjectItemGalleryService } from 'src/services/project-item-gallery/project-item-gallery.service';

@Component(
	{
		selector: 'add-project-item-gallery',
		templateUrl: './add-project-item-gallery.component.html',
		styleUrls: ['./add-project-item-gallery.component.css']
	}
)

export class AddProjectItemGalleryComponent
	{
		projectItemGallery:any ={};
		isLoading:boolean = false;
		validationResult: any ={};
		file:any;

		constructor(
			private projectItemGalleryService:ProjectItemGalleryService,
			private errorHelper:ErrorHelper
		){}

		onFileSelected
		(event:any)
		{ 
			this.file = event.target.files[0]; 
			this.projectItemGallery.file = event.target.files[0]; 
		}

		validate
		(
			projectItemGallery: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!projectItemGallery.projectItemId
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش مورد قرارداد را وارد کنید.");
					}
			
				if
				(
					!projectItemGallery.file
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("فایل را انتخاب کنید.");
					}
			
			
				return validationResult;
			}

		async save
		():Promise<void>
			{
				this.validationResult  = this.validate(this.projectItemGallery);

				if
				(
					this.validationResult.hasError
				)
					{
						return;
					}
				else
					{
						try
						{
	
							this.isLoading = true;
	
							const data = await this.projectItemGalleryService
								.add(
									this.projectItemGallery.projectItemId,
									this.projectItemGallery.file
								);
	
							console.log(data.projectId);
	
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
	}
