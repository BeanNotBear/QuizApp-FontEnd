import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {Dictionary} from "../../models/types";
import {ColumnDirective} from "../../directives/column.directive";
import {NzTableComponent, NzTableModule} from "ng-zorro-antd/table";
import {NzDividerComponent, NzDividerModule} from "ng-zorro-antd/divider";
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NzTableModule,
    NzDividerModule,
    NgTemplateOutlet,
    NgIf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent{

  @Input() rows: Dictionary[] = [];
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 15, 25];
  @Input() totalRows = 0;

  @ContentChildren(ColumnDirective) columns!: QueryList<ColumnDirective>;
}
