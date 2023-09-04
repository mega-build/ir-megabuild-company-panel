import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/services/contract/contract.service';
import { ProjectItemService } from 'src/services/projectItem/project-item.service';

@Component({
  selector: 'app-contract-project-item',
  templateUrl: './contract-project-item.component.html',
  styleUrls: ['./contract-project-item.component.css']
})
export class ContractProjectItemComponent implements OnInit{
	
	contractId: string = "";
	project: any = {};

	projectItem: any={};

	isLoading:boolean = false;

	constructor
		(
			private route: ActivatedRoute,
			private projectItemService: ProjectItemService,
			private contractService : ContractService
		)
			{}
	
	async getProjectItemByContractId
	(): Promise<void>
		{
			this.isLoading = true;

			try 
				{
					const data = await this.projectItemService
						.getByContractId(
							this.contractId
						);
					
					console.log(data.projectItem);
					if
					(
						!data.projectItem._id
					)
						{
							this.projectItem = undefined;
						}
					else
						{
							this.projectItem = data.projectItem;
						}
					
					this.isLoading = false;
				}
			catch
			(
				error: any
			)
				{
					this.isLoading = false;
					if
					(
						error.error &&
						error.error.message
					)
						{
							alert(error.error.message);
						}
					else
						{
							alert(error)
						}
				}
		}

	setProject
	(
		project: any
	): void 
		{
			this.project = project;
			console.log(this.project);
		}


	setContractProjectItem
	():void
		{
			this.isLoading = true;
			this.contractService
				.setProjectAndProjectItem(
					this.contractId,
					this.project._id,
					this.projectItem._id
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data);
							this.isLoading = false;
						}
				)
		}

	isResidentailProjectItem
	():boolean
		{
			if
			(
				this.project &&
				this.project.projectType&&
				this.project.projectType.componentName == "RESIDENTIAL"
			)
				{
					return true;
				}
			else
				{
					//return false;
					return true;
				}
			
		}

	isLandParcelProjectItem
	():boolean
		{
			if
			(
				this.project &&
				this.project.projectType&&
				this.project.projectType.componentName == "LANDPARCEL"
			)
				{
					return true;
				}
			else
				{
					//return false;
					return true;
				}
		}
	ngOnInit
	(): void
		{
			if
			(
				this.route.parent
			)
				{
					this.route.parent.params.subscribe(params => 
						{
							this.contractId = params['contractId']; 
							this.getProjectItemByContractId();
						}
					);
				}
			
			
		}

	removeProjectItem
	():void
		{
			
			this.isLoading = true;
			this.contractService
				.removeProjectItem(
					this.contractId
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data);
							this.projectItem = undefined;
							this.isLoading = false;
						}
				)
		}

	setNewProjectItem(
		projectItem:any
	):void
		{
			console.log(projectItem);
			this.projectItem = projectItem;
			
		}

}
