// Generate a random photo

import api from "../services/api.js";

export default async function getRandomBackgroundImage(querys, apiKey) {
  let query = querys;

  if (querys.indexOf(",") > 0) {
    const splitQuerys = querys.split(",");
    query = splitQuerys[Math.floor(Math.random() * splitQuerys.length)];
  }

  try {
    const {
      data: {
        urls: { raw },
      },
    } = await api.get(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${query}`
    );

    return raw;
  } catch (err) {
    console.log(err);
  }
}
