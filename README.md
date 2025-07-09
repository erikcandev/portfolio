# Portfolio - Desenvolvedor Front-end

Um portfólio moderno e responsivo inspirado no design do [Rhuan Bello](https://www.rhuanbello.com/), construído com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Animações Fluidas**: Transições suaves com Framer Motion
- **Performance Otimizada**: Construído com Next.js para máxima performance
- **SEO Friendly**: Meta tags e estrutura otimizada para SEO
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade
- **TypeScript**: Código tipado para maior segurança

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **Inter Font** - Tipografia otimizada

## 📁 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <seu-repositorio>
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 📝 Personalização

### Informações Pessoais
Edite os seguintes arquivos para personalizar suas informações:

- `components/Hero.tsx` - Título e descrição principal
- `components/About.tsx` - Informações sobre você
- `components/Skills.tsx` - Suas habilidades técnicas
- `components/Projects.tsx` - Seus projetos
- `components/Contact.tsx` - Informações de contato

### Cores e Tema
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... outras variações
    900: '#0c4a6e',
  }
}
```

### Projetos
Adicione seus projetos editando o array `projects` no arquivo `components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Nome do Projeto',
    description: 'Descrição do projeto...',
    image: '🛒', // Emoji ou URL da imagem
    technologies: ['React', 'Next.js', 'TypeScript'],
    liveUrl: 'https://projeto.com',
    repoUrl: 'https://github.com/usuario/projeto',
    linkedinUrl: 'https://linkedin.com/posts/...',
    featured: true // Projetos em destaque
  }
]
```

## 🎨 Seções do Portfólio

### 1. Header
- Navegação responsiva
- Botões de ação (Download CV, Contato)
- Indicador de seção ativa

### 2. Hero
- Mensagem de boas-vindas
- Avatar/ilustração
- Call-to-action buttons

### 3. Sobre
- Informações pessoais
- Estatísticas (experiência, projetos)
- Ilustração temática

### 4. Habilidades
- Categorias de tecnologias
- Barras de progresso animadas
- Competências adicionais

### 5. Projetos
- Projetos em destaque
- Grid de todos os projetos
- Links para demo, código e LinkedIn

### 6. Contatos
- Informações de contato
- Formulário de contato
- Links para redes sociais

### 7. Footer
- Links de redes sociais
- Créditos e informações técnicas

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta a:
- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Layout adaptado para telas médias
- **Mobile**: Layout otimizado para dispositivos móveis

## ⚡ Performance

- **Lazy Loading**: Componentes carregados sob demanda
- **Otimização de Imagens**: Next.js Image component
- **Code Splitting**: Separação automática de código
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar conforme necessário.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no portfólio ou diretamente via email.

---

**Inspirado no design do [Rhuan Bello](https://www.rhuanbello.com/)** 