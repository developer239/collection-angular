import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ButtonComponent } from 'src/app/_shared/components/button/button.component'
import { SpinnerModule } from 'src/app/_shared/components/spinner/spinner.module'

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, SpinnerModule, RouterModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
