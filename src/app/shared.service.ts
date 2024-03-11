// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private formDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  formData$: Observable<any> = this.formDataSubject.asObservable();

  constructor() { }

  submitFormData(formData: any): void {
    this.formDataSubject.next(formData);
  }
}
