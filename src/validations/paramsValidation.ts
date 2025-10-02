/**
 * Função de validação que verifica condições inválidas
 * ap qual um Query Params pode apresentar.
 * São elas: Não ser um inteiro, ser um NaN ou ser negativo.
 *
 * @param param - Valor recebido na query.
 * @param valueDefault - Valor utilizado caso `param` seja inválido.
 * @returns - `valueDefault` caso alguma das condições
 * inválidas seja apresentada.
 * - `param` se o valor da query for
 * válido.
 */
export const checkParam = (param: any, valueDefault: number) => {
    let check = Number(param);

    if (!Number.isInteger(check) || isNaN(check) || check < 0) {
        return valueDefault;
    }

    return check;
};
