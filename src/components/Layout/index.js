import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { Guideline } from '~/components/Guideline';
import { Essay } from '~/components/Essay';

const Template = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
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
      <h1>Something went wrong.</h1>
    </Template>
  );
};
