import { Grid, Column } from '@carbon/react';

export const About = () => {
  return (
    <Column sm={4} md={8} lg={16} xlg={16} max={16}>
      <Grid>
        <Column
          sm={4}
          md={4}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 4 }}
        >
          <h1>About me</h1>
          <p>Hello, my name is David.</p>
        </Column>
      </Grid>
    </Column>
  );
};
