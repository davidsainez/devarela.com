import React from 'react';
import glob from 'glob-promise';
import path from 'path';
import Markdoc from '@markdoc/markdoc';
import fs from 'fs';
import { getMetadataFromAST } from 'Data';
import { Paragraph, Heading } from 'components/Article';
import { Essay } from 'components/Essay';
import { Code } from 'components/Code';

const isTag = (tag) => {
  return tag.$$mdtype === 'Tag';
};

function tagName(name, components) {
  return typeof name !== 'string'
    ? name // This can be an object, e.g. when React.forwardRef is used
    : name[0] !== name[0].toUpperCase()
    ? name
    : components instanceof Function
    ? components(name)
    : components[name];
}

function renderMarkdoc(node, React, components) {
  function deepRender(value) {
    if (value == null || typeof value !== 'object') {
      return value;
    }

    if (Array.isArray(value)) {
      return value.map((item) => deepRender(item));
    }

    if (value.$$mdtype === 'Tag') {
      return render(value);
    }

    if (typeof value !== 'object') {
      return value;
    }

    const output = {};
    for (const [k, v] of Object.entries(value)) {
      output[k] = deepRender(v);
    }
    return output;
  }

  function render(node) {
    if (Array.isArray(node)) {
      return React.createElement(React.Fragment, null, ...node.map(render));
    }

    if (node === null || typeof node !== 'object' || !isTag(node)) {
      return node;
    }

    const {
      name,
      attributes: { class: className, ...attrs } = {},
      children = [],
    } = node;

    if (className) {
      attrs.className = className;
    }

    return React.createElement(
      tagName(name, components),
      Object.keys(attrs).length == 0 ? null : deepRender(attrs),
      ...children.map(render)
    );
  }

  return render(node);
}

const components = {
  Paragraph: Paragraph,
  Heading: Heading,
  Code: Code,
};

// Create a React component using Markdoc's React renderer and our list of custom components.
const BlogPostPage = (props) => {
  const { content, metadata } = props;
  const parsedContent = JSON.parse(content);

  return (
    <Essay metadata={metadata}>
      {renderMarkdoc(parsedContent, React, components)}
    </Essay>
  );
};

export default BlogPostPage;

const CONFIG = {
  nodes: {
    paragraph: {
      render: 'Paragraph',
    },
    heading: {
      render: 'Heading',
    },
    fence: {
      render: 'Code',
    },
  },
};

export const getStaticProps = async (context) => {
  // Our Markdown files are stored in the posts/ directory
  const POSTS_DIR = path.join(process.cwd(), 'essays');

  // Generate the local Markdown path from the URL slug
  const {
    params: { slug },
  } = context;
  const fullPath = path.join(POSTS_DIR, slug + '.md');

  // Read the Markdown file contents
  const source = fs.readFileSync(fullPath, 'utf-8');

  // Use Markdoc to create a tree of tokens based on the Markdown file
  const ast = Markdoc.parse(source);

  // Create a renderable tree
  const content = JSON.stringify(Markdoc.transform(ast, CONFIG));
  const metadata = getMetadataFromAST(fullPath, ast);

  // Return the content as a prop to the React component for now
  // We will render the content in the next section
  return {
    props: {
      content,
      metadata,
    },
  };
};

export const getStaticPaths = async () => {
  // Our Markdown files are stored in the posts/ directory
  const POSTS_DIR = path.join(process.cwd(), 'essays');

  // Find all Markdown files in the posts/ directory
  // With The glob-promise library, we can use a one liner to find our Markdown files
  const postPaths = await glob(path.join(POSTS_DIR, '**/*.md'));

  // For each filename, the slug is the filename without the .md extension
  const paths = postPaths.map((postPath) => {
    const slug = path.basename(postPath, path.extname(postPath));
    return { params: { slug } };
  });

  // Return the possible paths
  return { paths, fallback: false };
};
