export const zoomIn = (id) => {
    return (
        {
            offscreen: {
                opacity: 0
            },
            onscreen: {
                opacity: 1,
                transition: {
                    // type: "spring",
                    // bounce: 0.4,
                    delay: (0.1 * id),
                    duration: 0.4
                }
            }
        }
    )
}