import * as React from 'react';
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

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Section id={'about'}>
        <Container gutters>
          <Spacing pt={6} pb={6}>
            <Lead
              heading={'UX Reviews'}
              subheading={'Design'}
              text={
                'How do you create compelling presentations that wow your colleagues and impress your managers? Here is how to get started.'
              }
            />
            <Spacing pt={3}>
              <Image image={imgSrc} />
            </Spacing>
          </Spacing>
        </Container>
      </Section>
      <Section id={'services'}>
        <Container bg='white' gutters>
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
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Gatsby Starter Basic</title>
    <meta name="description" content="Gatsby Starter Basic." />
  </>
);
