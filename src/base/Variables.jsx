export const fonts = {
    headline: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
};

// Sizes for typography scale
export const fontSize = {
    base: "16px",
};

const baseSpace = 0.25;
export const spacing = {
    x: `${baseSpace}rem`,
    x2: `${baseSpace * 2}rem`,
    x4: `${baseSpace * 4}rem`,
    x8: `${baseSpace * 8}rem`,
    x16: `${baseSpace * 16}rem`,
}

// color palette
export const colors = {

    shade1: "hsla(34, 5%, 12%, 0.05)",
    shade2: "hsla(34, 5%, 12%, 0.1)",
    shade3: "hsla(34, 5%, 12%, 0.15)",
    shade4: "hsla(34, 5%, 12%, 0.2)",
    shade5: "hsla(34, 5%, 12%, 0.25)",
    shade6: "hsla(34, 5%, 12%, 0.3)",
    shade7: "hsla(34, 5%, 12%, 0.35)",
    shade8: "hsla(34, 5%, 12%, 0.4)",
    shade9: "hsla(34, 5%, 12%, 0.45)",
    shade10: "hsla(34, 5%, 12%, 0.5)",

    white: "hsl(0, 100%, 100%)",
    grey10: "hsl(240, 24%, 96%)",
    grey20: "hsl(240, 11%, 91%)",
    grey30: "hsl(240, 6%, 83%)",
    grey40: "hsl(240, 3%, 69%)",
    grey50: "hsl(240, 5%, 52%)",
    grey60: "hsl(240, 1%, 39%)",
    grey70: "hsl(240, 1%, 29%)",
    grey80: "hsl(240, 2%, 23%)",
    grey90: "hsl(240, 2%, 18%)",
    grey100: "hsl(34, 5%, 12%)",
    black: "hsl(0, 0%, 13%)",

};

const viewport = {
    mobile: '414px',
    tablet: '768px',
    desktop: '1440px'
}

export const screen = {
    mobile: `(min-width: ${viewport.mobile})`,
    tablet: `(min-width: ${viewport.tablet})`,
    desktop: `(min-width: ${viewport.desktop})`,
};