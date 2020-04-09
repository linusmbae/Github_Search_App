import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dates'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args): any {
    console.log(value, args)
    return Date();
  }

}
