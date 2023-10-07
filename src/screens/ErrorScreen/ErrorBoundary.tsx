import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorDetail from './ErrorDetail';

interface Props {
  children: ReactNode;
  catchErrors: 'always' | 'dev' | 'prod' | 'never';
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state = { error: null, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (!this.isEnabled()) {
      return;
    }

    this.setState({
      error,
      errorInfo,
    });
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
  ): boolean {
    return nextState.error !== this.state.error;
  }

  isEnabled(): boolean {
    return (
      this.props.catchErrors === 'always' ||
      (this.props.catchErrors === 'dev' && __DEV__) ||
      (this.props.catchErrors === 'prod' && !__DEV__)
    );
  }

  resetError = () => {
    this.setState({ error: null, errorInfo: null });
  };

  render() {
    return this.isEnabled() && this.state.error ? (
      <ErrorDetail
        onReset={this.resetError}
        error={this.state.error}
        errorInfo={this.state.errorInfo}
      />
    ) : (
      this.props.children
    );
  }
}
