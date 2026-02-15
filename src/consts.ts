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
