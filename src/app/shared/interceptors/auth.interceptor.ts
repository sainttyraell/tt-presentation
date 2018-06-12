import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable()
export class AppAuthInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = JSON.parse(this.localStorage.get('authenticationToken'));

    if (token) {
      req = req.clone({headers: req.headers.set('Authorization', token)});
    }
    if (!req.headers.has('Content-Type')) {
      req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    }

    req = req.clone({headers: req.headers.set('Accept', 'application/json')});
    return next.handle(req);
  }
}


