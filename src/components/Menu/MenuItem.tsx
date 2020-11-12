import React, { Children } from 'react' //TODO:React帮我自动引入的这个Children是一个什么东西？
import classNames from 'classnames'

export interface MenuItemProps {
    index ?: number; //用来和defalutIndex做比较，进行高亮
    disabled ?: boolean;
    className ?: string;
    style ?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {index, disabled, children, className, style} = props
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,


    })
    return (
        <li className={classes} style={style}>
            {children}
        </li>
    )
}

export default MenuItem