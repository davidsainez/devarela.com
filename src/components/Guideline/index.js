import { Grid, Column } from '@carbon/react';

export const Guideline = () => {
  return (
    <Grid fullWidth condensed className="guideline__container">
      <Column
        lg={{ offset: 4, span: 2 }}
        md={8}
        sm={4}
        className="guideline__column__edge"
      />
      <Column
        lg={{ offset: 6, span: 2 }}
        md={8}
        sm={4}
        className="guideline__column__center"
      />
      <Column
        lg={{ offset: 8, span: 2 }}
        md={8}
        sm={4}
        className="guideline__column__center"
      />
      <Column
        lg={{ offset: 10, span: 2 }}
        md={8}
        sm={4}
        className="guideline__column__center"
      />
      <Column
        lg={{ offset: 12, span: 2 }}
        md={8}
        sm={4}
        className="guideline__column__edge"
      />
    </Grid>
  );
};
