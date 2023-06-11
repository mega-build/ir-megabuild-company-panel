import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'app-edit-contract',
		templateUrl: './edit-contract.component.html',
		styleUrls: ['./edit-contract.component.css']
	}
)

export class EditContractComponent implements OnInit
	{

		isLoading:boolean = false;
		contractId:string = "";
		contract: any= {};


		constructor
			(
				private route: ActivatedRoute,
				private contractService: ContractService
			)
				{}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						this.contractId = params['contractId']; 
						this.getAllProjectTypeList();
					}
				);
				
			}

		getAllProjectTypeList
		(): void
			{
				this.isLoading = true;
				this.contractService
					.get(
						this.contractId
					)
					.subscribe(
						(data: any) => 
							{
								console.log(data.contract);
								this.contract = data.contract;
								this.isLoading = false;
								
							}
					)
			}

	}
