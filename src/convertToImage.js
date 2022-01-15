import { getPage, closeWebPage } from "./puppeterOptions/getPage.js";
import { htmlModelImage } from "./imageModel/model.js";

import randomUUID from "crypto";

/**
 * Convert HTML to image
 * @param {*} frase => Texts
 * @param {*} background  => Background URL image
 */

export async function convertToImage(frase, background) {
  if (frase === undefined || background === undefined)
    throw new Error("[Convert to image] Missing params");
  const uuid = randomUUID.randomUUID();

  const _page = await getPage();

  await _page.setViewport({ width: 1080, height: 1350 });
  await _page.setContent(htmlModelImage(frase, background));
  await _page.evaluateHandle("document.fonts.ready");

  await _page.screenshot({
    path: `images/${uuid}.png`,
    type: "png",
  });

  await _page.close();
  await closeWebPage();

  return uuid;
}
