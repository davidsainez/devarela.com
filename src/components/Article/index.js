import { Grid, Column } from '@carbon/react';

export const Heading = ({ children }) => {
  return (
    <Grid>
      <Column lg={{ offset: 4, span: 6 }} sm={4}>
        <h2 className="article__heading">{children}</h2>
      </Column>
    </Grid>
  );
};

export const Paragraph = ({ children }) => {
  return (
    <Grid>
      <Column lg={{ offset: 4, span: 6 }} sm={4}>
        <p className="article__paragraph">{children}</p>
      </Column>
    </Grid>
  );
};
