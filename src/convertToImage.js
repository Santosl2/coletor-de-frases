import { getPage, closeWebPage } from "./puppeterOptions/getPage.js";
import { htmlModelImage } from "./imageModel/model.js";

import randomUUID from "crypto";

export async function convertToImage(frase, background) {
  const _page = await getPage();

  await _page.setViewport({ width: 1080, height: 1350 });
  await _page.setContent(htmlModelImage(frase, background));
  await _page.evaluateHandle("document.fonts.ready");

  await _page.screenshot({
    path: `images/${randomUUID.randomUUID()}.png`,
    type: "png",
  });

  await _page.close();
  await closeWebPage();
}
