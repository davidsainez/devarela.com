import { Grid, Column } from '@carbon/react';

export const Heading = ({ children }) => {
  return (
    <Grid>
      <Column
        sm={4}
        md={6}
        lg={{ offset: 4, span: 6 }}
        xlg={{ offset: 4, span: 6 }}
        max={{ offset: 5, span: 6 }}
      >
        <h2 className="article__heading">{children}</h2>
      </Column>
    </Grid>
  );
};

export const Paragraph = ({ children }) => {
  return (
    <Grid>
      <Column
        sm={4}
        md={6}
        lg={{ offset: 4, span: 6 }}
        xlg={{ offset: 4, span: 6 }}
        max={{ offset: 5, span: 5 }}
      >
        <p className="article__paragraph">{children}</p>
      </Column>
    </Grid>
  );
};
