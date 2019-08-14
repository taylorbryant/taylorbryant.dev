const { format } = require(`date-fns`);

import Container from "./container";
import HeroSection from "./hero-section";
import Layout from "./layout";

function Post(props) {
  return (
    <Layout>
      <HeroSection>
        <p className="mb-2 text-white tracking-widest uppercase">{format(props.meta.date, `MMMM D, YYYY`)}</p>
        <h2 className="font-black text-4xl text-white">
          {props.meta.title}
        </h2>
        <p className="text-2xl text-white">{props.meta.summary}</p>
      </HeroSection>
      <Container>
        <div className="markdown-body">{props.children}</div>
      </Container>
    </Layout>
  );
}

export default Post;