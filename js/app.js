const themeswitcher =document.querySelector('#themeswitcher');

const defaultTheme =localStorage.getItem('theme')||'theme-light';
setTheme(defaultTheme);

themeswitcher.addEventListener('change', (e) =>{
    // console.log(e.target.value);   
    setTheme(e.target.value);


});

function setTheme(theme){
    theme = theme || 'theme-light';

    document.documentElement.className =theme;// theme break ho jayegi . default theme de do
    localStorage.setItem('theme',theme);
    themeswitcher.value = theme;
}