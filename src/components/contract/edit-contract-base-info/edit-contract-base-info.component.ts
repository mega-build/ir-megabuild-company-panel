import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateHelper } from 'src/helper/dateHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';
import { ContractCustomerService } from 'src/services/contractCustomer/contract-customer.service';

@Component(
	{
		selector: 'app-edit-contract-base-info',
		templateUrl: './edit-contract-base-info.component.html',
		styleUrls: ['./edit-contract-base-info.component.css']
	}
)

export class EditContractBaseInfoComponent  implements OnInit
	{
		contractId?: string;
		contract!: any;
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private contractService: ContractService,
			private errorHelper:ErrorHelper,
			private dateHelper:DateHelper
		){}

		ngOnInit
		(): void
			{
				if
				(
					this.route.parent &&
					this.route.parent.parent
				)
					{
						this.route.parent.params.subscribe(params => 
							{
								let contractIdParameter:string = params['contractId']; 

								if
								(
									contractIdParameter
								)
									{
										this.contractId = contractIdParameter;
										this.getContract(this.contractId);

									}
								else
									{
										alert("آدرس اشتباه است");
										//navigatte to home
									}
							}
						);
					}
				
				
			}

		async getContract
		(
			contractId:string
		): Promise<void>
			{
				try
					{
						this.isLoading = true;

						const data = await this.contractService
							.get(
								contractId
							);
						this.contract = data.contract;

						this.isLoading = false;
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
			}


		setContractDate
		(
			contractDate:any
		):void
			{
				console.log('contractDate');
				console.log(contractDate);
				
				
				this.contract.contractDate = this.dateHelper.getDateTehranTimeZoneDate(
					contractDate.year,
					contractDate.month,
					contractDate.day
				);

				this.contract.contractDateShamsi = this.dateHelper.getDateTehranTimeZoneDateString(
					contractDate.year,
					contractDate.month,
					contractDate.day
				);
			}

		setcontractFinishDate
		(
			contractFinishDate:any
		):void
			{
				console.log('contractFinishDate');
				console.log(contractFinishDate);
				
				this.contract.contractFinishDate = this.dateHelper.getDateTehranTimeZoneDate(
					contractFinishDate.year,
					contractFinishDate.month,
					contractFinishDate.day
				);
				
				this.contract.contractFinishDateShamsi = this.dateHelper.getDateTehranTimeZoneDateString(
					contractFinishDate.year,
					contractFinishDate.month,
					contractFinishDate.day
				);
			}

		validate
		(
			contract: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};

				if
				(
					!contract.contractNumber
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش شماره قرارداد را وارد کنید.");
					}
			
				if
				(
					!contract.contractType
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("نوع قرارداد را انتخاب کنید.");
					}
			
				if
				(
					!contract.contractDate
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش تاریخ قرارداد را وارد کنید.");
					}

				if
				(
					!contract.contractFinishDate
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش تاریخ تحویل را وارد کنید.");
					}

				return validationResult;
			}


		async editContract
		():Promise<void>
			{
				this.validationResult = this.validate(this.contract);

				if
				(
					this.validationResult.hasError ||
					!this.contractId
				)
					{
						return;
					}
				else
					{
						this.isLoading = true;

						try 
							{
								const data = await this.contractService
									.editBaseInfo(
										this.contractId,
										this.contract.contractNumber,
										this.contract.contractDate,
										this.contract.contractDateShamsi,
										this.contract.contractFinishDate,
										this.contract.contractFinishDateShamsi,
									);
								
								this.isLoading = false;
								this.navigate_contractList();
							}
						catch
						(
							error: any
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

		navigate_contractList
		():void
			{
				const nvaigationRouteList = ['contractManagement','list','draft'];

				this.router.navigate(nvaigationRouteList);
			}
	}
