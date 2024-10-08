import { getXPathText } from "../../../helps/GetTextoPorXPATH";

function isCPF(text: string): boolean {
    const cpf = text.split(/[()]/)[1]?.replace(/[.-]/g, "");
    return !/\D/.test(cpf);
}

export function buscarTableCpf(capa: string): string | undefined {
    const MAX_DIVS = 10;
    const MAX_ROWS = 6;

    for(let i = 0; i < MAX_DIVS; i++) {
        const pathTableCpf = `/html/body/div/div[${i}]`
        let tableText = getXPathText(capa, pathTableCpf);        

        if (tableText && tableText.includes("PÓLO ATIVO")) {  
            for (let j = 0; j <= MAX_ROWS; j++) {
                const rowXpath = `html/body/div/div[${i}]/table/tbody/tr[${j}]`;
                const rowText = getXPathText(capa, rowXpath);

                if (rowText) {
                    const isPoloAtivo = rowText.includes("PÓLO ATIVO");
                    const isRepresentandoAGU = rowText.includes("SIM");

                    if (isPoloAtivo && !isRepresentandoAGU) {
                        if (isCPF(rowText)) {
                            console.log("CPF OU ADVOGADO: true");
                            return rowText.split(/[()]/)[1]?.replace(/[.-]/g, "");
                        } else {
                            console.log("CPF OU ADVOGADO: false");
                            return undefined;
                        }
                    }
                }
            }
        }
    }
    return undefined
} 