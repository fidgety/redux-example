import React from 'react';

// require('./style.scss');

module.exports = React.createClass({
    render() {

	        console.log(this.props);
        return (
            <form className="login" onSubmit={(e) => { e.preventDefault(); this.props.onSubmit(); }}>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <input type="submit"/>
            </form>
        );
    }
});
