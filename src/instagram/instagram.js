// publish (add tags?)
import { getPage, closeWebPage } from "../puppeterOptions/getPage.js";
import dotenv from "dotenv";
dotenv.config();

/**
 * Faz a postagem no instagram
 * @param {*} imageName string UUID da imagem
 */
export async function instagramPublish(imageName) {
  console.log("Iniciando publicação no Instagram");
  const _page = await getPage();

  await _page.goto("https://instagram.com", {
    waitUntil: "networkidle0",
  });

  // Login
  await _page.click(`input[type="text"]`); // Da um click falso no input de login
  await _page.keyboard.type(process.env.INSTAGRAM_USER); // digita uma string no input
  await _page.click('input[type="password"]'); //Da um click falso no input de senha
  await _page.keyboard.type(process.env.INSTAGRAM_PASSWORD); // digita uma string no input
  await _page.click(".L3NKy"); // clica no botao para logar

  await _page.waitForTimeout(7000);
  await _page.click("button.HoLwm"); // fecha o modal de notificacoes
  await _page.click("._lz6s .QBdPU"); // clica no botao de publicar que esta dentro do header

  await _page.waitForTimeout(1200);

  // Select image
  const [fileChooser] = await Promise.all([
    _page?.waitForFileChooser(),
    _page.click("._C8iK button"),
  ]);

  await fileChooser.accept([`${process.cwd()}/images/${imageName}.png`]);

  await _page.waitForTimeout(1200);

  await _page.click(".czW__ .sqdOP.yWX7d.y3zKF"); // Click on button to set original dimension
  await _page.click(".qF0y9 .Igw0E ._56XdI .eGOV_  .vwCYk"); // set original dimension LOL
  await _page.click(".eiUFA .sqdOP.yWX7d.y3zKF"); // advance button 1x
  await _page.click(".eiUFA .sqdOP.yWX7d.y3zKF"); // advance button 2x

  await _page.waitForTimeout(2200);

  await _page.click(".uYzeu.gIMwG textarea"); // textarea
  await _page.keyboard.type("Hello world"); // to do make tags
  await _page.click(".eiUFA .sqdOP.yWX7d.y3zKF");
  await _page.waitForTimeout(3200);

  await _page.close();
  await closeWebPage();

  console.log("Postagem feita com sucesso!");
}
