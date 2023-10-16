"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export default function ProjetosList() {
  const [test, setTests] = useState<any>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/projetos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTests(data);
      });
  }, []);
  return (
    <div>
      {test.map((item: any, index: any) => (
        <div key={index}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}
