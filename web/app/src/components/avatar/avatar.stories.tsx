import { ComponentMeta, ComponentStory } from "@storybook/react";

import Avatar from "./avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Sterling Archer",
};

export const Image = Template.bind({});
Image.args = {
  ...Default.args,
  imageUrl: "https://initiate.alphacoders.com/images/943/cropped-150-150-943275.jpg?6484",
};

export const Large = Template.bind({});
Large.args = {
  ...Image.args,
  size: "lg",
};

export const Online = Template.bind({});
Online.args = {
  ...Image.args,
  status: "online",
};

export const Offline = Template.bind({});
Offline.args = {
  ...Image.args,
  status: "offline",
};
