import { Template } from '~/components/Template';
import { Grid, Column } from '@carbon/react';

const Contact = () => {
  return (
    <>
      <Template path="/contact" />
      <Column sm={4} md={8} lg={16} xlg={16} max={16}>
        <Grid>
          <Column
            sm={4}
            md={4}
            lg={{ offset: 4, span: 6 }}
            xlg={{ offset: 4, span: 6 }}
            max={{ offset: 5, span: 4 }}
          >
            <h1>Contact</h1>
            <p>Hello, my name is David.</p>
          </Column>
        </Grid>
      </Column>
    </>
  );
};

export default Contact;
