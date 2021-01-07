import React from 'react';
import ImageWTextHoverCard from "../components/ImageWTextHoverCard"

export default {
  title: 'Image With hover Text Card',
  component: ImageWTextHoverCard,
};

const Template = (args) => <ImageWTextHoverCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/dresdenstl%20homepage_0.png",
  text: "Shop the look",
  width:""
};



