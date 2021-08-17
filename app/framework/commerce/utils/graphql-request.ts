import {request} from 'graphql-request';
import type {RequestDocument, Variables} from 'graphql-request/dist/types';

const graphqlRequest = async <T = any, V = Variables>(
  url: string,
  document: RequestDocument,
  variables?: V,
): Promise<T> => {
  // Wrap graphql for if has customization
  return await request(url, document, variables);
};

export default graphqlRequest;
