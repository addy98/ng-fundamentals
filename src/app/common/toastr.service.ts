import { InjectionToken } from "@angular/core";

export const TOASTR_TOKEN = new InjectionToken<any>('toastr')

export interface Toastr {
    success (ms: string, title?: string): void
    info (ms: string, title?: string): void
    warning (ms: string, title?: string): void
    error (ms: string, title?: string): void
}