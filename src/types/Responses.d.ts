export interface ISuccessResponse {
    success: true;
    data: any;
}

export interface IErrorResponse {
    success: false;
    error: true;
    message: string;
}
