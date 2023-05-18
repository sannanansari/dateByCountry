import { Pipe, PipeTransform } from '@angular/core';

interface argFormat {
  [key: string]: string | boolean;
}

@Pipe({
  name: 'dateByCountry'
})
export class DateByCountryPipe implements PipeTransform {

  transform(value: any, ...args: string[]): unknown {
    var date = new Date(new Date(value).toUTCString())
    let options: argFormat = {};
    let timeZone!: {};
    var t = "true"
    var f = "false";
    var args2;
    var args3;
    if(args[1]){
    var arg2 = args[1].split('-');
    for (let i = 0; i < arg2.length; i++) {
      var temp1 = first(arg2[i][0]);
      var temp2 = second(arg2[i][1])
      options[temp1] = temp2
    }

    }
    if(args[2]) {
      args2 = args[2].split("-");
      if(args2[1] == "true")
      options['hour12'] = true ;
      else
      options['hour12'] =false ;
    }
    if(args[3]) {
      args3 = args[3].split("-");
      options['timeZone'] = args3[1]
      options['timeZoneName'] = "long"
    }
    console.log("Options ==> ",options,args);
    
    return new Intl.DateTimeFormat(args[0], options).format(date);
  }
}


function first(i: string): string {
  switch (i) {
    case 'y' || 'Y':
      return 'year';
    case 'm':
      return 'month';
    case 'd':
      return 'day';
    case 'h':
      return 'hour';
    case 'M':
      return 'minute';
    case 's':
      return 'second';
    case 'w':
      return 'weekday'
    default:
      return '';
  }
}

function second(i: string): string {
  switch (i) {
    case 'n':
      return 'numeric';
    case 'd':
      return '2-digit';
    case 'l':
      return 'long';
    case 's':
      return 'short';
    case 'N':
      return 'narrow';
    default:
      return '';
  }
}
