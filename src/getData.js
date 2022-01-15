import { getPage } from "./puppeterOptions/getPage.js";
import { getFrase } from "./getFrase.js";
import { convertToImage } from "./convertToImage.js";

async function getData(url, background) {
  const _page = await getPage();

  console.log("Gerando imagem...");

  await _page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  // Pick random URL Anchor
  const frase = await getFrase(_page);

  await convertToImage(frase, background);

  console.log("Finalizado!");
}

export { getData };
