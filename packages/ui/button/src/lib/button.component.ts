import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'lib-button',
  template: ` <p>button works!</p> `,
  styles: [],
})
export class ButtonComponent implements OnInit {
  public ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log('button component initialized')
  }
}
