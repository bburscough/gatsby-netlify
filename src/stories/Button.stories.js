import React from 'react';
import Button from "../components/Button"

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "Shop Now",
    black: true,
    outline: false,
    fullWidth: false,
    cap: true,
    func: ()=>{}
};



