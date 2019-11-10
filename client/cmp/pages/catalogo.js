import {Component} from 'doz'
import robot1 from '../../../image/robot-01.jpg'
export default class extends Component {

    template(h) {
        return h`
            <div>
                 <h1>Catalogo</h1>
                 <img src="${robot1}">
            </div>
        `
    }

    onMount() {
        this.metaTag({
            title: 'Catalogo',
            description: 'Catalogo Page'
        });
    }

}