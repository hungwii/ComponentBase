import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'
import Input, {InputProps} from './Input'

export default {
    title:"Component/Input",
    component: Input,
} as Meta

const Template: Story<InputProps>= (args) => <Input {...args} />

export const SimpleInput = Template.bind({})
SimpleInput.args = {size:'large'}