import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateHelper } from 'src/helper/dateHelper';

@Component(
	{
		selector: 'shmasi-date-picker',
		templateUrl: './shmasi-date-picker.component.html',
		styleUrls: ['./shmasi-date-picker.component.css']
	}
)

export class ShmasiDatePickerComponent implements OnInit
	{

		@Input() shamsiDate!:string;
		@Output() setSelectedDate = new EventEmitter<any>()

		constructor(
			private dateHelper:DateHelper
		){}
	
		ngOnInit(): void {
			console.log(this.shamsiDate)
			if
			(
				this.shamsiDate
			)
				{
					this.year = this.dateHelper.getYearFromShamsiDate(this.shamsiDate);
					this.month = this.dateHelper.getMonthFromShamsiDate(this.shamsiDate);
					this.day = this.dateHelper.getDayFromShamsiDate(this.shamsiDate);
				}
		}

		year!:number;// = 1402;
		month!: number;// = 1;
		day!:number;// = 1;

		onYearChanged
		(
			target:any
		):void
			{
				console.log('Year changed' + target.value);
				//this.setSelectedDate.emit(this.getDate());
				this.onDateChanged();
			}

		onMonthChanged
		(
			target:any
		):void
			{
				console.log('Month changed' + target.value);
				//this.setSelectedDate.emit(this.getDate())
				this.onDateChanged();
			}

		onDayChanged
		(
			target:any
		):void
			{
				console.log('day changed' + target.value);
				//this.setSelectedDate.emit(this.getDate())
				this.onDateChanged();
			}

		onDateChanged
		():void
			{
				if
				(
					this.year &&
					this.month &&
					this.day
				)
					{
						const result = {
							year : this.year,
							month: this.month,
							day: this.day
						}
		
						this.setSelectedDate.emit(result);
					}
			}

		
	}
