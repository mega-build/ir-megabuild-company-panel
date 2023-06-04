import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})

export class SelectProjectComponent {
	@Output() setProject = new EventEmitter<any>();

	projectList: any[]= [
		{
			_id: "647615ae6e8bc9cf0e8ae675",
			title: "پروژه 1"
		}
	];

	selectProject
	(
		project:any
	):void
		{
			this.setProject.emit(project);
		}
}
