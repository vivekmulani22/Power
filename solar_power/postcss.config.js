module.exports = {
  plugins: [
    require("tailwindcss"), // Add Tailwind CSS plugin
    require("autoprefixer"), // Add Autoprefixer plugin for vendor prefixes
    process.env.NODE_ENV === "production"
      ? require("@fullhuman/postcss-purgecss")({
          // Optional, for production builds
          content: [
            "./src/**/*.html", // Specify where your HTML files are located
            "./src/**/*.js", // Include JS files (or other frameworks like React, Vue)
            "./src/**/*.jsx", // If you're using React JSX
            "./src/**/*.tsx", // If you're using TypeScript
          ],
          safelist: [], // Optional: List of classes to never purge
        })
      : undefined,
  ],
};
