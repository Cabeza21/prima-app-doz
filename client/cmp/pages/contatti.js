import {Component} from 'doz'

export default class extends Component {

    template(h) {
        return h`
            <div>
                 <h1>Contatti</h1>
                 <p></p>
            </div>
        `
    }

    onMount() {
        this.metaTag({
            title: 'Contatti',
            description: 'Contatti Page'
        });
    }

}