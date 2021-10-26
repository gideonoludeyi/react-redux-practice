import type { Middleware } from 'redux';

export const BASE = '[API]' as const;

const API_REQUEST = `${BASE} API_REQUEST` as const;

type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
interface IBody {}
interface IParams {
    [key: string]: string;
}

interface ApiRequestActionMeta {
    onSuccess?: string;
    onError?: string;
}

interface ApiRequestAction {
    type: typeof API_REQUEST;
    payload: {
        url: string;
        method: ApiMethod;
        body?: IBody;
        params?: IParams;
    };
    meta: ApiRequestActionMeta;
}

export const apiRequest = (
    payload: {
        url: string;
        method?: ApiMethod;
        body?: IBody;
        params?: IParams;
    },
    meta: ApiRequestActionMeta = {}
): ApiRequestAction => ({
    type: API_REQUEST,
    payload: {
        ...payload,
        method: payload.method || 'GET',
    },
    meta,
});

//

const apiMiddleware: Middleware =
    ({ dispatch }) =>
    next =>
    (action: ApiRequestAction) => {
        next(action);
        if (action.type !== API_REQUEST) return;

        const { url, method, body, params = {} } = action.payload;

        const query = [url, new URLSearchParams(params)].join('?');
        const { onSuccess, onError } = action.meta;

        fetch(query, {
            method,
            body: body && JSON.stringify(body),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(
                data => dispatch({ type: onSuccess, payload: data }),
                error => dispatch({ type: onError, payload: error })
            );
    };

export default [apiMiddleware];
