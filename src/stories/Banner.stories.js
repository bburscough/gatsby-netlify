import React from 'react';
import Banner from "../components/Banner"

export default {
  title: 'Banner',
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoUrl: "https://roveconcepts.wistia.com/medias/yg6ybgz0v9",
  mVideoUrl: "https://roveconcepts.wistia.com/medias/g287knbl50",
  imageUrl : "https://cdn.roveconcepts.com/sites/default/files/Still_banner_homesplash.jpg",
  mImageUrl: "https://cdn.roveconcepts.com/sites/default/files/Still_mobile_homesplash.jpg",
  heading: "Refined Luxury Living",
  subHeading: "",
  headingClr: "#ffffff",
  subHeadingClr: "#ffffff",
  btnTxt: "",
  btnClr: "#ffffff",
  btnTxtClr: "#333333",
  link: ""
};

export const withButton = Template.bind({});
withButton.args = {
  videoUrl: "https://roveconcepts.wistia.com/medias/yg6ybgz0v9",
  mVideoUrl: "https://roveconcepts.wistia.com/medias/g287knbl50",
  imageUrl : "https://cdn.roveconcepts.com/sites/default/files/Still_banner_homesplash.jpg",
  mImageUrl: "https://cdn.roveconcepts.com/sites/default/files/Still_mobile_homesplash.jpg",
  heading: "Refined Luxury Living",
  subHeading: "",
  btnTxt: "SHOP NOW",
  btnClr: "#ffffff",
  btnTxtClr: "#333333",
  link: ""
};

export const withSubHeading = Template.bind({});
withSubHeading.args = {
  videoUrl: "https://roveconcepts.wistia.com/medias/yg6ybgz0v9",
  mVideoUrl: "https://roveconcepts.wistia.com/medias/g287knbl50",
  imageUrl : "https://cdn.roveconcepts.com/sites/default/files/Still_banner_homesplash.jpg",
  mImageUrl: "https://cdn.roveconcepts.com/sites/default/files/Still_mobile_homesplash.jpg",
  heading: "Refined Luxury Living",
  subHeading: "Shop with Rove Concepts",
  btnTxt: "SHOP NOW",
  btnClr: "#ffffff",
  btnTxtClr: "#333333",
  link: ""
};


