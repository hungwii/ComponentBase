import React from 'react'
import {render, fireEvent, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button, {ButtonProps, ButtonType, ButtonSize} from './Button'
const defaultProps = {
    onClick: jest.fn()
}
const disableProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn() //TODO:这句话是什么意思
}



describe('test Button component', () => {

    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Hello</Button>)
        const element = wrapper.getByText('Hello') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON') //TOD这个是什么？
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })

    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button btnType={ButtonType.Primary} btnSize={ButtonSize.Large}>Hello</Button>) //TODO为什么enum没办法做到双向映射
        const element  = wrapper.getByText("Hello")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-primary btn-large')
    })

    it('should render a link when btnType wquals link and href is provided', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href='http://hello'>Link</Button>)
        const element = wrapper.getByText("Link")
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual("A") //TODO这个是什么？
        expect(element).toHaveClass('btn btn-link')

    })

    it('should render disabled button when disabled ', ()=>{
        const wrapper = render(<Button disabled={true}>disableButton</Button>)
        const element = wrapper.getByText("disableButton") as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disableProps.onClick).not.toHaveBeenCalled()

    })
})