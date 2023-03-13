import chalk from "chalk"; 
import fs from "fs";


function trataErro(erro){

    console.log(chalk.red(erro.code));
    
    if(erro.code == "ENOENT"){

        console.log("O tipo de Erro é " + erro.code )
    }
  }
  
  
  
 // function pegaArquivo(caminhoDoArquivo){
   // fs.promises
   // .readFile(caminhoDoArquivo, 'utf-8')
   // .then((texto) => console.log(chalk.green(texto)))
   // .catch((erro) => trataErro(chalk.red(erro)))
   //}



  async function pegaArquivo(caminhoDoArquivo){

    try {
    const texto  = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
    console.log(chalk.bgGreen(texto))
    }catch(erro){

        chalk.bgRed(trataErro(erro))

  }}

pegaArquivo('./arquivo/texto.md');