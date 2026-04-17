import { useEffect } from 'react'
﻿import {
  ArrowRight,
  Brain,
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartHandshake,
  Instagram,
  Landmark,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
} from 'lucide-react'

const imagery = {
  heroTherapist:
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
  officeWarm:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  therapistTeam:
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80',
  officeDetail:
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
}

const specialties = [
  {
    title: 'Ansiedade',
    description:
      'Encontre um espaço seguro para compreender pensamentos acelerados, medo constante e a sensação de estar sempre no limite.',
    icon: Brain,
  },
  {
    title: 'Depressão',
    description:
      'Acolhimento profissional para momentos de tristeza persistente, vazio emocional e perda de energia no dia a dia.',
    icon: HeartHandshake,
  },
  {
    title: 'Estresse',
    description:
      'Cuidado psicológico para recuperar clareza, leveza emocional e presença diante da sobrecarga da rotina.',
    icon: Sparkles,
  },
  {
    title: 'Autoestima',
    description:
      'Fortaleça sua autoconfiança, reconheça seu valor e desenvolva uma relação mais gentil com você.',
    icon: UserRoundCheck,
  },
  {
    title: 'Relacionamentos',
    description:
      'Compreenda padrões afetivos, melhore diálogos e construa vínculos mais saudáveis e conscientes.',
    icon: MessageCircle,
  },
  {
    title: 'Autoconhecimento',
    description:
      'Aprofunde sua percepção sobre emoções, escolhas e desejos para viver com mais autenticidade.',
    icon: Stethoscope,
  },
  {
    title: 'Burnout',
    description:
      'Cuide do esgotamento mental com um acompanhamento atento às exigências emocionais e profissionais.',
    icon: Clock3,
  },
  {
    title: 'Desenvolvimento emocional',
    description:
      'Aprenda a lidar com sentimentos difíceis e construa recursos internos para atravessar fases desafiadoras.',
    icon: ShieldCheck,
  },
]

const benefits = [
  'Entender melhor suas emoções e reações',
  'Reduzir a sobrecarga mental com mais equilíbrio',
  'Fortalecer a autoestima e o senso de identidade',
  'Melhorar relacionamentos com mais clareza e presença',
  'Encontrar um espaço seguro para falar sem julgamentos',
  'Desenvolver recursos emocionais para decisões mais conscientes',
]

const trustPoints = [
  {
    title: 'Atendimento humanizado',
    description: 'Escuta genuína, sensível e respeitosa em cada etapa do processo terapêutico.',
    icon: HeartHandshake,
  },
  {
    title: 'Sigilo e segurança',
    description: 'Ambiente ético e acolhedor para você falar sobre sua saúde mental com tranquilidade.',
    icon: Lock,
  },
  {
    title: 'Cuidado individualizado',
    description: 'Cada atendimento psicológico considera sua história, ritmo e necessidades reais.',
    icon: CheckCircle2,
  },
  {
    title: 'Profissionais qualificados',
    description: 'Psicólogas preparadas para conduzir o processo com técnica, empatia e responsabilidade.',
    icon: Landmark,
  },
]

const testimonials = [
  {
    quote:
      'Cheguei me sentindo exausta e sem direção. Fui acolhida com delicadeza e, aos poucos, consegui organizar o que eu sentia e voltar a respirar com mais calma.',
    name: 'Marina S.',
  },
  {
    quote:
      'Eu adiava começar terapia há muito tempo. A clínica me passou confiança desde o primeiro contato e isso fez toda a diferença para eu me permitir começar.',
    name: 'Juliana R.',
  },
  {
    quote:
      'O processo tem sido profundo, mas leve. Hoje consigo compreender melhor minhas emoções e me posicionar com mais segurança nos relacionamentos.',
    name: 'Renata M.',
  },
]

const steps = [
  {
    title: 'Entre em contato',
    description: 'Fale pelo WhatsApp ou preencha o formulário para compartilhar seu momento e suas dúvidas.',
  },
  {
    title: 'Escolha o melhor horário',
    description: 'Nossa equipe orienta sobre disponibilidade, formato do atendimento e próximos passos.',
  },
  {
    title: 'Inicie seu acompanhamento',
    description: 'Comece sua terapia em um espaço de escuta qualificada, acolhimento e evolução emocional.',
  },
]

const faqs = [
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira sessão é um espaço de acolhimento e escuta. Nela, você poderá falar sobre o que tem vivido, suas expectativas e dúvidas sobre a terapia.',
  },
  {
    question: 'Quanto tempo dura cada sessão?',
    answer:
      'Em geral, cada sessão de terapia dura cerca de 50 minutos, com tempo pensado para um atendimento psicológico cuidadoso e estruturado.',
  },
  {
    question: 'O atendimento é presencial ou online?',
    answer:
      'A clínica oferece atendimento presencial e online, para que você escolha o formato mais confortável e adequado à sua rotina.',
  },
  {
    question: 'Terapia é indicada para mim?',
    answer:
      'Se você sente ansiedade, estresse, tristeza frequente, conflitos internos ou deseja se conhecer melhor, a terapia pode ser um apoio importante para sua saúde mental.',
  },
  {
    question: 'Minhas informações são mantidas em sigilo?',
    answer:
      'Sim. O sigilo é um compromisso ético essencial da psicologia, garantindo privacidade, respeito e segurança durante todo o processo.',
  },
  {
    question: 'Como faço para agendar?',
    answer:
      'Você pode agendar pelo botão de WhatsApp, pelos CTAs da página ou pelo formulário. O retorno é feito de forma acolhedora e objetiva.',
  },
]

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
        <header className="section-shell flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-plum to-iris shadow-glow">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-2xl leading-none tracking-wide">Lumina</p>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">Clínica de Psicologia</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/75 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contato" className="primary-button hidden sm:inline-flex">
            Agendar consulta
          </a>
        </header>
      </div>

      <main>
        <section id="inicio" data-reveal className="reveal-section relative overflow-hidden bg-mesh pt-32">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-plum/15 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-60 w-60 rounded-full bg-iris/10 blur-3xl" />
          </div>

          <div className="section-shell relative grid items-center gap-14 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
            <div className="max-w-3xl">
              <span className="section-kicker">Psicologia com acolhimento, ética e profundidade</span>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                Existe um lugar seguro para cuidar do que pesa por dentro.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                Na Clínica Lumina, a terapia é conduzida com escuta qualificada, sensibilidade e profissionalismo
                para quem deseja aliviar a ansiedade, organizar emoções e viver com mais clareza.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/58">
                Se você sente sobrecarga emocional, insegurança, tristeza frequente, conflitos internos ou apenas
                percebe que precisa de um espaço de cuidado real, nosso atendimento psicológico foi pensado para
                acolher sua história com respeito e individualidade.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contato" className="primary-button">
                  Agendar minha consulta
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://wa.me/5500000000000" className="secondary-button">
                  Falar no WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  'Atendimento presencial e online',
                  'Escuta sem julgamentos',
                  'Processo sigiloso e individualizado',
                ].map((item) => (
                  <div key={item} className="surface-card px-5 py-4 text-sm text-white/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="surface-card relative overflow-hidden rounded-[36px] border-white/15 bg-white/[0.06] p-4 shadow-glow sm:p-6">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-plum/25 blur-3xl" />
                <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
                    <img
                      src={imagery.heroTherapist}
                      alt="Psicóloga em atendimento acolhedor"
                      className="h-[480px] w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-iris">Atendimento humanizado</p>
                      <p className="mt-3 font-display text-3xl">Seu processo importa.</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Cuidado psicológico com técnica, discrição e presença verdadeira.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="inline-flex rounded-2xl border border-iris/20 bg-iris/10 p-3 text-iris">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-lg font-semibold">Ambiente seguro</p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        Acolhimento, ética e respeito em cada atendimento psicológico.
                      </p>
                    </div>

                    <div className="relative overflow-hidden rounded-[24px] border border-white/10">
                      <img
                        src={imagery.officeWarm}
                        alt="Consultório de psicologia elegante e acolhedor"
                        className="h-52 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="flex items-center gap-2 text-iris">
                          <CalendarCheck2 className="h-4 w-4" />
                          <span className="text-xs font-semibold uppercase tracking-[0.22em]">Clareza desde o primeiro contato</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-white/70">
                          Um consultório pensado para transmitir calma, privacidade e presença.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 xl:grid-cols-2">
                      <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 xl:min-h-[150px]">
                        <p className="break-words text-xl leading-tight text-white sm:text-2xl">+ acolhimento</p>
                        <p className="mt-3 max-w-[24ch] text-sm leading-6 text-white/60">
                          Linguagem sensível para quem ainda tem dúvidas sobre começar a terapia.
                        </p>
                      </div>
                      <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 xl:min-h-[150px]">
                        <p className="break-words text-xl leading-tight text-white sm:text-2xl">+ confiança</p>
                        <p className="mt-3 max-w-[24ch] text-sm leading-6 text-white/60">
                          Estrutura profissional para um processo terapêutico seguro e individualizado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" data-reveal className="reveal-section bg-mist py-20 text-ink sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="grid gap-5">
              <div className="rounded-[32px] bg-gradient-to-br from-[#171322] via-[#24193F] to-[#0E0D16] p-8 text-white shadow-soft sm:p-10">
                <span className="section-kicker border-white/10 bg-white/5 text-iris">Sobre a clínica</span>
                <h2 className="font-display text-4xl sm:text-5xl">Psicologia com presença, técnica e cuidado real.</h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[28px] shadow-soft">
                  <img
                    src={imagery.therapistTeam}
                    alt="Psicóloga em ambiente profissional e acolhedor"
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-[28px] shadow-soft">
                  <img
                    src={imagery.officeDetail}
                    alt="Detalhes de um consultório de psicologia sofisticado"
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <p className="text-lg leading-8 text-neutral-700">
                A Clínica Lumina nasceu para oferecer um atendimento psicológico acolhedor, sofisticado e profundamente
                humano. Aqui, cada pessoa é recebida com escuta qualificada, sensibilidade clínica e respeito pela sua
                história.
              </p>
              <p className="text-lg leading-8 text-neutral-700">
                Nossa filosofia de atendimento combina profissionalismo, ética e individualização do cuidado. A terapia
                não é tratada como um protocolo rígido, mas como um processo construído com atenção ao seu momento, às
                suas necessidades e ao ritmo que faz sentido para você.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {['Escuta qualificada', 'Ambiente seguro e sigiloso', 'Abordagem humanizada'].map((point) => (
                  <div key={point} className="rounded-[24px] border border-neutral-200 bg-white p-5 shadow-soft">
                    <p className="font-semibold text-neutral-900">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="especialidades" data-reveal className="reveal-section bg-[#0D0B14] py-20 sm:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <span className="section-kicker">Áreas de atendimento</span>
              <h2 className="font-display text-4xl sm:text-5xl">Acompanhamento psicológico para diferentes momentos da sua vida.</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Atendemos demandas emocionais com profundidade clínica e sensibilidade, criando um caminho terapêutico
                possível, seguro e coerente com o que você está vivendo.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {specialties.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-iris/30 hover:bg-white/[0.07]"
                >
                  <div className="inline-flex rounded-2xl border border-iris/20 bg-iris/10 p-3 text-iris">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" data-reveal className="reveal-section bg-white py-20 text-ink sm:py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <span className="section-kicker border-neutral-200 bg-white text-plum">Benefícios da terapia</span>
              <h2 className="font-display text-4xl sm:text-5xl">Um processo que ajuda você a viver com mais consciência e leveza.</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                A terapia pode abrir espaço para compreender padrões, aliviar tensões internas e construir uma relação
                mais saudável com suas emoções, escolhas e vínculos.
              </p>
              <a href="#contato" className="primary-button mt-8">
                Quero começar meu processo
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-[26px] border border-neutral-200 bg-mist p-6 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 text-plum" />
                  <p className="mt-4 text-base leading-7 text-neutral-800">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal className="reveal-section bg-[#100E17] py-20 sm:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <span className="section-kicker">Confiança e diferenciais</span>
              <h2 className="font-display text-4xl sm:text-5xl">Um cuidado psicológico pensado para quem busca acolhimento com seriedade.</h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-5 lg:grid-cols-2">
                {trustPoints.map(({ title, description, icon: Icon }) => (
                  <article key={title} className="surface-card p-6">
                    <div className="inline-flex rounded-2xl border border-iris/20 bg-iris/10 p-3 text-iris">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>
                  </article>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
                <img
                  src={imagery.officeWarm}
                  alt="Sala de atendimento da clínica de psicologia"
                  className="h-full min-h-[360px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-iris">Estrutura acolhedora</p>
                  <p className="mt-3 font-display text-4xl">Calma, privacidade e sofisticação visual.</p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
                    O ambiente da clínica foi pensado para reduzir tensão desde a chegada e fortalecer a sensação de segurança.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                'Atendimento com foco em saúde mental e bem-estar emocional',
                'Processo terapêutico com escuta ética e sem julgamentos',
                'Estrutura acolhedora para quem está começando a terapia',
              ].map((highlight) => (
                <div key={highlight} className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-5 text-sm text-white/78">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal className="reveal-section bg-mist py-20 text-ink sm:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <span className="section-kicker border-neutral-200 bg-white text-plum">Depoimentos</span>
              <h2 className="font-display text-4xl sm:text-5xl">Relatos de quem encontrou um espaço de confiança para começar.</h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-[30px] border border-neutral-200 bg-white p-7 shadow-soft">
                  <div className="mb-6 flex gap-1 text-plum">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Sparkles key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-base leading-8 text-neutral-700">“{item.quote}”</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal className="reveal-section bg-[#0C0B12] py-20 sm:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <span className="section-kicker">Como funciona</span>
              <h2 className="font-display text-4xl sm:text-5xl">Começar sua terapia pode ser simples, leve e seguro.</h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="surface-card p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-plum text-lg font-bold text-white">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" data-reveal className="reveal-section bg-white py-20 text-ink sm:py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-kicker border-neutral-200 bg-white text-plum">FAQ</span>
              <h2 className="font-display text-4xl sm:text-5xl">Dúvidas comuns antes de iniciar seu atendimento psicológico.</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Se você ainda está considerando começar terapia, estas respostas ajudam a tornar a decisão mais clara
                e tranquila.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[26px] border border-neutral-200 bg-mist px-6 py-5 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-neutral-900">
                    {faq.question}
                    <ChevronRight className="h-5 w-5 shrink-0 text-plum transition group-open:rotate-90" />
                  </summary>
                  <p className="pt-4 text-sm leading-7 text-neutral-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" data-reveal className="reveal-section relative overflow-hidden bg-mesh py-20 sm:py-24">
          <div className="section-shell relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-2xl">
              <span className="section-kicker">Agendamento</span>
              <h2 className="font-display text-4xl sm:text-5xl">Comece com um primeiro passo acolhedor e possível.</h2>
              <p className="mt-5 text-lg leading-8 text-white/68">
                Se você sente que chegou a hora de cuidar da sua saúde mental com mais atenção, estamos aqui para
                receber seu contato com empatia, discrição e clareza.
              </p>
              <p className="mt-4 text-base leading-7 text-white/56">
                Você pode preencher o formulário ou falar diretamente pelo WhatsApp. Nossa equipe retorna com atenção
                para orientar sobre horários, formato do atendimento e próximos passos.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://wa.me/5500000000000" className="primary-button">
                  Agendar pelo WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href="mailto:contato@luminapsicologia.com.br" className="secondary-button">
                  Enviar e-mail
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <form className="rounded-[32px] border border-white/10 bg-white/[0.06] p-6 shadow-glow backdrop-blur-xl sm:p-8">
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/86">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/35 focus:border-iris focus:outline-none focus:ring-2 focus:ring-iris/40"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-white/86">
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/35 focus:border-iris focus:outline-none focus:ring-2 focus:ring-iris/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/86">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="voce@email.com"
                      className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/35 focus:border-iris focus:outline-none focus:ring-2 focus:ring-iris/40"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/86">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Conte brevemente como podemos ajudar você."
                    className="w-full rounded-[24px] border border-white/12 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/35 focus:border-iris focus:outline-none focus:ring-2 focus:ring-iris/40"
                  />
                </div>
                <button type="submit" className="primary-button w-full">
                  Solicitar agendamento
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-xs leading-6 text-white/45">
                  Ao enviar, você demonstra interesse em iniciar seu atendimento psicológico. Retornaremos com
                  acolhimento e discrição.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer data-reveal className="reveal-section border-t border-white/10 bg-[#08070D] py-10 text-white/68">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <p className="font-display text-3xl text-white">Clínica Lumina Psicologia</p>
            <p className="mt-4 max-w-md text-sm leading-7">
              Clínica de psicologia dedicada ao cuidado da saúde mental com elegância, ética e acolhimento. Terapia
              para ansiedade, autoestima, estresse, relacionamentos e desenvolvimento emocional.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Navegação</p>
            <div className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Contato</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href="tel:+5500000000000" className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4" />
                (00) 0000-0000
              </a>
              <a href="https://wa.me/5500000000000" className="flex items-center gap-3 transition hover:text-white">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a href="https://instagram.com" className="flex items-center gap-3 transition hover:text-white">
                <Instagram className="h-4 w-4" />
                @luminapsicologia
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                Av. Harmonia, 245, Sala 802, Belo Horizonte - MG
              </div>
            </div>
          </div>
        </div>

        <div className="section-shell mt-10 border-t border-white/10 pt-6 text-xs text-white/42">
          © 2026 Clínica Lumina Psicologia. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href="https://wa.me/5500000000000"
        aria-label="Falar com a clínica pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  )
}

export default App
