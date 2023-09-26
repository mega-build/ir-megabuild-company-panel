import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-item-abbreviation',
		templateUrl: './project-item-abbreviation.component.html',
		styleUrls: ['./project-item-abbreviation.component.css']
	}
)

export class ProjectItemAbbreviationComponent
	{
		@Input() projectItem: any = {};

		getResidentialTitle
		():string
			{

				if
				(
					this.projectItem.unit &&
					this.projectItem.floor &&
					this.projectItem.block
				)
					{
						const result = `واحد ${this.projectItem.unit} طبقه ${this.projectItem.floor} بلوک ${this.projectItem.block}`;

						return result;
					}
				else
					{
						return '';
					}
			}

		getLandParcelTitle
		():string
			{
				if
				(
					this.projectItem.unit &&
					!this.projectItem.floor &&
					!this.projectItem.block
				)
					{
						const result = `واحد ${this.projectItem.unit}`;

						return result;
					}
				else
					{
						return '';
					}
				
			}

		getTitle
		():string
			{
				const result = this.getResidentialTitle()+this.getLandParcelTitle();
				
				return result;
			}
	}
