import { Pipe, PipeTransform } from '@angular/core';
import { User } from './search-class/user';
@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
created_at:any;
  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && this.created_at < todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }
}
