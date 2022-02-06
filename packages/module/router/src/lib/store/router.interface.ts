import { Params } from '@angular/router'

export interface IStateModel {
  url: string
  params: Params
  queryParams: Params
  data: any
}
