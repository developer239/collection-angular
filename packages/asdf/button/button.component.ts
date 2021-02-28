import { Component, Input } from '@angular/core'
import { Button } from 'src/app/_shared/components/button/button.types'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public uri?: string
  @Input() public label?: string
  @Input() public disabled = false
  @Input() public isLoading = false
  @Input() public size: keyof typeof Button.SizeEnum
  @Input() public type: keyof typeof Button.TypeEnum
  @Input() public colorStyle: keyof typeof Button.StyleEnum

  public get isDisabled() {
    return this.disabled || this.isLoading
  }

  public get isSmaller() {
    return this.size === Button.SizeEnum.smaller
  }

  public get isSuccess() {
    return this.colorStyle === Button.StyleEnum.success
  }

  public get isError() {
    return this.colorStyle === Button.StyleEnum.error
  }

  public get isDark() {
    return this.colorStyle === Button.StyleEnum.dark
  }
}
