import React, { FC, useState, ChangeEvent, ReactElement} from 'react'
import Input, { InputProps }from '../Input/Input'

interface DataSourceObject {
    value:string;
} 

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[];
    onSelect ?: (item: DataSourceType) => void;
    renderOption?: (item:DataSourceType) => ReactElement;

}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        value,
        onSelect,
        renderOption,
        ...restProps
    } = props

    //使用useState去监控输入框中数据的改变
    const [inputValue, setInputValue] = useState(value)
    const [suggestions, setSuggestions] = useState<DataSourceType[]>([])

    console.log(suggestions)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setInputValue(value)

        if (value) {
            const result = fetchSuggestions(value)
            setSuggestions(result)
        } else {
            setSuggestions([]) 
        }
    }

    const handleSelect = (item:DataSourceType) => {
        setInputValue(item.value) //把选择到的放到输入框
        setSuggestions([]) //之后把推荐框清空
        if(onSelect) { //这个onSelect触发有什么用
            onSelect(item)
        }
    }

    const renderTemplate = (item:DataSourceType) => {
        return renderOption ? renderOption(item) : item
    }

    //写一个返回列表的函数
    const generateDropdown = () => {
        return (
            <ul>
                {suggestions.map((item,index) => {
                    return (
                        <li key={index} onClick={() => handleSelect(item)}>
                            {renderTemplate(item)}
                        </li>
                    )
                })}
            </ul>
        )
    }
    return(
        <div className='hw-auto-complete'>
            <Input
                value={inputValue}
                onChange={handleChange}
                {...restProps}
            ></Input>
            {(suggestions.length > 0) && generateDropdown()}

        </div>
    )

}
export default AutoComplete