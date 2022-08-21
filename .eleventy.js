module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets/styles/main.css": "dist/main.css",
    "src/assets/images": "dist/images",
    "src/assets/fonts": "dist/fonts"
  });

  return {
    ...eleventyConfig,
    dir: {
      input: 'src',
      output: 'build',
      layouts: "_includes/layouts"
    },
  };
};