import * as React from 'react';

interface IAppProps {
}

interface IAppState {
    hasError: boolean;
}

class ErrorBoundry extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            hasError: false
        }
    };

    componentDidCatch(error, info) {
        // @ts-ignore
        this.state({ hasError: true });
    };

    render() {
        if (this.state.hasError) {
            return <h1>Ooops, looks like there is an error.</h1>
        }
        return this.props.children;
    };
}

export default ErrorBoundry;