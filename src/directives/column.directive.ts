import {ContentChild, Directive, Input} from '@angular/core';
import {CellDirective} from "./cell.directive";
import {HeaderDirective} from "./header.directive";

@Directive({
  selector: 'ngvn-column',
  standalone: true
})
export class ColumnDirective {

  @Input() header = '';
  @Input() key = '';
  @ContentChild(CellDirective, {static: true}) templateCell?: CellDirective;
  @ContentChild(HeaderDirective, {static: true}) templateHeader?: HeaderDirective;

  constructor() { }

}
