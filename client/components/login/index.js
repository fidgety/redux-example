import React from 'react';

// require('./style.scss');

module.exports = React.createClass({
    render() {
        return (
            <form className="login" onSubmit={(e) => { e.preventDefault(); this.props.onSubmit(this.username.value, this.password.value); }}>
                <input type="text" name="username" ref={input => this.username = input}/>
                <input type="password" name="password" ref={input => this.password = input}/>
                <input type="submit"/>
            </form>
        );
    }
});
