export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = (await params).id;
  
    // fetch data 
 
    return {
      title: "uni tech holding" 
    };
  }
  export default function Layout({ children }) {
    return <>{children}</>;  
}