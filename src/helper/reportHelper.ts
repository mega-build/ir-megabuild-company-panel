import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ReportHelper
	{
        HEADER:string = `<html xmlns:o='urn:schemas-microsoft-com:office:office'
        xmlns:w='urn:schemas-microsoft-com:office:word' 
        xmlns='http://www.w3.org/TR/REC-html40' lang='fa' dir='rtl'>
        <head><meta charset='utf-8'>
        <style>
            @font-face {
                font-family: "IRANSansWeb";
                src: url("https://assets.megabuild.ir/fonts/IRANSansWeb_Bold.woff2");
            }
            @page WordSection1 {
                size: 792pt 612pt;
                mso-page-orientation: landscape;
                margin: 2pt 2pt 2pt 2pt;
                mso-header-margin: 1pt;
                mso-footer-margin: 1pt;
                mso-paper-source: 0;
            }
            div.WordSection1 {
                page: WordSection1;
            }
            body {
                font-family: "Tahoma", "2  Koodak", "B Jadid", "IRANSansWeb";
            }
            table {
                border-spacing: 0;
            }
            th{
                border:1px solid #000;
            }
            td {
                border-bottom: 1px solid #000;
                border-left:1px solid #000;
                border-right: 1px solid #000;
            }
            </style>
        </head><body><div class=WordSection1>`;

        FOOTER:string = "</div></body></html>";
    }