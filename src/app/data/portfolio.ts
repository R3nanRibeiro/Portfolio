// Todo o conteúdo do portfólio fica aqui. Para atualizar o site, edite só este arquivo.

export interface Destaque {
  rotulo: string;
  valor: string;
  detalhe: string;
}

export interface Tecnologia {
  nome: string;
  uso: string;
  situacao: string;
  ativo: boolean;
}

export interface Etapa {
  quando: string;
  titulo: string;
  empresa: string;
  descricao: string;
  atual: boolean;
}

export interface Formacao {
  ano: string;
  titulo: string;
  instituicao: string;
}

export interface Link {
  rotulo: string;
  texto: string;
  url: string;
}

export const PERFIL = {
  nome: 'Renan',
  sobrenome: 'Ribeiro',
  cidade: 'São José dos Pinhais · PR',
  foto: 'foto.jpg',
  fotoAlt: 'Retrato de Renan Ribeiro, de óculos e camiseta branca, ao ar livre',
  saudacao: 'Olá, eu sou',
  resumo:
    'Estudante de Engenharia de Software e estagiário de desenvolvimento. Escrevo C# e Angular.',
  fatos: ['Estagiário na Forvia', 'Uni SENAI · 6º período', 'C# · Angular'],
  manchete: 'Comecei na indústria e na logística. Hoje escrevo software.',
  sobre: [
    'Meu começo no trabalho foi no atendimento e, depois, na logística industrial: controle de estoque, separação de pedidos e montagem de kits de peças.',
    'Hoje curso Engenharia de Software no Uni SENAI, no 6º período, e trabalho como estagiário de desenvolvimento na Forvia, com C# e Angular. Gosto de programar e de aprender algo novo todos os dias.',
  ],
};

export const DESTAQUES: Destaque[] = [
  { rotulo: 'Formação', valor: 'Engenharia de Software', detalhe: 'Uni SENAI · 6º período' },
  { rotulo: 'Estágio', valor: 'Desenvolvimento', detalhe: 'Forvia' },
  { rotulo: 'Stack', valor: 'C# e Angular', detalhe: 'No dia a dia do estágio' },
];

export const TECNOLOGIAS: Tecnologia[] = [
  { nome: 'C#', uso: 'Back-end no estágio', situacao: 'Em produção', ativo: true },
  { nome: 'Angular', uso: 'Front-end no estágio', situacao: 'Em produção', ativo: true },
  { nome: 'TypeScript', uso: 'Linguagem do Angular', situacao: 'Em produção', ativo: true },
  { nome: 'HTML', uso: 'Estrutura das páginas', situacao: 'Base', ativo: false },
  { nome: 'CSS', uso: 'Estilo das páginas', situacao: 'Base', ativo: false },
  { nome: 'Python', uso: 'Projetos pessoais', situacao: 'Pessoal', ativo: false },
];

// Em ordem cronológica. O site mostra do mais recente para o mais antigo.
export const TRAJETORIA: Etapa[] = [
  {
    quando: '04/2021 a 09/2021',
    titulo: 'Estagiário em Call Center',
    empresa: 'Azimuth Contact Center',
    descricao: 'Atendimento a clientes, registro de informações e apoio na resolução de problemas.',
    atual: false,
  },
  {
    quando: '11/2021 a 02/2022',
    titulo: 'Menor Aprendiz',
    empresa: 'Magius Metalúrgica Industrial',
    descricao: 'Apoio às rotinas administrativas e ao atendimento.',
    atual: false,
  },
  {
    quando: '02/2022 a 12/2024',
    titulo: 'Assistente de Logística I',
    empresa: 'Magius Metalúrgica Industrial',
    descricao:
      'Controle de estoque, conferência e armazenamento de mercadorias, separação de pedidos e organização de documentos.',
    atual: false,
  },
  {
    quando: 'A partir de 04/2025',
    titulo: 'Operador Jr',
    empresa: 'Fresnomaq Indústria de Máquinas S/A (WAP)',
    descricao:
      'Separação e organização de materiais para kits de peças de venda e garantia, com apoio ao pós-venda.',
    atual: false,
  },
  {
    quando: 'Em andamento',
    titulo: 'Estagiário de desenvolvimento',
    empresa: 'Forvia',
    descricao: 'Desenvolvimento de software com C# e Angular.',
    atual: true,
  },
];

export const FORMACAO: Formacao[] = [
  { ano: '2027', titulo: 'Bacharelado em Engenharia de Software', instituicao: 'Uni SENAI, PR' },
  { ano: '2023', titulo: 'Ensino médio', instituicao: 'Colégio Estadual Afonso Pena' },
  {
    ano: '2022',
    titulo: 'Operador de empilhadeira',
    instituicao: 'Centro de Educação Profissional Anísio Pedrussi',
  },
  { ano: '2021', titulo: 'Mecânica Industrial', instituicao: 'Cebrac Cursos Profissionalizantes' },
  {
    ano: '2019',
    titulo: 'Pacote Office',
    instituicao: 'Eic Jam, Escola de Informática e Cidadania',
  },
];

export const LINKS: Link[] = [
  {
    rotulo: 'E-mail',
    texto: 'renanribeirodasilva92@gmail.com',
    url: 'mailto:renanribeirodasilva92@gmail.com',
  },
  {
    rotulo: 'Telefone',
    texto: '(41) 98793-2737',
    url: 'tel:+5541987932737',
  },
  {
    rotulo: 'LinkedIn',
    texto: 'linkedin.com/in/renan-ribeiro-605573215',
    url: 'https://www.linkedin.com/in/renan-ribeiro-605573215/',
  },
  {
    rotulo: 'GitHub',
    texto: 'github.com/R3nanRibeiro',
    url: 'https://github.com/R3nanRibeiro',
  },
];
