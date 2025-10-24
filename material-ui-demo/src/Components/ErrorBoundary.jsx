import React, { Component } from 'react'

 class ErrorBoundary extends Component {
    state={
        hasError:false
    }
    static getDerivedStateFromError(){
        return {hasError:true}
    }
    componentDidCatch(error,info){
        console.error("Error caught in boundary:",error,info)
    }
  render() {
    if(this.state.hasError){
        return (
            <div>
                <h2>Something went wrong.</h2>
                <button onClick={() => window.location.reload()}>Reload</button>
            </div>
        )
    }
    return (
      this.props.children
    )
  }
}

export default ErrorBoundary