# iGreen Energy — site institucional

Site estático em **Astro 5** (SSG puro, sem blog, sem framework de UI no navegador).
Layout híbrido: navbar e heróis escuros, seções claras — inspirado no igreenclub.com.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Oferta principal (estilo Hormozi) + iGreen Club + simulador de economia |
| `/energia-por-assinatura` | Conexão Green + Conexão Livre |
| `/geracao-propria` | Conexão Solar + Conexão Placas |
| `/veiculos` | Conexão Mob + Conexão Seguros |
| `/conectividade` | Conexão Telecom |
| `/sobre-a-igreen` | História, marcos, números, parceiros e regulação da iGreen |
| `/seja-licenciado` | Oportunidade + simulador de ganhos + licenças + carreira |
| `/faq` | FAQ completo (linkado no menu e no rodapé) |

O conteúdo institucional da página "Sobre a iGreen" veio de `D:\Projetos\VillaRep\iGreen\igreen_linkero.md`
e das referências oficiais: marcos de 2021 a 2026, os 6 números, parceiros (Vibra, Comerc, TIM, Claro,
BP Seguros) e regulação (ANEEL, Lei 14.300/2022, ABGD).

O rodapé de todas as páginas mostra o licenciado: **Licenciado iGreen · Vinicius Libero Moreira · ID [placeholder]**.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/
npm run preview  # serve dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Menu, licenciado, CNPJ, contatos | `src/data/site.ts` |
| Links de conversão (cadastro, WhatsApp, seguros, mob) | `src/data/site.ts` → `export const links` |
| Selo "em breve" nos botões | removido — todos os CTAs são links reais |
| Simulador de economia (desconto) | `src/components/Simulator.astro` + `DISCOUNT` (padrão 0.2 = 20%) |
| Simulador de ganhos (licenciados) | `src/components/EarningsSimulator.astro` |
| Header, footer, `<head>` | `src/components/SiteHeader.astro`, `SiteFooter.astro`, `src/layouts/BaseLayout.astro` |
| Visual / design system | `src/styles/global.css` |
| Conteúdo das páginas | `src/pages/*.astro` |
| Imagens e logos | `public/assets/` |

## Links de conversão

Todos os URLs longos ficam apenas no `href` — nunca aparecem como texto visível (os botões dizem
"Quero economizar", "Falar com consultor", "WhatsApp" etc.). Edite em `src/data/site.ts`:

- `cadastroMin` / `cadastroMax` — autoconexão (`desc=min` / `desc=max`)
- `consultor`, `solar`, `placas` — WhatsApp do licenciado (ID 197608)
- `seguros` — BP Seguros; `mob` / `mobMigracao` — iGreen MOB (investimento e migração)
- `livre` — Mercado Livre de Energia; `telecom` — portabilidade de telefonia
- `licenca` — checkout da licença **Connect** (`expansao.igreenenergy.com.br`)

O botão **Falar com consultor** com ícone do WhatsApp fica no rodapé, logo abaixo da identificação
do licenciado. O link antigo do Linkero não é mais exibido.

Os vídeos incorporados usam `src/components/Video.astro` (passe o ID do YouTube e o título). Estão em
todas as páginas exceto FAQ; quando há dois vídeos na mesma seção, use `.video-grid` (2 colunas no
desktop, 1 no mobile). A imagem do app iGreen Club está em `public/assets/igreen-app-mockup.png`.
A lista de documentos PF/PJ fica em `/energia-por-assinatura#documentos`, linkada a partir da home.

## Atenção: `node_modules` é por sistema operacional

O projeto fica em `D:\Code\sandbox\_astro\igreen`, acessível pelo Windows (`D:\...`) e pelo WSL
(`/mnt/d/...`). O npm tem um bug antigo com dependências opcionais de plataforma
(https://github.com/npm/cli/issues/4828): um `node_modules` instalado no Windows não serve no WSL,
e vice-versa — o Rollup precisa do binário nativo do seu sistema.

Se trocar de ambiente, reinstale do zero **no ambiente que vai rodar**:

```bash
rm -rf node_modules package-lock.json   # apague pelo Windows se der "Input/output error" no WSL
npm install
npm run dev
```

No WSL o Node vem do nvm (`.bashrc` já coloca `v24.1.0` no PATH).

## Requisito de Node

Astro 5 (fixado em `package.json`). Astro 6/7 exigem Node >= 22.23.4.
