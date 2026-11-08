# buildingSMART Portugal

## EIR Obra Pública

[![Versão / Version](https://img.shields.io/github/v/tag/buildingSMART-Portugal/EIR-FaseProjeto-ObraPublica?sort=semver&label=vers%C3%A3o%20%2F%20version)](https://buildingsmart-portugal.github.io/EIR-FaseProjeto-ObraPublica/alteracoes/)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14576465.svg)](https://doi.org/10.5281/zenodo.14576465)
[![Publish website and PDFs](https://github.com/buildingSMART-Portugal/EIR-FaseProjeto-ObraPublica/actions/workflows/publish.yml/badge.svg)](https://github.com/buildingSMART-Portugal/EIR-FaseProjeto-ObraPublica/actions/workflows/publish.yml)

| | |
| --- | --- |
| Website | [Ver EIR online](https://buildingsmart-portugal.github.io/EIR-FaseProjeto-ObraPublica/) |
| PDF | [Descarregar PDF](https://buildingsmart-portugal.github.io/EIR-FaseProjeto-ObraPublica/pdf/EIR-PT.pdf) |
| Markdown | [EIR.markdown](EIR.markdown) |
| Histórico | [Alterações entre versões](https://buildingsmart-portugal.github.io/EIR-FaseProjeto-ObraPublica/alteracoes/) |

As tabelas de Nível de Informação Necessário continuam no Google Drive (ligações no próprio documento).

## Autores

* [André Espinho](mailto:ae.arquitectura@gmail.com)
* André Mendes
* [Andressa Oliveira](mailto:soliveira.andressa@gmail.com)
* [Carla Pires](mailto:cpires@gaiurb.pt)
* [Célia Penedo](mailto:celia.r.penedo@emel.pt)
* Gonçalo Diniz Vieira
* [Guido Alvarenga](mailto:guidoalvarenga97@gmail.com)
* Joana Pacheco
* [José Granja](mailto:granja@civil.uminho.pt)
* [Miguel Azenha](mailto:miguel.azenha@gmail.com)
* Pedro Martins
* Rafael Sobrinho Correia
* Ricardo Almeida
* [Ricardo Mateus](mailto:p5768@ulusofona.pt)
* Tiago Andrade Gomes


## Citation

Granja, J., Espinho, A., Mendes, A., Oliveira, A., Pires, C., Penedo, C., Vieira, G. D., Alvarenga, G., Pacheco, J., Martins, P., Correia, R. S., Almeida, R., Mateus, R., Gomes, T. A., & Azenha, M. (2024). EIR para a fase de projeto de uma obra pública. BuildingSMART Portugal. https://doi.org/10.5281/zenodo.14576465

## Website e PDF

`EIR.markdown` é a única fonte do conteúdo. A cada *push* para `main`, o GitHub Actions ([publish.yml](.github/workflows/publish.yml)) gera o website e o PDF e publica-os no GitHub Pages. Basta editar o ficheiro Markdown.

Para pré-visualizar localmente (Node.js 20+):

```bash
cd site
npm install
npx playwright install chromium
npm run all     # website + PDF em ../_site
npm run serve   # http://localhost:4173
```

## Versões

A versão vem do Git, não do texto: ninguém precisa de editar números de versão no ficheiro Markdown.

* **Publicar uma versão:** GitHub → *Releases* → *Draft a new release* → tag `v1.1.0` (target `main`) → notas curtas → *Publish release*. O website passa a mostrar **v1.1.0**, as notas aparecem no histórico de versões e o PDF é anexado à release. Com a integração Zenodo–GitHub ativa, o Zenodo arquiva também a release com DOI próprio.
* **Entre versões:** cada commit em `main` é publicado de imediato e identificado automaticamente, p. ex. **1.0.0+2 · versão de trabalho** (2 commits alteraram o texto desde a v1.0.0), com a data e o commit da última alteração.
* **Numeração:** `v1.0.1` para correções e pequenos esclarecimentos, `v1.1.0` para requisitos novos ou alterados, `v2.0.0` para um documento reestruturado.
* **Ver alterações:** a página de histórico compara quaisquer duas versões, secção a secção, com destaque ao nível da palavra.

Notas para quem edita:

* A lista `# Índice` escrita à mão é substituída pela navegação gerada.
* Títulos, textos da capa e ficheiros estão em `site/config.mjs`; os autores vêm de `CITATION.cff` e a citação deste README.
* A capa, o cabeçalho e o rodapé do PDF seguem o modelo Word da buildingSMART Portugal; o logótipo, os ícones e o fundo da capa estão em `site/src/brand/`.
