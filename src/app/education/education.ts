import { Component } from '@angular/core';
import { FORMACAO } from '../data/portfolio';
import { SectionBlock } from '../section-block/section-block';

@Component({
  selector: 'app-education',
  imports: [SectionBlock],
  template: `
    <app-section-block titulo="Onde estudei" kicker="Formação" ancora="formacao">
      <ul class="grade">
        @for (item of formacao; track item.titulo) {
          <li class="cartao">
            <span class="ano grad-text">{{ item.ano }}</span>
            <strong>{{ item.titulo }}</strong>
            <span class="instituicao">{{ item.instituicao }}</span>
          </li>
        }
      </ul>
    </app-section-block>
  `,
  styles: `
    .grade {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
    }
    .cartao {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
      padding: 20px 22px;
      border-radius: 20px;
      border: 1px solid var(--line);
      background: var(--surface);
      box-shadow: var(--shadow);
    }
    .ano {
      align-self: flex-start;
      font-family: var(--display);
      font-weight: 800;
      font-size: 38px;
      line-height: 1;
      letter-spacing: -0.02em;
    }
    strong {
      margin-top: 6px;
      font-size: 19px;
      font-weight: 700;
      line-height: 1.3;
    }
    .instituicao {
      color: var(--muted);
      font-size: 16px;
    }
  `,
})
export class Education {
  protected readonly formacao = FORMACAO;
}
