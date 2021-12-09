module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|mp4|mov)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ],
      },
    ],
  },
};
