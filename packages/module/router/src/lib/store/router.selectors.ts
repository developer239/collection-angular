import { Injectable } from '@angular/core'
import { Params } from '@angular/router'
import {
  RouterState,
  RouterStateModel as RouterStateOuterModel,
} from '@ngxs/router-plugin'
import { Selector } from '@ngxs/store'
import { IStateModel } from './router.interface'

@Injectable()
export class RouterSelectors {
  @Selector([RouterState])
  public static params({
    state,
  }: RouterStateOuterModel<IStateModel>): Params | undefined {
    return state?.params
  }
}
