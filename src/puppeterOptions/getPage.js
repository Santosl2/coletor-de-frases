import Puppeteer from "puppeteer-core";

const chromeExecPaths = {
  win32: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  linux: "/usr/bin/google-chrome",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
};

const exePath = chromeExecPaths[process.platform];
let _page;
let _browser;

export async function getPage() {
  _browser = await Puppeteer.launch({
    executablePath: exePath,
    headless: false,
    args: [],
  });

  _page = await _browser.newPage();

  return _page;
}

export async function closeWebPage() {
  await _browser?.close();
}
