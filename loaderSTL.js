//Variáveis globais
//Define a cena, o container de todos os "objetos"
var scene = new THREE.Scene();
var status = 0;//evita que mais de um objeto seja inseriro na cena
function iniciar()
{
  //A variável recebe a div viewer
  var viewer = document.getElementById('viewer');
  //As variáveis abaixo recebem o tamanho da div
  var width = document.getElementById('viewer').offsetWidth;
  var height = document.getElementById('viewer').offsetHeight;

  //Define a câmera como perspectiva(com profundidade e etc)
  var camera = new THREE.PerspectiveCamera(75, width/height, 1, 1000);

  //Distancia da câmera para o objeto (eixo z)
  camera.position.z = 50;

  //Renderizador
  var renderer = new THREE.WebGLRenderer({antialias: true});//antialias:true serve para diminuir o serrilhado do objeto caso haja
  renderer.setSize(width, height );

  //Coloca o renderizador na div viewer
  viewer.appendChild(renderer.domElement);

  //Define a cor de fundo do renderizador
  renderer.setClearColor(0xedf0f4);


  // lights - os pontos de luz.
  var lightLeft = new THREE.PointLight( 0xffffff, 1, 900);
  lightLeft.position.set(300, 100, 50);
  scene.add( lightLeft );

  var lightRight = new THREE.PointLight(0xffffff, 1, 900);
  lightRight.position.set(-300, 100, 50);
  scene.add( lightRight );

  var lightBottom = new THREE.PointLight(0xffffff, 1, 500);
  lightBottom.position.set(0, -300, 0);
  scene.add( lightBottom );

  var lightFront = new THREE.PointLight(0xffffff, 1, 200);
  lightFront.position.set(0, 0, 100);
  scene.add( lightFront );

  var lightBack = new THREE.PointLight(0xffffff, 1, 200);
  lightBack.position.set(0, 0, -100);
  scene.add( lightBack );

  //instancia o objeto responsável pelo controle da câmera
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  renderer.render(scene, camera);

  //Renderiza a cena e a camera
  function render()
  {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  render();
}


$(document).ready(function(){
  //ao iniciar a página, executa a função "iniciar", mas o objeto só será adicionado no viewer na função "stlLoader"
  iniciar();
});

//insere o objeto no viewer
function stlLoader(input)
{
  /*Importante: é possível realizar o upload de um arquivo do computador do usuário manipulando a variavel "input" no index*/
  /*Obs: isto pode não funcionar caso esteja usando um servidor virtual (hospedado virtualmente, com as ferramentas do WAMP, por exemplo)*/
  if(status == 0)
  {
    //Stl loader
      //var arquivo = $(input).val(); //captura o "valor" do objeto enviado pelo usuario
      var arquivo = input;
      var loader = new THREE.STLLoader();

      //molda o arquivo selecionado para inseri-lo no viewer
      loader.load( arquivo, function (geometry) {
      var material = new THREE.MeshPhongMaterial( { color: 0x658bc7, specular: 0x658bc7, shininess: 200 } );
      var mesh = new THREE.Mesh(geometry, material);
      //centraliza o objeto
      geometry.center();
      //modifica a escala
      mesh.scale.set(1, 1, 1);

      //adiciona o objeto na tela
      scene.add( mesh );
      //O código abaixo pega os valores (altura, largura, etc) do objeto
      //Consultar https://threejs.org/docs/#api/helpers/Box3Helper
      //Consultar https://threejs.org/docs/#api/math/Box3
      var box = new THREE.Box3().setFromObject(mesh);
      //Helper é o quadrado que encapsula o objeto
      var helper = new THREE.Box3Helper(box, 0x9d9fa0);
      scene.add(helper);

      //GridHelper é o grid que fica abaixo do objeto
      var gridHelper = new THREE.GridHelper(400, 10, 0x707172, 0xb7babf);
      gridHelper.position.y = box.min.y;
      scene.add(gridHelper);
      //Dimensões do objeto
      var largura = Math.round((box.getSize().x)*10)/10;
      var altura = Math.round((box.getSize().y)*10)/10;
      var profundidade = Math.round((box.getSize().z)*10)/10;
      var volume = (altura*largura*profundidade);
      document.getElementById("alturaObjeto").innerHTML+=altura+"mm";
      document.getElementById("larguraObjeto").innerHTML+=largura+"mm";
      document.getElementById("comprimentoObjeto").innerHTML+=profundidade+"mm";
      document.getElementById("dimensoesTotal").innerHTML+=altura+"x"+largura+"x"+profundidade+"mm";
      document.getElementById("volumeObjeto").innerHTML+=volume.toFixed(2)+"mm";

      status = 1;
    } );
  }

}

/*Arquivos .stl adquiridos via turbosquid.com*/

/**/
