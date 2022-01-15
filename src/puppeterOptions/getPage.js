import Puppeteer from "puppeteer-core";

const chromeExecPaths = {
  win32: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  linux: "/usr/bin/google-chrome",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
};

const exePath = chromeExecPaths[process.platform];
let _page;
let _browser;

export async function getPage(url) {
  if (url === undefined) throw new Error("Missing URL");

  _browser = await Puppeteer.launch({
    executablePath: exePath,
    headless: true,
    args: [],
  });

  _page = await _browser.newPage();

  await _page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  return _page;
}

export async function closeWebPage() {
  await _browser?.close();
}
