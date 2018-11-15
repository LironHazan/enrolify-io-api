'use strict';
import axios from 'axios';

import { apiError, apiSuccess } from './api.middleware.actions';
import * as AT from '../../types';

export const apiMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
    next(action);

    if (action.type.includes(AT.API_REQUEST)) {
        const { url, feature, sourceAction, force } = action.meta;
        const method = action.meta.method.toLowerCase();
        const data = action.payload;

        const storeKey = `${url}_${feature}_${JSON.stringify(data)}`;

        const { serverURL } = 'http://localhost:3000';
        const options = {
            method: method,
            url: `${serverURL}/${url}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
              //  'Authorization': `Bearer ${_getToken()}`,
            },
        };

        axios(options)
            .then(res => {
                const response = { res, feature, sourceAction, meta: action.meta };
                dispatch(apiSuccess(response));
            })
            .catch(err => {
                const error = { ...err.response, message: 'Error' };
                const errorArr = [];
                dispatch(errorArr);
            })
            .finally(() => {
            });
    }
};