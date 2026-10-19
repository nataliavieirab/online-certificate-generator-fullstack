import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideFileText, LucideAward } from '@lucide/angular';

@Component({
  imports: [LucideFileText, LucideAward, RouterLink],
  selector: 'app-auth-shell',
  templateUrl: './auth-shell.html',
})
export class AuthShell {}
