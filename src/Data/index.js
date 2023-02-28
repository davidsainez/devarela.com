import { promises as fs } from 'fs';
import Markdoc from '@markdoc/markdoc';
import path from 'path';
import yaml from 'js-yaml';
import { formatDate } from '~/components/Utilities';

export const slug = (postPath) => {
  return path.basename(postPath, path.extname(postPath));
};

export const getMetadataFromAST = (postPath, ast) => {
  const metadata = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {};

  const filename = 'pareto';

  return {
    href: `/essays/${slug(postPath)}`,
    title: metadata.title,
    date: metadata.date.toJSON(),
    formated_date: formatDate(metadata.date),
    tags: metadata.tags === undefined ? [] : metadata.tags.split(','),
    summary: metadata.summary,
  };
};

export const fetchEssayMetadata = async () => {
  const postsDirectory = path.join(process.cwd(), 'essays');
  const filenames = await fs.readdir(postsDirectory);
  const markdownFiles = filenames.filter((file) => file.endsWith('.md'));

  const essays = markdownFiles.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const ast = Markdoc.parse(fileContents);
    return getMetadataFromAST(filePath, ast);
  });

  return await Promise.all(essays);
};
