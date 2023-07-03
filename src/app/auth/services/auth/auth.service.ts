import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class AuthService
	{

		private URL_USER_LOGIN_WITH_EMAIL_PASSWORD = `${environment.API_URL}/user/login`;

		constructor(
			private httpInteceptor: HttpInterceptorService
		) { }

		login
		(
			email: string,
			password: string
		): Observable<Object>
			{
				var headers: HttpHeaders = new HttpHeaders();

				var body: any = {
					password: password,
					username: email
				};

				return this.httpInteceptor.post(
					this.URL_USER_LOGIN_WITH_EMAIL_PASSWORD,
					headers,
					body
				);
			}
	}
