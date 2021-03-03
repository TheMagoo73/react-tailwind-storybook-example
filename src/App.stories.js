import React from 'react';
import App from './App';

export default {
  title: 'Application/Layout/App',
  component: App,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <App />

export const Default = Template.bind({})
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}