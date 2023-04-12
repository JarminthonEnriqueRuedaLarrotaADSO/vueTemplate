import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
// se importan los componentes
import myImg from './components/myImg.js';
import myHeader from './components/myHeader.js';
import mySection from './components/mySection.js';
import main from './main.js';

let app = createApp(main);
// se introducen los componentes dentro del main
app.component(myHeader.name, myHeader);
app.component(mySection.name, mySection)
app.component(myImg.name, myImg);

app.mount("#app");