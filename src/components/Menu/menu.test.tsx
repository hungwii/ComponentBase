import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import Menu, {MenuProps} from './Menu'
import MenuItem from './MenuItem'

const testProps: MenuProps = {
    defaultIndex : 0,
    onSelect : jest.fn(),
    className : 'test',
}

const testVerProps: MenuProps = {
    defaultIndex : 0,
    mode : 'vertical',
}

const generateMenu = (props:MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>
                active
            </MenuItem>
            <MenuItem disabled index={1}>
                disabled
            </MenuItem>
            <MenuItem index={2}>
                hungwii 
            </MenuItem>
            <MenuItem index={3}>
                hello
            </MenuItem>
        </Menu>
    )
}
let wrapper:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement
describe('test Menu and MenuItem component', () => {
    beforeEach(() =>{
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render correct Menu and MenuItem based on default props', ()=>{
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('menu')
        expect(menuElement.getElementsByTagName('li').length).toEqual(4)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
        
    })
    it('click items should change active and call the right callback', ()=>{
        // TODO：完成剩下的测试文件，看下怎么运行测试文件
    })
    it('should render vertical mode when mode is set to vertical', ()=>{

    })
})