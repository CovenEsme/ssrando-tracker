import React from 'react';
import noPouch from '../../../assets/no_pouch.png';
import pouch from '../../../assets/pouch.png';

class Pouch extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        switch (this.props.current) {
        case 0:
            return (
                <img src={noPouch} alt="Adventure Pouch" onClick={this.handleClick} width={this.props.styleProps.width} />
            );
        case 1:
            return (
                <img src={pouch} alt="Adventure Pouch" onClick={this.handleClick} width={this.props.styleProps.width} />
            );
        default:
            return null;
        }
    }

    handleClick() {
        this.props.onChange('pouch');
    }
}

export default Pouch;
