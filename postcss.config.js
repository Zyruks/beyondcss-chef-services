import autoprefixer from "autoprefixer";
import purgeCSS from "@fullhuman/postcss-purgecss";
import opacity from "postcss-opacity";
import customProperties from "postcss-custom-properties";

export default {
  plugins: [
    // customProperties({ overrideImportFromWithRoot: true }),
    purgeCSS({
      content: ["./**/*.html", "src/**/*.js"],
      variables: true,
      safelist: [":where"],
    }),
    // autoprefixer("last 2 versions"),
    opacity({ legacy: true }),
  ],
};
