module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
