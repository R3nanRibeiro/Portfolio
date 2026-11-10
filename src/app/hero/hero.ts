import { Component } from '@angular/core';
import { CodeWindow } from '../code-window/code-window';
import { LINKS, PERFIL } from '../data/portfolio';

@Component({
  selector: 'app-hero',
  imports: [CodeWindow],
  template: `
    <section class="hero" id="topo">
      <div class="texto">
        <div class="apresentacao">
          <img class="foto" [src]="perfil.foto" [alt]="perfil.fotoAlt" width="96" height="96" />
          <span class="saudacao">{{ perfil.saudacao }}</span>
        </div>
        <h1 class="nome">
          {{ perfil.nome }} <span class="grad-text">{{ perfil.sobrenome }}</span>
        </h1>
        <p class="lede">{{ perfil.resumo }}</p>
        <ul class="fatos">
          @for (fato of perfil.fatos; track fato) {
            <li class="chip">{{ fato }}</li>
          }
        </ul>
        <div class="acoes">
          <a class="btn primary" href="#experiencia">Ver trajetória</a>
          @for (link of links; track link.rotulo) {
            <a class="btn" [href]="link.url" target="_blank" rel="noopener">{{ link.rotulo }} ↗</a>
          }
        </div>
      </div>
      <app-code-window />
    </section>
  `,
  styles: `
    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      gap: 48px;
      align-items: center;
      padding-top: 40px;
      scroll-margin-top: 90px;
    }
    .texto {
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 22px;
    }
    .apresentacao {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .foto {
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      object-position: 50% 22%;
      border: 3px solid var(--bg);
      box-shadow:
        0 0 0 3px var(--blue),
        0 0 0 7px color-mix(in srgb, var(--violet) 25%, transparent);
    }
    .saudacao {
      font-family: var(--mono);
      font-size: 15px;
      color: var(--muted);
    }
    .nome {
      margin: 0;
      font-family: var(--display);
      font-weight: 800;
      font-size: clamp(48px, 8.2vw, 104px);
      line-height: 0.98;
      letter-spacing: -0.03em;
      text-wrap: balance;
    }
    .nome .grad-text {
      display: inline-block;
    }
    .lede {
      margin: 0;
      max-width: 30ch;
      font-size: clamp(20px, 2.2vw, 26px);
      line-height: 1.4;
      color: var(--muted);
      text-wrap: pretty;
    }
    .fatos {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .acoes {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 6px;
    }
    @media (max-width: 920px) {
      .hero {
        grid-template-columns: minmax(0, 1fr);
        gap: 40px;
        padding-top: 24px;
      }
    }
  `,
})
export class Hero {
  protected readonly perfil = PERFIL;
  protected readonly links = LINKS;
}
