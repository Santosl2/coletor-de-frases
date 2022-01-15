import { getPage } from "./puppeterOptions/getPage.js";
import { getFrase } from "./getFrase.js";
import { convertToImage } from "./convertToImage.js";
import { instagramPublish } from "./instagram/instagram.js";

/**
 *  Gera todo o conteúdo
 * @param {*} url string URL para entrar
 * @param {*} background string UUID da imagem
 * @param {*} publishInstagram boolean Publicar no instagram ?
 */
async function getData(url, background, publishInstagram = false) {
  if (url === undefined || background === undefined)
    throw new Error("Missing params");

  console.log("Gerando imagem...");

  const _page = await getPage();

  await _page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  // Pick random URL Anchor
  const frase = await getFrase(_page);

  const uuid = await convertToImage(frase, background);

  if (publishInstagram) {
    instagramPublish(uuid);
  }

  console.log("Finalizado; imagem " + uuid);
}

export { getData };
