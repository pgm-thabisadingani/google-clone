import { useRouter } from "next/dist/client/router";
import Head from "next/head"
import Header from "../components/Header"
import SearchResults from "../components/SearchResults";
import Response from "../Response";

export default function Search({ results }){
  //console.log(results);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  )
}


export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());

    //afetr the server has rendered , pass the results to the client.
    return {
      props: {
        results: data,
      }
    }
}
