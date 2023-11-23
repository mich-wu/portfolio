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
import Components from '../components/components/components';
import AboutMe from '../components/about-me/about-me';

const IndexPage = ({ data }) => {
  const content = data.datoCmsHomepage;

  return (
    <Layout>
      <Section id={'home'}>
        <Hero
          title={content.title}
          image={content.image}
          description={content.description}
          githubUrl={content.githubUrl}
          linkedinUrl={content.linkedinUrl}
        />
        <AboutMe
          aboutMeHeading={content.aboutMeHeading}
          aboutMeDescription={content.aboutMeDescription}
          aboutMeText={content.aboutMeText}
        />
      </Section>

      {/* <Section id={'about'}>
        <Lead
          subheading={content.aboutMeHeading}
          heading={content.aboutMeText}
        />
        <Text html text={content.aboutMeDescription} />
      </Section> */}

      <Section id={'experience'}>
        <Lead
          subheading={content.experienceHeading}
          heading={content.experienceText}
          text={content.experienceDescription}
        />
        <Experiences experiences={content.experiences} />
      </Section>
      <Components components={content.components} />
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
        gatsbyImageData(imgixParams: { fit: "crop", w: "300", h: "300" })
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
        link
        codeBlocks {
          id: originalId
          title
          language
          code
        }
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
