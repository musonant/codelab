import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createClient } from '../apolloclient';

export default (ApolloWrapper = CMP => {
  return class extends React.Component {
    // constructor() {
    //   super();
    //   this.createClient();
    // }

    // state = {
    //   isLoading: true,
    // };

    // createClient = async () => {
    //   this.apolloClient = await createClient();
    //   this.setState({
    //     isLoading: false,
    //   });
    // };

    render() {
      return (
        <ApolloProvider client={''}>
          <CMP {...this.props} />
        </ApolloProvider>
      );
    }
  };
});
