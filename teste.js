function carregar() {

  var msg = window.document.getElementById('msg') // id="msg"
  var img = window.document.getElementById('imagem') // id="imagem"
  var data = new Date()
  var hora = data.getHours() 
  //var hora = 14 <-forçador de hora
  msg.innerHTML = `${hora} horas`

  if (hora >= 0 && hora < 12){ //se hora estiver entre 00:00 e 11:00 = foto de bom dia
    //bom dia
    img.src = 'mari_dia.jpeg'
  }else if(hora >= 12 && hora < 18){ //senao, se a hora estiver entre 12:00 e 17:00 = foto de boa tarde
    //boa tarde
    img.src = 'mari_tarde.jpeg'
  } else {                         //senao = foto de boa noite (18:00 a 23:00)
    //boa noite
    img.src = 'mari_noite.jpeg'
  }

}