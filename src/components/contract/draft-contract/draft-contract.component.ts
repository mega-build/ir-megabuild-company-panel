import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DateHelper } from 'src/helper/dateHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'draft-contract',
		templateUrl: './draft-contract.component.html',
		styleUrls: ['./draft-contract.component.css']
	}
)

export class DraftContractComponent
	{
		contract: any = {};
		isLoading:boolean = false;
		contractId: string = "";

		constructor
		(
			private router: Router,
			private contractService: ContractService,
			private dateHelper:DateHelper
		)
			{}

		setContractType
		(
			contractType: any
		): void 
			{
				this.contract.contractType = contractType;
				console.log(this.contract);
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

		async draftContract
		():Promise<void>
			{
				this.isLoading = true;

				try 
					{
						const data = await this.contractService
							.draft(
								this.contract.contractType._id,
								this.contract.contractNumber,
								this.contract.contractDate,
								this.contract.contractDateShamsi,
								this.contract.contractFinishDate,
								this.contract.contractFinishDateShamsi,
							);
						
						this.contractId = data.contractId
						this.isLoading = false;
						this.navigateToAddCustomer();
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

		navigateToAddCustomer
		():void
			{
				this.router.navigate(['editContract',{contractId: this.contractId},"customerList"]);
			}
	}
