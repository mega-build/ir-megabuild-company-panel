import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ProjectItemHelper } from 'src/helper/projectItemHelper';
import { ProjectItemService } from 'src/services/projectItem/project-item.service';

@Component(
	{
		selector: 'add-residential-project-item',
		templateUrl: './add-residential-project-item.component.html',
		styleUrls: ['./add-residential-project-item.component.css']
	}
)

export class AddResidentialProjectItemComponent
	{

		@Input() projectId :string = "";
		
		@Output() onProjectItemAdded = new EventEmitter<any>();

		residentialProjectItem:any = {};
		projectItemId: string="";
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private projectItemService: ProjectItemService,
			public projectItemHelper: ProjectItemHelper,
			private errorHelper:ErrorHelper
		){}

		setPrice
		(
			price:number
		):void
			{
				this.residentialProjectItem.unitPrice = price;
			}
		
		validate
		(
			residentialProjectItem: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if (!residentialProjectItem.unit){
					validationResult.hasError = true;
					validationResult.messageList.push("بخش واحد را وارد کنید.");
				}
			
				if(!residentialProjectItem.unitPrice){
					validationResult.hasError = true;
					validationResult.messageList.push("بخش مبلغ واحد را وارد کنید.");
				}
			
			
				if(!residentialProjectItem.block){
					validationResult.hasError = true;
					validationResult.messageList.push("بخش بلوک را وارد کنید.");
				}

				if(!residentialProjectItem.floor){
					validationResult.hasError = true;
					validationResult.messageList.push("بخش طبقه را وارد کنید.");
				}

				if(!residentialProjectItem.buildupArea){
					validationResult.hasError = true;
					validationResult.messageList.push("بخش زیربنا را وارد کنید.");
				}
			
				return validationResult;
			}

		async saveProjectItem
		():Promise<void>
			{
				
				this.validationResult  = this.validate(this.residentialProjectItem);

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
		
								const data = await this.projectItemService
									.createResidential(
										this.projectId,
										this.residentialProjectItem.unit,
										this.residentialProjectItem.unitPrice,
										this.residentialProjectItem.block,
										this.residentialProjectItem.floor,
										this.residentialProjectItem.buildupArea
									);
		
								console.log(data.projectItemId);
								this.projectItemId = data.projectItemId;
								this.residentialProjectItem._id = data.projectItemId
								this.onProjectItemAdded.emit(this.residentialProjectItem);
								
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

