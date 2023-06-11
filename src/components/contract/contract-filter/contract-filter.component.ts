import { Component, EventEmitter, Output } from '@angular/core';

@Component(
	{
		selector: 'contract-filter',
		templateUrl: './contract-filter.component.html',
		styleUrls: ['./contract-filter.component.css']
	}
)

export class ContractFilterComponent
	{
		@Output() setFilter = new EventEmitter<any>();

		filterOptions:any = {

		}
		
		project:any = {};
		
		setProject
		(
			project: any
		): void 
			{
				this.project = project;
				console.log(this.project);
				this.filterOptions.project = project;
				this.setFilter.emit(this.filterOptions);
			}

	}
