import React from 'react';
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import Markdoc from '@markdoc/markdoc';
import { slugToAST, getMetadata, Metadata, fetchAllEssaySlugs } from 'Data';
import { render, nodeConfig } from 'Markdoc';
import { Paragraph, Heading, List } from 'components/Article';
import { Essay } from 'components/Essay';
import { Code } from 'components/Code';

const components = {
  Paragraph: Paragraph,
  Heading: Heading,
  Code: Code,
  List: List,
};

const EssayPage = ({
  content,
  metadata,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Essay metadata={metadata}>
      {render(JSON.parse(content), React, { components })}
    </Essay>
  );
};

export default EssayPage;

type StaticProps = {
  content: string;
  metadata: Metadata;
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  // Generate the local Markdown path from the URL slug
  let { slug } = context.params;
  if (Array.isArray(slug)) {
    throw Error('this should not occur');
  }

  const ast = await slugToAST(slug);
  const metadata = getMetadata(slug, ast);
  // Create a renderable tree
  const content = JSON.stringify(Markdoc.transform(ast, nodeConfig));

  return {
    props: {
      content,
      metadata,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchAllEssaySlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};
