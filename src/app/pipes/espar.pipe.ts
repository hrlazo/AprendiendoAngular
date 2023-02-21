import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
       return value; 
    }
}