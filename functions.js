let click = document.querySelector('.click');
let list = document.querySelector('.list');
click.addEventListener("click", () => {
    list.classList.toggle(`newlist`);
});

// Álbum fotos 
$(document).ready(function () {

    $('.thumbs li').click(function () {
        var thumbs = $(this).find('img').attr('src');
        var capa = $('.capa img');

        capa.fadeTo('200', '0', function () {
            capa.attr('src', thumbs).fadeTo('150', 1);

        });

        $('.thumbs li').removeClass('active');
        $(this).addClass('active');
    });
});

//BOTÃO ÁLBUM ANTERIOR ********************************

function btAlbumAnter() {

    var galerias = document.querySelectorAll('.boxGaleria');
    var ga = document.querySelector('.galeriaAtiva');
    var thumbAct = document.querySelector('.active');


    for (var i = galerias.length; i >= 0; i -= 1) {

        if (galerias[i] === ga) {

            if ([i] == 0) {
                ga.classList.remove('galeriaAtiva');
                galerias[galerias.length - 1].classList.toggle('galeriaAtiva');
                $('ul li').removeClass('active')
                var imgsAlb = galerias[galerias.length - 1].querySelectorAll('li');
                imgsAlb[0].classList.add('active');
                var novaCaptaAtiva = $(imgsAlb[0]).find('img').attr('src');
                $('.capa').find('img').attr('src', novaCaptaAtiva)
                break;
            }

            ga.classList.remove('galeriaAtiva');
            galerias[i -= 1].classList.add('galeriaAtiva');
            ga = galerias[i];
            $('ul li').removeClass('active');
            var imgsAlb = ga.querySelectorAll('li');
            imgsAlb[0].classList.add('active');
            var novaCaptaAtiva = $(imgsAlb[0]).find('img').attr('src');
            $('.capa').find('img').attr('src', novaCaptaAtiva);
            break
        }
    }
}

//BOTÃO PRÓXIMO ÁLBUM ********************************* 

function btProxAlbum() {

    var galerias = document.querySelectorAll('.boxGaleria');
    var ga = document.querySelector('.galeriaAtiva');
    var thumbAct = document.querySelector('.active');


    for (var i = 0; i < galerias.length; i += 1) {

        if (galerias[i] === ga) {

            if ([i + 1] == galerias.length) {
                ga.classList.remove('galeriaAtiva');
                galerias[0].classList.add('galeriaAtiva');
                $('ul li').removeClass('active')
                var imgsAlb = galerias[0].querySelectorAll('li');
                imgsAlb[0].classList.add('active');
                var novaCaptaAtiva = $(imgsAlb[0]).find('img').attr('src');
                $('.capa').find('img').attr('src', novaCaptaAtiva)
                break;
            }
            ga.classList.remove('galeriaAtiva');
            galerias[i += 1].classList.add('galeriaAtiva');
            ga = galerias[i];
            $('ul li').removeClass('active');
            var imgsAlb = ga.querySelectorAll('li');
            imgsAlb[0].classList.add('active');
            var novaCaptaAtiva = $(imgsAlb[0]).find('img').attr('src');
            $('.capa').find('img').attr('src', novaCaptaAtiva);
            break
        }
    }
}


//BOTÃO PROXIMA FOTO -------------------------------------------------

var idAlbuns = document.querySelectorAll('.boxAlbum ul');

function proximaFoto() {

    var fotosAlbuns = document.querySelectorAll('.galeriaAtiva li')
    var thumbAct = document.querySelector('.active');

    for (var i = 0; i < fotosAlbuns.length; i += 1) {

        if (fotosAlbuns[i] === thumbAct) {

            if (i + 1 === fotosAlbuns.length) {
                $('ul li').removeClass('active')
                fotosAlbuns[0].classList.toggle('active')
                var novaCaptaAtiva = $(fotosAlbuns[0]).find('img').attr('src');
                $('.capa').find('img').attr('src', novaCaptaAtiva)
                var thumbAct = fotosAlbuns[0];
                break;
            }
            $('ul li').removeClass('active')
            fotosAlbuns[i + 1].classList.toggle('active')
            var novaCaptaAtiva = $(fotosAlbuns[i + 1]).find('img').attr('src');
            $('.capa').find('img').attr('src', novaCaptaAtiva)
            break;
        }

    }
}


//BOTÃO FOTO ANTERIOR

function fotoAnterior() {

    var fotosAlbuns = document.querySelectorAll('.galeriaAtiva li')
    var thumbAct = document.querySelector('.active');

    for (var i = fotosAlbuns.length; i >= 0; i -= 1) {

        if (fotosAlbuns[i] === thumbAct) {

            if ([i] == 0) {
                $('ul li').removeClass('active')
                fotosAlbuns[fotosAlbuns.length - 1].classList.toggle('active');
                var novaCaptaAtiva = $(fotosAlbuns[fotosAlbuns.length - 1]).find('img').attr('src');
                $('.capa').find('img').attr('src', novaCaptaAtiva)
                var thumbAct = fotosAlbuns[0];
                break;
            }
            $('ul li').removeClass('active')
            fotosAlbuns[i - 1].classList.toggle('active')
            var novaCaptaAtiva = $(fotosAlbuns[i - 1]).find('img').attr('src');
            $('.capa').find('img').attr('src', novaCaptaAtiva)
            break;
        }

    }
}



function botaoForm() {

    let nomeForm = document.querySelector('#nomeForm').value;    
    let emailForm = document.querySelector('#emailForm').value;
    let textoForm = document.querySelector('#textoForm').value;

        if (nomeForm === "") {
            alert('Informe o seu nome');
            return;
        } 
        if (emailForm === "") {
            alert('Informe o seu email');
            return;
        } 
        if (textoForm === "" ) {
            alert('Informe o motivo do seu contato');         
            return; 
        }

}

