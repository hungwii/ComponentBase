import React from 'react'
import { fireEvent, render, RenderResult, cleanup, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom' 



import Menu, {MenuProps} from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
const testProps: MenuProps = {
    defaultIndex : '0',
    onSelect : jest.fn(),
    className : 'test',
}

const testVerProps: MenuProps = {
    defaultIndex : '0',
    mode : 'vertical',
}

const generateMenu = (props:MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem >
                active
            </MenuItem>
            <MenuItem disabled>
                disabled
            </MenuItem>
            <MenuItem>
                hungwii 
            </MenuItem>
            <MenuItem>
                hello
            </MenuItem>
            <SubMenu title="dropdown">
                <MenuItem>
                    drop1
                </MenuItem>

            </SubMenu>
        </Menu>
    )
}
const createStlyeFile = () =>{
    const cssFile: string = `
        .submenu {
            display:none;
        }
        .submenu.menu-opened {
            display:block;
        }
    `
    const style = document.createElement('style') 
    style.innerHTML = cssFile
    return style
}
let wrapper:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement
describe('test Menu and MenuItem component', () => {
    beforeEach(() =>{
        wrapper = render(generateMenu(testProps))
        wrapper.container.append(createStlyeFile())
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render correct Menu and MenuItem based on default props', ()=>{
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('menu')
        // expect(menuElement.getElementsByTagName('li').length).toEqual(4)
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
        
    })
    it('click items should change active and call the right callback', ()=>{
        const thirdItem = wrapper.getByText('hungwii')
        fireEvent.click(thirdItem) //模拟点击第三个菜单按钮
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disabledElement) //模拟点击disableElement
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
    })
    it('should render vertical mode when mode is set to vertical', ()=>{
        cleanup() //因为beforeEach渲染一次，这里又渲染一次，会产生重复。所以调用函数清除之前的
        const wrapper = render(generateMenu(testVerProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
    it('should show dropdown items when hover on sunMenu', async()=> {
        expect(wrapper.queryByText('drop1')).not.toBeVisible()
        const dropdownElement = wrapper.getByText('dropdown')
        fireEvent.mouseEnter(dropdownElement)
        await waitFor(() => {
            expect(wrapper.queryByText('drop1')).toBeVisible()
        })
        fireEvent.click(wrapper.getByText('drop1'))
        expect(testProps.onSelect).toHaveBeenCalledWith('4-0')
        fireEvent.mouseLeave(dropdownElement)
        await waitFor(() => {
            expect(wrapper.queryByText('drop1')).not.toBeVisible()
        })
    })
    
})