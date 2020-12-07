import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import AutoComplete, {AutoCompleteProps} from './autoComplete'
import { SimpleInput } from '../Input/Input.stories'

const friends = ['pinfa', 'changzhi', 'huangwei', 'hezongdong', 'xujiayi', 'yangjiahua']

export default {
    title:"Component/AutoComplete",
    component:AutoComplete,
} as Meta

const handleFetch = (query: string) => {
    return friends.filter(name => name.includes(query))
}

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete fetchSuggestions={handleFetch} {...args}></AutoComplete>

export const SimpleAutoComplete = Template.bind({})
SimpleInput.args = {value:''} //设置默认