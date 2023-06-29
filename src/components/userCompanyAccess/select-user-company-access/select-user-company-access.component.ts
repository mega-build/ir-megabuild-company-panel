import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserCompanyAccessService } from 'src/services/userCompanyAccess/user-company-access.service';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Component(
	{
		selector: 'select-user-company-access',
		templateUrl: './select-user-company-access.component.html',
		styleUrls: ['./select-user-company-access.component.css']
	}
)

export class SelectUserCompanyAccessComponent implements OnInit
{

	@Output() setUserCompanyAccess = new EventEmitter<any>();
	@Input() selectedUserCompanyAccess:any ={};

	userCompanyAccessList: any[]= [];
	
		
	constructor
	(
		private userCompanyAccessService: UserCompanyAccessService,
		private localStorageService: LocalStorageService
	)
		{}
			
	ngOnInit
	(): void 
		{
			this.getAllUserCompanyAccessList();
		}

		getAllUserCompanyAccessList
		(): void
			{
				this.userCompanyAccessService
					.getAll()
					.subscribe(
						(data: any) => 
							{
								console.log(data.userCompanyAccessList);
								this.userCompanyAccessList = data.userCompanyAccessList;
								const workingUserCompanyAccess =  this.localStorageService.getUserCompanyAccess();

								this.selectedUserCompanyAccess =this.userCompanyAccessList.find(
									(
										currentUserCompanyAccess:any
									) =>
										{
											if
											(
												currentUserCompanyAccess._id == workingUserCompanyAccess._id
											)
												{
													return currentUserCompanyAccess;
												}
										}
								) 
							}
					)
			}


	

	selectUserCompanyAccess
	(
		userCompanyAccess:any
	):void
		{
			this.selectedUserCompanyAccess = userCompanyAccess;
			this.localStorageService.setUserCompanyAccess(this.selectedUserCompanyAccess);
			this.setUserCompanyAccess.emit(this.selectedUserCompanyAccess);
		}
}