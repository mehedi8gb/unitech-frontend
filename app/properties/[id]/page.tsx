// app/properties/[id]/page.tsx

import { Suspense } from 'react';
import PropertyDetails from './PropertyDetails';

type PageProps = {
  params: { id: string }; // params is already resolved by Next.js
};

export default function PropertyDetailsPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertyDetails id={params.id} />
    </Suspense>
  );
}
