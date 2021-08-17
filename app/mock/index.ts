import MockAdapter from 'axios-mock-adapter';
import mockInfoResponse from './api/mockInfo.json';
import { appConfig } from '@configuration';
import axiosRequest from '@commerce/utils/axios-request';

if (appConfig.mockEnable) {
	const mock = new MockAdapter(axiosRequest, { delayResponse: 1000 });
	mock
		.onGet(/^(\/mockInfo)/)
		.reply(() => {
			return [200, mockInfoResponse];
		});
	// mock
	// 	.onPost(/^(\/checkout\/ajax\/checkoutFrontController.jsp)\?(actionName=cartMerge)/)
	// 	.reply(() => {
	// 		console.log(
	// 			'< /checkout/ajax/checkoutFrontController.jsp?actionName=cartMerge > Get response from mock.',
	// 		);
	// 		return [200, mergeQuoteOrderResponse];
	// 	});
}

export {};
