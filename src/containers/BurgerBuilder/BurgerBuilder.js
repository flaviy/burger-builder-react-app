import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuidControls/BuildControls";


class BurgerBuilder extends Component {

/*
    constructor(props) {
        super(props);
        this.state = {...}
    }
*/

    state = {
        ingredients : {
            salad : 2,
            bacon : 2,
            meat: 2,
            cheese : 1
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;