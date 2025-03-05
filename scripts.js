const bntUpload = document.getElementById('btn-upload');
const imagemUpload = document.getElementById('imagem-upload');

bntUpload.addEventListener("click", ()=>{
    imagemUpload.click();
})

function lerConteudoArquivo(arquivo){
    return new Promise((resolve, reject)=>{
        const leitor = new FileReader();
        leitor.onload = () =>{
            resolve({url: leitor.result, nome: arquivo.name});
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo);
    })
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeImagem = document.querySelector(".container-imagem-nome p");

imagemUpload.addEventListener("change", async (evento) =>{
    const arquivo = evento.target.files[0];

    if(arquivo){
        try{
            const conteudoDoArquivo =  await lerConteudoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeImagem.textContent = conteudoDoArquivo.nome;
            console.log(conteudoDoArquivo.nome);
        }catch (erro){
            console.error("Erro na leitura do arquivo");
        }
    }
})