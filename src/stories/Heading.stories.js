import React from 'react';
import Heading from "../components/Heading"

export default {
  title: 'Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/dresdenstl%20homepage_0.png",
  text: "Shop the look",
  square: false
};



