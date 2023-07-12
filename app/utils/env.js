const isDev = () => (process && process.env.NODE_ENV === "development");

export { isDev };
