import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import type { CV } from './cv';

// Cargar el CV desde el archivo YAML
const cvPath = path.resolve(process.cwd(), 'cv.yaml');
const cvContent = fs.readFileSync(cvPath, 'utf8');
const cv = yaml.load(cvContent) as CV;

export const { basics, work, volunteer, education, awards, certificates, publications, skills, languages, interests, references, projects } = cv;

export default cv;
