import { closeWebPage } from "./puppeterOptions/getPage.js";
export async function getFrase(_page) {
  if (_page === undefined) throw new Error("Missing Params");

  const {
    _remoteObject: { value: redirectedPage },
  } = await _page.evaluateHandle(async () => {
    const allAnchors = document.querySelectorAll(
      ".col-md-4 > .menu:not(.autores) a"
    );

    if (allAnchors.length > 0) {
      // Pick random anchor
      const randomAnchor =
        allAnchors[Math.floor(Math.random() * allAnchors.length)];

      return randomAnchor.href;
    }

    return null;
  });

  await _page.goto(redirectedPage);

  const frase = await _page.evaluate(() => {
    const allPhrase = document.querySelectorAll("p.frase");

    if (allPhrase.length > 0) {
      const randomPhrase =
        allPhrase[Math.floor(Math.random() * allPhrase.length)];

      return randomPhrase.innerHTML;
    }
  });

  await _page.close();
  await closeWebPage();

  return frase;
}
