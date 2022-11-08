# Calculadora API

## Projeto

Foi desenvolvido uma calculadora iniciamente com as quatro operações básicas.

* soma
* subtração
* divisão
* multiplicação

Foi levado em consideração tambem a ordem de execução sendo:
* equações dentro dos parenteses 
* divisão e multiplicação
* as demais...


Ainda há a possibilidade de ser adicionado outra operações facilmente. [Clique aqui para ver como](documents/feat-operatios.md).

## Iniciando o projeto

Se for a **PRIMEIRA** vez ao iniciar o projeto siga os seguintes passos:

1. Clone o repositório
2. Defina as váriaveis de ambiente no file .env como [neste exemplo](.env.example)
3. Instale as dependências digitando no seu terminal - ```npm install```
4. Se você estiver utilizando o docker apenas digite no seu terminal -```npm run compose```
    * Apenas isso irá automaticamente criar um container com a imagem do mariadb com o [script](sql/001-init.sql).
5. Sincronize as tabelas do prismaOrm digitando no seu terminal -```npm run prisma:generate```
6. Pronto digite no seu terminal -```npm start``` e o projeto estará rodando.


## Banco de dados

Neste projeto foi utilizado o **MariaDB**. Abaixo segue o script para criar o banco de dados utilizado no projeto.
```
CREATE DATABASE IF NOT EXISTS calculadora;
USE calculadora;
CREATE TABLE IF NOT EXISTS calculos(
id int NOT NULL UNIQUE AUTO_INCREMENT,
usuario VARCHAR(255) NOT NULL,
equacao VARCHAR(255) NOT NULL,
resultado VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
);
```

## Docker 
Como plus utilizei o docker-compose para facilitar o ambiente
Como voce pode verificar aqui neste [compose](docker-compose.yml) ele automaticamente verifica a porta que o MariaDb deve usar assim como a senha root. 

Além de executar automaticamente o [001-init.sql](sql/001-init.sql) assim que executar - ```npm run compose```

## Rotas

Existem duas rotas as priori na api:

GET: api/calculator
POST: api/calculator

Rota GET retorna o um array com os seguinte objeto:

api/calculator
~~~
[
    {
		"id": number,
		"usuario": string,
		"equacao": string,
		"resultado": string,
		"criacao" : date
	}
]
~~~

Rota POST recebe e retorna a seguinte infomação:
* Request

api/calculator
~~~
{
	"user" : "mateus",
	"equation" : ""
}
~~~
* Response Sucess
~~~

{
    "result" : number
}
~~~
* Response Error
~~~

{
    "error" : string
}
~~~