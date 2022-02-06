import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { IConfiguration } from './api.module.types'
import { API_URL } from './services/api.service.tokens'

@NgModule({
  imports: [HttpClientModule],
})
export class AppApiClientModule {
  public static forRoot(config: IConfiguration) {
    return {
      ngModule: AppApiClientModule,
      providers: [{ provide: API_URL, useValue: config.apiUrl }],
    }
  }
}
