import { NgModule } from '@angular/core'
import { ButtonModule } from '@collection-ui/button'
import { AuthComponent } from './auth.component'

@NgModule({
  declarations: [AuthComponent],
  imports: [ButtonModule, ButtonModule],
  exports: [AuthComponent],
})
export class AuthModule {}
