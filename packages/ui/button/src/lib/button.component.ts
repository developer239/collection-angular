import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent implements OnInit {
  public ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log('button component initialized')
  }
}
