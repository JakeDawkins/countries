import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    // @ts-ignore TS2339: Property 'hasError' does not exist on type 'Readonly<{}>'
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    // @ts-ignore TS2339: Property 'children' does not exist on type 'Readonly<{}>'
    return this.props.children;
  }
}

export default ErrorBoundary;
