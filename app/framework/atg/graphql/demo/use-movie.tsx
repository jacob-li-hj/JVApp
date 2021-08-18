import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import request from '@commerce/utils/graphql-request';
import type { movie } from '@commerce/types';

const query = gql`
	{
		movie {
			name
		}
	}
`;

const useMovie = () => {
	const endpoint = 'http://localhost:8000/graphql';
	return useQuery<movie[]>(
		'info',
		async (): Promise<movie[]> => {
			const data = await request(endpoint, query);
			return data.movie;
		},
		{
			refetchOnWindowFocus: false,
		},
	);
};

export default useMovie;
