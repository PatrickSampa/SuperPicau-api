
export class GetInformationCapa{
    constructor(){};
    async ImpedimentosCapa(capaHTML: any): Promise<boolean>{

        //Estrutura para identificar nome dos Advogados
        const arrayAdvogadosPilantra: Array<string> = ["SABRINA DE PONTES ARAUJO",
        "ADRIANO GOMES DE DEUS",
        "ANDERSON JOSÉ LOPES FRANCO",
        "EDER NILSON VIANA DA SILVA",
        "EUCLIDES RABELO ALENCAR",
        "EVANDRO SOUZA MUNIZ",
        "FRANKLIN DAYWISON JAQUES",
        "ESCRITÓRIO ADVOCACIA CAVALCANTE & MONT SERRAT",
        "GUILHERME HENRIQUE BRANCO DE OLIVEIRA",
        "ITALO BENEDITO DA CRUZ MAGALHÃES",
        "JOÃO PAULO DE LIMA SILVA",
        "KELLY JAMILLY DE OLIVEIRA FERREIRA",
        "RAYMUNDO MAURÍCIO PINTO JÚNIOR",
        "RONALDO DIAS CAVALCANTE",
        "SABRINA PONTES DE ARAÚJO",
        "SILANY SOARES ASSIS",
        "TARCÍSIO SAMPAIO DA SILVA",
        "WENNYSON DA SILVA CARDOSO",
        "WILLIAM VIANA DA SILVA",
        "ABEL BRITO DE QUEIROZ",
        "ALDEANE COSTA VASCONCELOS",
        "ARTHUR DE ALMEIDA E SOUSA",
        "DIEGO DA SILVA FIORESE",
        "JOSÉ LENILTON MORAIS LINHARES",
        "MAYSA CÉLIA DE SOUZA MAGALHÃES",
        "GUTEMBERG BARROS DE ANDRADE",
        "JOÃO PAULO DE LIMA SILVA",
        "RAIMUNDO MAURICIO PINTO JUNIOR",
        "GEORGE STHEFANE PIMENTA DA SILVA"];
        for(let i=0; i<arrayAdvogadosPilantra.length; i++){
            //console.log(arrayAdvogadosPilantra[i])
            if((capaHTML.indexOf(arrayAdvogadosPilantra[i])) !== -1){
                return false;
            }
        }
        return true;
    




    }


}


