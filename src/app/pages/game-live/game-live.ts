import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GameService } from '../../services/game';

type LiveLink = {
  name: string;
  platform: 'Twitch' | 'YouTube';
  url: string;
  note?: string;
};

@Component({
  selector: 'app-game-live',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './game-live.html',
})
export class GameLiveComponent implements OnInit {
  gameSlug = '';
  gameTitle = '';
  lives: LiveLink[] = [];

  private allLives: Record<string, LiveLink[]> = {
    fortnite: [
      {
        name: 'Twitch Fortnite',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/fortnite',
      },
      {
        name: 'YouTube Fortnite',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=fortnite+live',
      },
    ],
    'call-of-duty-black-ops-7': [
      {
        name: 'Twitch Call of Duty',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/call-of-duty-warzone',
      },
      {
        name: 'YouTube Call of Duty',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=call+of+duty+live',
      },
    ],
    'world-of-warcraft': [
      {
        name: 'Twitch WoW',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/world-of-warcraft',
      },
      {
        name: 'YouTube WoW',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=world+of+warcraft+live',
      },
    ],
    'new-world': [
      {
        name: 'Twitch New World',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/new-world',
      },
      {
        name: 'YouTube New World',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=new+world+live',
      },
    ],
    'forza-horizon-5': [
      {
        name: 'Twitch Forza Horizon 5',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/forza-horizon-5',
      },
      {
        name: 'YouTube Forza Horizon 5',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=forza+horizon+5+live',
      },
    ],
    'f1-2025': [
      {
        name: 'Twitch F1',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/f1-23',
      },
      {
        name: 'YouTube F1',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=f1+2025+live',
      },
    ],
    'gta-v': [
      {
        name: 'Twitch GTA V',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/grand-theft-auto-v',
      },
      {
        name: 'YouTube GTA V',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=gta+v+live',
      },
    ],
    'red-dead-redemption-2': [
      {
        name: 'Twitch RDR2',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/red-dead-redemption-2',
      },
      {
        name: 'YouTube RDR2',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=red+dead+redemption+2+live',
      },
    ],
    'the-witcher-3': [
      {
        name: 'Twitch Witcher 3',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/the-witcher-3-wild-hunt',
      },
      {
        name: 'YouTube Witcher 3',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=witcher+3+live',
      },
    ],
    'elden-ring': [
      {
        name: 'Twitch Elden Ring',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/elden-ring',
      },
      {
        name: 'YouTube Elden Ring',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=elden+ring+live',
      },
    ],
    'god-of-war-ragnarok': [
      {
        name: 'Twitch God of War',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/god-of-war-ragnarok',
      },
      {
        name: 'YouTube God of War',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=god+of+war+ragnarok+live',
      },
    ],
    'horizon-forbidden-west': [
      {
        name: 'Twitch Horizon',
        platform: 'Twitch',
        url: 'https://www.twitch.tv/directory/category/horizon-forbidden-west',
      },
      {
        name: 'YouTube Horizon',
        platform: 'YouTube',
        url: 'https://www.youtube.com/results?search_query=horizon+forbidden+west+live',
      },
    ],
  };

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) return;

    this.gameSlug = slug;

    // récupérer le titre du jeu pour l’afficher
    this.gameService.getGameBySlug(slug).subscribe({
      next: (g) => (this.gameTitle = g.title),
      error: () => (this.gameTitle = slug),
    });

    this.lives = this.allLives[slug] ?? [];
  }
}
