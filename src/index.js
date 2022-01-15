import { getData } from "./getData.js";
import getRandomBackgroundImage from "./unsplash/index.js";

import dotenv from "dotenv";
dotenv.config();

const background = await getRandomBackgroundImage(
  process.env.UNSPLASH_QUERY_SEARCH,
  process.env.UNSPLASH_API_KEY
);

await getData("https://www.frasesdobem.com.br/", background);
