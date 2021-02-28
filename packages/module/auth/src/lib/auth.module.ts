import { NgModule } from '@angular/core'
import { AuthComponent } from './auth.component'
import { ButtonModule } from '@collection-ui/button'

@NgModule({
  declarations: [AuthComponent],
  imports: [ButtonModule, ButtonModule],
  exports: [AuthComponent],
})
export class AuthModule {}
