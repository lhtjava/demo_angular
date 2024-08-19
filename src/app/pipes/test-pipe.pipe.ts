import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doneTime'
})
export class TestPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.formatDate() + value;
  }

  formatDate(){
    const Dates = new Date();

    // YMD
    const Year : String = Dates.getFullYear().toString().slice(2, 4); 
    const Months : any = ( Dates.getMonth() + 1 ) < 10  ?  '0' + (Dates.getMonth() + 1) : ( Dates.getMonth() + 1); 
    const Day : any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();

   // HMS
   const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
   const Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
   const Seconds = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();

  //  return Year + '/' + Months + '/'  + Day + ' ' + Hours + ':' + Minutes + ' '; 
   return Months + '/'  + Day + ' '; 
}

}
