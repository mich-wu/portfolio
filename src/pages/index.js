import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/layout';
import Header from '../components/header/header';
import Social from '../components/social/social';
import Footer from '../components/footer/footer';
import Section from '../components/section/section';
import Container from '../components/layout/container/container';
import Spacing from '../components/layout/spacing/spacing';
import Lead from '../components/lead/lead';
import Image from '../components/image/image';
import imgSrc from '../images/person.jpg';
import Services from '../components/services/services';

const IndexPage = ({ data }) => {
  const { title, description } = data.datoCmsHomepage;

  return (
    <Layout>
      <Header />
      <Section id={'about'}>
        <Container gutters>
          <Spacing pt={6} pb={6}>
            <Lead heading={title} subheading={'Design'} text={description} />
            <Spacing pt={3}>
              <Image image={imgSrc} />
            </Spacing>
          </Spacing>
        </Container>
      </Section>
      <Section id={'study'}>
        <Container bg="white" gutters>
          <Spacing pt={6} pb={6}>
            <Services />
          </Spacing>
        </Container>
      </Section>
      <Section id={'portfolio'}>
        <Container bg="white" gutters>
          <Spacing pt={6} pb={6}>
            <Services />
          </Spacing>
        </Container>
      </Section>
      <Section id={'contact'}>
        <Spacing pt={6} pb={8}>
          <Social />
        </Spacing>
      </Section>
      {/* <Footer /> */}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    datoCmsHomepage {
      id: originalId
      title
      description
    }
  }
`;

export const Head = () => (
  <>
    <title>Gatsby Starter Basic</title>
    <meta name="description" content="Gatsby Starter Basic." />
  </>
);
