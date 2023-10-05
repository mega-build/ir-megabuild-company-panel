import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractTemplateService } from 'src/services/contractTemplate/contract-template.service';

@Component(
	{
		selector: 'add-contract-template',
		templateUrl: './add-contract-template.component.html',
		styleUrls: ['./add-contract-template.component.css']
	}
)

export class AddContractTemplateComponent
	{
		contractTemplate:any = {};
		isLoading:boolean= false;
		validationResult: any ={};
		@ViewChild('textarea') textarea!: ElementRef<HTMLTextAreaElement>;

		constructor
		(
			private router: Router,
			private route: ActivatedRoute,
			private contractTemplateService: ContractTemplateService
		){}

		validate
		(
			contractTemplate: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!contractTemplate.title
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش عنوان را وارد کنید.");
					}
			
				if
				(
					!contractTemplate.htmlContent
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش محتوا را وارد کنید.");
					}
			
			
				return validationResult;
			}
		
		async save
		():Promise<void>
			{
				this.validationResult  = this.validate(this.contractTemplate);

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
	
							const data = await this.contractTemplateService
								.add(
									this.contractTemplate.title,
									this.contractTemplate.htmlContent
								);
	
							console.log(data.projectId);
							this.contractTemplate._id = data.contractTemplateId
	
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

			makeH2
			():void
				{
					//let txtarea = document.getElementById("txtHtmlContent")|| undefined;

					if
					(
						this.textarea
					)
						{
							
							// Obtain the index of the first selected character
							let start = this.textarea.nativeElement.selectionStart;

							// // Obtain the index of the last selected character
							let finish = this.textarea.nativeElement.selectionEnd;

							console.log(`start: ${start} | end :${finish}`);

							let currentContent = this.contractTemplate.htmlContent;
							let output = [currentContent.slice(0, start), '<h2>',currentContent.slice(start, finish),'</h2>', currentContent.slice(finish)].join('');
							
							this.contractTemplate.htmlContent  = output;
							
						}

					
				}

			makeH3
			():void
				{

				}

			view(start:any,end:any):void{
				console.log('here');
				
			}
	}
