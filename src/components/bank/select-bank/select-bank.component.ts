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
		isLoading:boolean = false;

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

		async getAll
			(): Promise<void>
				{
					try
						{
							this.isLoading = true;
							const data = await this.bankService.getAll()
							this.bankList = data.bankList;
							this.isLoading = false;
						}
					catch
					(
						error:any
					)
						{
							this.isLoading = false;
							alert(error.error)
						}
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
