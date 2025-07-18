const { useState } = require("react");

function useStateExample1() {
    const [counter, setCounter] = useState(1)
    
    const handleIncrease = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="App" style={{padding: 20}}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

function useStateExample2() {
    const [counter, setCounter] = useState(() => {
        const total = Math.randowm() * 100;
        return total;
    })

    const handleIncrease = () => {
        setCounter(prev => prev + 1)
    }
    return (
        <div className="app">
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

function useStateExample3() {
    const [info, setInfo] = useState({
        name: "John",
        age: 22,
    })

    const updateInfo = () => {
        setInfo(prev => ({
            ...prev,
            gender: "male"
        }))
    }

    return (
        <div className="app">
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={updateInfo}>Update</button>
        </div>
    )
}

export default useStateExample1; useStateExample2; useStateExample3;