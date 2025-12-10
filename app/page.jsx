"use client";
import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

const API_KEY = "D13BDC22-0057-4C89-9BE6-4A3A177D97EE";

export default function Home() {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      try {
        const { fid } = await sdk.context.getUser();

        const res = await fetch(
          `https://api.neynar.com/v2/farcaster/user?fid=${fid}`,
          {
            headers: { api_key: API_KEY }
          }
        );

        const json = await res.json();
        setScore(json?.data?.user?.score ?? "Tidak ditemukan");
      } catch (e) {
        setScore("Error");
      }
      setLoading(false);
    }

    run();
  }, []);

  return (
    <main style={{ padding: 30, textAlign: "center" }}>
      <h1>Cek Skor Neynar</h1>
      {loading ? (
        <p>Mengambil skor...</p>
      ) : (
        <p style={{ fontSize: 40, fontWeight: "bold" }}>{score}</p>
      )}
      <small>Mini App by Kamu 💜</small>
    </main>
  );
}
