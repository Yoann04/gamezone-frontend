import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Category, CategoryService, Game } from '../../services/category';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-detail.html',
})
export class CategoryDetailComponent implements OnInit {
  category: Category | null = null;
  games: Game[] = [];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) return;

    this.categoryService.getCategoryGames(slug).subscribe((res) => {
      this.category = res.category;
      this.games = res.games;
    });
  }
}
