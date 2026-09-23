export type Lang = 'pt' | 'en'
export type ValueIcon = 'quality' | 'team' | 'deadline' | 'safety'
export type ProjectId = 'ruin'
export type ServiceIcon =
  | 'construction'
  | 'plumbing'
  | 'climate'
  | 'electrical'
  | 'vacuum'
  | 'ventilation'

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
    flyerAlt: string
    stats: { value: string; label: string }[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    values: { icon: ValueIcon; title: string; text: string }[]
  }
  services: {
    eyebrow: string
    title: string
    lead: string
    items: { icon: ServiceIcon; title: string; text: string }[]
  }
  projects: {
    eyebrow: string
    title: string
    items: { id: ProjectId; title: string; category: string }[]
    viewPhotos: string
    before: string
    after: string
    close: string
    previous: string
    next: string
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    info: { label: string; values: { text: string; href?: string }[] }[]
    whatsapp: string
    whatsappMessage: string
    instagram: string
    mascotAlt: string
    form: {
      name: string
      email: string
      phone: string
      message: string
      submit: string
      successTitle: string
      successText: string
      sending: string
      errorTitle: string
      errorText: string
    }
  }
  footer: {
    company: string
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
      eyebrow: 'Primaveraimpulsiva · Empresa de Construção Civil',
      title: 'Reabilitamos o Passado. Construímos o Futuro.',
      lead: 'A Primaveraimpulsiva é especializada na reabilitação de ruínas e edifícios, com soluções chave na mão que aliam rigor, qualidade e atenção ao detalhe.',
      ctaPrimary: 'Pedir Orçamento Gratuito',
      ctaSecondary: 'Os Nossos Serviços',
      flyerAlt: 'Folheto da Primaverimpulsiva com os serviços e contactos',
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
        'Somos uma empresa de Construção Civil especializada na reabilitação e transformação de espaços, combinando experiência, rigor técnico e atenção ao detalhe em cada projeto.',
        'Da reabilitação integral de edifícios e ruínas aos acabamentos mais exigentes, assumimos todas as etapas da obra para garantir uma execução rigorosa, eficiente e de elevada qualidade.',
        'Através de um serviço chave na mão, asseguramos a coordenação de todas as especialidades e intervenientes, proporcionando-lhe a tranquilidade de ter um único parceiro responsável por todo o projeto.',
        'Do primeiro traço ao último detalhe, transformamos a sua visão num espaço com qualidade, identidade e valor.',
      ],
      values: [
        {
          icon: 'quality',
          title: 'Qualidade em Cada Detalhe',
          text: 'Materiais de confiança e acabamentos cuidados, do primeiro alicerce ao último retoque.',
        },
        {
          icon: 'team',
          title: 'Profissionais Qualificados',
          text: 'Equipas experientes e especializadas em cada área, da construção às instalações técnicas.',
        },
        {
          icon: 'deadline',
          title: 'Compromisso com o Prazo',
          text: 'Planeamento claro e comunicação honesta para cumprir o que combinámos, sem surpresas.',
        },
        {
          icon: 'safety',
          title: 'Segurança em 1º Lugar',
          text: 'Normas de segurança rigorosas em todas as obras, para proteger quem trabalha e quem nos confia o projeto.',
        },
      ],
    },
    services: {
      eyebrow: 'O Que Fazemos',
      title: 'Serviços Adaptados ao Seu Projeto',
      lead: 'Quer pretenda reabilitar uma ruína, transformar um espaço existente ou instalar um sistema de climatização, reunimos as pessoas, os recursos e a experiência necessários para concretizar o seu projeto.',
      items: [
        { icon: 'construction', title: 'Construção Civil', text: 'Obras residenciais, comerciais e industriais.' },
        { icon: 'plumbing', title: 'Canalização', text: 'Instalação e manutenção de redes hidráulicas.' },
        { icon: 'climate', title: 'Climatização', text: 'Instalação e manutenção de sistemas de climatização.' },
        { icon: 'electrical', title: 'Eletricidade', text: 'Instalações elétricas gerais e manutenção.' },
        { icon: 'vacuum', title: 'Aspiração Central', text: 'Instalação de sistemas de aspiração central.' },
        { icon: 'ventilation', title: 'Ventilação Mecânica', text: 'Instalação e manutenção de sistemas de ventilação.' },
      ],
    },
    projects: {
      eyebrow: 'Trabalhos Recentes',
      title: 'Um Histórico que Fala por Si',
      items: [{ id: 'ruin', title: 'Reabilitação de Ruína', category: 'Reabilitação' }],
      viewPhotos: 'Ver fotografias',
      before: 'Antes',
      after: 'Depois',
      close: 'Fechar',
      previous: 'Fotografia anterior',
      next: 'Fotografia seguinte',
    },
    contact: {
      eyebrow: 'Fale Connosco',
      title: 'Vamos Falar Sobre o Seu Projeto',
      lead: 'Contacte-nos para um orçamento gratuito e sem compromisso.',
      whatsapp: 'Falar no WhatsApp',
      whatsappMessage: 'Olá! Gostaria de pedir um orçamento.',
      instagram: 'Seguir no Instagram',
      mascotAlt: 'Gato com capacete de obra',
      info: [
        {
          label: 'Telefone',
          values: [
            { text: '(+351) 934867205', href: 'tel:+351934867205' },
            { text: '(+351) 910672446', href: 'tel:+351910672446' },
          ],
        },
        {
          label: 'Email',
          values: [{ text: 'primaverimpulsiva.lda@gmail.com', href: 'mailto:primaverimpulsiva.lda@gmail.com' }],
        },
      ],
      form: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefone',
        message: 'Detalhes do Projeto',
        submit: 'Enviar Mensagem',
        successTitle: 'Obrigado pelo contacto!',
        successText: 'Recebemos a sua mensagem e entraremos em contacto brevemente.',
        sending: 'A enviar...',
        errorTitle: 'Não foi possível enviar a mensagem.',
        errorText: 'Tente novamente ou contacte-nos diretamente por email ou telefone.',
      },
    },
    footer: {
      company: 'Primaverimpulsiva - Unipessoal Lda · NIF 518937747',
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
      quote: 'Request a Quote',
    },
    brand: {
      name: 'Primaverimpulsiva',
    },
    hero: {
      eyebrow: 'Primaverimpulsiva · Civil Construction Company',
      title: 'We Rehabilitate the Past. We Build the Future.',
      lead: 'Primaverimpulsiva specialises in the rehabilitation of ruins and buildings, with turnkey solutions that combine rigour, quality and attention to detail.',
      ctaPrimary: 'Request a Free Quote',
      ctaSecondary: 'Our Services',
      flyerAlt: 'Primaverimpulsiva flyer with services and contact details',
      stats: [
        { value: '25+', label: 'Years of experience' },
        { value: '400+', label: 'Projects completed' },
        { value: '100%', label: 'Licensed & insured' },
      ],
    },
    about: {
      eyebrow: 'Who We Are',
      title: 'A Team You Can Trust',
      paragraphs: [
        'We are a civil construction company specialising in the rehabilitation and transformation of spaces, combining experience, technical rigour and attention to detail in every project.',
        'From the full rehabilitation of buildings and ruins to the most demanding finishes, we take on every stage of the work to ensure rigorous, efficient and high-quality execution.',
        'Through a turnkey service, we coordinate all trades and stakeholders, giving you the peace of mind of having a single partner responsible for the entire project.',
        'From the first sketch to the last detail, we turn your vision into a space with quality, identity and value.',
      ],
      values: [
        {
          icon: 'quality',
          title: 'Quality in Every Detail',
          text: 'Trusted materials and careful finishes, from the first foundation to the final touch.',
        },
        {
          icon: 'team',
          title: 'Qualified Professionals',
          text: 'Experienced crews specialised in every area, from construction to technical installations.',
        },
        {
          icon: 'deadline',
          title: 'Commitment to Deadlines',
          text: 'Clear planning and honest communication to deliver what we agreed, with no surprises.',
        },
        {
          icon: 'safety',
          title: 'Safety First',
          text: 'Strict safety standards on every job site, to protect those who work and those who entrust their project to us.',
        },
      ],
    },
    services: {
      eyebrow: 'What We Do',
      title: 'Services Tailored to Your Project',
      lead: 'Whether you want to rehabilitate a ruin, transform an existing space or install a climate control system, we bring together the people, resources and experience needed to make your project happen.',
      items: [
        { icon: 'construction', title: 'Civil Construction', text: 'Residential, commercial and industrial works.' },
        { icon: 'plumbing', title: 'Plumbing', text: 'Installation and maintenance of hydraulic networks.' },
        { icon: 'climate', title: 'Climate Control', text: 'Installation and maintenance of climate control systems.' },
        { icon: 'electrical', title: 'Electrical', text: 'General electrical installations and maintenance.' },
        { icon: 'vacuum', title: 'Central Vacuum', text: 'Installation of central vacuum systems.' },
        { icon: 'ventilation', title: 'Mechanical Ventilation', text: 'Installation and maintenance of ventilation systems.' },
      ],
    },
    projects: {
      eyebrow: 'Recent Work',
      title: 'A Track Record That Speaks for Itself',
      items: [{ id: 'ruin', title: 'Ruin Rehabilitation', category: 'Rehabilitation' }],
      viewPhotos: 'View photos',
      before: 'Before',
      after: 'After',
      close: 'Close',
      previous: 'Previous photo',
      next: 'Next photo',
    },
    contact: {
      eyebrow: 'Get in Touch',
      title: "Let's Talk About Your Project",
      lead: 'Contact us for a free, no-obligation quote.',
      whatsapp: 'Chat on WhatsApp',
      whatsappMessage: "Hello! I'd like to request a quote.",
      instagram: 'Follow on Instagram',
      mascotAlt: 'Cat wearing a hard hat',
      info: [
        {
          label: 'Phone',
          values: [
            { text: '(+351) 934867205', href: 'tel:+351934867205' },
            { text: '(+351) 910672446', href: 'tel:+351910672446' },
          ],
        },
        {
          label: 'Email',
          values: [{ text: 'primaverimpulsiva.lda@gmail.com', href: 'mailto:primaverimpulsiva.lda@gmail.com' }],
        },
      ],
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Project Details',
        submit: 'Send Message',
        successTitle: 'Thank you for getting in touch!',
        successText: "We've received your message and will be in touch shortly.",
        sending: 'Sending...',
        errorTitle: "We couldn't send your message.",
        errorText: 'Please try again, or contact us directly by email or phone.',
      },
    },
    footer: {
      company: 'Primaverimpulsiva - Unipessoal Lda · NIF 518937747',
      license: 'Licence No. GC-00000 · Fully Insured',
    },
    lang: {
      switchTo: 'Mudar para Português',
    },
  },
}

export default translations
