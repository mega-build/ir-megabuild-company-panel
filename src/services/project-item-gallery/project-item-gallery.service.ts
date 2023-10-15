import { Injectable } from '@angular/core';
import { AuthHttpInterceptorService } from '../authHttpInterceptor/auth-http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectItemGalleryService
	{

		private URL_PROJECT_ITEM_GALLERY_ADD: string = `${environment.API_URL}/projectItemGallery`;
		
		constructor(
			private httpInteceptor: AuthHttpInterceptorService,
		){}

		async add
		(
			projectItemId: string,
			file: File
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const formData = new FormData(); 
				formData.append("files", file, file.name);
				formData.append("projectItemId", projectItemId);

				const result = await this.httpInteceptor.uploadWithAuth(
					this.URL_PROJECT_ITEM_GALLERY_ADD,
					headers,
					formData
				);

				return result;
			}

	}
