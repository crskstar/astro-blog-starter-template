# AgroDrone Solutions

Site institucional responsivo, moderno e bilíngue para a AgroDrone Solutions, empresa especializada em pulverização agrícola por drones.

## Recursos principais

- Landing page institucional premium e responsiva
- Alternância visual entre Português e Inglês
- Traduções centralizadas em arquivos JSON
- Preferência de idioma salva no localStorage
- Estrutura preparada para build estático e deploy no Cloudflare Pages
- Seções para serviços, benefícios, tecnologia, sobre, Instagram e contato

## Instalação

```bash
npm install
```

## Desenvolvimento local

```bash
npm run dev
```

O site ficará disponível em http://localhost:4321.

## Build

```bash
npm run build
```

## Deploy no Cloudflare Pages

1. Conecte o repositório ao Cloudflare Pages.
2. Defina o framework como Astro.
3. Use o comando de build: `npm run build`.
4. Publique a pasta de saída: `dist`.
5. Para deploy com Wrangler, use:

```bash
npm run deploy
```

## Estrutura destacada

- src/components/sections: seções reutilizáveis da home
- src/i18n: arquivos de tradução PT/EN
- public: imagens e ativos estáticos
