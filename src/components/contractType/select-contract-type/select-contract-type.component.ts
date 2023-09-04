import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContractTypeService } from 'src/services/contractType/contract-type.service';

@Component(
	{
		selector: 'select-contract-type',
		templateUrl: './select-contract-type.component.html',
		styleUrls: ['./select-contract-type.component.css']
	}
)

export class SelectContractTypeComponent implements OnInit
	{

		@Output() setContractType = new EventEmitter<any>();
		@Input() selectedContractType:any ={};

		contractTypeList: any[]= [];
		isLoading: boolean = false;
		
			
		constructor
		(
			private contractTypeService: ContractTypeService
		)
			{}
				
		ngOnInit
		(): void 
			{
				this.getAllContractTypeList();
			}

		async getAllContractTypeList
			(): Promise<void>
				{
					try
						{
							this.isLoading = true;
							const data = await this.contractTypeService.getAll();
							console.log(data.contractTypeList);
							this.contractTypeList = data.contractTypeList;
							this.isLoading = false;
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


		

		selectContractType
		(
			contractType:any
		):void
			{
				this.selectedContractType = contractType;
				this.setContractType.emit(contractType);
			}
	}
