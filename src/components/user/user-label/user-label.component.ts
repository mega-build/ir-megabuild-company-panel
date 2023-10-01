import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'user-label',
		templateUrl: './user-label.component.html',
		styleUrls: ['./user-label.component.css']
	}
)

export class UserLabelComponent
	{
		@Input() user!:any;
	}
