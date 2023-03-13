import { promises as fs } from 'fs';
import Markdoc from '@markdoc/markdoc';
import type { Node } from '@markdoc/markdoc';
import path from 'path';
import yaml from 'js-yaml';
import { formatDate } from 'components/Utilities';

type MetadataIn = {
  title: string;
  date: string;
  tags: string;
  summary: string;
};

// TODO not sure this is correct
function isMetadataIn(obj: unknown): obj is MetadataIn {
  return (
    obj &&
    typeof obj === 'object' &&
    'title' in obj &&
    'date' in obj &&
    'tags' in obj &&
    'summary' in obj
  );
}

export type Metadata = {
  href: string;
  title: string;
  date: string;
  formated_date: string;
  tags: Array<string>;
  summary: string;
};

export const getMetadata = (slug: string, ast: Node): Metadata => {
  const metadata = yaml.load(ast.attributes.frontmatter);

  if (isMetadataIn(metadata)) {
    return {
      href: `/essays/${slug}`,
      title: metadata.title,
      date: JSON.stringify(metadata.date),
      formated_date: formatDate(metadata.date),
      tags: metadata.tags.split(','),
      summary: metadata.summary,
    };
  }
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
