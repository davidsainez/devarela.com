import { promises as fs } from 'fs';
import Markdoc from '@markdoc/markdoc';
import yaml from 'js-yaml';
import path from 'path';
import { EssayIndex } from '../../components/EssayIndex';
import { formatDate } from '../../components/Utilities';

const EssayIndexLayout = ({ essays }) => {
  return <EssayIndex essays={essays} />;
};

export default EssayIndexLayout;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src/pages/essays');
  const filenames = await fs.readdir(postsDirectory);
  const markdownFiles = filenames.filter((file) => file.endsWith('.md'));

  const essays = markdownFiles.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const ast = Markdoc.parse(fileContents);
    const metadata = ast.attributes.frontmatter
      ? yaml.load(ast.attributes.frontmatter)
      : {};

    return {
      href: `/essays/${filename.slice(0, -3)}`,
      title: metadata.title,
      date: metadata.date.toJSON(),
      formated_date: formatDate(metadata.date),
      description: metadata.description,
    };
  });

  return {
    props: {
      essays: await Promise.all(essays),
    },
  };
}
