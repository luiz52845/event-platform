import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ok0lf609yv01xxbjtm80ax/master',
    cache: new InMemoryCache()
})