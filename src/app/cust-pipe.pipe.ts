import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPipe'
})
export class CustPipePipe implements PipeTransform {

  transform(value: any): string {
    return ""
  }

}
