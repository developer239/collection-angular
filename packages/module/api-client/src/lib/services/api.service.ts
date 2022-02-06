import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { API_URL } from './api.service.tokens'

@Injectable()
export class ApiService {
  constructor(
    protected readonly http: HttpClient,
    @Inject(API_URL) protected readonly apiUrl: string
  ) {}

  protected createUrl(uri: string) {
    return `${this.apiUrl}${uri}`
  }

  protected createHeaders() {
    return new HttpHeaders()
  }

  protected createOptions() {
    return {
      headers: this.createHeaders(),
    }
  }

  protected post<TData>(uri: string, data?: any) {
    return this.http.post<TData>(
      this.createUrl(uri),
      data,
      this.createOptions()
    )
  }

  protected postObserveHeaders<TData>(uri: string, data?: any) {
    return this.http
      .post<TData>(this.createUrl(uri), data, {
        headers: this.createHeaders(),
        observe: 'response',
      })
      .pipe(
        map((response) => ({
          body: response.body,
          headers: response.headers,
        }))
      )
  }

  protected patch<TData>(uri: string, data: any) {
    return this.http.patch<TData>(
      this.createUrl(uri),
      data,
      this.createOptions()
    )
  }

  protected get<TData>(uri: string) {
    return this.http.get<TData>(this.createUrl(uri), this.createOptions())
  }

  protected delete<TData>(uri: string) {
    return this.http.delete<TData>(this.createUrl(uri), this.createOptions())
  }
}
