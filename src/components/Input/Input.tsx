import React, { FC, InputHTMLAttributes, ReactElement } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'


type InputSize = 'large' | 'small'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
    disabled ?: boolean;
    size ?: InputSize;
    icon ?: IconProp;
    prepend ?: string | ReactElement; //这里为什么是ReactElement
    append ?: string | ReactElement;
}

const Input:FC<InputProps> = (props) => {
    //取出各种属性
    const {
        className,
        disabled,
        size,
        icon,
        prepend,
        append,
        style,
        ...restProps
    } = props
    //根据属性计算不同的className
    const classes = classNames('input', className, {
        [`input-${size}`]:size,
        'input-group' : prepend || append,
        'input-group-append': !!append,
        'is-disabled':disabled,

    })

    return (
        //根据属性判断是否要添加特定的顶点
        <>
            <div className={classes} style={style}>
                {prepend && <div className='he-input-group-prepend'>{prepend}</div>}
                {icon && <div className='icon-wrapper'><Icon icon={icon} title={`title-${icon}`}/></div>}
                <input
                    className='hw-input-inner'
                    disabled={disabled}
                    {...restProps}
                ></input>
                {append && <div className='hw-input-group-append'>{append}</div>}
            </div>
        </>
    )
}

Input.defaultProps = {
    size: 'small',
    disabled: false,
}

export default Input