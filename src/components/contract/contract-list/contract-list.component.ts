import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-list',
		templateUrl: './contract-list.component.html',
		styleUrls: ['./contract-list.component.css']
	}
)

export class ContractListComponent
	{
	 	@Input() contractList!: any[];

		contractDateSortType:number = 1;
		contractFinishDateSortType:number = 1;

		sortByContractDate
		():void
			{
				this.contractDateSortType = this.contractDateSortType * -1;
				this.contractList.sort(this.compareContractDate);
			}

		sortByContractFinishDate
		():void
			{
				this.contractFinishDateSortType = this.contractFinishDateSortType * -1;
				this.contractList.sort(this.compareContractFinishDate);
			}

		getSortetContractList
		():any[]
			{
				if
				(
					this.contractList
				)
					{

						return this.contractList.sort(this.compareContractDate).sort(this.compareContractFinishDate);
					}
				else
					{
						return [];
					}
			}

		compareContractDate = 
		(
			contractOne:any,
			contractTwo:any
		):number =>
			{
				if
				(
					contractOne.contractDate < contractTwo.contractDate 
				)
					{
						return (-1 * this.contractDateSortType);
					}
				else if
				(
					contractOne.contractDate > contractTwo.contractDate
				)
					{
						return this.contractDateSortType;
					}

				return 0;
			}

		compareContractFinishDate =
		(
			contractOne:any,
			contractTwo:any
		):number =>
			{
				if
				(
					contractOne.contractFinishDate < contractTwo.contractFinishDate 
				)
					{
						return (-1 * this.contractFinishDateSortType);
					}
				else if
				(
					contractOne.contractFinishDate > contractTwo.contractFinishDate
				)
					{
						return this.contractFinishDateSortType;
					}

				return 0;
			}
	}
