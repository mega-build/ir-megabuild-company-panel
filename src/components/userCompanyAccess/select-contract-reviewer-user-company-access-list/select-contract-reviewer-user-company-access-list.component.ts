import { Component, EventEmitter, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { UserCompanyAccessService } from 'src/services/userCompanyAccess/user-company-access.service';

@Component(
	{
		selector: 'select-contract-reviewer-user-company-access-list',
		templateUrl: './select-contract-reviewer-user-company-access-list.component.html',
		styleUrls: ['./select-contract-reviewer-user-company-access-list.component.css']
	}
)

export class SelectContractReviewerUserCompanyAccessListComponent
{
	@Output() onSelectedUserCompanyAccessChanged = new EventEmitter<any>();

	selectedUserCompanyAccessList: any[]=[];
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
					this.selectedUserCompanyAccessList.push(user);
					
				}
			else
				{
					this.selectedUserCompanyAccessList.splice(
						this.selectedUserCompanyAccessList.indexOf(user),
						1
					);
				}
			
			this.onSelectedUserCompanyAccessChanged.emit(this.selectedUserCompanyAccessList);
		}
}
