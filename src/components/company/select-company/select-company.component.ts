import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompanyService } from 'src/services/company/company.service';

@Component(
	{
		selector: 'select-company',
		templateUrl: './select-company.component.html',
		styleUrls: ['./select-company.component.css']
	}
)

export class SelectCompanyComponent implements OnInit
{

	@Output() setCompany = new EventEmitter<any>();
	@Input() selectedCompany:any ={};

	companyList: any[]= [];
	isLoading: boolean = false;
	
		
	constructor
	(
		private companyService: CompanyService
	)
		{}
			
	ngOnInit
	(): void 
		{
			this.getAllCompanyList();
		}

		async getAllCompanyList
		(): Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.companyService.getAll();
						console.log(data.companyList);
						this.companyList = data.companyList;
						this.isLoading = false;
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						alert(error.error)	
					}
				
					
			}


	

	selectCompany
	(
		company:any
	):void
		{
			this.selectedCompany = company;
			this.setCompany.emit(this.selectedCompany);
		}
}
