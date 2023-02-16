import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "@components/button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Button {...args}>Button</Button>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "md",
  bgColor: "#000",
  textColor: "#FFF",
};
