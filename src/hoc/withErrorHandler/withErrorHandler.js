import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux/Aux'
import axios from '../../axios-orders'

const withErrorHandler = (WrappedComponent) => {
  return class extends Component{
    constructor(props){
      super(props);
      this.requestInterceptor = axios.interceptors.response.use(req => {
        this.setState({ error: null });
        return req;
      })

      this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error })
      })
    }

    state = {
      error: null,
    }
    errorConfirmedHandler = () =>  {
      this.setState({ error: null })
    }

    componentDidMount () {

    }

    componentWillUnmount () {
      axios.interceptors.response.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler
