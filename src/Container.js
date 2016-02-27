import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'
import toggleOpen from './HOC/toggleOpen'

class Container extends Component {
    static propTypes = {
        text: PropTypes.string,
        //------from toggleOpen HOC------
        isOpen: PropTypes.bool,
        closeModal: PropTypes.func,
        openModal: PropTypes.func
    };

    state = {
        items: [1,2,3,4]
    }

    render() {
        const { text, isOpen, closeModal, openModal } = this.props
        const items = this.state.items.map(item => <li key = {item} onClick={this.removeItem(item)}>{item}</li>)
        return (
            <div>
                <a onClick = {openModal} onRequestClose = {closeModal}>Open modal</a>
                <Modal isOpen={isOpen}>
                    <h1>{text}</h1>
                    <a onClick={closeModal}>close</a>
                </Modal>
                <ul>
                    {items}
                </ul>
                <a onClick = {this.addItem}>add item</a>
            </div>
        )
    }

    removeItem = (item) => {
        return () => {
            this.setState({
                items: this.state.items.filter(stateItem => stateItem != item)
            })
        }
    }

    addItem = () => {
        this.setState({
            items: this.state.items.concat(Math.random() * 100)
        })
    }
}

export default toggleOpen(Container)