declare module 'jadwizard-lib' {
	export function num2Chinese(num: number | string): string
	export module utils {
		export function debounce<
			T extends (this: any, ...args: any[]) => ReturnType<T>
		>(fn: T, delay: number): T
		export function throttle<
			T extends (this: any, ...args: any[]) => ReturnType<T>
		>(fn: T, delay: number): T
	}
	export module math {
		export function sum(v: number[]): number
		export function average(v: number[]): number
		export function stdDev(v: number[]): number
		export function cov(v1: number[], v2: number[]): number
		export function corr(v1: number[], v2: number[]): number
	}
	export module is {
		export function defined(o: any): boolean
		export function string(o: any): boolean
		export function fn(o: any): boolean
		export function array(o: any): boolean
		export function plainObject(o: any): boolean
		export function object(o: any): boolean
		export function emptyObj(o: any): boolean
		export function number(o: any): boolean
		export function integer(o: any): boolean
		export function bool(o: any): boolean
		export function emptyString(o: any): boolean
		export function nonEmptyString(o: any): boolean
		export function promise(o: any): boolean
	}
}
