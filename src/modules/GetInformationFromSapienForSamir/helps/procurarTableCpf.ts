import { getXPathText } from "../../../helps/GetTextoPorXPATH";

function isCPF(text: string): boolean {
    const cpf = text.split(/[()]/)[1]?.replace(/[.-]/g, "");
    return !/\D/.test(cpf);
}

export function buscarTableCpf(capa: string){
    for(let i=0; i<10; i++){
        ///html/body/div/div[6]
        let pathTableCpf = `/html/body/div/div[${i}]`
        let tableIsTrue = getXPathText(capa, pathTableCpf);        
        if(tableIsTrue){  
            let verificarLinhaPoloAtivo = tableIsTrue.indexOf("PÓLO ATIVO")
            if(verificarLinhaPoloAtivo != -1){
                 for(let j=0; j<=6;j++){
                    let xpathCpf = `html/body/div/div[${i}]/table/tbody/tr[${j}]`
                    let poloAtivo = getXPathText(capa, xpathCpf)                   
                    if(poloAtivo){
                         let poloAtivoCpf = poloAtivo.indexOf("PÓLO ATIVO")
                         let representaAGU = poloAtivo.indexOf("SIM");
                         if (poloAtivoCpf != -1 && representaAGU !== -1) {
                            continue;
                         }
                         if(poloAtivoCpf != -1 ){
                            console.log(`html/body/div/div[${i}]/table/tbody/tr[${j}]`)
                            let isCpf = (poloAtivo.split(/[()]/)[1]).replaceAll(/[.-]/g, "")
                            console.log("CPF OU ADVOGADO: ")
                            console.log(!/\D/.test(isCpf))
                            if (!/\D/.test(isCpf)) {
                                return isCpf
                            } else {
                                return undefined
                            }
                         }
                    }
                 }
            }
        }
    }
    return undefined
} 