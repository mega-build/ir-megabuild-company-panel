import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { UserCompanyAccessService } from 'src/services/userCompanyAccess/user-company-access.service';

@Component(
	{
		selector: 'select-user-list',
		templateUrl: './select-user-list.component.html',
		styleUrls: ['./select-user-list.component.css']
	}
)

export class SelectUserListComponent implements OnInit
	{

		@Output() onSelectedUserChanged = new EventEmitter<any>();

		selectedUserList: any[]=[];
		userCompanyAccessList!: any[];
		isLoading: boolean = false;

		constructor
		(
			private userCompanyAccessService: UserCompanyAccessService,
			private errorHelper: ErrorHelper
		){}

		ngOnInit(): void {
			this.getAllReviewer();
		}

		async getAllReviewer
		():Promise<void>
			{
				this.isLoading = true;

					try 
						{
							const data = await this.userCompanyAccessService.getAllReviewer()
							
							console.log(data.userCompanyAccessList);
							this.userCompanyAccessList = data.userCompanyAccessList;
							
							this.isLoading = false;
						}
					catch
					(
						error: any
					)
						{
							this.isLoading = false;
							this.errorHelper.showErrorAsAlert(error);
						}
			}

		selectedUserChanged
		(
			element:HTMLInputElement,
			user:any
		):void
			{
				console.log(element);

				if
				(
					element.checked == true
				)
					{
						this.selectedUserList.push(user);
						
					}
				else
					{
						this.selectedUserList.splice(
							this.selectedUserList.indexOf(user),
							1
						);
					}
				
				this.onSelectedUserChanged.emit(this.selectedUserList);
			}
	}
