import Puppeteer from "puppeteer-core";

const chromeExecPaths = {
  win32: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  linux: "/usr/bin/google-chrome",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
};

const exePath = chromeExecPaths[process.platform];
let _page;

async function getData(url) {
  const webPage = await Puppeteer.launch({
    executablePath: exePath,
    headless: true,
    args: [],
  });

  _page = await webPage.newPage();

  await _page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  // Pick random URL Anchor
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

  console.log(frase);

  await _page.close();
  await webPage.close();
}

export { getData };
