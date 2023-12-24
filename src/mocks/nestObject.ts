export const mockObj = {
	hello: {
		world: "",
		one: null,
		two: undefined,
		three: "nice",
		four: {
			five: undefined,
			six: "yeah",
			seven: "",
			eight: null,
		},
	},
};

export const mockNoUndefined = {
	hello: {
		world: "",
		one: null,
		three: "nice",
		four: {
			six: "yeah",
			seven: "",
			eight: null,
		},
	},
};

export const mockNoStringNoNull = {
	hello: {
		three: "nice",
		four: {
			six: "yeah",
		},
	},
};

export const mockNoNull = {
	hello: {
		world: "",
		three: "nice",
		four: {
			six: "yeah",
			seven: "",
		},
	},
};
export const mockNoStrings = {
	hello: {
		one: null,
		three: "nice",
		four: {
			six: "yeah",
			eight: null,
		},
	},
};
