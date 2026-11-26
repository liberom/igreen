export interface NavLink {
  href: string;
  label: string;
}

/** Base URL for GitHub Pages deployment (set via astro.config.mjs `base: '/igreen'`) */
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const navLinks: NavLink[] = [
  { href: `${base}`, label: 'Início' },
  { href: `${base}sobre-a-igreen`, label: 'Sobre a iGreen' },
  { href: `${base}energia-por-assinatura`, label: 'Energia por Assinatura' },
  { href: `${base}geracao-propria`, label: 'Geração Própria' },
  { href: `${base}veiculos`, label: 'Veículos' },
  { href: `${base}conectividade`, label: 'Conectividade' },
  { href: `${base}faq`, label: 'FAQ' },
];

export const licensee = {
  role: 'Licenciado iGreen',
  name: 'Vinicius Libero Moreira',
  id: '197608',
};

export const company = {
  cnpj: 'CNPJ: 44.159.238/0001-30',
  legalName: 'iGreen Energia Comércio e Serviços LTDA',
};

export const contact = {
  link: 'https://linke.ro/igreen',
  whatsapp: 'https://wa.me/553192012846?text=Vim%20pelo%20site.%20Quero%20saber%20mais%20sobre%20a%20oferta%20da%20iGreen.',
};

/** Links de conversão. As URLs longas ficam só no href — nunca como texto visível. */
export const links = {
  cadastroMin: 'https://green.igreenenergy.com.br/autoconexao/?id=197608&desc=min',
  cadastroMax: 'https://green.igreenenergy.com.br/autoconexao/?id=197608&desc=max',
  consultor: 'https://wa.me/553192012846?text=Vim%20pelo%20site.%20Quero%20saber%20mais%20sobre%20a%20oferta%20da%20iGreen.',
  solar: 'https://wa.me/553192012846?text=Vim%20pelo%20site.%20Estou%20interessado%20na%20usina%20sem%20investimento%20da%20iGreen%20(Conex%C3%A3o%20Solar).',
  placas: 'https://wa.me/553192012846?text=Vim%20pelo%20site.%20Gostaria%20de%20or%C3%A7ar%20um%20projeto%20de%20usina%20solar%20(Conex%C3%A3o%20Placas).',
  seguros: 'https://seguros.igreenenergy.com.br?t=fL9tC7D_Y5yT1qjHk1etJUhaChpT4JFl3mSgBFs7dt9tx5wdg-4',
  mob: 'https://igreenmob.com.br/?ref=84ec7d88%2D22c3%2D4a9b%2Dbb2d%2D046c0ab3c964',
  mobMigracao: 'https://igreenmob.com.br/migracao?ref=84ec7d88%2D22c3%2D4a9b%2Dbb2d%2D046c0ab3c964',
  livre: 'https://livre.igreenenergy.com.br/?ref=84ec7d88-22c3-4a9b-bb2d-046c0ab3c964',
  telecom: 'https://telecom.igreenenergy.com.br/?id=84ec7d88-22c3-4a9b-bb2d-046c0ab3c964&autoConnection=true&chip=esim',
  licenca: 'https://expansao.igreenenergy.com.br/?id=197608&checkout=true&tipolicenca=CONNECT',
};
