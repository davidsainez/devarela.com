import { Grid, Column } from '@carbon/react';
import { formatDate } from '../Utilities';

export const Essay = ({ title, date, children }) => {
  return (
    <>
      <Column
        className="essay__heading"
        sm={4}
        md={8}
        lg={16}
        xlg={16}
        max={16}
      >
        <Grid>
          <Column
            sm={4}
            md={8}
            lg={{ offset: 4, span: 6 }}
            xlg={{ offset: 4, span: 6 }}
            max={{ offset: 5, span: 6 }}
          >
            <h1 className="essay__heading__text">{title}</h1>
          </Column>
        </Grid>
      </Column>
      <Column sm={4} md={8} lg={16} xlg={16} max={16}>
        <Grid fullWidth condensed>
          <Column
            className="essay__date"
            sm={4}
            md={8}
            lg={{ offset: 4, span: 6 }}
            xlg={{ offset: 4, span: 6 }}
            max={{ offset: 5, span: 2 }}
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
