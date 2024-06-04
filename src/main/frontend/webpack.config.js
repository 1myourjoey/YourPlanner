const path = require('path');

module.exports = {
    // 다른 기존의 Webpack 설정을 여기에 추가
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "url": require.resolve("url/"),
            "assert": require.resolve("assert/"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify")
        }
    },
    // entry, output 등 나머지 설정
};
