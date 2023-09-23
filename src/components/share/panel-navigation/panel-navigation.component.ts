import { Component } from '@angular/core';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Component(
	{
		selector: 'panel-navigation',
		templateUrl: './panel-navigation.component.html',
		styleUrls: ['./panel-navigation.component.css']
	}
)

export class PanelNavigationComponent
	{

		constructor
		(
			private localStorageService: LocalStorageService
		){}

		getWorkingCompany
		():any
			{
				const workingUserCompanyAccess =  this.localStorageService.getUserCompanyAccess();
				const company = workingUserCompanyAccess.company;

				return company;
			}
	}
