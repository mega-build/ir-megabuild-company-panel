import { Component, EventEmitter, Output } from '@angular/core';
import { DateHelper } from 'src/helper/dateHelper';

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

		filterOptions:any = {}
		project:any = {};
		validationResult: any ={};

		constructor
		(
			private dateHelper:DateHelper
		)
			{}
		
		setProject
		(
			project: any
		): void 
			{
				this.project = project;
				console.log(this.project);
				this.filterOptions.project = project;
				
			}

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
					!filterOptions.project
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش پروژه را انتخاب کنید.");
					}

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
						this.setFilter.emit(this.filterOptions);
					}
			}
			

	}
