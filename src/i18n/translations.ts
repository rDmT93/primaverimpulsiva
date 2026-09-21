export type Lang = 'pt' | 'en'
export type ValueIcon = 'quality' | 'team' | 'deadline' | 'safety'
export type ServiceIcon =
  | 'construction'
  | 'plumbing'
  | 'climate'
  | 'electrical'
  | 'airconditioning'
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
    items: { title: string; category: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    info: { label: string; value: string; href?: string }[]
    whatsapp: string
    whatsappMessage: string
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
      eyebrow: 'Primaveraimpulsiva · Empresa de Construção Civil',
      title: 'Reabilitamos o Passado. Construímos o Futuro.',
      lead: 'A Primaveraimpulsiva é especializada na reabilitação de ruínas e edifícios, com soluções chave na mão que aliam rigor, qualidade e atenção ao detalhe.',
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
        { icon: 'airconditioning', title: 'Ar Condicionado', text: 'Instalação e manutenção de ar condicionado.' },
        { icon: 'vacuum', title: 'Aspiração Central', text: 'Instalação de sistemas de aspiração central.' },
        { icon: 'ventilation', title: 'Ventilação Mecânica', text: 'Instalação e manutenção de sistemas de ventilação.' },
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
      lead: 'Contacte-nos para um orçamento gratuito e sem compromisso.',
      whatsapp: 'Falar no WhatsApp',
      whatsappMessage: 'Olá! Gostaria de pedir um orçamento.',
      info: [
        { label: 'Telefone', value: '(+351) 934867205', href: 'tel:+351934867205' },
        { label: 'Email', value: 'primaverimpulsiva.lda@gmail.com', href: 'mailto:primaverimpulsiva.lda@gmail.com' },
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
          icon: 'quality',
          title: 'Quality in Every Detail',
          text: 'Trusted materials and careful finishes, from the first foundation to the final touch.',
        },
        {
          icon: 'team',
          title: 'Qualified Professionals',
          text: 'Experienced crews specialised in every trade, from construction to technical installations.',
        },
        {
          icon: 'deadline',
          title: 'Commitment to Deadlines',
          text: 'Clear planning and honest communication to deliver what we promised, with no surprises.',
        },
        {
          icon: 'safety',
          title: 'Safety First',
          text: 'Strict safety standards on every job site, protecting the people who build and the clients who trust us.',
        },
      ],
    },
    services: {
      eyebrow: 'What We Do',
      title: 'Services Built Around Your Project',
      lead: "Whether you're breaking ground on something new or reimagining an existing space, we bring the people, equipment, and experience to get it done.",
      items: [
        { icon: 'construction', title: 'Civil Construction', text: 'Residential, commercial and industrial works.' },
        { icon: 'plumbing', title: 'Plumbing', text: 'Installation and maintenance of water and hydraulic networks.' },
        { icon: 'climate', title: 'Climate Control', text: 'Installation and maintenance of climate control systems.' },
        { icon: 'electrical', title: 'Electrical', text: 'General electrical installations and maintenance.' },
        { icon: 'airconditioning', title: 'Air Conditioning', text: 'Installation and maintenance of air conditioning.' },
        { icon: 'vacuum', title: 'Central Vacuum', text: 'Installation of central vacuum systems.' },
        { icon: 'ventilation', title: 'Mechanical Ventilation', text: 'Installation and maintenance of ventilation systems.' },
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
      whatsapp: 'Chat on WhatsApp',
      whatsappMessage: "Hello! I'd like to request a quote.",
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
        sending: 'Sending...',
        errorTitle: "We couldn't send your message.",
        errorText: 'Please try again, or contact us directly by email or phone.',
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
