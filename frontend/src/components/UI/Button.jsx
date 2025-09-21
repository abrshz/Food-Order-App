import React from 'react'

function Button({children ,textOnly , className , ...props}) {
     const cssClass = `${textOnly ? 'text-button' : 'button'} ${className}`
  return (
    <button className={cssClass} {...props}>
        {children}
    </button>
  )
}
export default Button