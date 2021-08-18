import { useMutation, useQueryClient } from 'react-query';
import request from '@commerce/utils/graphql-request';
import { gql } from 'graphql-request';

const query = gql`
	mutation addMovie($name: String!) {
		addMovie(input: { name: $name }) {
			name
		}
	}
`;

const useAddMovie = () => {
	const endpoint = 'http://localhost:8000/graphql';
	const queryClient = useQueryClient();
	const mutation = useMutation(
		async (item: { name: string }) => {
			const addCart = await request(endpoint, query, item);
			return addCart;
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('info');
			},
		},
	);
	return mutation;
};

export default useAddMovie;
