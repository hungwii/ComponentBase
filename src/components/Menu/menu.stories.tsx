import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Menu ,{ MenuProps }from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export default {
    title: 'Component/Menu',
    component: Menu
} as Meta
const Template :Story<MenuProps>= (args) => {
    return (
        <Menu {...args}>
            <MenuItem>apple</MenuItem>
            <MenuItem>banana</MenuItem>
            <MenuItem>orange</MenuItem>
            <SubMenu title='vegetable'>
                <MenuItem>tomato</MenuItem>
                <MenuItem>potato</MenuItem>
                <MenuItem>onion</MenuItem>
            </SubMenu>
        </Menu>
    )
}
export const simpleMenu = Template.bind({})
simpleMenu.args = {} //设置默认的属性,对象内为空相当于不设置



