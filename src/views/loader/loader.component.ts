import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {LoaderService} from "../../services/loader.service";
import {NzSpinComponent} from "ng-zorro-antd/spin";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    NzSpinComponent
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {
    this.loaderService.showLoader.subscribe(status => {
      this.showLoader = status;
    })
  }
  showLoader!:boolean;
}
