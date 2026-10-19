import { Component } from '@angular/core';
import { PaginaAutenticacao } from '../pagina-autenticacao';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  imports: [LucideArrowRight, PaginaAutenticacao, RouterLink],
  selector: 'app-login',
  templateUrl: './login.html',
})
export class Login {}
