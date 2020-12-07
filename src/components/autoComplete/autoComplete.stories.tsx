import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import AutoComplete, {AutoCompleteProps, DataSourceType} from './autoComplete'
import {action} from '@storybook/addon-actions'
import { SimpleInput } from '../Input/Input.stories'

interface peopleProps {
    value: string;
    number: number;
}
// const friends = ['pinfa', 'changzhi', 'huangwei', 'hezongdong', 'xujiayi', 'yangjiahua']
const nameWithNumber  = [
    {value:'huangwei', number:1},
    {value:'yangjiahua', number:2},
    {value:'xujiayi', number:3},
    {value:'hezongdong', number:4},
    {value:'zhaiyaoyong', number:5},
    {value:'liangchaohua', number:6},
]
export default {
    title:"Component/AutoComplete",
    component:AutoComplete,
} as Meta

const renderOption = (item:DataSourceType<peopleProps>) => {
    return (
        <>
            <h2>name: {item.value}</h2>
            <p>number: {item.number}</p>
        </>
    )

}
// const handleFetch = (query: string) => {
//     return friends.filter(name => name.includes(query))
// }
 
const handleFetch = (query: string) => {
    return nameWithNumber.filter(people => people.value.includes(query))
}

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete fetchSuggestions={handleFetch}  onSelect={action('selected')} renderOption={renderOption } {...args}></AutoComplete>

export const SimpleAutoComplete = Template.bind({})
SimpleInput.args = {value:'',} //设置默认