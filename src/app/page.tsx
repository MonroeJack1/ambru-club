import type { ElementType } from "react";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Compass,
  FileText,
  GraduationCap,
  Layers3,
  Lightbulb,
  Mail,
  MessageSquareText,
  PenLine,
  Rocket,
  Sparkles,
  Users,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const navLinks = [
  { label: "Despre", href: "#despre" },
  { label: "Ce primești", href: "#ce-primesti" },
  { label: "Pentru cine este", href: "#pentru-cine" },
  { label: "Cum funcționează", href: "#cum-functioneaza" },
  { label: "Întrebări", href: "#intrebari" },
];

const trustItems = [
  "Ghiduri simple",
  "Tool-uri AI explicate",
  "Idei practice pentru muncă",
  "Comunitate gratuită",
  "Pentru începători și curioși",
];

const problemCards = [
  {
    title: "Prea multe tool-uri",
    description: "Apar zilnic platforme noi, dar este greu să știi care chiar te ajută.",
    icon: Layers3,
  },
  {
    title: "Informație greu de filtrat",
    description: "Tutorialele sunt multe, neclare sau prea tehnice pentru cine abia începe.",
    icon: Compass,
  },
  {
    title: "Lipsă de exemple practice",
    description: "Ai nevoie de situații reale, nu doar explicații teoretice despre AI.",
    icon: ClipboardList,
  },
];

const benefitCards = [
  {
    title: "Recomandări de tool-uri AI",
    description: "Primești selecții clare, explicate pe scurt: ce face tool-ul și când merită folosit.",
    icon: Bot,
  },
  {
    title: "Prompturi utile pentru muncă și învățare",
    description: "Exemple gata de adaptat pentru emailuri, idei, research, organizare și conținut.",
    icon: MessageSquareText,
  },
  {
    title: "Mini-ghiduri explicate simplu",
    description: "Concepte și pași practici, fără limbaj complicat sau jargon inutil.",
    icon: BookOpen,
  },
  {
    title: "Idei pentru productivitate și automatizare",
    description: "Metode simple prin care poți economisi timp în activitățile repetitive.",
    icon: Workflow,
  },
];

const receiveItems = [
  {
    title: "Tool-uri AI explicate pe înțelesul tuturor",
    icon: WandSparkles,
  },
  {
    title: "Exemple de utilizare pentru job, business și învățare",
    icon: BriefcaseBusiness,
  },
  {
    title: "Prompturi gata de adaptat",
    icon: PenLine,
  },
  {
    title: "Resurse gratuite pentru productivitate",
    icon: Zap,
  },
  {
    title: "Idei despre automatizare",
    icon: Workflow,
  },
  {
    title: "Noutăți relevante, fără zgomot",
    icon: Sparkles,
  },
];

const audienceCards = [
  { title: "Pentru freelanceri", icon: BriefcaseBusiness },
  { title: "Pentru antreprenori", icon: Rocket },
  { title: "Pentru angajați", icon: Users },
  { title: "Pentru studenți", icon: GraduationCap },
  { title: "Pentru creatori de conținut", icon: PenLine },
  { title: "Pentru oricine vrea să învețe AI practic", icon: Lightbulb },
];

const steps = [
  {
    step: "01",
    title: "Te înscrii gratuit",
    description: "Adaugi emailul și intri în club fără costuri sau condiții complicate.",
  },
  {
    step: "02",
    title: "Primești resurse și idei practice",
    description: "Descoperi prompturi, tool-uri, ghiduri și exemple explicate simplu.",
  },
  {
    step: "03",
    title: "Aplici AI-ul în munca și învățarea ta",
    description: "Testezi metodele care ți se potrivesc și îți construiești propriul ritm.",
  },
];

const previewCards = [
  {
    label: "Promptul săptămânii",
    title: "Planifică o zi de lucru cu AI",
    description: "Un prompt simplu pentru prioritizare, task-uri și blocuri de focus.",
    icon: MessageSquareText,
  },
  {
    label: "Tool-ul recomandat",
    title: "Un tool util pentru research rapid",
    description: "Ce face, când îl folosești și ce limitări trebuie să știi.",
    icon: Bot,
  },
  {
    label: "Workflow practic",
    title: "De la idee la conținut publicabil",
    description: "Pași clari pentru brainstorming, structură, editare și verificare.",
    icon: Workflow,
  },
  {
    label: "Ghid pentru începători",
    title: "Cum alegi primul tool AI",
    description: "Un ghid scurt pentru a începe fără să pierzi timp în comparații inutile.",
    icon: FileText,
  },
];

const faqs = [
  {
    question: "Ambru Club este gratuit?",
    answer:
      "Da. Ambru Club este gândit ca o comunitate gratuită pentru oameni care vor să înțeleagă și să folosească AI-ul practic.",
  },
  {
    question: "Am nevoie de experiență cu AI?",
    answer:
      "Nu. Conținutul este explicat simplu, cu exemple și pași clari, astfel încât să poți începe chiar dacă ești la început.",
  },
  {
    question: "Ce fel de informații primesc?",
    answer:
      "Primești recomandări de tool-uri AI, prompturi, mini-ghiduri, idei de productivitate, exemple de utilizare și noutăți relevante.",
  },
  {
    question: "Este pentru antreprenori sau și pentru angajați?",
    answer:
      "Este pentru ambele categorii. Resursele sunt utile pentru freelanceri, antreprenori, angajați, studenți, creatori și profesioniști curioși.",
  },
  {
    question: "Cât timp trebuie să aloc?",
    answer:
      "Poți începe cu câteva minute pe săptămână. Ideea este să primești informații filtrate, clare și ușor de aplicat.",
  },
  {
    question: "Pot folosi resursele pentru muncă sau învățare?",
    answer:
      "Da. Resursele sunt gândite pentru situații concrete: organizare, research, scriere, învățare, idei de business și automatizări simple.",
  },
];

function SignupForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={`flex w-full flex-col gap-3 sm:flex-row ${compact ? "max-w-2xl" : "max-w-xl"}`}
      aria-label="Formular de înscriere gratuită în Ambru Club"
    >
      <Input
        type="email"
        required
        placeholder="Adresa ta de email"
        aria-label="Adresa ta de email"
        className="border-white/15 bg-white/10 text-white placeholder:text-slate-400 focus-visible:ring-amber-300"
      />
      <Button type="submit" size="lg" className="sm:min-w-fit">
        Intră gratuit
        <ArrowRight />
      </Button>
    </form>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <Badge variant={light ? "outline" : "warm"} className={light ? "border-amber-300/40 bg-amber-500/10 text-amber-900" : ""}>
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${light ? "text-slate-950" : "text-white"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-slate-700" : "text-slate-300"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function IconBadge({ icon: Icon }: { icon: ElementType }) {
  return (
    <div className="flex size-12 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-300/10 text-amber-200">
      <Icon className="size-5" aria-hidden="true" />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigație principală">
        <a href="#top" className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950">
          <span className="flex size-9 items-center justify-center rounded-2xl bg-amber-400 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/20">
            A
          </span>
          <span className="text-base font-bold tracking-tight text-white">Ambru Club</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href="#inscriere">Intră gratuit în club</a>
        </Button>
      </nav>
    </header>
  );
}

function HeroVisual() {
  const rows = [
    { icon: Bot, title: "Tool-uri AI", detail: "explicate simplu", progress: "78%" },
    { icon: MessageSquareText, title: "Prompturi", detail: "gata de adaptat", progress: "64%" },
    { icon: Workflow, title: "Workflow-uri", detail: "pentru muncă", progress: "86%" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0" aria-label="Preview vizual Ambru Club">
      <div className="absolute -inset-8 rounded-[3rem] bg-amber-400/20 blur-3xl" />
      <Card className="relative overflow-hidden border-white/15 bg-white/[0.07] shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <CardHeader className="relative border-b border-white/10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Badge variant="warm">Bibliotecă gratuită</Badge>
              <CardTitle className="mt-4 text-2xl text-white">AI learning path</CardTitle>
              <CardDescription className="mt-2 text-slate-300">
                Tool-uri, prompturi și exemple practice organizate clar.
              </CardDescription>
            </div>
            <div className="hidden size-16 items-center justify-center rounded-3xl bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 sm:flex">
              <Sparkles className="size-7" aria-hidden="true" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-4 p-5 sm:p-6">
          {rows.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-amber-200">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">{item.title}</p>
                    <span className="font-mono text-xs text-amber-200">{item.progress}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500" style={{ width: item.progress }} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-slate-300">Promptul săptămânii</p>
              <p className="mt-2 font-semibold text-white">Clarifică idei în 5 minute</p>
            </div>
            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
              <p className="text-sm text-amber-100">Workflow practic</p>
              <p className="mt-2 font-semibold text-white">De la notițe la plan</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TrustStrip() {
  return (
    <section aria-label="Beneficii rapide" className="border-y border-white/10 bg-white/[0.04]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-5 sm:px-6 lg:px-8">
        {trustItems.map((item) => (
          <Badge key={item} variant="secondary" className="gap-2 px-4 py-2 text-sm text-slate-100">
            <CheckCircle2 className="size-4 text-amber-300" aria-hidden="true" />
            {item}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28" aria-labelledby="hero-title">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.20),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.12),transparent_30%),linear-gradient(180deg,#0f172a_0%,#111827_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 hero-grid opacity-60" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Badge variant="warm" className="gap-2">
              <Sparkles className="size-4" aria-hidden="true" />
              Comunitate gratuită pentru AI practic
            </Badge>
            <h1 id="hero-title" className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Învață să folosești AI-ul ca să lucrezi mai inteligent, nu mai mult.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Ambru Club este o comunitate gratuită unde descoperi tool-uri AI, prompturi, ghiduri și idei practice care te ajută să lucrezi, să înveți și să creezi mai bine.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="#inscriere">
                  Intră gratuit în Ambru Club
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#ce-primesti">Vezi ce primești</a>
              </Button>
            </div>

            <div className="mt-7">
              <SignupForm />
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <BadgeCheck className="size-4 text-amber-300" aria-hidden="true" />
                Gratuit. Practic. Fără jargon inutil.
              </p>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <TrustStrip />

      <section id="despre" className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="problem-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Problema"
            title="AI-ul pare complicat când nu știi de unde să începi."
            description="Mulți oameni aud despre ChatGPT, automatizări, agenți AI și tool-uri de productivitate, dar nu știu ce contează, cum să folosească aceste instrumente sau cum să le aplice în munca reală."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problemCards.map((card) => (
              <Card key={card.title} className="group border-white/10 bg-white/[0.06] transition-all hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.08]">
                <CardHeader>
                  <IconBadge icon={card.icon} />
                  <CardTitle className="pt-4 text-white">{card.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-slate-300">{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="solution-title">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_0%,rgba(245,158,11,0.08)_50%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Soluția"
            title="Ambru Club îți arată ce merită folosit și cum."
            description="În loc să cauți prin zeci de tutoriale, primești explicații clare și exemple pe care le poți testa imediat."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefitCards.map((card) => (
              <Card key={card.title} className="border-white/10 bg-slate-950/45 transition-all hover:-translate-y-1 hover:border-amber-300/30">
                <CardHeader>
                  <IconBadge icon={card.icon} />
                  <CardTitle className="pt-4 text-lg text-white">{card.title}</CardTitle>
                  <CardDescription className="leading-7 text-slate-300">{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ce-primesti" className="bg-[#fff7ed] px-4 py-20 text-slate-950 sm:px-6 lg:px-8" aria-labelledby="receive-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            light
            eyebrow="Ce primești"
            title="Ce primești în Ambru Club"
            description="O bibliotecă vie de resurse simple, practice și relevante pentru oamenii care vor să învețe AI fără presiune."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {receiveItems.map((item) => (
              <Card key={item.title} className="border-amber-900/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <item.icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-7 text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Acces gratuit, formulat clar și ușor de aplicat.</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pentru-cine" className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="audience-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pentru cine"
            title="Pentru cine este Ambru Club?"
            description="Pentru oameni curioși, practici și ocupați, care vor să folosească AI-ul ca pe un avantaj real în fiecare zi."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audienceCards.map((item) => (
              <Card key={item.title} className="border-white/10 bg-white/[0.05] transition-all hover:-translate-y-1 hover:border-amber-300/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-200">
                    <item.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cum-functioneaza" className="relative px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="steps-title">
        <div className="absolute inset-0 -z-10 soft-noise opacity-30" />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Cum funcționează"
            title="Începi simplu, apoi aplici în ritmul tău."
            description="Ambru Club este construit pentru învățare practică, nu pentru presiune sau teorie inutilă."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {steps.map((item) => (
              <Card key={item.step} className="relative overflow-hidden border-white/10 bg-slate-950/55 transition-all hover:-translate-y-1 hover:border-amber-300/30">
                <div className="absolute right-5 top-5 font-mono text-6xl font-black text-white/[0.04]">{item.step}</div>
                <CardHeader>
                  <Badge variant="warm" className="w-fit">Pasul {item.step}</Badge>
                  <CardTitle className="pt-5 text-2xl text-white">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-slate-300">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="preview-title">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <Badge variant="warm">Preview resurse</Badge>
              <h2 id="preview-title" className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                O bibliotecă premium, cu acces gratuit.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Primești conținut scurt, aplicat și ușor de parcurs, ca să testezi ce funcționează pentru tine.
              </p>
            </div>
            <Badge variant="secondary" className="w-fit gap-2 px-4 py-2 text-sm">
              <CheckCircle2 className="size-4 text-amber-300" />
              Acces gratuit în club
            </Badge>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {previewCards.map((item) => (
              <Card key={item.label} className="group overflow-hidden border-white/10 bg-white/[0.06] transition-all hover:-translate-y-1 hover:border-amber-300/30">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <IconBadge icon={item.icon} />
                    <Badge variant="secondary" className="text-amber-100">Free</Badge>
                  </div>
                  <p className="pt-5 text-sm font-medium text-amber-200">{item.label}</p>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  <CardDescription className="leading-7 text-slate-300">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="inscriere" className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="cta-title">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-amber-200/20 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.24),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-8 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <Badge variant="warm">Intră în club</Badge>
              <h2 id="cta-title" className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Vrei să înveți AI fără să pierzi timp printre zeci de tutoriale?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Alătură-te gratuit Ambru Club și începe să descoperi tool-uri, idei și metode practice pentru a lucra și învăța mai bine.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-300 text-slate-950">
                  <Mail className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Înscriere gratuită</h3>
                  <p className="text-sm text-slate-400">Primești resurse clare și practice.</p>
                </div>
              </div>
              <SignupForm compact />
            </div>
          </div>
        </div>
      </section>

      <section id="intrebari" className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          <div>
            <Badge variant="warm">Întrebări</Badge>
            <h2 id="faq-title" className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Întrebări frecvente
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Totul este construit pentru claritate: informații simple, exemple concrete și pași pe care îi poți aplica în munca sau învățarea ta.
            </p>
          </div>

          <Card className="border-white/10 bg-white/[0.06] p-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="px-4">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <a href="#top" className="flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950">
              <span className="flex size-9 items-center justify-center rounded-2xl bg-amber-400 text-sm font-black text-slate-950">A</span>
              <span className="text-base font-bold tracking-tight">Ambru Club</span>
            </a>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              AI explicat simplu. Pentru oameni care vor să lucreze și să învețe mai inteligent.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <a href="#despre" className="hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Despre</a>
            <a href="mailto:contact@ambru.club" className="hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Contact</a>
            <a href="#" className="hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Confidențialitate</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
