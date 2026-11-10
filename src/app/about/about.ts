import { Component } from '@angular/core';
import { DESTAQUES, PERFIL } from '../data/portfolio';
import { SectionBlock } from '../section-block/section-block';

@Component({
  selector: 'app-about',
  imports: [SectionBlock],
  template: `
    <app-section-block titulo="Da fábrica ao código" kicker="Sobre" ancora="sobre">
      <div class="conteudo">
        <article class="historia">
          <p class="manchete"><span class="grad-text">{{ perfil.manchete }}</span></p>
          @for (paragrafo of perfil.sobre; track paragrafo) {
            <p class="prose">{{ paragrafo }}</p>
          }
        </article>
        <div class="destaques">
          @for (d of destaques; track d.rotulo) {
            <div class="cartao">
              <span class="mono">{{ d.rotulo }}</span>
              <strong>{{ d.valor }}</strong>
              <span class="detalhe">{{ d.detalhe }}</span>
            </div>
          }
        </div>
      </div>
    </app-section-block>
  `,
  styles: `
    .conteudo {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
      gap: 24px;
      align-items: start;
    }
    .historia {
      min-width: 0;
      padding: 32px;
      border-radius: 24px;
      border: 1px solid var(--line);
      background: var(--surface);
      box-shadow: var(--shadow);
    }
    .manchete {
      margin: 0 0 20px;
      font-family: var(--display);
      font-weight: 800;
      font-size: clamp(28px, 3.6vw, 40px);
      line-height: 1.08;
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .destaques {
      display: grid;
      gap: 16px;
      min-width: 0;
    }
    .cartao {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 20px 22px;
      border-radius: 20px;
      border: 1px solid var(--line);
      background: var(--surface);
      box-shadow: var(--shadow);
    }
    strong {
      font-family: var(--display);
      font-weight: 700;
      font-size: 26px;
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .detalhe {
      color: var(--muted);
      font-size: 16px;
    }
    @media (max-width: 820px) {
      .conteudo {
        grid-template-columns: minmax(0, 1fr);
      }
      .historia {
        padding: 24px;
      }
    }
  `,
})
export class About {
  protected readonly perfil = PERFIL;
  protected readonly destaques = DESTAQUES;
}
