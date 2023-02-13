import { Grid, Column } from '@carbon/react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Guideline } from '../Guideline';
import { Essay } from '../Essay';

const Template = ({ children }) => {
  return (
    <>
      <Grid fullWidth>
        <Header />
        {children}
        <Footer />
      </Grid>
      <Guideline />
    </>
  );
};

export const Layout = ({ path, markdoc, children }) => {
  const isEssay = path.startsWith('/essays/');
  const isEssayIndex = path.startsWith('/essays');
  const isLandingPage = path === '/';

  if (isEssay) {
    return (
      <Template>
        <Essay
          title={markdoc.frontmatter.title}
          date={markdoc.frontmatter.date}
        >
          {children}
        </Essay>
      </Template>
    );
  } else if (isEssayIndex) {
    return <Template>{children}</Template>;
  } else if (isLandingPage) {
    return children;
  }

  return (
    <Template>
      <Grid fullWidth>
        <Column lg={{ offset: 4, span: 8 }}>
          <h1>Something went wrong.</h1>
        </Column>
      </Grid>
    </Template>
  );
};
