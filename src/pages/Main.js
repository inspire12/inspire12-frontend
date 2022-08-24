
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const Example = () => {
    const { isLoading, error, data } = useQuery('nameForYourData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query')
            .then(response =>
                response.json()
            )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>{data.subscribers_count}</p>
        </div>
    )
}
const MainPage = () => {
    return <>
        {/*<header className="App-header">*/}
        {/*</header>*/}
        <QueryClientProvider client={queryClient}>
            <Example/>

        </QueryClientProvider>
    </>
}

export default MainPage;