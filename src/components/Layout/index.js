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
  const isMe = path === '/me';
  const isLandingPage = path === '/';

  if (isEssay) {
    const tags =
      markdoc.frontmatter.tags === undefined
        ? undefined
        : markdoc.frontmatter.tags.split(',');

    return (
      <Template>
        <Essay
          url={`https://devarela.com${path}`}
          title={markdoc.frontmatter.title}
          description={markdoc.frontmatter.description}
          tags={tags}
          date={markdoc.frontmatter.date}
        >
          {children}
        </Essay>
      </Template>
    );
  } else if (isEssayIndex) {
    return <Template>{children}</Template>;
  } else if (isLandingPage) {
    return <Template>{children}</Template>;
  } else if (isMe) {
    return <Template>{children}</Template>;
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
