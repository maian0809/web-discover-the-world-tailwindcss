window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')
    const heroHeader = document.querySelector('.hero-header')
    const referencePassed = (window.scrollY + heroHeader.getBoundingClientRect().height) > heroHeader.offsetTop
    const navClassNames = referencePassed ? ['transparent-nav', 'nav'] : ['nav','transparent-nav']
    
    navbar.classList.replace(...navClassNames)
})

//dark mode
const toggleButton = document.querySelector('.theme-toggle-btn');
    // theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        toggleButton.checked = true;
    } else {
        document.documentElement.classList.remove('dark');
        toggleButton.checked = false;
    }

    document.querySelector('.theme-toggle-btn').addEventListener('change', e => {
        console.log('changed ')
        toggleTheme(e.target.checked)
    });
    function toggleTheme(dark = true) {
        document.documentElement.classList.replace(...(dark ? ['light', 'dark'] : ['dark', 'light']));
        localStorage.theme = dark ? 'dark' : 'light';
    }