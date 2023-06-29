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

		getAllCompanyList
		(): void
			{
				this.companyService
					.getAll()
					.subscribe(
						(data: any) => 
							{
								console.log(data.companyList);
								this.companyList = data.companyList;
								
							}
					)
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
