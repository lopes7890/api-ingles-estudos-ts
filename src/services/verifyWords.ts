interface Response {
    word: string,
    responseUser: string
}

export const verifyResponse = async ({word, responseUser}: Response) => {
    try{
        let result = {}
        if (!word || !responseUser ){
            throw new Error ("Todos os campos devem estar preenchidos")
        }

        if (responseUser.toLowerCase() !== word.toLowerCase()) {
            result = {message: "Resposta errada!", correct: word}
        } else {
            result = {message: "Resposta certa!"}
        }

        return result
    } catch (error) {
        return "Erro ao verificar resposta"
    }
}