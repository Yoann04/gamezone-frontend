import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type NewsGameRef = { title: string; slug: string };

export type NewsListItem = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  createdAt?: string | null;
  game?: NewsGameRef | null;
};

export type NewsDetail = {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt?: string | null;
  game?: NewsGameRef | null;
};

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly apiUrl = 'http://127.0.0.1:8000/api/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsListItem[]> {
    return this.http.get<NewsListItem[]>(this.apiUrl);
  }

  getNewsBySlug(slug: string): Observable<NewsDetail> {
    return this.http.get<NewsDetail>(`${this.apiUrl}/${slug}`);
  }

  getNewsByGame(gameSlug: string): Observable<{ game: NewsGameRef; items: NewsListItem[] }> {
    return this.http.get<{ game: NewsGameRef; items: NewsListItem[] }>(
      `${this.apiUrl}/game/${gameSlug}`
    );
  }
}
