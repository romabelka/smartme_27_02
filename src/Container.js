import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'

class Container extends Component {

    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <div>
                <a onClick = {this.openModal}
                   onRequestClose = {this.closeModal}
                >Open modal</a>
                <Modal isOpen={this.state.isOpen}>
                    <h1>Hello world</h1>
                    <a onClick={this.closeModal}>close</a>
                </Modal>
            </div>
        )
    }
}

export default Container