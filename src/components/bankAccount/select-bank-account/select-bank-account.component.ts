import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BankAccountService } from 'src/services/bankAccount/bank-account.service';

@Component(
	{
		selector: 'select-bank-account',
		templateUrl: './select-bank-account.component.html',
		styleUrls: ['./select-bank-account.component.css']
	}
)

export class SelectBankAccountComponent implements OnInit
	{
		@Output() setBankAccount = new EventEmitter<any>();

		bankAccountList: any[]= [];
		selectedBankAccount:any = {};

		constructor
			(
				private bankAccountService: BankAccountService
			)
				{}
			
		ngOnInit
		(): void 
			{
				this.getAllProjectTypeList();
			}

		getAllProjectTypeList
			(): void
				{
					this.bankAccountService
						.getAll()
						.subscribe(
							(data: any) => 
								{
									console.log(data.bankAccountList);
									this.bankAccountList = data.bankAccountList;
									
								}
						)
				}

		remove
		():void
			{
				this.selectedBankAccount = {};
				this.setBankAccount.emit(undefined);
			}

		selectBankAccount
		(
			bankAccount:any
		):void
			{
				this.selectedBankAccount = bankAccount;
				this.setBankAccount.emit(bankAccount);
			}
	}
