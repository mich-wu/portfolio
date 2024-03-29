import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/layout';
import Lead from '../components/lead/lead';
import Section from '../components/section/section';
import Hero from '../components/hero/hero';
import Experiences from '../components/experiences/experiences';
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
          cv={content.cv.url}
        />
        <AboutMe
          aboutMeHeading={content.aboutMeHeading}
          aboutMeDescription={content.aboutMeDescription}
          aboutMeText={content.aboutMeText}
        />
      </Section>
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
        gatsbyImageData(imgixParams: { fit: "crop", w: "500", h: "500" })
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
      cv {
        url
      }
      components {
        id: originalId
        title
        link
        codeBlocks {
          id: originalId
          title
          text
          language
          code
          media {
            gatsbyImageData(imgixParams: { w: "640" })
          }
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
