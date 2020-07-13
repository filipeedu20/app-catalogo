import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Anime} from "../IAnime";

const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

@Injectable({
  providedIn: "root"
})
export class AnimeService {
 
  private anime: Anime;

  url: string = 'https://kitsu.io/api/edge/anime?page[limit]=10';

  constructor(private http: HttpClient) {}

  getAnime(): Observable<any> {
    return this.http.get<Anime[]>(this.url)
  }
  getDetail(id): Observable<any> {
    return this.http.get<Anime[]>(this.url)
  }
}
