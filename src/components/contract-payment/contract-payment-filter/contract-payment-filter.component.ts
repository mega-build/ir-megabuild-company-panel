import { Component, EventEmitter, Output } from '@angular/core';
import { DateHelper } from 'src/helper/dateHelper';

@Component(
	{
		selector: 'contract-payment-filter',
		templateUrl: './contract-payment-filter.component.html',
		styleUrls: ['./contract-payment-filter.component.css']
	}
)

export class ContractPaymentFilterComponent
	{
		@Output() setFilter = new EventEmitter<any>();

		filterOptions:any = {}
		validationResult: any ={};

		filterText:string = "";
		
		
		constructor
		(
			private dateHelper:DateHelper
		){}
		
		setStartDate
		(
			startDate:any
		):void
			{
				
				this.filterOptions.startDate = this.dateHelper.getDateTehranTimeZoneDate(
					startDate.year,
					startDate.month,
					startDate.day
				);

				this.filterOptions.startDateShamsi = this.dateHelper.getDateTehranTimeZoneDateString(
					startDate.year,
					startDate.month,
					startDate.day
				);
			}


		setEndDate
		(
			endDate:any
		):void
			{
				
				this.filterOptions.endDate = this.dateHelper.getDateTehranTimeZoneDate(
					endDate.year,
					endDate.month,
					endDate.day
				);

				this.filterOptions.endDateShamsi = this.dateHelper.getDateTehranTimeZoneDateString(
					endDate.year,
					endDate.month,
					endDate.day
				);
			}

		validate
		(
			filterOptions: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				
				if
				(
					!filterOptions.startDate
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("تاریخ شروع فیلتر را وارد کنید.");
					}
			
				if
				(
					!filterOptions.endDate
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("تاریخ پایان فیلتر را وارد کنید.");
					}
			
			
				return validationResult;
			}

		filter
		():void
			{
				this.validationResult = this.validate(this.filterOptions);

				if
				(
					this.validationResult.hasError
				)
					{
						return;
					}
				else
					{
						this.filterText = `از ${this.filterOptions.startDateShamsi} تا ${this.filterOptions.endDateShamsi}` 
						this.setFilter.emit(this.filterOptions);
					}
			}

		removeFilter
		():void
			{
				this.filterText  = "";
				this.filterOptions ={};
				this.setFilter.emit(this.filterOptions);
			}

		
	}
