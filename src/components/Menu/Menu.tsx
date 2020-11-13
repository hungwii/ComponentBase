import React, {useState, createContext} from 'react'
import classNames from 'classnames'
import { deflate } from 'zlib'

type MenuMode  = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void
interface MenuProps { //TODO这里的interface 为什么要export出去？ 如果这里用了export会报错
     defaultIndex ?:number;
     className ?: string;
     mode ?: MenuMode;
     style ?: React.CSSProperties; //TODO这里是什么意思？
     onSelect ?: SelectCallback; //TODO这个是什么意思？
}

interface IMenuContext {
    index: number;
    onSelect ?:SelectCallback;

}

export const MenuContext = createContext<IMenuContext>({index: 0}) //里面是初始值

const Menu: React.FC<MenuProps> = (props) => {
    const {className, mode, style, children, defaultIndex, onSelect} = props //TODO这里的children在interface中没定义，那么它是怎么来的
    const [currentActive, setActive] =  useState(defaultIndex) //我这里的setActive颜色不对
    const classes = classNames('menu', className, {
            [`menu-${mode}`]: mode
        })
    

    const handleClick = (index: number) => {
        setActive(index)
        if(onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect : handleClick,
    }
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

//定义组件的默认属性，这是React.FC所支持的
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu