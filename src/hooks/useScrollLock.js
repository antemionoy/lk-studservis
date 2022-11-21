import { useCallback } from "react";

const useScrollLock = () => {
    const hideScroll = useCallback(() => {
        const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;
    }, [])

    const showScroll = useCallback(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = `0px`;
    }, [])

    return { hideScroll, showScroll }
}

export default useScrollLock