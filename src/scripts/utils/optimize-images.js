const sharp = require("sharp");

const images = [
  ["src/public/favicon.png", "src/public/favicon.webp"],
];

Promise.all(
  images.map(([input, output]) =>
    sharp(input)
      .resize({ width: 180, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output),
  ),
).then(() => {
  console.log("Images optimized");
});
