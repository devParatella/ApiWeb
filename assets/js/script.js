const BASE_URL = "https://api.thecatapi.com/v1/images/search";

const trocaimg = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json[0].url;
  } catch (erro) {
    console.log("ocorreu um erro ao carregar a imagem");
  }
};

const loadImg = async () => {
  const img = document.getElementsByTagName("img")[0];
  img.src = await trocaimg();
};

loadImg();

const btn = document.getElementById("trocaimg");
btn.addEventListener("click", loadImg);
