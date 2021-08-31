/* eslint-disable prettier/prettier */
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@theme": path.resolve(__dirname, "./src/theme"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@shared": path.resolve(__dirname, "./src/components/shared"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@constants": path.resolve(__dirname, "./src/constants"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
            },
        },
    });
};
