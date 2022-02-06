/* eslint-disable dot-notation,@typescript-eslint/brace-style */
import { RouterStateSnapshot } from '@angular/router'
import { RouterStateSerializer } from '@ngxs/router-plugin'
import { IStateModel } from './store/router.interface'

// https://github.com/ngxs/store/issues/912#issuecomment-475659923
export class CustomRouterStateSerializer
  implements RouterStateSerializer<IStateModel> {
  public serialize(routerState: RouterStateSnapshot): IStateModel {
    const {
      url,
      root: { queryParams },
    } = routerState

    let { root: route } = routerState

    while (route.firstChild) {
      route = route.firstChild
    }

    const { params, data } = route

    if (route.params['title']) {
      data['title'] = route.params['title']
    }

    return { url, params, queryParams, data }
  }
}
