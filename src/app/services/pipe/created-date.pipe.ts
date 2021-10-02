import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdDate'
})
export class CreatedDatePipe implements PipeTransform {

  transform(date: Date): string {
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    const newDate = new Date(date);
    const month = months[newDate.getMonth()];

    return `${newDate.getDay()} ${month} ${newDate.getFullYear()}`;
  }
}
