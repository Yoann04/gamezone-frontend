import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Category = { id: number; name: string; slug: string };
export type Game = {
  id: number;
  title: string;
  slug: string;
  description?: string | null;
  releaseDate?: string | null;
  coverUrl?: string | null;
  category?: Category | string;
};

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private baseUrl = 'http://127.0.0.1:8000/api/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategoryGames(slug: string): Observable<{ category: Category; games: Game[] }> {
    return this.http.get<{ category: Category; games: Game[] }>(`${this.baseUrl}/${slug}/games`);
  }
}
