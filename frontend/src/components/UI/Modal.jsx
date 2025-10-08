import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom'; // Import createPortal

function Modal({ children, open, className = '' }) {
    const dialog = useRef();
    
    useEffect(() => {
        if (open) {
            dialog.current.showModal(); // Fixed typo: showMode -> showModal
        } else {
            dialog.current.close(); // Close the dialog when not open
        }
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`}>
            {children}
        </dialog>, 
        document.getElementById('modal')
    );
}

export default Modal;