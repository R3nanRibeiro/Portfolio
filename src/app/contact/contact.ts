import { Component } from '@angular/core';
import { LINKS } from '../data/portfolio';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contato" class="contato">
      <h2>Vamos conversar?</h2>
      <p class="chamada">
        Quer falar sobre software? Me chama por e-mail, telefone ou LinkedIn, ou vê o código no
        GitHub.
      </p>
      <div class="links">
        @for (link of links; track link.rotulo) {
          <a
            [href]="link.url"
            [attr.target]="link.url.startsWith('http') ? '_blank' : null"
            rel="noopener"
          >
            <span class="rotulo">{{ link.rotulo }}@if (link.url.startsWith('http')) { ↗ }</span>
            <span class="url">{{ link.texto }}</span>
          </a>
        }
      </div>
    </section>
  `,
  styles: `
    .contato {
      scroll-margin-top: 90px;
      padding: clamp(28px, 6vw, 64px);
      border-radius: 32px;
      background: var(--grad);
      color: var(--on-grad);
      box-shadow: 0 30px 60px -30px color-mix(in srgb, var(--violet) 70%, transparent);
    }
    h2 {
      margin: 0;
      font-family: var(--display);
      font-weight: 800;
      font-size: clamp(38px, 7vw, 76px);
      line-height: 1;
      letter-spacing: -0.03em;
    }
    .chamada {
      margin: 14px 0 28px;
      max-width: 38ch;
      font-size: clamp(18px, 2.2vw, 22px);
      line-height: 1.4;
      opacity: 0.92;
      text-wrap: pretty;
    }
    .links {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }
    a {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
      padding: 20px 22px;
      border-radius: 20px;
      background: var(--bg);
      color: var(--fg);
      text-decoration: none;
      transition: transform 0.18s ease;
    }
    a:hover,
    a:focus-visible {
      transform: translateY(-3px);
    }
    a:focus-visible {
      outline-color: var(--on-grad);
    }
    .rotulo {
      font-family: var(--display);
      font-weight: 800;
      font-size: 30px;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    .url {
      font-family: var(--mono);
      font-size: 13px;
      color: var(--muted);
      overflow-wrap: anywhere;
    }
    @media (max-width: 640px) {
      .links {
        grid-template-columns: minmax(0, 1fr);
      }
    }
  `,
})
export class Contact {
  protected readonly links = LINKS;
}
