const BASE_URL = "https://randomfox.ca/floof";

const trocaimg = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.image;
  } catch (error) {
    console.error("ocorreu um erro ao carregar a imagem", error);
    throw error;
  }
};

const loadImg = async () => {
  const img = document.getElementsByTagName("img")[0];
  try {
    const imageUrl = await trocaimg();
    img.src = imageUrl;
  } catch (erro) {
    console.error("ocorreu um erro ao carregar", erro);
  }
};

loadImg();

const btn = document.getElementById("trocaimg");
if (btn) {
  btn.addEventListener("click", loadImg);
} else {
  console.warm("Elemento de botão com ID 'trocaimg' não encontrado ");
}
