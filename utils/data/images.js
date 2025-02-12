export const images = process.env.NODE_ENV == 'development'?( 
    {
    profile: '/profilepic.jpg',
    contactQR: '/contact-qr.png',
    selection: '/section.svg',
    blur: '/blur-23.svg',
    hero: '/hero.svg',
    
}
):( 
    {
        profile: './profilepic.jpg',
        contactQR: './contact-qr.png',
        selection: './section.svg',
        blur: './blur-23.svg',
        hero: './hero.svg',
    }
)