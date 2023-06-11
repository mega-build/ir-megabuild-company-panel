import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
			private contractService: ContractService
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

		draftContract
		():void
			{
				this.isLoading = true;
				this.contractService
				.draft(
					this.contract.contractType._id,
					this.contract.contractNumber,
					this.contract.contractDate,
					this.contract.contractFinishDate,
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data.contractId);
							this.contractId = data.contractId
							this.isLoading = false;
							this.navigateToAddCustomer();
						}
				)
			}

		navigateToAddCustomer
		():void
			{
				this.router.navigate(['editContract',{contractId: this.contractId},"customerList"]);
			}
	}
