import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("error boundary", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Got some error !!!</h1>
          <Link to="/"> Go to Home</Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
<ErrorBoundary>
  <h1>Hi there</h1>
</ErrorBoundary>;
