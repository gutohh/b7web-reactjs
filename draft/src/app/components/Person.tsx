type Person = {
    nome: string,
    idade: number,
    sexo: string,
}

export const Person = ({ nome, idade, sexo }: Person) => {
    return (
        <>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Sexo: {sexo}</p>
        </>
    )
}