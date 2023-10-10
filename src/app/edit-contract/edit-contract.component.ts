import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'edit-contract',
		templateUrl: './edit-contract.component.html',
		styleUrls: ['./edit-contract.component.css']
	}
)

export class EditContractComponent implements OnInit
	{

		isLoading:boolean = false;
		contractId!:string ;
		contract!: any;


		constructor
		(
			private route: ActivatedRoute,
			private contractService: ContractService,
			private errorHelper: ErrorHelper,
			private router: Router
		){}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{

						let contractIdParameter = params['contractId'];
						if
						(
							contractIdParameter	
						)
							{
								this.contractId =  contractIdParameter
								this.getContract();
							}
						else
							{
								alert("آدرس اشتباه");
								this.navigate_contractDraftList();
							}
					}
				);
				
			}

		async getContract
		(): Promise<void>
			{

				try
					{
						this.isLoading = true;

						const data = await this.contractService
							.get(
								this.contractId
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

		navigate_contractDraftList
		():void
			{
				const nvaigationRouteList = ['contractManagement','list','draft'];
				this.router.navigate(nvaigationRouteList);
			}

	}
