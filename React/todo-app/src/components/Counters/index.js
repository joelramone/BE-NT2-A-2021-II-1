import React from "react"

export default ({ todos }) => {

    const itemCountSpan = todos.length

    const unCheckedCountSpan = todos.filter(item => !item.checked).length
    

    // El metodo .reduce de la interfaz Array en javascript nos permite recorrer todos los elementos de un array
    // y segun una condicion devolver un valor dado por el segundo argumento
    // (en mi caso lo inicializo en cero)
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // const unCheckedCountSpan = todos.reduce((counter, item) => {
    //     console.log('=====> ', item, counter)
    //     return (!item.checked) ? counter + 1: counter
    // }, 0)
    
    // console.log('unCheckedCountSpan', unCheckedCountSpan)
    return (
        <div className="flow-right controls">
            <span>Item count: <span id="item-count">{itemCountSpan}</span></span>
            {/* <span>Unchecked count: <span id="unchecked-count">{unCheckedCountSpan.length}</span></span> */}
            <span>Unchecked count: <span id="unchecked-count">{unCheckedCountSpan}</span></span>
        </div>
    )
}