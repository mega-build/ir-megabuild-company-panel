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
		isLoading: boolean = false;

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

		async getAllProjectTypeList
			(): Promise<void>
				{
					try
						{
							this.isLoading = true;
							const data = await this.bankAccountService.getAll()
							console.log(data.bankAccountList);
							this.bankAccountList = data.bankAccountList;
							this.isLoading = false;
						}
					catch
					(
						error:any
					)
						{
							this.isLoading = false;
							alert(error.error);
						}
					
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
