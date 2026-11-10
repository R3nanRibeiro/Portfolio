import { Component } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-nav',
  imports: [ThemeToggle],
  template: `
    <header class="nav">
      <a class="marca" href="#topo" aria-label="Voltar ao topo">
        <span class="sigla">RR</span>
        <span class="nome">Renan Ribeiro</span>
      </a>
      <nav class="links" aria-label="Seções">
        @for (item of itens; track item.id) {
          <a [href]="'#' + item.id">{{ item.nome }}</a>
        }
      </nav>
      <app-theme-toggle />
    </header>
  `,
  styles: `
    .nav {
      position: sticky;
      top: env(safe-area-inset-top, 0px);
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 8px 10px 8px 12px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: color-mix(in srgb, var(--surface) 80%, transparent);
      -webkit-backdrop-filter: blur(14px);
      backdrop-filter: blur(14px);
      box-shadow: var(--shadow);
    }
    .marca {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      font-family: var(--display);
      font-weight: 700;
      font-size: 18px;
    }
    .sigla {
      display: grid;
      place-items: center;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--grad);
      color: var(--on-grad);
      font-size: 15px;
      letter-spacing: 0.02em;
    }
    .links {
      display: flex;
      gap: 4px;
    }
    .links a {
      padding: 7px 13px;
      border-radius: 999px;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      color: var(--muted);
      transition:
        background-color 0.15s ease,
        color 0.15s ease;
    }
    .links a:hover {
      background: var(--surface-2);
      color: var(--fg);
    }
    @media (max-width: 860px) {
      .links {
        display: none;
      }
    }
    @media (max-width: 380px) {
      .nome {
        display: none;
      }
    }
  `,
})
export class Nav {
  protected readonly itens = [
    { id: 'sobre', nome: 'Sobre' },
    { id: 'tecnologias', nome: 'Tecnologias' },
    { id: 'experiencia', nome: 'Experiência' },
    { id: 'formacao', nome: 'Formação' },
    { id: 'contato', nome: 'Contato' },
  ];
}
