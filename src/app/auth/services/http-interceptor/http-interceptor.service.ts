import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
	providedIn: 'root'
})

export class HttpInterceptorService {

	constructor(
		private http: HttpClient,
	){}

	async post
	(
		url: string,
		headers: HttpHeaders,
		body: any
	):Promise<any>
		{
			const result = await  this.http
				.post(
					url,
					body,
					{ headers: headers }
				).toPromise();
			
			return result;
		}

}
