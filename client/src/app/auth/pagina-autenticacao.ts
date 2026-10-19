import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideFileText, LucideAward } from '@lucide/angular';

@Component({
  imports: [LucideFileText, LucideAward, RouterLink],
  selector: 'app-pagina-autenticacao',
  templateUrl: './pagina-autenticacao.html',
})
export class PaginaAutenticacao {}
