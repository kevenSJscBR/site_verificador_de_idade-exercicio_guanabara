function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'doto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21){
                //adolecente
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 59){
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 21){
                //adolecente
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 59){
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}