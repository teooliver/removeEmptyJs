type AnyObject = { [key: string]: any };
type CleanedObject<T = {}> = {
	[key: string]: NonNullable<string | number | T[keyof T]>;
};

interface Options {
	removeEmptyString: boolean;
	removeNull: boolean;
}

const defaultOptions: Options = {
	removeEmptyString: false,
	removeNull: false,
};

export function removeEmpty<T>(
	obj: AnyObject,
	opts = defaultOptions,
): CleanedObject<T> {
	return Object.fromEntries(
		Object.entries(obj)
			.filter(([_, v]) => shouldKeep(v, opts))
			.map(([k, v]) => [k, v === Object(v) ? removeEmpty(v, opts) : v]),
	);
}

export function isNull(value: unknown) {
	return value === null;
}

export function isEmptyString(value: unknown) {
	return value === "";
}

export function isUndefined(value: unknown) {
	return value === undefined;
}

export function shouldKeep(v: any, opts: Options): boolean {
	if (isUndefined(v)) {
		return false;
	}

	if (isNull(v) && opts.removeNull) {
		return false;
	}
	if (isEmptyString(v) && opts.removeEmptyString) {
		return false;
	}
	return true;
}
