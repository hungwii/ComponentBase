import React, {useContext, useState} from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps} from './MenuItem'

export interface SubMenuProps {
    index ?: string;
    title : string;
    className ?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({index, title, children, className}) => {
    const context = useContext(MenuContext)
    const openedSubMenus = context.defaultOpenSubMenu as Array<string>
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [menuOpen, setOpen] = useState(isOpened)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })
    const handleClick = (e:React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle:boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }

    const clickEvent = context.mode === 'vertical' ? {onClick:handleClick} : {}
    const hoverEvent = context.mode === 'horizontal' ? {
        onMouseEnter: (e:React.MouseEvent) => {handleMouse(e, true)},
        onMouseLeave: (e:React.MouseEvent) => {handleMouse(e, false)}
    } : {}

    const renderChildren = () => {
        const subMenuClasses = classNames('submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child, idx)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {index:`${index}-${idx}`})
            } else {
                console.error('Warning: SubMenu has a child which is not a MenuItem')
            }
        })

        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li className={classes} key={index} {...hoverEvent}>
            <div className='submenu-title' {...clickEvent}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu