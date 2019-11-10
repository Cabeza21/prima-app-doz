import {Component} from 'doz'

export default class extends Component {

    template(h) {
        return h`
            <div>
                 <h1>Home</h1>
                 <p></p>
            </div>
        `
    }

    onMount() {
        this.metaTag({
            title: 'Home',
            description: 'My Home Page'
        });
    }

}