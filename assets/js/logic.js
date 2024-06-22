
//Switch function
const switchTheme = () => {
    const rootEl = document.documentElement
    let dataTheme = rootEl.getAttribute('data-theme'),
        newTheme
        // Create conditional statement for light/dark mode
        newTheme = (dataTheme === 'light') ? 'dark' : 'light'
        // Set Attribute for light/dark mode
        rootEl.setAttribute('data-theme', newTheme)
}

// Add event listener for the theme switcher
document.querySelector('.theme-switcher').addEventListener('click', switchTheme)