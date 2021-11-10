import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeepDataService<T> {
  private dataSubject$: ReplaySubject<T> = new ReplaySubject<T>();
  data$: Observable<T> = this.dataSubject$.asObservable();

  constructor() {}

  set(data: T) {
    this.dataSubject$.next(data);
  }
}
