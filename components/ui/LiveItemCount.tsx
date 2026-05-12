"use client";

import { useEffect, useState } from "react";

const ES_URL =
  "https://880e6260609b4f448f457f172b2a4065.us-west-2.aws.found.io:9243/prod-order-item-index-*/_search";
const ES_KEY = "d1c4V2tKUUJHMHBWYWdKNk5mazM6QUhDcHBoSHNUMEtSbXg3S1VlbnZTdw==";

interface LiveItemCountProps {
  fallback?: string;
}

export function LiveItemCount({ fallback = "1M+" }: LiveItemCountProps) {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(ES_URL, {
      method: "POST",
      headers: {
        Authorization: `ApiKey ${ES_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        size: 0,
        aggs: {
          unique_item_ids: {
            cardinality: { field: "itemId.keyword" },
          },
        },
      }),
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        const value = data?.aggregations?.unique_item_ids?.value;
        if (typeof value === "number") {
          setCount(value.toLocaleString());
        }
      })
      .catch(() => {
        /* keep fallback */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return <span id="item-count">{count ?? fallback}</span>;
}
