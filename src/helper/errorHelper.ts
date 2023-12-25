import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ErrorHelper
	{
        showErrorAsAlert
        (
            error: any
        ):void
            {
                
                if
                (
                    error.status == 0 ||
                    error.status == 404
                )
                    {
                        alert("خطا در دسترسی به سرور. لطفا اتصال به اینترنت را بررسی کنید.")
                    }
                else
                    {
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
    }