// Settings specific to this repository (titles, files, URLs). The rest of site/ is generic
// and only reads from here.
//
// To add an English version: create EIR-EN.markdown and add an `en` entry below
// (see EIR-FaseProjeto-ObraPrivada/site/build.mjs for the English labels).

export const REPO_URL = 'https://github.com/buildingSMART-Portugal/EIR-FaseProjeto-ObraPublica';
export const SITE_URL = 'https://buildingsmart-portugal.github.io/EIR-FaseProjeto-ObraPublica/';

export const LANGS = {
  pt: {
    source: 'EIR.markdown',
    history: ['EIR.markdown'], // file names used in older versions, newest first
    paths: ['EIR.markdown', 'imagens', 'IDS'], // what counts as a change to this language's document
    dir: '',
    changes: 'alteracoes/',
    htmlLang: 'pt-PT',
    locale: 'pt-PT',
    label: 'PT',
    name: 'Português',
    pdf: 'EIR-PT.pdf',
    t: {
      org: 'buildingSMART Portugal',
      kicker: 'Requisitos de Troca de Informação',
      title: 'EIR para a fase de projeto de uma obra pública',
      short: 'EIR · Fase de projeto · Obra pública',
      lead: 'Exemplo de requisitos de troca de informação para o projeto de execução de um edifício habitacional público no Bairro Casal de Malta, Marinha Grande, em conformidade com a EN ISO 19650-2.',
      version: 'Versão',
      page: 'Página',
      of: 'de',
      date: 'Data',
      license: 'Licença',
      download: 'Descarregar PDF',
      contents: 'Índice',
      skip: 'Saltar para o conteúdo',
      language: 'Idioma',
      github: 'Ver no GitHub',
      authors: 'Autores',
      cite: 'Como citar',
      copy: 'Copiar',
      copied: 'Copiado',
      colophon: 'Ficha técnica',
      webVersion: 'Versão web',
      source: 'Código-fonte',
      sheet: 'Google Sheets',
      folder: 'Google Drive',
      openFull: 'Abrir imagem em tamanho real',
      top: 'Voltar ao topo',
      footer: 'Documento publicado pela buildingSMART Portugal sob licença MIT.',
      history: 'Histórico de versões',
      historyLead: 'Compare duas versões do documento. As alterações são calculadas automaticamente a partir do histórico do repositório.',
      backToDoc: 'Voltar ao documento',
      from: 'De',
      to: 'Para',
      versions: 'Versões',
      draft: 'versão de trabalho',
      draftNote: 'Alterações posteriores à versão',
      latest: 'atual',
      added: 'Adicionado',
      removed: 'Removido',
      changed: 'Alterado',
      noChanges: 'Sem alterações de conteúdo entre estas versões.',
      counts: { sec: ['secção alterada', 'secções alteradas'], mod: ['alterado', 'alterados'], add: ['adicionado', 'adicionados'], del: ['removido', 'removidos'] },
      start: 'Início do documento',
      viewSection: 'ver secção',
      rawDiff: 'Diferenças no GitHub',
      compareWith: 'Alterações face à',
      loading: 'A comparar…',
      revisions: 'Histórico de revisões',
      commit: 'Commit',
      notes: 'Notas da versão',
      firstVersion: 'Primeira versão publicada neste repositório.',
      onlyOne: 'Ainda só existe uma versão publicada. A comparação entre versões fica disponível a partir da próxima versão.',
    },
  },
};
