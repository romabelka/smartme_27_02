import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'

class Container extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    Hello world
                </Modal>
            </div>
        )
    }
}

export default Container