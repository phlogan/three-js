# Three.js
#### A biblioteca que permite incluir modelos 3D em sites utilizando JavaScript.

## Introdução
Este projeto tem como objetivo apresentar a ferramenta em sua aplicação mais simples, visando também ajudar desenvolvedores que ainda não conhecem a biblioteca. **Neste caso**, o projeto apenas carrega arquivos do tipo STL.

## O projeto
Conta com apenas uma única página em HTML que contém um viewer para a apresentação dos objetos, botões para escolher qual será apresentado na tela e suas dimensões (altura, largura, etc). No código foi aplicado o manuseio da câmera, posicionamento de luz e objetos, cores e materiais. Também são apresentados os métodos necessários para se adquirir as dimensões do objeto selecionado.

## How To Run
A maneira ideal de executar o projeto é o implementando em um servidor, pois devido há algumas restrições em certos navegadores, este pode não funcionar corretamente (vide a sessão **"Importante"**). Desta forma, caso encontre problemas ao executar, realize o download e instalação do WAMP (Windows) ou LAMP (Linux), execute-o, inclua o projeto dentro da pasta "www" e acesse o endereço deste no servidor (ex: **localhost/three-js**). 
Abaixo, links de download e tutoriais de utilização dos programas supracitados:
- [WAMP - download](http://www.wampserver.com/en/)
- [WAMP - tutorial de utilização](https://www.youtube.com/watch?v=CsuMW21MRBg)
- [LAMP - tutorial de instalação](https://www.hostinger.com.br/tutoriais/como-instalar-lamp-no-ubuntu/)

## Documentação e aplicações
Toda a documentação e aplicações da ferramenta pode ser encontrada no [site do desenvolvedor](https://threejs.org). Abaixo, os links da documentação e uma playlist de tutoriais no YouTube que pode ser útil:
- [Three.js Tutorial for Beginners - Red Stapler](https://www.youtube.com/playlist?list=PLbu98QxRH81KkLTN00OXhD8Y-pRVgTCnM)
- [Three.js - documentação oficial](https://threejs.org/)

## Importante
Alguns navegadores podem bloquear o carregamento dos modelos devido à 'CORS policy'. Sendo assim, deve-se inserir o projeto em um servidor em sua máquina, como o WAMP Server.

## Autores
- Phelip Logan

> Projeto criado em meados do primeiro semestre de 2018.
