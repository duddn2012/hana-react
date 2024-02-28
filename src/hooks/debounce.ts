import { useState } from "react";

export const useDebounce = function() {
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

    function setup(cb: ()=>void, delay: number) {
        setTimer(setTimeout(cb,delay));
    }

    function clear() {
        clearTimeout(timer);
    }

    function debounce (cb: ()=>void, delay: number) {
        clear();
        setup(cb,delay);
    }

    return debounce;
}