

export default (fn) => {
    return () => {
        fn();
        const navigator = window.navigator;

        if ('vibrate' in navigator) {
            navigator.vibrate(200);
        }
    };
}
