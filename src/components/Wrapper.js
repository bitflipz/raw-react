const Wrapper = (props) => {
    return (
        <div className='App'>
            <div className='App-header'>
                <h1>raw-react</h1>
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper