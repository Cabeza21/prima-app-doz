import {Component} from 'doz'
import robot1 from '../../../image/robot-01.jpg'
import robot2 from '../../../image/robot-02.jpg'
import robot3 from '../../../image/robot-03.jpg'

export default class extends Component {

    template(h) {
        return h`
            <style>
                .container {
                    display: flex;
                }
                
                .image {
                    height: 200px;
                    margin: 10px;
                }
                .details {
                    text-align: left;
                }
            </style>
            
            <h1>Catalogo</h1>
            
            <div class="container">
                <img class="image" src="${robot1}">
                <div class="details"> 
                    <h2>Robot 1</h2>
                    <p>Lorem ipsum dolor sit</p>
                </div>
            </div>
            <div class="container">
                <img class="image" src="${robot1}">
                <div class="details"> 
                    <h2>Robot 1</h2>
                    <p>Lorem ipsum dolor sit</p>
                </div>
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