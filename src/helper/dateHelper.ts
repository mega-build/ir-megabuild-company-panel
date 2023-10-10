import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class DateHelper
	{

        getTodayShamsi():string
            {
                const today:Date = new Date();
                const options : Intl.DateTimeFormatOptions= {
                    weekday:"long",
                    year:"numeric",
                    month:"long",
                    day:"numeric"
                }
                return today.toLocaleDateString('fa',options);
                
            }

        getDateTehranTimeZoneDateString
		(
            year:number,
            month:number,
            day:number
        ):string
			{
				const formated: string = `${year}/${month}/${day}`;
				return formated;
			}

        getDateTehranTimeZoneDate
        (
            year:number,
            month:number,
            day:number
        ):Date
            {
                const miladiDateObject :any = this.shamsi_be_miladi(
                    year,
                    month,
                    day
                );

                const formatedMiladi: string = `${miladiDateObject.year}/${miladiDateObject.month}/${miladiDateObject.day}`;
                
                const dateObject = new Date(formatedMiladi);
				return dateObject;
            }

        shamsi_be_miladi
        (
            jy:number,
            jm:number,
            jd:number
        )
            {
                var sal_a, gy, gm, gd, days;
                jy += 1595;
                days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
                gy = 400 * ~~(days / 146097);
                days %= 146097;
                if (days > 36524) {
                gy += 100 * ~~(--days / 36524);
                days %= 36524;
                if (days >= 365) days++;
                }
                gy += 4 * ~~(days / 1461);
                days %= 1461;
                if (days > 365) {
                gy += ~~((days - 1) / 365);
                days = (days - 1) % 365;
                }
                gd = days + 1;
                sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
                const result = {
                    year:gy,
                    month:gm,
                    day:gd
                }
                return result
            }
    }