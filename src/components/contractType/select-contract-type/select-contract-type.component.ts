import { Component, EventEmitter, Output } from '@angular/core';

@Component(
	{
		selector: 'select-contract-type',
		templateUrl: './select-contract-type.component.html',
		styleUrls: ['./select-contract-type.component.css']
	}
)

export class SelectContractTypeComponent {

	@Output() setContractType = new EventEmitter<any>();

	contractTypeList: any[]= [
		{
			_id: "6477369739a5055a5148044e",
			title: "پیش فروش"
		},
		{
			_id: "647736a739a5055a5148044f",
			title: "فروش"
		}
	];

	selectContractType
	(
		contractType:any
	):void
		{
			this.setContractType.emit(contractType);
		}
}
