import React from 'react';
import Link from 'next/link';

interface CountryLinkProps {
  name: string;
  code: string;
  emoji: string;
}

function CountryLink({ name, code, emoji }: CountryLinkProps) {
  return (
    <Link className="flex mr-4 mt-4" key={code} href={`/country/${code}`}>
      <p className="flex self-start p-2 border rounded-md border-gray-300 hover:border-gray-600 hover:bg-gray-50">
        {name} <span aria-hidden>{emoji}</span>
      </p>
    </Link>
  );
}
export default CountryLink;
