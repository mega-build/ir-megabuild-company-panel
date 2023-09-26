import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-status-icon',
		templateUrl: './contract-status-icon.component.html',
		styleUrls: ['./contract-status-icon.component.css']
	}
)

export class ContractStatusIconComponent
	{
		@Input() contract: any={};

		getStatus
		():any
			{

				if
				(
					this.contract.isDraft == true &&
					this.contract.isRequested == false &&
					this.contract.isAccepted == false &&
					this.contract.isConcluded == false &&
					this.contract.isFinished == false
				)
					{
						return {
							text: 'در حال تنظیم',
							class: 'drafted'
						}
					}
				else if
				(
					this.contract.isDraft == false &&
					this.contract.isRequested == true &&
					this.contract.isAccepted == false &&
					this.contract.isConcluded == false &&
					this.contract.isFinished == false
				)
					{
						return {
							text: 'در انتظار تایید',
							class: 'requested'
						}
					}
				else if
				(
					this.contract.isDraft == false &&
					this.contract.isRequested == false &&
					this.contract.isAccepted == true &&
					this.contract.isConcluded == false &&
					this.contract.isFinished == false
				)
					{
						return {
							text: 'تایید شده',
							class: 'accepted'
						}
					}
				else if
				(
					this.contract.isDraft == false &&
					this.contract.isRequested == false &&
					this.contract.isAccepted == false &&
					this.contract.isConcluded == true &&
					this.contract.isFinished == false
				)
					{
						return {
							text: 'امضاء شده',
							class: 'concluded'
						}
					}
				else if
				(
					this.contract.isDraft == false &&
					this.contract.isRequested == false &&
					this.contract.isAccepted == false &&
					this.contract.isConcluded == false &&
					this.contract.isFinished == true
				)
					{
						return {
							text: 'تمام شده',
							class: 'finished'
						}
					}
				else
					{
						return {
							text: 'نامشخص',
							class: 'unknown'
						}
					}
			}

		getStatusText
		():string
			{
				return this.getStatus().text;
			}

		getStatusClass
		():string
			{
				return this.getStatus().class;
			}
	}
