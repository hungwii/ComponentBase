import React, { FC, useState, ChangeEvent} from 'react'
import Input, { InputProps }from '../Input/Input'

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => string[]
    onSelect ?: (item: string) => void 
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        value,
        onSelect,
        ...restProps
    } = props

    //使用useState去监控输入框中数据的改变
    const [inputValue, setInputValue] = useState(value)
    const [suggestions, setSuggestions] = useState<string[]>([])

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

    return(
        <div className='hw-auto-complete'>
            <Input
                value={inputValue}
                onChange={handleChange}
                {...restProps}
            ></Input>

        </div>
    )

}