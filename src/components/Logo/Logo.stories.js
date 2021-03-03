import React from 'react';
import Logo from './Logo';

export default {
  title: 'Application/Component Library/Logo',
  component: Logo,
  argTypes: {
      size: {control: 'text'}
  }
}

const Template = (args) => <Logo {...args}/>

export const Default = Template.bind({})
Default.args = {
    size: 'xl'
}

export const Small = Template.bind({})
Small.args = {
    size: 'sm'    
}

export const Medium = Template.bind({})
Medium.args = {
    size: 'md'    
}

export const Large = Template.bind({})
Large.args = {
    size: 'lg'    
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
    size: 'xl'    
}