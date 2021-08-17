import { QueryClient } from 'react-query';
import React from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import _ from 'lodash';
import { useUIState } from '@ui-hook/demo';

type UIContext = ReturnType<typeof useUIEffect>;

const persistQueryClient = new QueryClient();

const useUIEffect = () => ({
	persistQueryClient,
	uiState: useUIState(),
});

const context = createContext<UIContext>({} as UIContext);

export const UIProvider = ({ children }) => (
	<context.Provider value={useUIEffect()}>{children}</context.Provider>
);

export const ManagedUIContext = ({ children }) => <UIProvider>{children}</UIProvider>;

export function useUI<V>(path: string) {
	return useContextSelector<UIContext, V>(context, (v) => _.get(v, path) as V);
}

export function useUICallback<Selected>(callback: (value: UIContext) => Selected) {
	return useContextSelector<UIContext, Selected>(context, callback);
}
