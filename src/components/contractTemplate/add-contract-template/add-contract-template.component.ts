import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractContentHelper } from 'src/helper/contractContentHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractTemplateService } from 'src/services/contractTemplate/contract-template.service';

@Component(
	{
		selector: 'add-contract-template',
		templateUrl: './add-contract-template.component.html',
		styleUrls: ['./add-contract-template.component.css']
	}
)

export class AddContractTemplateComponent implements OnInit
	{
		contractTemplate:any = {};
		isLoading:boolean= false;
		validationResult: any ={};

		contractTemplateListUrlPartList:any[] = ['/','contractTemplateManagement','list']

		@ViewChild('textarea') textarea!: ElementRef<HTMLTextAreaElement>;

		constructor
		(
			private router: Router,
			private route: ActivatedRoute,
			private contractTemplateService: ContractTemplateService,
			private contractContentHelper:ContractContentHelper,
			private errorHelper:ErrorHelper
			
		){}

		ngOnInit(): void {
			this.contractTemplate.htmlContent = this.contractContentHelper.getSampleTemplate();
		}

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
		
								this.contractTemplate._id = data.contractTemplateId
		
								this.isLoading = false;
		
								this.navigate_contractTemplateList();
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

		getSelectedPartOfTextArea
		():any
			{
				if
				(
					this.textarea
				)
					{
						const startAt = this.textarea.nativeElement.selectionStart;
						const finishAt = this.textarea.nativeElement.selectionEnd;

						const result = {
							startAt: startAt,
							finishAt: finishAt
						};

						return result;
					}
				else
					{
						return undefined;
					}
			}

		makeH2
		():void
			{
				this.addHtmlElementToSelectedPart("h2");
			}

		makeB
		():void
			{
				this.addHtmlElementToSelectedPart("b");
			}

		makeH1
		():void
			{
				this.addHtmlElementToSelectedPart("h1");
			}

		makeP
		():void
		{
			this.addHtmlElementToSelectedPart("p");
		}

		makeOl
		():void
			{
				this.addHtmlElementToSelectedPart("ol");
			}

		makeLi
		():void
		{
			this.addHtmlElementToSelectedPart("li");
		}

		addHtmlElementToSelectedPart
		(
			tag:string
		):void
			{
				const selectedPartOfTextArea  = this.getSelectedPartOfTextArea();

				if
				(
					selectedPartOfTextArea
				)
					{
						let currentContent = this.contractTemplate.htmlContent;
						let output = this.addHtmlElement(currentContent,selectedPartOfTextArea.startAt,selectedPartOfTextArea.finishAt,tag);
						this.contractTemplate.htmlContent  = output;
					}
			}

		addHtmlElement
		(
			content: string,
			startAt: number,
			finishAt:number,
			tag:string
		):string
			{
				let output = [content.slice(0, startAt), `<${tag}>`,content.slice(startAt, finishAt),`</${tag}>`, content.slice(finishAt)].join('');
				return output
			}

		insertContractTitle
		():void
			{
				this.insertContractPrameter(this.contractContentHelper.TITLE_PALACE_HOLDER);
			}

		insertCustomers
		():void
			{
				
				this.insertContractPrameter(this.contractContentHelper.CUSTOMERS_PALACE_HOLDER);
			}

		insertPayments
		():void
			{
				this.insertContractPrameter(this.contractContentHelper.PAYMENTS_PALACE_HOLDER);
			}

		insertSubject
		():void
			{
				this.insertContractPrameter(this.contractContentHelper.SUBJECT_PALACE_HOLDER);
			}

		insertPayablePrice
		():void
		{
			this.insertContractPrameter(this.contractContentHelper.PAYABLE_PRICE_PALACE_HOLDER);
		}

		insertContractPrameter
		(
			palceHolder: string,
		):void
			{
				const selectedPartOfTextArea  = this.getSelectedPartOfTextArea();
				if
				(
					selectedPartOfTextArea
				)
					{
						let currentContent = this.contractTemplate.htmlContent;
						let output = this.insertContractPrameterAtPosition(currentContent,selectedPartOfTextArea.startAt,selectedPartOfTextArea.finishAt,palceHolder);
						this.contractTemplate.htmlContent  = output;
					}
			}

		

		insertContractPrameterAtPosition
		(
			content: string,
			startAt: number,
			finishAt:number,
			palceHolder:string
		):string
			{
				let output = [content.slice(0, startAt), palceHolder,content.slice(startAt, finishAt), content.slice(finishAt)].join('');
				return output
			}

			

		view(start:any,end:any):void{
			console.log('here');
			
		}

		navigate_contractTemplateList
		():void
			{
				this.router.navigate(
					this.contractTemplateListUrlPartList
				);
			}
	}
