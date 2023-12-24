import { describe, expect, test } from "vitest";
import {
	shouldKeep,
	isEmptyString,
	isNull,
	isUndefined,
	removeEmpty,
} from "./removeEmpty";
import {
	mockNoStringNoNull,
	mockObj,
	mockNoUndefined,
	mockNoNull,
	mockNoStrings,
} from "./mocks/nestObject";
describe("Test ", () => {
	test("removeEmpty with empty object", () => {
		expect(removeEmpty({})).toStrictEqual({});
	});

	test("removeEmpty with Default Options", () => {
		// Default Options
		expect(removeEmpty(mockObj)).toStrictEqual(mockNoUndefined);
	});

	test("removeEmpty with remove strings keep null", () => {
		expect(
			removeEmpty(mockObj, {
				removeEmptyString: true,
				removeNull: false,
			}),
		).toStrictEqual(mockNoStrings);
	});

	test("removeEmpty with keep strings remove null", () => {
		expect(
			removeEmpty(mockObj, {
				removeEmptyString: false,
				removeNull: true,
			}),
		).toStrictEqual(mockNoNull);
	});
	test("removeEmpty with remove strings remove null", () => {
		expect(
			removeEmpty(mockObj, {
				removeEmptyString: true,
				removeNull: true,
			}),
		).toStrictEqual(mockNoStringNoNull);
	});

	test("removeEmpty with keep strings keep null", () => {
		expect(
			removeEmpty(mockObj, {
				removeEmptyString: false,
				removeNull: false,
			}),
		).toStrictEqual(mockNoUndefined);
	});
});

describe("Test Helper Functions", () => {
	test("isNotNull", () => {
		expect(isNull(null)).toBe(true);
		expect(isNull(undefined)).toBe(false);
		expect(isNull("")).toBe(false);
		expect(isNull(123)).toBe(false);
		expect(isNull("some string")).toBe(false);
	});
	test("isNotUndefined", () => {
		expect(isUndefined(null)).toBe(false);
		expect(isUndefined(undefined)).toBe(true);
		expect(isUndefined("")).toBe(false);
		expect(isUndefined(123)).toBe(false);
		expect(isNull("some string")).toBe(false);
	});
	test("isNotEmptyString", () => {
		expect(isEmptyString(null)).toBe(false);
		expect(isEmptyString(undefined)).toBe(false);
		expect(isEmptyString("")).toBe(true);
		expect(isEmptyString(123)).toBe(false);
		expect(isNull("some string")).toBe(false);
	});
});

describe("Test shouldKeep", () => {
	test("with empty string", () => {
		expect(
			shouldKeep("", {
				removeEmptyString: true,
				removeNull: true,
			}),
		).toBe(false);
		expect(
			shouldKeep("", {
				removeEmptyString: true,
				removeNull: false,
			}),
		).toBe(false);
		expect(
			shouldKeep("", {
				removeEmptyString: false,
				removeNull: true,
			}),
		).toBe(true);
		expect(
			shouldKeep("", {
				removeEmptyString: false,
				removeNull: false,
			}),
		).toBe(true);
	});
	test("with null", () => {
		expect(
			shouldKeep(null, {
				removeEmptyString: true,
				removeNull: true,
			}),
		).toBe(false);
		expect(
			shouldKeep(null, {
				removeEmptyString: true,
				removeNull: false,
			}),
		).toBe(true);
		expect(
			shouldKeep(null, {
				removeEmptyString: false,
				removeNull: true,
			}),
		).toBe(false);
		expect(
			shouldKeep(null, {
				removeEmptyString: false,
				removeNull: false,
			}),
		).toBe(true);
	});
	test("with undefined", () => {
		expect(
			shouldKeep(undefined, {
				removeEmptyString: true,
				removeNull: true,
			}),
		).toBe(false);
		expect(
			shouldKeep(undefined, {
				removeEmptyString: true,
				removeNull: false,
			}),
		).toBe(false);
		expect(
			shouldKeep(undefined, {
				removeEmptyString: false,
				removeNull: true,
			}),
		).toBe(false);
		expect(
			shouldKeep(undefined, {
				removeEmptyString: false,
				removeNull: false,
			}),
		).toBe(false);
	});
});
