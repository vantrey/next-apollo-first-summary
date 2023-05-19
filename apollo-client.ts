import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers, token }) => {
    console.log('context token', token)
    // get the authentication token from local storage if it exists
    const authtoken = token || '123';
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: authtoken ? `Bearer ${authtoken}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;