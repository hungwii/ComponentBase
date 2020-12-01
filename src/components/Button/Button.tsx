import React  from 'react'
import classNames from 'classnames'
type ButtonType = 'primary' | 'default' | 'danger' | 'link'
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link',

// }
type ButtonSize = 'large' | 'small'
// export enum ButtonSize {
//     Large = 'large',
//     Small = 'small',
// }

interface BaseButtonProps {
    disabled ?: boolean;
    btnSize ?: ButtonSize;
    btnType ?: ButtonType;
    href ?: string;
    children ?: React.ReactNode; 
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button:React.FC<ButtonProps> = (props) => {
    const {
        disabled,
        className,
        btnSize,
        btnType,
        href,
        children,
        ...restProps
    } = props
    const classes = classNames('btn', className, {
        [`btn-${btnSize}`] : btnSize,
        [`btn-${btnType}`] : btnType,
        'disabled' : (btnType === 'link' && disabled),
    })

    if (btnType === 'link' && href) {
        return (
            <a  
                href={href}
                className={classes}
                {...restProps}

            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}

            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    btnType : 'default',
    disabled : false,
}

export default Button


// import React from 'react'
// import classNames from 'classnames'

// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link',
// }

// export enum ButtonSize {
//     Large = 'large',
//     Small = 'small',
// }

// interface BaseButtonProps {
//     className ?: string;
//     disable ?: boolean;
//     btnSize ?: ButtonSize;
//     btnType ?: ButtonType;
//     children ?: React.ReactNode;
//     href ?: string;
// }

// const Button : React.FC<BaseButtonProps> = (props) => {
//     const {
//         disable,
//         btnSize,
//         btnType,
//         children,
//         href
//     } = props

//     const classes = classNames('btn',{
//         [`btn-${btnSize}`]:btnSize,
//         [`btn-${btnType}`]:btnType,
//         'disable': (btnType === ButtonType.Link) && disable,
//     })

//     if (btnType === ButtonType.Link && href) {
//         return (
//             <a
//                 className = {classes}
//                 href = {href}
//             >
//                 {children}
//             </a>
//         )
//     } else {
//         return (
//         <button
//             className={classes}
//             disabled={disable}
//         >
//             {children}
//         </button>
//         )
//     }
// }

// Button.defaultProps = {
//     disable:false,
//     btnType:ButtonType.Default

// }

// export default Button

