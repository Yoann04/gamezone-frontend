import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type CategoryRef = {
  name: string;
  slug: string;
};

export type Review = {
  author: string;
  note: number;
  content: string;
};

export type Game = {
  id: number;
  title: string;
  slug: string;

  description?: string | null;
  longDescription?: string | null;

  coverUrl?: string | null;
  releaseDate?: string | null;

  category?: CategoryRef | null;

  // ✅ NEW
  platforms?: string[];
  genre?: string | null;
  modes?: string[];
  publisher?: string | null;
  developer?: string | null;

  rating?: number | null;
  ratingCount?: number | null;

  pros?: string[];
  cons?: string[];

  reviews?: Review[];
};

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly apiUrl = 'http://127.0.0.1:8000/api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGameBySlug(slug: string): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${slug}`);
  }
}
