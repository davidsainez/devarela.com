import { Grid, Column } from '@carbon/react';
import { formatDate } from '../Utilities';

export const Essay = ({ title, date, children }) => {
  return (
    <>
      <Column lg={16} md={8} sm={4} className="essay__heading">
        <Grid>
          <Column lg={{ offset: 4, span: 6 }} md={8} sm={4}>
            <h1 className="essay__heading__text">{title}</h1>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4}>
        <Grid fullWidth condensed>
          <Column
            lg={{ offset: 4, span: 6 }}
            md={8}
            sm={4}
            className="essay__date"
          >
            <p className="essay__date__text">{formatDate(date)}</p>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4}>
        {children}
      </Column>
    </>
  );
};
