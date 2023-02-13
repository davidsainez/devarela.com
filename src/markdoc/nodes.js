import { Heading, Paragraph } from '../components/Article';
import { Code, InlineCode } from '../components/Code';

export const paragraph = {
  render: Paragraph,
};

export const heading = {
  render: Heading,
};

export const fence = {
  render: Code,
};

export const code = {
  render: InlineCode,
  children: ['inline'],
  attributes: {
    content: { type: String },
  },
};
