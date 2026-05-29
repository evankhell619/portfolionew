// ─── Section Registry ────────────────────────────────────────────
// Single source of truth for all navigable sections in the portfolio.
//
// Every part of the app that needs to know about sections imports from here.
//
// To add a new section:
//   1. Add an entry to SECTION_REGISTRY below
//   2. Make sure the component renders an element with the matching elementId
//   3. Add the section to any UI that should navigate to it.
//
// Fields:
//   - id:        Unique action identifier
//   - label:     Human-readable section name (used in system prompt context)
//   - elementId: DOM element ID to scroll to (must match the component's id prop)
//   - synonyms:  Words/phrases users might say to refer to this section.
//                Both Indonesian and English. Used for intent matching.
//                These are NOT exact-match keywords.

export const SECTION_REGISTRY = [
  {
    id: 'scroll_to_hero',
    label: 'Home / Landing',
    elementId: null, // special case: scrolls to top (0)
    synonyms: [
      'home', 'atas', 'awal', 'landing', 'top',
      'ke atas', 'scroll atas', 'halaman utama', 'beranda',
      'paling atas', 'back to top', 'go up',
    ],
  },
  {
    id: 'scroll_to_about',
    label: 'About / Who Am I',
    elementId: 'about-section',
    synonyms: [
      'about', 'tentang', 'profil', 'profile', 'bio', 'biography',
      'siapa', 'who', 'diri', 'perkenalan', 'introduce', 'yourself',
      'who am i', 'who is', 'ceritakan tentang', 'kamu siapa',
      'background', 'latar belakang',
    ],
  },
  {
    id: 'scroll_to_projects',
    label: 'Main Quest / Current Projects',
    elementId: 'main-quest-section',
    synonyms: [
      'project', 'projek', 'proyek', 'portfolio', 'karya',
      'main quest', 'current project', 'project sekarang', 'project utama',
      'list project', 'daftar project', 'semua project', 'all project',
      'show project', 'lihat project', 'apa aja project',
    ],
  },
  {
    id: 'scroll_to_side_quest',
    label: 'Side Quest / Projects',
    elementId: 'project-section',
    synonyms: [
      'side quest', 'side project', 'past exploration', 'exploration', 'logs',
      'project lama', 'project sampingan', 'eksperimen',
    ],
  },
  {
    id: 'scroll_to_experience',
    label: 'Experience Log / Career Journey',
    elementId: 'experience-section',
    synonyms: [
      'experience', 'pengalaman', 'karir', 'career', 'kerja', 'work',
      'organisasi', 'riwayat', 'work history', 'pekerjaan',
      'magang', 'internship', 'experience log', 'career journey',
      'riwayat kerja', 'riwayat karir', 'professional',
    ],
  },
  {
    id: 'scroll_to_tech',
    label: 'Tech Stack / Technologies',
    elementId: 'tech-stack-section',
    synonyms: [
      'tech stack', 'teknologi', 'technology', 'tools',
      'framework', 'bahasa pemrograman', 'programming language',
      'pakai apa', 'pake apa', 'tech', 'stack',
      'tech yang dipakai', 'tech yang dipake',
      'skill teknis', 'technical skill',
    ],
  },
  {
    id: 'scroll_to_contact',
    label: 'Contact / Footer',
    elementId: 'contact-section',
    synonyms: [
      'kontak', 'contact', 'hubungi', 'email', 'hire',
      'reach out', 'linkedin', 'footer',
      'how to contact', 'cara hubungi', 'cara kontak',
      'sosial media', 'social media', 'connect',
      'rekrut', 'recruit', 'hire me',
    ],
  },
];

// ─── Derived Lookups (auto-generated from registry) ──────────────

/**
 * Map from action ID to DOM element ID.
 * Returns a map of action id to DOM element id.
 *
 * Example: { scroll_to_about: "about-section", ... }
 */
export const ACTION_TO_ELEMENT = Object.fromEntries(
  SECTION_REGISTRY
    .filter(s => s.elementId !== null)
    .map(s => [s.id, s.elementId])
);

/**
 * Get all section labels for use in system prompt context.
 * Returns a formatted string describing available sections.
 */
export function getSectionLabels() {
  return SECTION_REGISTRY
    .map(s => `- ${s.label}`)
    .join('\n');
}
