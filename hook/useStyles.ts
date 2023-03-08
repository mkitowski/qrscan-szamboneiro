import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    main: (data: {heroUrl: string}) => ({
        position: "fixed",
        top: 0,
        background: {
            color: '#202824',
            image: `url(${data.heroUrl})`,
            repeat: 'no-repeat',
            position: 'center',
            size: 'cover',
        },
        width: '100vw',
        height: '100vh',
        color: 'white',
        maxHeight: '100vh',
    }),
    title: {
        left: '50%',
        fontFamily: '"Grechen Fuemen", cursive',
        fontSize: '3rem',
        margin: '0 auto',
        zIndex: 1,
    },
    hero: {
        zIndex: 0,
        position: "fixed",
        top: 5,
    },
    nav: {
        position: "absolute",
        bottom: 0,
    }
})
