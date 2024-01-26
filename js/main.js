$(document).ready(function () {
    $("#carrossel-imagens").slick({
        autoplay: true,
    });

    $(".menu-hamburguer").click(function () {
        $('nav').slideToggle();
    })
    $("#telefone").mask("(00) 00000-0000")

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: "Por favor digite seu nome"
        },
        submitHandler: function (form) {
            console.log(form);
            form.reset();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos à serem preenchidos`)
            }
        }
    })
    $('.lista-veiculos button').click(function () {
        // Encontrar o elemento de destino usando o ID
        const destino = $('#contatos');

        // Preencher automaticamente o campo "Veículo de interesse"
        const veiculoNome = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(veiculoNome);

        // Animação de rolagem suave
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);

    });
});






