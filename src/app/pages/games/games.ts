import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game, GameService } from '../../services/game';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  loading = true;
  error: string | null = null;

  readonly placeholderCover = 'assets/images/placeholders/game-cover.png';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = null;

    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games ?? [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur API games:', err);
        this.error = 'Impossible de charger la liste des jeux.';
        this.loading = false;
      },
    });
  }

  coverSrc(game: Game): string {
    return game.coverUrl ? game.coverUrl : this.placeholderCover;
  }
}
