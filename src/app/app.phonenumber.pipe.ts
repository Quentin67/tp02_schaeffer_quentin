import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumber' })
export class phoneNumberPipe implements PipeTransform {
  transform(phone: string): string {
    return this.chunk(phone,2).join(' ');
  }
  chunk(str, n) {
    var ret = [];
    var i;
    var len;
    for(i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n))
    }

    return ret
};
}