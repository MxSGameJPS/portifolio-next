import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const heroDir = resolve(root, "src/components/Hero");
const output = resolve(root, "public/hero-saulo.webp");

const chunks = [];

for (let index = 1; index <= 8; index += 1) {
  const source = await readFile(resolve(heroDir, `heroData${index}.js`), "utf8");
  const match = source.match(/const\s+heroData\d+\s*=\s*"([A-Za-z0-9+/=]+)";/);

  if (!match) {
    throw new Error(`Não foi possível extrair heroData${index}.js`);
  }

  chunks.push(match[1]);
}

const image = Buffer.from(chunks.join(""), "base64");

if (
  image.subarray(0, 4).toString("ascii") !== "RIFF" ||
  image.subarray(8, 12).toString("ascii") !== "WEBP"
) {
  throw new Error("Os fragmentos do Hero não formaram um WebP válido.");
}

await mkdir(dirname(output), { recursive: true });
await writeFile(output, image);

console.log(`Hero WebP gerado: ${(image.length / 1024).toFixed(1)} KB`);
