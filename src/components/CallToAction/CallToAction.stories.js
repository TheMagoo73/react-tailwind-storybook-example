import React from 'react';
import CallToAction from './CallToAction';

export default {
  title: 'Application/Component Library/CallToAction',
  component: CallToAction,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <CallToAction />

export const Default = Template.bind({})
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}