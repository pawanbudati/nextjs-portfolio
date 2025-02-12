export const images = process.env.NODE_ENV == 'development'?( 
    {
    profile: '/profile2.png',
    contactQR: '/contact-qr.png',
    selection: '/section.svg',
    blur: '/blur-23.svg',
    hero: '/hero.svg',
    
}
):( 
    {
        profile: './profile2.png',
        contactQR: './contact-qr.png',
        selection: './section.svg',
        blur: './blur-23.svg',
        hero: './hero.svg',
    }
)