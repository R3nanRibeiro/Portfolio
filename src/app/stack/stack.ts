import { Component } from '@angular/core';
import { TECNOLOGIAS } from '../data/portfolio';
import { SectionBlock } from '../section-block/section-block';

@Component({
  selector: 'app-stack',
  imports: [SectionBlock],
  template: `
    <app-section-block titulo="O que eu uso" kicker="Tecnologias" ancora="tecnologias">
      <ul class="grade">
        @for (tec of tecnologias; track tec.nome) {
          <li class="cartao" [class.ativo]="tec.ativo">
            <span class="chip" [class.on]="tec.ativo">{{ tec.situacao }}</span>
            <strong>{{ tec.nome }}</strong>
            <span class="uso">{{ tec.uso }}</span>
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
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 16px;
    }
    .cartao {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      min-width: 0;
      padding: 22px;
      border-radius: 20px;
      border: 1px solid var(--line);
      background: var(--surface);
      box-shadow: var(--shadow);
      transition: transform 0.2s ease;
    }
    .cartao:hover {
      transform: translateY(-4px);
    }
    .ativo {
      border: 1px solid transparent;
      background:
        linear-gradient(var(--surface), var(--surface)) padding-box,
        var(--grad) border-box;
    }
    strong {
      font-family: var(--display);
      font-weight: 800;
      font-size: 40px;
      line-height: 1;
      letter-spacing: -0.02em;
      overflow-wrap: anywhere;
    }
    .uso {
      color: var(--muted);
      font-size: 16px;
    }
  `,
})
export class Stack {
  protected readonly tecnologias = TECNOLOGIAS;
}
