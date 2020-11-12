import React from 'react'
import classNames from 'classnames'

type MenuMode  = 'horizontal' | 'vertical'
interface MenuProps { //TODO这里的interface 为什么要export出去？ 如果这里用了export会报错
     defaultIndex ?:number;
     className ?: string;
     mode ?: MenuMode;
     style ?: React.CSSProperties; //TODO这里是什么意思？
     onSelect ?: (selectIndex: number) => void; //TODO这个是什么意思？
}

const Menu: React.FC<MenuProps> = (props) => {
    const {className, mode, style, children, defaultIndex} = props //TODO这里的children在interface中没定义，那么它是怎么来的
    const classes = classNames('menu', className, {
            [`menu-${mode}`]: mode
        })
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}

//定义组件的默认属性，这是React.FC所支持的
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu