import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import request from '@commerce/utils/graphql-request';
import type { Demo } from '@commerce/types';

const query = gql`
	{
		hello
	}
`;

const useDemo = () => {
	const endpoint = 'http://localhost:8000/graphql';
	return useQuery<Demo>(
		'info',
		async (): Promise<Demo> => {
			const data = await request(endpoint, query);
			return data;
		},
		{
			refetchOnWindowFocus: false,
		},
	);
};

export default useDemo;
