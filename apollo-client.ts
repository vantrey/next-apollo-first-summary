import {ApolloClient, createHttpLink, InMemoryCache, split} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {createClient} from 'graphql-ws';
import {getMainDefinition} from '@apollo/client/utilities';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:4000/subscriptions',
}));

const authLink = setContext((_, { headers, token }) => {
    console.log('context token', token)
    // get the authentication token from local storage if it exists
    const authtoken = token || '1234';
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: authtoken ? `Bearer ${authtoken}` : "",
        }
    }
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    authLink.concat(httpLink),
);



const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;