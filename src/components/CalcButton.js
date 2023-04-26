function CalcButton(props) {
    return ( 
    <button onClick={ (e) => props.clickFunc(e) } data-operation={props.operation} type="button">
        {props.operationName}
    </button>);
}

export default CalcButton;