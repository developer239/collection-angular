import { Injectable } from '@angular/core'
import { NavigationExtras, Params } from '@angular/router'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { SelectSnapshot } from '@ngxs-labs/select-snapshot'
import { Navigate } from '@ngxs/router-plugin'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { RouterSelectors } from './router.selectors'

@Injectable({
  providedIn: 'root',
})
export class RouterFacade {
  @Select(RouterSelectors.params) public readonly params$: Observable<Params>

  @SelectSnapshot(RouterSelectors.params) public readonly params: Params

  @Dispatch()
  public navigate(
    path: any[],
    queryParams?: Params | undefined,
    extras?: NavigationExtras | undefined
  ): Navigate {
    return new Navigate(path, queryParams, extras)
  }
}
