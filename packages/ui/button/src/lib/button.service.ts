import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  public sayHello() {
    return 'Hello 👋'
  }
}
