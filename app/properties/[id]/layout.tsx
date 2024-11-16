export async function generateMetadata(
  { params, searchParams }: any, // Use 'any' to temporarily bypass type issues
  parent: any
) {
  const id = params.id;

  return {
      title: "uni tech holding",
  };
}

  export default function Layout({ children }) {
    return <>{children}</>;  
}