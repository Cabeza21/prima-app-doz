import Doz from 'doz'
import hotLocationReload from 'doz-hot-location-reload'
import metaTag from 'doz-metatag'
import isSSR from 'doz-ssr/plugin'
import CONFIG from './config'
import logo from '../image/logo.png'
import DozRouter from 'doz-router'
import './app.css'
import Nav from './cmp/nav'
import PageHome from './cmp/pages/home'
import PageAbout from './cmp/pages/about'
import PageContatti from './cmp/pages/contatti'
import PageCatalogo from './cmp/pages/catalogo'

// This causes the page to reload in the browser
// when there are changes during the development phase
hotLocationReload(module);

// Plugin used during Server Side Rendering
Doz.use(isSSR);

// Plugin that changes the meta tags
Doz.use(metaTag, {
    title: 'My Doz App',
    description: 'Magic development'
});

// Add configuration to all components,
// so it's possible call in this way this.CONFIG.FOO
Doz.mixin({
    CONFIG
});

new Doz({

    root: '#app',

    template(h) {
        return h`
            <header>
                <h1>Welcome to Lampobot</h1>
                <p>Take light in a Robot-way</p>
                <img src="${logo}">
                <p>hello</p>
                <${Nav}/>
            </header>
            <main>
                <${DozRouter} mode="history">
                    <${PageHome} route="/"/>
                    <${PageCatalogo} route="/catalogo"/>
                    <${PageAbout} route="/about"/>
                    <${PageContatti} route="/contatti"/>
                </${DozRouter}>
            </main>
        `
    },

    onCreate() {
        // Every time a component is mounted on the DOM,
        // I update the list of links mapped with the "data-router-link" attribute
        this.app.on('componentMount', () => {
            if (this.router) {
                this.router.bindLink();
            }
        });
    },

    onMountAsync() {
        if (window.SSR)
            window.SSR.ready();
    }

});