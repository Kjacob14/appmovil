import {inject,Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { RickResponse } from '../interfaces/rick-interface';
import { HttpClient } from '@angular/common/http';

@Service()
export class RickService {

    private http = inject(HttpClient)

    getPersonajes():Observable<RickResponse> {
        return this.http.get<RickResponse>(environment.URL_BASE + environment.personajes);
    }
}
