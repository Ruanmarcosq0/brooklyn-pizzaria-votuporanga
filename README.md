# Brooklyn Pizzaria — Votuporanga-SP

Prévia funcional e responsiva em Next.js App Router, TypeScript, Tailwind CSS 4 e Motion. Conteúdo comercial centralizado em `lib/restaurant.ts`.

## Rodar localmente

Node.js 22 ou superior. Com npm instalado:

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Para produção: `npm run build` e `npm start`. Para verificar os tipos: `npm run typecheck`.

Também é possível usar pnpm: `pnpm install`, `pnpm dev`, `pnpm build`. O lockfile acompanha o projeto. Em ambientes Windows sem suporte a links simbólicos, use `pnpm install --store-dir .pnpm-store --config.node-linker=hoisted --config.package-import-method=copy --config.enable-global-virtual-store=false`.

## Experiência

- Hero com fotografia real, identidade escura e acentos vermelhos das publicações.
- Formatos confirmados: grande (8 pedaços), grande com 2 sabores (8 pedaços) e broto (4 pedaços).
- Todos os pedidos seguem ao cardápio oficial Chef Gourmet. Nenhum pedido é simulado.
- Galeria ampliável com fechamento por Escape, botão e clique no fundo.
- Menu móvel, CTA fixo no celular e links para Instagram e Google Maps.
- Metadados em português e dados estruturados Restaurant com endereço confirmado.
- Prévia marcada `noindex` para não competir com os canais oficiais antes da aprovação do cliente.
- Imagens locais servidas por Next Image. Motion apenas em pequenos deslocamentos de entrada; reduced motion respeitado.

## Decisões e fontes

Leia [fontes e pendências](docs/SOURCES.md) e [direção visual](docs/DESIGN.md). Não há sabores, avaliações, tradição familiar, fermentação, tipo de forno ou técnicas não confirmadas apresentados como fatos.

## Publicar na Vercel

Importe este repositório em um novo projeto, selecione Next.js e mantenha a raiz do projeto em `./`. Não são necessárias variáveis de ambiente. Os comandos padrão de instalação e build são suficientes.

Antes de lançar como site oficial: confirme os contatos, revise a autorização de uso de imagens, troque o favicon pelo logo em alta resolução e ajuste `robots` em `app/layout.tsx` para permitir indexação. Configure domínio/canonical e sitemap quando a URL final oficial for definida.
