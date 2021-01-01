import React from 'react';
import BK from '../../../../assets/dungeons/SS_Squid_Carving_Icon.png';
import noBK from '../../../../assets/dungeons/ssh_noBossKey.png';

export default class SSHBossKey extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onChange('sshBossKey');
    }

    render() {
        switch (this.props.current) {
        case 0:
            return (
                <div id="SSH-BK">
                    <img src={noBK} onClick={this.handleClick} alt="No SSH Boss Key" width={this.props.colWidth} />
                </div>
            );
        case 1:
            return (
                <div id="SSH-BK">
                    <img src={BK} onClick={this.handleClick} alt="SSH Boss Key" width={this.props.colWidth} />
                </div>
            );
        default:
            return null;
        }
    }
}
