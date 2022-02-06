import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { RouterStateSerializer } from '@ngxs/router-plugin'
import { CustomRouterStateSerializer } from './router.serializer'

@NgModule({
  imports: [RouterModule.forRoot([])],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer,
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
