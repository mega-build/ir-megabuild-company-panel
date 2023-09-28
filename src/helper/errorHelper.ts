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