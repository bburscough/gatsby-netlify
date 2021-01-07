import React from 'react';
import VerticalProductImageCard from "../components/VerticalProductImageCard"

export default {
  title: 'Vertical Product Image Card',
  component: VerticalProductImageCard,
};

const Template = (args) => <VerticalProductImageCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_display_Milo_Sectional_FRONT_ClassicTweed_Overcast_0.jpg",
  hoverImage: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_Display_Milo_Modular_Sectional_Alesund_Modern_Felt_Update_View03.jpg",
  title: "Milo Modular Sectional",
  link: "#"
};



