export type Lang = 'pt' | 'en'

export interface Translations {
  nav: {
    about: string
    services: string
    projects: string
    contact: string
    quote: string
  }
  brand: {
    name: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    stats: { value: string; label: string }[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    values: { title: string; text: string }[]
  }
  services: {
    eyebrow: string
    title: string
    lead: string
    items: { title: string; text: string }[]
  }
  projects: {
    eyebrow: string
    title: string
    items: { title: string; category: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    info: { label: string; value: string; href?: string }[]
    form: {
      name: string
      email: string
      phone: string
      message: string
      submit: string
      successTitle: string
      successText: string
    }
  }
  footer: {
    rights: string
    license: string
  }
  lang: {
    switchTo: string
  }
}

const translations: Record<Lang, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      services: 'Serviços',
      projects: 'Projetos',
      contact: 'Contacto',
      quote: 'Pedir Orçamento',
    },
    brand: {
      name: 'Primaverimpulsiva',
    },
    hero: {
      eyebrow: 'Empreiteiro Geral · Fundada em 1998',
      title: 'A Construir Bases Sólidas para o Seu Futuro',
      lead: 'A Primaverimpulsiva entrega projetos residenciais e comerciais dentro do prazo e do orçamento, do primeiro desenho à entrega final.',
      ctaPrimary: 'Pedir Orçamento Gratuito',
      ctaSecondary: 'Os Nossos Serviços',
      stats: [
        { value: '25+', label: 'Anos de experiência' },
        { value: '400+', label: 'Projetos concluídos' },
        { value: '100%', label: 'Licenciados e segurados' },
      ],
    },
    about: {
      eyebrow: 'Quem Somos',
      title: 'Uma Equipa em Quem Pode Confiar',
      paragraphs: [
        'Há mais de 25 anos que a Primaverimpulsiva trabalha com proprietários, empresas e promotores para transformar projetos em espaços concluídos. Da abertura do estaleiro à inspeção final, a nossa equipa interna de gestores de projeto, carpinteiros e outros profissionais trata de cada detalhe, para que não tenha de se preocupar.',
        'Somos um empreiteiro geral local, totalmente licenciado e segurado, orgulhosos de construir os espaços onde a nossa comunidade vive, trabalha e cresce.',
      ],
      values: [
        {
          title: 'Qualidade na Construção',
          text: 'Cada projeto é construído de acordo com as normas em vigor e além delas, com materiais de confiança e mão de obra especializada.',
        },
        {
          title: 'Entrega no Prazo',
          text: 'Um planeamento claro e uma comunicação honesta mantêm o seu projeto em andamento, sem surpresas.',
        },
        {
          title: 'Segurança em Primeiro Lugar',
          text: 'As nossas equipas seguem normas de segurança rigorosas em todos os estaleiros, grandes ou pequenos.',
        },
      ],
    },
    services: {
      eyebrow: 'O Que Fazemos',
      title: 'Serviços Adaptados ao Seu Projeto',
      lead: 'Quer esteja a iniciar uma construção nova ou a reimaginar um espaço existente, trazemos as pessoas, o equipamento e a experiência necessários.',
      items: [
        { title: 'Construção Residencial', text: 'Moradias construídas à medida, desenhadas de acordo com o seu estilo de vida.' },
        { title: 'Construção Comercial', text: 'Obras de retalho, escritórios e indústria, entregues dentro do prazo e do orçamento.' },
        { title: 'Renovações e Remodelações', text: 'Cozinhas, casas de banho, ampliações e remodelações completas, bem feitas.' },
        { title: 'Gestão de Projeto', text: 'Um único ponto de contacto responsável por licenças, subempreiteiros e prazos.' },
        { title: 'Design e Construção', text: 'Arquitetura e construção sob o mesmo teto, do conceito à conclusão.' },
        { title: 'Eletricidade e Canalização', text: 'Profissionais licenciados que tratam desde as instalações até aos acabamentos finais.' },
      ],
    },
    projects: {
      eyebrow: 'Trabalhos Recentes',
      title: 'Um Histórico que Fala por Si',
      items: [
        { title: 'Residência Rua do Bosque', category: 'Residencial' },
        { title: 'Parque de Escritórios Harbor View', category: 'Comercial' },
        { title: 'Renovação de Loft no Centro', category: 'Renovação' },
      ],
    },
    contact: {
      eyebrow: 'Fale Connosco',
      title: 'Vamos Falar Sobre o Seu Projeto',
      lead: 'Contacte-nos para um orçamento gratuito e sem compromisso. Normalmente respondemos no prazo de um dia útil.',
      info: [
        { label: 'Telefone', value: '(555) 123-4567', href: 'tel:+15551234567' },
        { label: 'Email', value: 'info@primaverimpulsiva.com', href: 'mailto:info@primaverimpulsiva.com' },
        { label: 'Morada', value: '482 Industrial Way, Springfield, ST 62704' },
        { label: 'Horário', value: 'Seg–Sex: 7h00 – 17h00' },
      ],
      form: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefone',
        message: 'Detalhes do Projeto',
        submit: 'Enviar Mensagem',
        successTitle: 'Obrigado pelo contacto!',
        successText: 'Recebemos a sua mensagem e entraremos em contacto brevemente.',
      },
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      license: 'Licença n.º GC-00000 · Totalmente Segurados',
    },
    lang: {
      switchTo: 'Switch to English',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      quote: 'Get a Quote',
    },
    brand: {
      name: 'Primaverimpulsiva',
    },
    hero: {
      eyebrow: 'General Contractor · Est. 1998',
      title: 'Building Strong Foundations for Your Future',
      lead: 'Primaverimpulsiva delivers residential and commercial projects on time and on budget, from the first blueprint to the final walkthrough.',
      ctaPrimary: 'Request a Free Estimate',
      ctaSecondary: 'Our Services',
      stats: [
        { value: '25+', label: 'Years in business' },
        { value: '400+', label: 'Projects completed' },
        { value: '100%', label: 'Licensed & insured' },
      ],
    },
    about: {
      eyebrow: 'Who We Are',
      title: 'A Team You Can Build On',
      paragraphs: [
        "For over 25 years, Primaverimpulsiva has partnered with homeowners, businesses, and developers to turn plans into finished spaces. From groundbreaking to final inspection, our in-house team of project managers, carpenters, and tradespeople handles every detail so you don't have to.",
        "We're a locally owned, fully licensed and insured general contractor, proud to build the places our community lives, works, and grows.",
      ],
      values: [
        {
          title: 'Quality Craftsmanship',
          text: 'Every project is built to code and beyond, using trusted materials and skilled trades.',
        },
        {
          title: 'On-Time Delivery',
          text: 'Clear scheduling and honest communication keep your project moving without surprises.',
        },
        {
          title: 'Safety First',
          text: 'Our crews follow strict safety standards on every job site, big or small.',
        },
      ],
    },
    services: {
      eyebrow: 'What We Do',
      title: 'Services Built Around Your Project',
      lead: "Whether you're breaking ground on something new or reimagining an existing space, we bring the people, equipment, and experience to get it done.",
      items: [
        { title: 'Residential Construction', text: 'Custom home builds designed and constructed around the way you live.' },
        { title: 'Commercial Construction', text: 'Retail, office, and industrial builds delivered on schedule and on budget.' },
        { title: 'Renovations & Remodeling', text: 'Kitchens, bathrooms, additions, and whole-home renovations done right.' },
        { title: 'Project Management', text: 'A single point of contact overseeing permits, subcontractors, and timelines.' },
        { title: 'Design-Build Services', text: 'Architecture and construction under one roof, from concept to completion.' },
        { title: 'Electrical & Plumbing', text: 'Licensed trades handling rough-in through final fixtures on every job.' },
      ],
    },
    projects: {
      eyebrow: 'Recent Work',
      title: 'A Track Record You Can See',
      items: [
        { title: 'Maple Street Residence', category: 'Residential' },
        { title: 'Harbor View Office Park', category: 'Commercial' },
        { title: 'Downtown Loft Renovation', category: 'Renovation' },
      ],
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: "Let's Talk About Your Project",
      lead: 'Reach out for a free, no-obligation estimate. We typically respond within one business day.',
      info: [
        { label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
        { label: 'Email', value: 'info@primaverimpulsiva.com', href: 'mailto:info@primaverimpulsiva.com' },
        { label: 'Address', value: '482 Industrial Way, Springfield, ST 62704' },
        { label: 'Hours', value: 'Mon–Fri: 7:00am – 5:00pm' },
      ],
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Project Details',
        submit: 'Send Message',
        successTitle: 'Thanks for reaching out!',
        successText: "We've received your message and will be in touch soon.",
      },
    },
    footer: {
      rights: 'All rights reserved.',
      license: 'License #GC-00000 · Fully Insured',
    },
    lang: {
      switchTo: 'Mudar para Português',
    },
  },
}

export default translations
