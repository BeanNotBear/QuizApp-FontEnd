import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {
    this.init();
  }
  showLoader!:boolean;

  init() {
    this.loaderService.showLoader.subscribe(status => {
      this.showLoader = status;
    })
  }
}
