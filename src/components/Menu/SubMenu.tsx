import React, {useContext} from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps} from './MenuItem'

export interface SubMenuProps {
    index ?: number;
    title : string;
    className ?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({index, title, children, className}) => {
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, idx)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem') {
                return childElement
            } else {
                console.error('Warning: SubMenu has a child which is not a MenuItem')
            }
        })

        return (
            <ul className='submenu'>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li className={classes} key={index}>
            <div className='submenu-title'>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu