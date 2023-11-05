import React from 'react';
import cn from 'classnames';
import style from './services.mod.scss';
import Grid from '../layout/grid/grid';
import Blurb from './blurb';
import Container from '../layout/container/container';
import Lead from '../lead/lead';
import Spacing from '../layout/spacing/spacing';

const Services = () => {
  const classes = cn(style.services);

  const items = [
    {
      heading: 'Share team inboxes',
      text: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    },
    {
      heading: 'Deliver instant answers',
      text: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
      heading: 'Manage your team with reports',
      text: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    },
    {
      heading: 'Connect with customers',
      text: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    },
    {
      heading: 'Connect the tools you already use',
      text: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
      heading: 'Our people make the difference',
      text: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
  ];

  return (
    <div className={classes}>
      <Spacing pb={4}>
        <Lead
          heading={'Feels like its from the future'}
          subheading={'Study + Experience'}
          text={
            'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'
          }
        />
      </Spacing>
      <Container size="xl" gutters>
        <Grid sm={2} md={3} gap={3}>
          {items.map((blurb, i) => (
            <Blurb {...blurb} key={i} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
