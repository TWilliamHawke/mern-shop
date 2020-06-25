module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^src(.*)$": "<rootDir>/src$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/test.config.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
