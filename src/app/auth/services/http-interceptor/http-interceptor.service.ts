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

	post
	(
		url: string,
		headers: HttpHeaders,
		body: any
	):Observable<Object>
		{
			return this.http
				.post(
					url,
					body,
					{ headers: headers }
				);
		}

}
