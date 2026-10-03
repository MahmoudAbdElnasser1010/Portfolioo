import fs from 'fs';
import path from 'path';

const IMG_RE = /\.(png|jpe?g|webp|gif|avif|svg)$/i;

/**
 * Returns the slider image paths for a project by reading whatever image
 * files live in /public/assets/projects/<folder>/. The folder is keyed by
 * the project NUMBER (e.g. "project-2"), NOT the slug — so you can rename a
 * project's slug/URL freely without moving its images. Just drop your images
 * in that folder (any name, any common format) and they show up in order.
 * Runs at build time (these pages are statically generated).
 */
export function getProjectSlides(folder) {
  const dir = path.join(process.cwd(), 'public', 'assets', 'projects', folder);
  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => IMG_RE.test(f));
  } catch {
    files = [];
  }
  // Natural sort so screen-2 comes before screen-10, img1 before img10, etc.
  files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  return files.map((f) => `/assets/projects/${folder}/${f}`);
}

/**
 * Grid-card cover for a project. Looks for a file named
 * project-cover-<n>.<ext> in /public/assets/projects/ (n is the project
 * NUMBER, e.g. 3 -> project-cover-3). Any common image format works.
 * Returns null if none is found so the caller can fall back.
 */
export function getProjectCover(n) {
  const dir = path.join(process.cwd(), 'public', 'assets', 'projects');
  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    files = [];
  }
  const match = files.find(
    (f) => IMG_RE.test(f) && f.replace(/\.[^.]+$/, '') === `project-cover-${n}`
  );
  return match ? `/assets/projects/${match}` : null;
}
