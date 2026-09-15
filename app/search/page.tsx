import { Suspense } from "react";
import SearchInner from "./inner";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <Suspense>
      <SearchInner />
    </Suspense>
  );
}
