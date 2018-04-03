window.addEventListener('load', iniciar);
 
function iniciar() {
 
  var btBackgroundAmarelo = document.querySelector('#btBackground');
  btBackgroundAmarelo.addEventListener('click', trocarBackground);
 
  var chkTextoVermelho = document.querySelector('#chkMudarTexto');
  chkTextoVermelho.addEventListener('change', trocarCorDoTexto);
 
  var chkTextoVermelho = document.querySelector('#chkMudarTamanho');
  chkTextoVermelho.addEventListener('change', habilitarMudarTamanho);
  
  var chkColunasItalico = document.querySelector('#chkTituloItalico');
  chkColunasItalico.addEventListener('change', trocaItalico);
  
  var chkInverteDiaMes = document.querySelector('#chkInverterDiaMes')
  chkInverteDiaMes.addEventListener('change', inverteDiaMes);
}
 
function habilitarMudarTamanho() {
 
  var celulas = document.querySelectorAll('td');
  console.log(celulas);
 
  if(this.checked) {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].addEventListener('mouseover', aumentarTexto);
      celulas[i].addEventListener('mouseout', diminuirTexto);
    }
  }
  else {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].removeEventListener('mouseover', aumentarTexto);
      celulas[i].removeEventListener('mouseout', diminuirTexto);
    }  
  }
}
 
function aumentarTexto() {
  this.classList.add('textoMaior');
}
 
function diminuirTexto() {
  this.classList.remove('textoMaior');
}
 
function trocarCorDoTexto() {
   
  var classe = 'novaCorTexto';
  var tabela = document.querySelector('#dadosBanda');  
  var texto  = document.querySelector('#chkTexto');
 
  //Aqui, this é o checkbox!
  if(this.checked) {
    tabela.classList.add(classe);
    texto.textContent = 'Texto padrão';    
  }
  else {
    tabela.classList.remove(classe);    
    texto.textContent = 'Texto vermelho';    
  }
}
 
function trocarBackground() {
 
  var classeBG = 'novoBackground';
  var tabela   = document.querySelector('#dadosBanda');
 
  //Verificando se a classe já existe no body
  if(tabela.classList.contains(classeBG)) {
 
    //Se entrou aqui, significa que o background
    //já estava amarelo. Então removemos a classe
    //e alteramos o texto do botão
    tabela.classList.remove(classeBG);
 
    //'this' representa o elemento que invocou a
    //função. Neste caso, foi o botão cujo id é
    //'btBackgroundAmarelo'
    this.value = 'Background amarelo';
  }
  else {
 
    //Se entrou aqui, significa que o background
    //está com a cor padrão. Então adicionamos a classe
    //e alteramos o texto do botão
    tabela.classList.add(classeBG);
    this.value = 'Background padrão';
  }
}


function trocaItalico() {
	var classeIT = 'fazItalico';
	var colunas = document.querySelector('#cabecalhoBanda');
	//Verifica se está clicado
	if (this.checked)
		colunas.classList.add(classeIT);
	else
		colunas.classList.remove(classeIT);
}	


function inverteDiaMes() {
	//pega a classe nascimento
	var nasc = document.getElementsByClassName('nascimento');
	//verifica se está clicado
	if (this.checked) {
		for (var i=0; i<nasc.length; i++)
			nasc[i].innerText = nasc[i].innerText.replace('01/02','02/01');
	}
	//se não volta a data original
	else {
		for (var i=0; i<nasc.length; i++)
			nasc[i].innerText = nasc[i].innerText.replace('02/01','01/02');
	}	
}
	
	