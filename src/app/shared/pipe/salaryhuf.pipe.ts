import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryhuf',
  standalone: true
})
export class SalaryhufPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
     return value + ' Ft';
  }

}
