import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsListItem, NewsService } from '../../services/news';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news.html',
})
export class NewsComponent implements OnInit {
  news: NewsListItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (items) => (this.news = items),
      error: (err) => console.error('Erreur API news:', err),
    });
  }
}
