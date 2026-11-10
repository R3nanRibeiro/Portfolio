import { Component } from '@angular/core';
import { TRAJETORIA } from '../data/portfolio';
import { SectionBlock } from '../section-block/section-block';

@Component({
  selector: 'app-trajectory',
  imports: [SectionBlock],
  template: `
    <app-section-block titulo="Minha trajetória" kicker="Experiência" ancora="experiencia">
      <ol class="linha-tempo">
        @for (etapa of etapas; track etapa.titulo + etapa.quando) {
          <li [class.atual]="etapa.atual">
            <span class="marcador" aria-hidden="true"></span>
            <article class="cartao">
              <div class="topo">
                <span class="mono">{{ etapa.quando }}</span>
                @if (etapa.atual) {
                  <span class="chip on">Atual</span>
                }
              </div>
              <h3>{{ etapa.titulo }}</h3>
              <p class="empresa">{{ etapa.empresa }}</p>
              <p class="descricao">{{ etapa.descricao }}</p>
            </article>
          </li>
        }
      </ol>
    </app-section-block>
  `,
  styles: `
    .linha-tempo {
      list-style: none;
      margin: 0;
      padding: 0 0 0 34px;
      display: flex;
      flex-direction: column;
      gap: 18px;
      position: relative;
    }
    .linha-tempo::before {
      content: '';
      position: absolute;
      left: 9px;
      top: 10px;
      bottom: 10px;
      width: 3px;
      border-radius: 3px;
      background: linear-gradient(var(--blue), var(--violet), transparent);
    }
    li {
      position: relative;
      min-width: 0;
    }
    .marcador {
      position: absolute;
      left: -34px;
      top: 26px;
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background: var(--bg);
      border: 4px solid var(--violet);
    }
    .atual .marcador {
      border-color: transparent;
      background: var(--grad);
      box-shadow: 0 0 0 6px color-mix(in srgb, var(--violet) 25%, transparent);
    }
    .cartao {
      padding: 22px 24px;
      border-radius: 20px;
      border: 1px solid var(--line);
      background: var(--surface);
      box-shadow: var(--shadow);
    }
    .atual .cartao {
      border: 1px solid transparent;
      background:
        linear-gradient(var(--surface), var(--surface)) padding-box,
        var(--grad) border-box;
    }
    .topo {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    h3 {
      margin: 6px 0 0;
      font-family: var(--display);
      font-weight: 700;
      font-size: clamp(22px, 3vw, 28px);
      line-height: 1.15;
      letter-spacing: -0.015em;
    }
    .empresa {
      margin: 2px 0 0;
      font-weight: 600;
    }
    .descricao {
      margin: 10px 0 0;
      max-width: 62ch;
      color: var(--muted);
      font-size: 16.5px;
      text-wrap: pretty;
    }
  `,
})
export class Trajectory {
  protected readonly etapas = [...TRAJETORIA].reverse();
}
