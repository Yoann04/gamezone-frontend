import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsDetail, NewsService } from '../../services/news';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-detail.html',
})
export class NewsDetailComponent implements OnInit {
  item: NewsDetail | null = null;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) return;

    this.newsService.getNewsBySlug(slug).subscribe({
      next: (it) => (this.item = it),
      error: (err) => console.error('Erreur API news detail:', err),
    });
  }
}
