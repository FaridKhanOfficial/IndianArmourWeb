export const slideUp = (id) => {
    return (
        {
            offscreen: {
                y: 70
            },
            onscreen: {
                y: 0,
                transition: {
                    delay: (0.1 * id),
                    duration: 0.4
                }
            }
        }
    )
}