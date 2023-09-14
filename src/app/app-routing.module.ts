import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule(
	{
		imports: [RouterModule.forRoot(routes,{useHash:false,enableTracing:true})],
		exports: [RouterModule]
	}
)

export class AppRoutingModule { }
