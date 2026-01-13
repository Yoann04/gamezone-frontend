import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Game, GameService } from '../../services/game';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.scss',
})
export class GameDetailComponent implements OnInit {
  game: Game | null = null;
  loading = true;
  error: string | null = null;

  readonly placeholderCover = 'assets/images/placeholders/game-cover.png';

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) {
      this.loading = false;
      this.error = 'Slug manquant.';
      return;
    }

    this.loading = true;
    this.error = null;

    this.gameService.getGameBySlug(slug).subscribe({
      next: (game) => {
        this.game = game;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur API detail:', err);
        this.error = 'Jeu introuvable.';
        this.loading = false;
      },
    });
  }

  coverSrc(): string {
    return this.game?.coverUrl ? this.game.coverUrl : this.placeholderCover;
  }
}
