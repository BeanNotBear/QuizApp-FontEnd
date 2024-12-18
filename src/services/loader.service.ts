import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() {
  }

  showLoader = new BehaviorSubject<boolean>(false);

  requestStarted() {
    this.showLoader.next(true);
  }

  requestEnded() {
    this.showLoader.next(false);
  }
}
