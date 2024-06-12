import './PaginaA.css'
function PaginaA() {
    

    function horarioAtual() {
        const data = new Date()
        return data.toISOString()
    }

    function aoClicarNoBotao() {
        window.alert('Ola')
    }

    return (
        <>
            <div className="quadradoBoasVindas">
                {horarioAtual()}

                <button onClick={aoClicarNoBotao}>CLIQUE AQUI</button>
            </div>
        </>
    )
}

export default PaginaA