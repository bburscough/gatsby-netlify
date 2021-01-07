import React from 'react';
import Footer from "../components/Footer"

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  menu: [
    {title: "Help",
      titleLink: "",
      submenu: [
        {title: "Visit Us", link: ""},
        {title: "Contact Us", link: ""},
        {title: "FAQ", link: ""},
        {title: "Store Policy", link: ""},
        {title: "Returns Refund Claims", link: ""},
      ]
    },{title: "Discover",
      titleLink: "",
      submenu: [
        {title: "Sale", link: ""},
        {title: "Membership", link: ""},
        {title: "Swatches", link: ""},
        {title: "Trade Program", link: ""},
        {title: "Our Story", link: ""},
      ]
    }
  ],
  fb: "https://www.facebook.com/roveconcepts",
  tw: "https://twitter.com/roveconcepts/",
  ig: "https://www.instagram.com/roveconcepts/",
  pinterest: "https://www.pinterest.ca/roveconcepts/",
  houzz: "https://www.houzz.com/professionals/furniture-and-accessories/rove-concepts-pfvwus-pf~310544994?"
};



