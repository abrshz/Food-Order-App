import React, { useEffect, useRef } from 'react'

function Modal({children, open , className = ''}) {
    const dialog = useRef()
    useEffect(() => {
        if(open){
            dialog.current.showMode();
        }
    }, [open])
  return createPortal (<dialog ref={dialog} className={`modal ${className}`} >{children}</dialog>, document.getElementById('modal')
  )
}

export default Modal