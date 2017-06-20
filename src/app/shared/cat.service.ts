import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Cat } from "./cat";

@Injectable()
export class CatService {
  private CATS_URL = 'https://api.tumblr.com/v2/blog/fuckyeahcats.tumblr.com/posts/photo?api_key=z46iUTiovIf3N5KdioKhU2vvTBMWRHA8KLeIBruDnEHTXpiK8n&&callback=JSONP_CALLBACK&limit=20&offset=20';

  constructor(private http: Http, private jsonp: Jsonp) { }

  public getCats(): Observable<Cat[]> {
    return this.jsonp.request(this.CATS_URL, { method: 'Get'})
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('body', body);
    return body.response.posts || {};
  }

  private handleError(error: Response) {
    let errMsg: string;
    if (error) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.toString();
    }
    return Observable.throw(errMsg);
  }

}
