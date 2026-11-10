import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-block',
  template: `
    <section [id]="ancora()" class="bloco">
      <header>
        <span class="kicker"><i aria-hidden="true"></i>{{ kicker() }}</span>
        <h2>{{ titulo() }}</h2>
      </header>
      <ng-content />
    </section>
  `,
  styles: `
    .bloco {
      scroll-margin-top: 90px;
    }
    header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 30px;
    }
    .kicker {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 13px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: var(--surface);
      font-family: var(--mono);
      font-size: 12.5px;
      color: var(--muted);
    }
    .kicker i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--grad);
    }
    h2 {
      margin: 0;
      font-family: var(--display);
      font-weight: 800;
      font-size: clamp(34px, 5.4vw, 56px);
      line-height: 1.02;
      letter-spacing: -0.025em;
      text-wrap: balance;
    }
  `,
})
export class SectionBlock {
  readonly titulo = input.required<string>();
  readonly kicker = input('');
  readonly ancora = input('');
}
