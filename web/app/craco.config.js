const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "~features": path.resolve(__dirname, "src/features"),
      "~types": path.resolve(__dirname, "src/types"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
