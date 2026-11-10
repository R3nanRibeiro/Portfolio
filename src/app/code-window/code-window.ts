import { Component } from '@angular/core';

interface Trecho {
  t: string;
  c: string;
}

// Classes: cm = comentário, kw = palavra-chave, ty = tipo, pr = propriedade, st = texto, pl = comum.
const LINHAS: Trecho[][] = [
  [{ t: '// Renan.cs', c: 'cm' }],
  [
    { t: 'var', c: 'kw' },
    { t: ' renan = ', c: 'pl' },
    { t: 'new', c: 'kw' },
    { t: ' Desenvolvedor', c: 'ty' },
  ],
  [{ t: '{', c: 'pl' }],
  [
    { t: '    Nome', c: 'pr' },
    { t: ' = ', c: 'pl' },
    { t: '"Renan Ribeiro"', c: 'st' },
    { t: ',', c: 'pl' },
  ],
  [
    { t: '    Cargo', c: 'pr' },
    { t: ' = ', c: 'pl' },
    { t: '"Estagiário de desenvolvimento"', c: 'st' },
    { t: ',', c: 'pl' },
  ],
  [
    { t: '    Empresa', c: 'pr' },
    { t: ' = ', c: 'pl' },
    { t: '"Forvia"', c: 'st' },
    { t: ',', c: 'pl' },
  ],
  [
    { t: '    Curso', c: 'pr' },
    { t: ' = ', c: 'pl' },
    { t: '"Engenharia de Software"', c: 'st' },
    { t: ',', c: 'pl' },
  ],
  [
    { t: '    Stack', c: 'pr' },
    { t: ' = ', c: 'pl' },
    { t: 'new', c: 'kw' },
    { t: '[] { ', c: 'pl' },
    { t: '"C#"', c: 'st' },
    { t: ', ', c: 'pl' },
    { t: '"Angular"', c: 'st' },
    { t: ' },', c: 'pl' },
  ],
  [
    { t: '    Aprendendo', c: 'pr' },
    { t: ' = ', c: 'pl' },
    { t: '"algo novo todo dia"', c: 'st' },
    { t: ',', c: 'pl' },
  ],
  [{ t: '};', c: 'pl' }],
];

@Component({
  selector: 'app-code-window',
  template: `
    <div class="janela">
      <div class="barra">
        <span class="ponto" aria-hidden="true"></span>
        <span class="ponto" aria-hidden="true"></span>
        <span class="ponto" aria-hidden="true"></span>
        <span class="arquivo">Renan.cs</span>
      </div>
      <div class="codigo" role="img" aria-label="Trecho de código C# com os dados de Renan Ribeiro">
        @for (linha of linhas; track $index; let i = $index; let ultima = $last) {
          <div class="linha">
            <span class="num" aria-hidden="true">{{ i + 1 }}</span>
            <span class="texto">
              @for (parte of linha; track $index) {
                <span [class]="parte.c">{{ parte.t }}</span>
              }
              @if (ultima) {
                <span class="cursor" aria-hidden="true"></span>
              }
            </span>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-width: 0;
    }
    .janela {
      border-radius: 20px;
      background: #0f1226;
      border: 1px solid rgb(255 255 255 / 0.08);
      box-shadow:
        0 30px 60px -24px rgb(40 30 130 / 0.6),
        0 0 0 6px rgb(124 90 255 / 0.1);
      overflow: hidden;
      animation: flutuar 7s ease-in-out infinite;
    }
    .barra {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 12px 16px;
      background: #171b38;
      border-bottom: 1px solid rgb(255 255 255 / 0.06);
    }
    .ponto {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #3a4072;
    }
    .ponto:nth-child(1) {
      background: #ff6b8b;
    }
    .ponto:nth-child(2) {
      background: #ffc857;
    }
    .ponto:nth-child(3) {
      background: #5be3a4;
    }
    .arquivo {
      margin-left: 10px;
      font-family: var(--mono);
      font-size: 12.5px;
      color: #9aa1cc;
    }
    .codigo {
      padding: 18px 8px 20px 0;
      font-family: var(--mono);
      font-size: 13.5px;
      line-height: 1.75;
      color: #e6e8ff;
      overflow-x: auto;
    }
    .linha {
      display: flex;
      white-space: pre;
    }
    .num {
      flex: none;
      width: 2.8em;
      padding-right: 1em;
      text-align: right;
      color: #4f5688;
      user-select: none;
    }
    .cm { color: #7a84b8; font-style: italic; }
    .kw { color: #b79cff; }
    .ty { color: #6ad4ff; }
    .pr { color: #8fb0ff; }
    .st { color: #86e3b1; }
    .pl { color: #e6e8ff; }
    .cursor {
      display: inline-block;
      width: 8px;
      height: 1.1em;
      margin-left: 4px;
      vertical-align: text-bottom;
      background: #b79cff;
      animation: piscar 1.1s steps(1) infinite;
    }
    @keyframes piscar {
      50% {
        opacity: 0;
      }
    }
    @keyframes flutuar {
      50% {
        transform: translateY(-8px);
      }
    }
  `,
})
export class CodeWindow {
  protected readonly linhas = LINHAS;
}
