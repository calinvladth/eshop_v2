export const setBackgroundImage = (image, position='center') => {
    return {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat'
    }
}