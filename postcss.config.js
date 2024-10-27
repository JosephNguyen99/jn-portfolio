
/// This setup uses ESM Syntax - common in projects that use the newer module system in JavaScript 
/// (e.g., if type: "module" is set in package.json or if your environment is Next.js configured for ESM).
// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };

// export default config;

// jn-portfolio/postcss.config.mjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
