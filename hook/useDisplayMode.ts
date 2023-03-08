import { useEffect, useState } from "react";
const setPlatform = (ua: string): string => {
    if (ua.match(/iPhone|iPad|iPod/)) {
        return 'ios';
    }
    if (ua.match(/Android/)) {
        return 'android';
    }
    return 'unknown'
}
export const useDisplayMode = () => {
    const [isStandAlone, setStandAlone] = useState('browser tab');
    const [platform, setPlatformState] = useState('');

    useEffect(() => {
        if (typeof global.navigator !== 'undefined') {
            setPlatformState(setPlatform(global.navigator?.userAgent));
        }
    }, []);

    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setStandAlone('standalone');
        }
        if (window.matchMedia('(display-mode: fullscreen)').matches) {
            setStandAlone('fullscreen');
        }
    }, []);

    return {
        isStandAlone: isStandAlone !== 'browser tab',
        platform,
    } ;
}
