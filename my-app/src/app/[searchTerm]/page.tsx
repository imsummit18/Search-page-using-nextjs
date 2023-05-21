
import Item from "../components/item";
import getWikiResults from "../lib/getWikiResults"

type Props = {
    params: {
        searchTerm: string;
    }
}

export async function generateMetadata({params:{searchTerm}}:Props){
    const wikiData = getWikiResults(searchTerm);
    const data = await wikiData;
    const displayTerm = searchTerm.replace("%20", "")

if(!data?.query.pages){

    return{
        title:`${displayTerm} Not Found`

    }
}
return{
    title:displayTerm,
    description:`Search results for ${displayTerm}`
}
}

const page = async ({ params: { searchTerm } }: Props) => {
    const wikiData = getWikiResults(searchTerm);
    const data = await wikiData;
    const results = data?.query?.pages
    const Content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {
                results ? Object.values(results).map((result) => {
                    return <Item key={result.pageid} result={result}/>
                })
                    :
                    <h2 className="p-2 text-xl">{`${searchTerm} not found`}</h2>
            }
        </main>
    )
    return Content;
}

export default page
