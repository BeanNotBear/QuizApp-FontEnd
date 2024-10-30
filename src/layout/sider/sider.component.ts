import { Component } from '@angular/core';
import {NzSwitchComponent} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";
import {NzMenuDirective} from "ng-zorro-antd/menu";

@Component({
  selector: 'app-sider',
  standalone: true,
  imports: [
    NzSwitchComponent,
    FormsModule,
    NzMenuDirective
  ],
  templateUrl: './sider.component.html',
  styleUrl: './sider.component.scss'
})
export class SiderComponent {
  theme = true;
}
