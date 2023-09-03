import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BankService } from 'src/services/bank/bank.service';

@Component(
	{
		selector: 'select-bank',
		templateUrl: './select-bank.component.html',
		styleUrls: ['./select-bank.component.css']
	}
)

export class SelectBankComponent implements OnInit
	{
		@Output() setBank = new EventEmitter<any>();

		bankList: any[]= [];
		selectedBank: any = {};

		constructor
		(
			private bankService: BankService
		)
			{}
					
		ngOnInit
		(): void 
			{
				this.getAll();
			}

		getAll
			(): void
				{
					this.bankService
						.getAll()
						.subscribe(
							(data: any) => 
								{
									console.log(data.bankList);
									this.bankList = data.bankList;
									
								}
						)
				}

		remove
		():void
			{
				this.selectedBank = {};
				this.setBank.emit(undefined);
			}

		selectBank
		(
			bank:any
		):void
			{
				this.selectedBank = bank;
				this.setBank.emit(bank);
			}
	}
