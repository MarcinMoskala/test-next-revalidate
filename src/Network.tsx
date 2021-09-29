export const API_URL = "https://gapi.kt.academy/"

type ApiCallParams = {
    lang?: string,
    urlParams?: Record<string, string | null>,
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    body?: any,
    parseResult?: boolean,
    userUuid?: string,
    baseUrl?: string
}

export function callApi(path: string, params: ApiCallParams = {}): Promise<Response> {
    return buildFetch(path, params)
}

function removeEmptyValues(obj) {
    if (typeof obj !== "object") return
    Object.keys(obj).forEach(key => obj[key] == null && delete obj[key]);
}

export class HttpError extends Error {
    private readonly _code: number;
    private readonly _statusText: string;

    constructor(code: number, statusText: string, message: string) {
        super(message);
        this._code = code;
        this._statusText = statusText;

        Object.setPrototypeOf(this, HttpError.prototype);
    }

    get code(): number {
        return this._code;
    }

    get statusText(): string {
        return this._statusText;
    }
}

export async function buildFetch(
    path: string,
    {lang, urlParams, method, body, userUuid, baseUrl = API_URL}: ApiCallParams = {}
): Promise<Response> {
    if (lang) {
        if (urlParams) {
            urlParams = {...urlParams, lang: lang.toUpperCase()};
        } else {
            urlParams = {lang: lang.toUpperCase()};
        }
    }

    removeEmptyValues(urlParams);
    const search = buildQuery(urlParams);

    return await fetch(baseUrl + path + search, {
        headers: {"Content-Type": "application/json"},
        ...(method && {method: method}),
        ...(body &&
            ((typeof body === "string" && {body: body}) || {
                body: JSON.stringify(body)
            }))
    })
}

function buildQuery(urlParams: Record<string, string | null> | undefined) {
    return urlParams ? ("?" + Object.keys(urlParams)
        .map(key => key + '=' + urlParams[key])
        .join('&')) : "";
}