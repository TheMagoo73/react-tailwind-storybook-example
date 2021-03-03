import React from 'react';
import Logo from './Logo';

export default {
  title: 'Application/Component Library/Logo',
  component: Logo,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <Logo />

export const Default = Template.bind({})
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}