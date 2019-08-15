import Link from "next/link";
import React from "react";

import Card from "../components/card";
import Container from "../components/container";
import HeroSection from "../components/hero-section";
import Layout from "../components/layout";
import posts from "../data/posts";

function Home() {
  return (
    <Layout>
      <HeroSection>
        <h1 className="font-black text-4xl text-white">
          Hi, I&#39;m Taylor Bryant.
        </h1>
        <p className="text-2xl text-white">
          I&#39;m a software engineer from Memphis, TN. I build software
          products using React, Next.js, and GraphQL.
        </p>
      </HeroSection>

      <section className="mt-4">
        <Container>
          <h2 className="font-black mb-4 md:mb-8 text-2xl uppercase">
            Open Source
          </h2>

          {[
            {
              title: `Gatsby Starter Tailwind`,
              description: `A Gatsby starter styled using Tailwind CSS`,
              url: `https://github.com/taylorbryant/gatsby-starter-tailwind`
            },
            {
              title: `Tailwind Next`,
              description: `A Next.js starter styled using Tailwind CSS`,
              url: `https://github.com/taylorbryant/tailwind-next`
            },
            {
              title: `Tailwind Jekyll`,
              description: `A starter kit for using Tailwind CSS with Jekyll`,
              url: `https://github.com/taylorbryant/tailwind-jekyll`
            }
          ].map(repository => (
            <a
              href={repository.url}
              key={repository.title}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Card body={repository.description} heading={repository.title} />
            </a>
          ))}
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="font-black mb-4 md:mb-8 text-2xl uppercase">Blog</h2>

          {posts.map(post => (
            <Link href={post.path} key={post.title}>
              <a>
                <Card body={post.summary} heading={post.title} />
              </a>
            </Link>
          ))}
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
