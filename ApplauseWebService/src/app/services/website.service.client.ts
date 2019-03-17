// executed on client
import {Injectable} from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Response} from '@angular/http';
import {environment} from '../../environments/environment';

// make class usable for all components
@Injectable()
export class WebsiteService {

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  findAllMatches() {
    const url = this.baseUrl + '/api/allmatches';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

}
