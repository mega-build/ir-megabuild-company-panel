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
		
		constructor
		(
			private dateHelper:DateHelper
		)
			{}
		
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

		filter
		():void
			{
				this.setFilter.emit(this.filterOptions);
			}
	}
