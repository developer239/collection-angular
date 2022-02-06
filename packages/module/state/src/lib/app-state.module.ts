import { NgModule } from '@angular/core'
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator'
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsModule } from '@ngxs/store'
import { NgxsResetPluginModule } from 'ngxs-reset-plugin'

@NgModule({
  imports: [
    NgxsModule.forRoot([], {
      developmentMode: true,
    }),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: false,
    }),
    NgxsStoragePluginModule.forRoot(),
  ],
})
export class AppStateModule {}
