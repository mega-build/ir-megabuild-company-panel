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

		getAllContractTypeList
			(): void
				{
					this.contractTypeService
						.getAll()
						.subscribe(
							(data: any) => 
								{
									console.log(data.contractTypeList);
									this.contractTypeList = data.contractTypeList;
									
								}
						)
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
