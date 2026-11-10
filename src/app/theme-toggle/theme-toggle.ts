import { Component, effect, signal } from '@angular/core';

type Tema = 'light' | 'dark';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button
      type="button"
      class="botao"
      (click)="alternar()"
      [attr.aria-label]="tema() === 'dark' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'"
      [title]="tema() === 'dark' ? 'Tema claro' : 'Tema escuro'"
    >
      @if (tema() === 'dark') {
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      } @else {
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      }
    </button>
  `,
  styles: `
    .botao {
      display: grid;
      place-items: center;
      width: 38px;
      height: 38px;
      padding: 0;
      border-radius: 50%;
      border: 1px solid var(--line);
      background: var(--surface-2);
      color: var(--fg);
      cursor: pointer;
      transition: border-color 0.18s ease;
    }
    .botao:hover {
      border-color: var(--blue);
    }
  `,
})
export class ThemeToggle {
  protected readonly tema = signal<Tema>(this.inicial());

  constructor() {
    effect(() => {
      const t = this.tema();
      document.documentElement.setAttribute('data-theme', t);
      try {
        localStorage.setItem('tema', t);
      } catch {
        // Sem armazenamento: o tema vale só nesta visita.
      }
    });
  }

  protected alternar(): void {
    this.tema.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private inicial(): Tema {
    try {
      const salvo = localStorage.getItem('tema');
      if (salvo === 'light' || salvo === 'dark') return salvo;
    } catch {
      // Ignora e segue o tema do sistema.
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
