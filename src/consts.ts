export const SITE_TITLE = 'Pu++ | Club de Programación Competitiva UNAM';
export const SITE_DESCRIPTION =
  'Comunidad oficial de entrenamiento para el ICPC en la Facultad de Ciencias, UNAM.';

export const NAV_LINKS = [
  { name: 'Nosotros', href: '/#about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Wiki', href: '/wiki' },
];

export const DIFFICULTY_COLORS = {
  Newbie: 'bg-gray-600',
  Pupil: 'bg-green-600',
  Specialist: 'bg-cyan-600',
  Expert: 'bg-blue-600',
  'Candidate Master': 'bg-violet-600',
  Master: 'bg-orange-600',
  Grandmaster: 'bg-red-600',
} as const;

export type Difficulty = keyof typeof DIFFICULTY_COLORS;

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export const STATS: Stat[] = [
  { prefix: 'Top', value: '1', label: 'ICPC Mexico 2024' },
  { value: 'Finalistas', label: 'Mundiales ICPC' },
  { value: '100', suffix: '%', label: 'Comunidad Colaborativa' },
  { value: 'Big Tech', label: 'Alumni en FAANG' },
];

export const HOME_DESCRIPTION =
  'En Pu++, somos la comunidad de programación competitiva de la Facultad de Ciencias. Transformamos tu curiosidad en una ventaja competitiva, llevando tu lógica desde los fundamentos hasta el podio.';

export const FEATURES = [
  {
    icon: 'fa-brain',
    title: 'Algoritmos Avanzados',
    desc: 'Domina Grafos, Programación Dinámica, Segment Trees y Geometría Computacional con nuestras guías.',
  },
  {
    icon: 'fa-trophy',
    title: 'ICPC Training',
    desc: 'Simulaciones semanales con problemsets reales de regionales pasadas y Codeforces Gym.',
  },
  {
    icon: 'fa-code-branch',
    title: 'Comunidad Open Source',
    desc: 'Colabora en nuestros repositorios y mejora tus habilidades de Ingeniería de Software.',
  },
];

export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/3XmN4PdDnK',
  email: 'pumasmas@ciencias.unam.mx',
};

export const TYPEWRITER_WORDS = ['el Código.', 'la Entrevista.', 'tu Futuro.', 'el Ranking.'];

export const TERMINAL_COMMANDS = [
  { text: 'g++ solution.cpp -o main' },
  {
    text: './main < input.txt',
    output: [
      'Running on test 1... <span class="text-green-400">PASSED</span>',
      'Running on test 2... <span class="text-green-400">PASSED</span>',
      'Running on test 3... <span class="text-green-400">PASSED</span>',
    ],
    isSuccess: true,
  },
];
