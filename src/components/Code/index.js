import React from 'react';
import { CodeSnippet, Theme, Grid, Column } from '@carbon/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';

const getText = (children) => {
  let text = '';

  React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      text += child;
    }
  });

  return text;
};

export const InlineCode = ({ content }) => {
  return <CodeSnippet type="inline">{content}</CodeSnippet>;
};

export const Code = ({ children }) => {
  return (
    <Grid>
      <Column lg={{ offset: 4, span: 8 }}>
        <Theme theme="g100">
          <Highlight
            {...defaultProps}
            theme={oceanicNext}
            code={getText(children)}
            language="jsx"
          >
            {({ className, tokens, getLineProps, getTokenProps }) => (
              <CodeSnippet type="multi" className={`code__block ${className}`}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </CodeSnippet>
            )}
          </Highlight>
        </Theme>
      </Column>
    </Grid>
  );
};
