import { promises as fs } from 'fs';
import Markdoc from '@markdoc/markdoc';
import type { Node } from '@markdoc/markdoc';
import path from 'path';
import YAML from 'yaml';
import { formatDate } from 'components/Utilities';

export type Metadata = {
  href: string;
  title: string;
  date: string;
  formated_date: string;
  tags: Array<string>;
  summary: string;
};

export const getMetadata = (slug: string, ast: Node): Metadata => {
  const metadata = YAML.parse(ast.attributes.frontmatter);

  if (
    metadata &&
    typeof metadata === 'object' &&
    'title' in metadata &&
    'date' in metadata &&
    'tags' in metadata &&
    'summary' in metadata &&
    typeof metadata.title === 'string' &&
    typeof metadata.date === 'string' &&
    typeof metadata.tags === 'string' &&
    typeof metadata.summary === 'string'
  ) {
    return {
      href: `/essays/${slug}`,
      title: metadata.title,
      date: metadata.date,
      formated_date: formatDate(metadata.date),
      tags: metadata.tags.split(','),
      summary: metadata.summary,
    };
  }
  throw Error('malformed frontmatter');
};

export const fetchAllEssaySlugs = async () => {
  const postsDirectory = path.join(process.cwd(), 'essays');
  const filenames = await fs.readdir(postsDirectory);
  const essayPaths = filenames.filter((file) => file.endsWith('.md'));
  return essayPaths.map((fullPath) =>
    path.basename(fullPath, path.extname(fullPath))
  );
};

export const slugToAST = async (slug: string) => {
  const postsDirectory = path.join(process.cwd(), 'essays');
  const fullPath = path.join(postsDirectory, slug + '.md');
  const rawContent = await fs.readFile(fullPath, 'utf8');
  return Markdoc.parse(rawContent);
};
