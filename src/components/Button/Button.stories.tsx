import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, {BaseButtonProps}from './Button';

export default {
    title: 'Component/Button',
    component: Button,
} as Meta

const Template: Story<BaseButtonProps>= (args) => <Button {...args}> Hw Button </Button>

export const Primary = Template.bind({})
Primary.args = { btnSize: 'large', btnType: 'primary'} //这句话是设置展示的时候的默认状态的