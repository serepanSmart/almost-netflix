import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { ChildrenProps } from '@/types';

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<ChildrenProps, State> {
  public state: State = {
    hasError: false
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <img
            // eslint-disable-next-line max-len
            src="https://thumbs.gfycat.com/ForthrightAromaticIcterinewarbler-size_restricted.gif"
            alt="error message"
          />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;