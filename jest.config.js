module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  collectCoverage: true,
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  transform: {
    "\\.m?js$": "babel-jest",
  },
  transformIgnorePatterns: [],
};
