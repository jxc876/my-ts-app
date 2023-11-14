type MyTsCounterArgs = {
    count: number
}

interface MikeArgs {
    count: number
}

function MyTsCounter({ count }: MikeArgs) {
    return (
        <h2>MyTsCounter: {count}</h2>
    )
} 

export default MyTsCounter;