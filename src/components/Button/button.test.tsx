import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'


describe('test Button component', () => {

    it('should render the correct default button', () => {
        const wrapper = render(<Button>Hello</Button>)
        const element = wrapper.getByText('Hello')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })

    it('should render the correct component based on different props', () => {

    })

    it('should render a link when btnType wquals link and href is provided', () => {

    })

    it('should render disabled button when disabled ', ()=>{

    })
})