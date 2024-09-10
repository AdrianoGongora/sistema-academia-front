export interface BaseResponse<T> {
    isSuccess: boolean;
    isFailure: boolean;
    value: any;
    errors: T;
}