# Site de Psicólogo - Otimizado para SEO

Site moderno e otimizado para SEO criado com Astro.js para um consultório de psicologia. Este projeto utiliza as melhores práticas de SEO e desempenho para garantir uma ótima visibilidade nos mecanismos de busca e uma experiência de usuário excepcional.

## 🚀 Tecnologias Utilizadas

- **[Astro](https://astro.build/)** - Framework web para sites estáticos de alta performance
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS para design responsivo
- **[astro-seo](https://github.com/jonasmerlin/astro-seo)** - Componente para otimização de SEO
- **[Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Geração automática de sitemap.xml
- **[Astro-Compress](https://github.com/astro-community/astro-compress)** - Compressão de recursos estáticos

## 🌟 Recursos e Características

- **Design Responsivo** - Layout que se adapta perfeitamente a todos os dispositivos
- **Otimização SEO**
  - Meta tags dinâmicas para cada página
  - Dados estruturados (JSON-LD) para negócio local
  - Sitemap.xml e robots.txt
  - URLs amigáveis para SEO
  - Conteúdo otimizado para palavras-chave locais
- **Performance Otimizada**
  - Carregamento rápido de páginas
  - CSS crítico inline
  - Lazy loading de imagens
  - Minificação de recursos
- **Acessibilidade (WCAG)**
  - Atributos ARIA
  - Alt text em imagens
  - Contraste adequado de cores
- **Formulário de Contato**
  - Integração com Formspree
  - Validação de campos
  - Mensagens de confirmação

## 📄 Páginas Principais

- **Home** - Introdução, serviços principais e CTA
- **Serviços** - Lista detalhada de serviços psicológicos
- **Sobre** - Credenciais e experiência do psicólogo
- **Contato** - Formulário e informações de contato
- **Blog** - Artigos sobre saúde mental (rotas dinâmicas)

## 🔧 Instruções de Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/psychologist-website.git

# Entre no diretório
cd psychologist-website

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Para build de produção
npm run build
```

## 🚀 Implantação

Este site pode ser facilmente implantado em plataformas como:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)

Para implantar, configure a plataforma para usar os seguintes comandos:

- **Build command:** `npm run build`
- **Output directory:** `dist`

## 📝 Personalização

Para personalizar o site para um psicólogo específico:

1. Substitua os placeholders "[Nome]" e "[Cidade]" pelo nome real do psicólogo e a cidade
2. Atualize as imagens na pasta `public/images/`
3. Modifique as informações de contato e endereço em `src/components/Footer.astro`
4. Ajuste as cores da marca em `tailwind.config.js` se necessário

## 📊 SEO e Marketing

Para maximizar os resultados de SEO:

1. Verifique o site no Google Search Console
2. Configure o Google Analytics ou Plausible Analytics
3. Crie uma conta no Google My Business
4. Solicite avaliações de clientes
5. Construa backlinks de sites locais relevantes

## 📱 Redes Sociais

Adicione links para as redes sociais do psicólogo no componente de rodapé e certifique-se de manter essas redes ativas com conteúdo relevante sobre saúde mental e psicologia.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ para profissionais de psicologia que desejam uma presença online eficaz e otimizada para SEO.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
