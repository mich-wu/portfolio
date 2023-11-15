import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/layout';
import Header from '../components/header/header';
import Lead from '../components/lead/lead';
import Text from '../components/text/text';
import Footer from '../components/footer/footer';
import Section from '../components/section/section';
import Hero from '../components/hero/hero';
import Experiences from '../components/experiences/experiences';
import TabContent from '../components/tabs/tabs';

const IndexPage = ({ data }) => {
  const content = data.datoCmsHomepage;

  return (
    <Layout>
      <Header />
      <Section id={'home'}>
        <Hero
          title={content.title}
          image={content.image}
          description={content.description}
          githubUrl={content.githubUrl}
          linkedinUrl={content.linkedinUrl}
        />
      </Section>

      <Section id={'about'}>
        <Lead
          subheading={content.aboutMeHeading}
          heading={content.aboutMeText}
        />
        <Text html text={content.aboutMeDescription} />
      </Section>

      <Section id={'experience'}>
        <Lead
          subheading={content.experienceHeading}
          heading={content.experienceText}
          text={content.experienceDescription}
        />
        <Experiences experiences={content.experiences} />
      </Section>

      <Section id={'components'}>
        <Lead
          subheading={content.myWorkHeading}
          heading={content.myWorkText}
          text={content.myWorkDescription}
        />
        <TabContent components={content.components} />
      </Section>

      <Footer />
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
      image {
        gatsbyImageData(imgixParams: { fit: "crop", w: "106", h: "106" })
      }
      githubHeading
      githubUrl
      linkedinHeading
      linkedinUrl
      getInTouchHeading
      getInTouchLink
      aboutMeHeading
      aboutMeText
      aboutMeDescription
      experienceHeading
      experienceText
      experienceDescription
      myWorkHeading
      myWorkText
      myWorkDescription
      experiences {
        id: originalId
        title
        subtitle
        text
        tags {
          id: originalId
          title
        }
      }
      components {
        id: originalId
        title
        language
        code
      }
    }
  }
`;

export const Head = () => (
  <>
    <title>Michelle Wu</title>
    <meta name="description" content="Michelle Wu" />
  </>
);
