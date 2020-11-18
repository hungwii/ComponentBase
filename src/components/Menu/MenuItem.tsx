import React, {useContext} from 'react' //TODO:React帮我自动引入的这个Children是一个什么东西？
import classNames from 'classnames'
import {MenuContext} from './Menu'

export interface MenuItemProps {
    index : number; //用来和defalutIndex做比较，进行高亮
    disabled ?: boolean;
    className ?: string;
    style ?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {index, disabled, children, className, style} = props
    const context = useContext(MenuContext)
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active':context.index === index
    })
    const handleClick = () => {
        if (context.onSelect && !disabled) { //disable的时候是防止调用click
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}

export default MenuItem