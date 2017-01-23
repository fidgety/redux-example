import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';

export default React.createClass({
    getInitialState() {
        return {
            modalVisible: false
        };
    },
    render() {
        const closeModal = (e) => {
            if (e) {
                e.preventDefault();
            }
            this.setState({
                modalVisible: false
            });
        };

        const onSubmit = (e) => {
            e.preventDefault();
            this.props.onCreateRota(this.name.value, moment(this.date.value, 'DD/MM/YYYY'));
            closeModal();
        };

        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        modalVisible: true
                    });
                }}>Create rota</button>
                <Modal isOpen={this.state.modalVisible} contentLabel="boo">
                    <form onSubmit={onSubmit}>
                        <h1>Create a new rota</h1>
                        <label>Rota name
                            <input type="text" ref={input => { this.name = input; }}/>
                        </label>
                        <br/>
                        <label>Rota start date
                            <input
                                type="text"
                                defaultValue={moment().format('DD/MM/YYYY')}
                                ref={input => { this.date = input; }}
                            />
                        </label>
                        <input type="submit" value="create rota"/>
                        <button onClick={closeModal}>close</button>
                    </form>
                </Modal>
            </div>
        );
    }
});
