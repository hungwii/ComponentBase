import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'
import Icon, {IconProps} from './Icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default {
    title:'Component/Icon',
    component: Icon,
}as Meta

const Template :Story<IconProps> = (args) => <Icon {...args} ></Icon>

export const simpleIcon = Template.bind({})
simpleIcon.args = {icon:'angry' ,theme:'primary', size:'10x'}
