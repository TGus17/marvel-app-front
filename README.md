<h1 align="center">Bem vindos ao repositório frontend de uma aplicação da Marvel</h1>

<p align="justify">Esse repositório faz parte de uma aplicação web MarvelApp. Aqui você irá encontrar o frontend da aplicação. O backend encontra-se <a href="https://github.com/TGus17/marvel-app-back">aqui</a>. A aplicação consiste em um mecanismo de busca por characters e comics da marvel. Esse projeto foi desenvolvido como um requisito para um processo seletivo. Possui caráter de estudo e se encontra em desenvolvimento.</p>

## Requisitos
<p>O funcionamento correto desse projeto só será possível se o <a herf="https://github.com/TGus17/marvel-app-back">backend</a> desta aplicação estiver rodando em paralelo a este repositório</p>
<p>Para rodar o backend desse projeto você precisará ter o MySQL Server instalado na sua máquina.</p>

## Instruções de instalação

+ Clone esse repositório
```javascript
git clone https://github.com/TGus17/marvel-app-front.git
```

+ Entre na pasta raíz do projeto
```javascript
cd marvel-app-front
```
+ Rode os seguintes comandos no terminal
```javascript
npm install //para instalar as dependências
npm start //para iniciar a aplicação
```
## Instruçẽs de uso
+ Uma página do seu navegador irá abrir no endereço ```http://localhost:3000/``` .
+ Aperte em ```Register``` para registrar um novo usuário.
+ Insira nome, email e senha nos respectivos campos e clique em ```sign up```.
+ Você será redirecionado para a tela de login. Entre com seus dados e clique em ```sign in```.
+ Uma vez logado, na tela de profile, será possível editar suas informações, deletar o usuário logado e deslogar da aplicação. Para voltar a usar será necessário fazer novo login.
+ Uma vez logado será possível procurar por comics e characters disponíveis no site da Marvel, favoritá-los e consultar os favoritos.
