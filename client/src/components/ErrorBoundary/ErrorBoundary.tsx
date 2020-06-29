import React, { Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {

  state = {
    hasError: false
  }

  componentDidCatch(): void {
    this.setState({
      hasError: true
    })
  }

  render(): ReactNode {
    const { hasError } = this.state

    if(!hasError) return this.props.children
    
    return (
      <div className='container mt-5'>
        <p className='error'>Something went wrong...</p>
      </div>
    );
  }
}

export default ErrorBoundary;