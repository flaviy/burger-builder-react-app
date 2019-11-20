import React, { Component } from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  /**
   * UNSAFE_componentWillUpdate() is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

   Note that you cannot call this.setState() here; nor should you do anything else (e.g. dispatch a Redux action) that would trigger an update to a React component before UNSAFE_componentWillUpdate() returns.

   Typically, this method can be replaced by componentDidUpdate(). If you were reading from the DOM in this method (e.g. to save a scroll position), you can move that logic to getSnapshotBeforeUpdate().

   Note

   UNSAFE_componentWillUpdate() will not be invoked if shouldComponentUpdate() returns false.

   * @param nextProps
   * @param nextState
   * @param nextContext
   */
  componentWillUpdate (nextProps, nextState, nextContext) {
    console.log('[Modal] WillUpdate');
  }

  render () {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0,
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  };
}
  
export default Modal;
