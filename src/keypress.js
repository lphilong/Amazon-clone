import { useEffect, useRef } from 'react';

export function useKey(key, cb) {
    const callbackRef = useRef(cb);
    useEffect(() => {
        callbackRef.current = cb;
    });
    useEffect(() => {
        function handle(e) {
            if (e.code === key) {
                //prevent repeated events
                if (e.repeat) return;
                callbackRef.current(e);
            }
        }
        document.addEventListener('keydown', handle);
        return () => document.removeEventListener('keydown', handle);
    }, [key]);
}
