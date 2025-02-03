
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Highlight shortcode to emphasize text
  eleventyConfig.addShortcode("highlight", function(content) {
    return `<span style="background-color: #69C9C9; padding: 2px 5px; font-weight: bold; color: black;">${content}</span>`;
  });
};

