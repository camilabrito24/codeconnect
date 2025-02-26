const bntUpload = document.getElementById('btn-upload');
const imagemUpload = document.getElementById('imagem-upload');

bntUpload.addEventListener("click", ()=>{
    imagemUpload.click();
})

function lerConteudoArquivo(){
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