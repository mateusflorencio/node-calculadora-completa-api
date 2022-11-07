## Adicione novas operações 

Essa feature tem como objetivo facilitar a vida do desenvolvedor.
Inicialmente foram implentadas apenas algumas operações básicas.
Porém adicionar outra é muito simples. Os seguintes passos mostra como implantar.

### Passos

1. Crie a lógica do calculo com a **entrada** de **dois** numeros. Veja o exemplo:

   ~~~
    export default (a, b) => parseFloat(a) + parseFloat(b)
  
  2. Save o arquivo com a charCode referente ao simbolo da equação:
   * Símbolo(+) = 43, ou seja, seria sum**43**.js
  3. Faça a conversão para float caso de numero com ponto flutuante
  4. 
  * **É EXTREMAMENTE NECESSÁRIO QUE O EXPORT SEJA DEFAULT**. Veja aqui [exemplos](../src/domain/model/operations/sum43.js)
  ## Done
  Ao fazer isso quando a aplicação é iniciada a equação é automaticamente carrega por este arquivo [arquivo](src/../../src/main/factories/import-operations.js)