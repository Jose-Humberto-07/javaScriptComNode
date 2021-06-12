function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com a nota " + nota);
    }else {
        if (nota >= 5 && nota < 7) {
            console.log("Em recuperação com a nota " + nota);
        }else {
            if (nota < 5) {
                console.log("Reprovado com a nota " + nota)
            }
        }
    }
}

soBoaNoticia(10);
soBoaNoticia(8);
soBoaNoticia(7);
soBoaNoticia(6);
soBoaNoticia(4);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log("É verdade... " + valor);
    }
}

seForVerdadeEuFalo(10);
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(true);