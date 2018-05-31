import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer:false
    }

    sideDrawerClickedHandler = () => {
        let currState = this.state.showSideDrawer;
        let nextState = !currState;
        this.setState({showSideDrawer:nextState});
    }

    render () {
        return (
                <Aux>
                    <Toolbar drawerToggleClicked={this.sideDrawerClickedHandler} />
                    <SideDrawer open={this.state.showSideDrawer} 
                                toggled={this.sideDrawerClickedHandler} />
                    <div>Toolbar, SideDrawer, Backdrop</div>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
            )
        }
    }

export default Layout;