import React from 'react';
import PropTypes from 'prop-types';


class Watch extends React.Component {

    static propTypes = {
        offset: PropTypes.string,
        name: PropTypes.string,
        onDelete: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.offset = Number(this.props.offset);
        this.state = {time: new Date(Date.now() + this.offset*1000*60*60)};
    };

    componentDidMount() {
        this.update = setInterval(() => {
            this.setState({ time: new Date(Date.now() + this.offset*1000*60*60)});
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.update);
    };

    render() {
        const {time} = this.state;
        return (
            <div className={this.props.name}>
                <h4>{this.props.name}</h4>
                <div>{time.toLocaleTimeString()}</div>
                <button type="submit" onClick={this.props.onDelete}>Удалить</button>
            </div>
        );
    };
};

export default Watch;