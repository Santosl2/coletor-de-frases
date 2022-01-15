import { getPage, closeWebPage } from "./puppeterOptions/getPage.js";
import { getFrase } from "./getFrase.js";

async function getData(url) {
  const _page = await getPage(url);
  // Pick random URL Anchor
  const frase = await getFrase(_page);

  console.log(frase);

  await _page.close();
  await closeWebPage();
}

export { getData };
