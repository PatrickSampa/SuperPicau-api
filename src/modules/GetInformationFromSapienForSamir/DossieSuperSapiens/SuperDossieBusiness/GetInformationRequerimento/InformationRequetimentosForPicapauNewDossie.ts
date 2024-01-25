import { extractDatesFromString } from "../../../../../helps/FiltrarDatas";
import { getXPathText } from "../../../../../helps/GetTextoPorXPATH";
import { encontrarDataMaisAtual } from "../../../../../helps/VerificarDataMaisAtual";
import { SubtrairAnoMaisAtual } from "../../../../../helps/subtrairAnoAtual";


export class DatasRequerimentoNewDossie{
    async dataRequerimento(parginaDosPrevFormatada: any):Promise<Date[]>{
        //Estrutura para identificar a maior data, e fazer a subtração dela
        let tamanhoColunasRequerimentos = 1;
        const arrayDatas: Array<Date> = [];
        let verificarWhileRequerimentos = true;
        while(verificarWhileRequerimentos){
            if(typeof (getXPathText(parginaDosPrevFormatada, `/html/body/div/div[6]/table/tbody/tr[${tamanhoColunasRequerimentos}]`)) == 'object'){
                verificarWhileRequerimentos = false; 
                break;
            }
            tamanhoColunasRequerimentos++;
        }
        //console.log("Tamanho Coluna: " + tamanhoColunasRequerimentos);
        /* if(parginaDosPrev.indexOf("Não foram encontrados requerimentos em nome do autor.") != -1){
            console.log("ENTROU AQUI")
            return [];
            
        } */
            for(let t=1; t<tamanhoColunasRequerimentos; t++){
                if(typeof (getXPathText(parginaDosPrevFormatada,`/html/body/div/div[6]/table/tbody/tr[${t}]`)) === 'string'){
                    const xpathColunaRequerimentos = `/html/body/div/div[6]/table/tbody/tr[${t}]`;
                    const xpathCoulaFormatadoRequerimentos: string = getXPathText(parginaDosPrevFormatada, xpathColunaRequerimentos);
                    if(xpathCoulaFormatadoRequerimentos.indexOf("INDEFERIDO") !== -1){
                        const date: Array<Date> = extractDatesFromString(xpathCoulaFormatadoRequerimentos);
                        arrayDatas.push(...date);
                    }
                }
                console.log("noif")
            }
            const dataAtual = encontrarDataMaisAtual(arrayDatas);
            const dataMenosdezesseis = SubtrairAnoMaisAtual(dataAtual, -16);
            console.log("Data Atual: " + dataAtual)
            console.log("Data Menos 16: " + dataMenosdezesseis);
            return [dataAtual, dataMenosdezesseis]
    }
    
    }
