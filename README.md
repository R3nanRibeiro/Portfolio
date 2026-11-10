# Portfólio de Renan Ribeiro

Site feito com Angular 22.

## Rodar no computador

Precisa do Node.js (versão 20 ou mais nova) instalado.

```
npm install
npm start
```

Abra http://localhost:4200. A página atualiza sozinha quando você salva um arquivo.

## Onde mudar as coisas

- Textos, experiência, formação, tecnologias e contato: `src/app/data/portfolio.ts`
- Foto: troque o arquivo `public/foto.jpg` (mantenha o mesmo nome)
- Cores: variáveis no começo de `src/styles.css`

## Gerar a versão para publicar

```
npm run build
```

Os arquivos prontos ficam em `dist/renan-portfolio/browser`.

## Subir para o GitHub

1. No github.com, clique em New repository, dê um nome (por exemplo `portfolio`) e crie vazio, sem README.
2. No terminal, dentro desta pasta:

```
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/R3nanRibeiro/portfolio.git
git push -u origin main
```

## Publicar com domínio

Opção mais simples: Vercel, Netlify ou Cloudflare Pages (todos têm plano gratuito).

1. Crie a conta usando o login do GitHub e importe o repositório.
2. Configurações do build:
   - Build command: `npm run build`
   - Output directory: `dist/renan-portfolio/browser`
3. Depois do primeiro deploy, o site já abre em um endereço gratuito do próprio serviço.
4. Para usar seu domínio, compre um (por exemplo no Registro.br para .com.br), abra a aba Domains do serviço, adicione o domínio e copie os registros DNS que ele mostrar no painel onde você comprou o domínio.
5. Aguarde a propagação (de alguns minutos a algumas horas). O HTTPS é ativado sozinho.
