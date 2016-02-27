import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'
import toggleOpen from './HOC/toggleOpen'

class Container extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        closeModal: PropTypes.func,
        openModal: PropTypes.func
    };

    render() {
        const { isOpen, closeModal, openModal } = this.props
        return (
            <div>
                <a onClick = {openModal} onRequestClose = {closeModal}>Open modal</a>
                <Modal isOpen={isOpen}>
                    <h1>Hello world</h1>
                    <a onClick={closeModal}>close</a>
                </Modal>
            </div>
        )
    }
}

export default toggleOpen(Container)