export const metadata = {
  title: "Neynar Score Checker",
  description: "MiniApp untuk cek skor Neynar via Farcaster",
  other: {
    // ⭐ Wajib: beri tahu Farcaster bahwa ini MiniApp
    "fc:frame": "vNext",

    // ⭐ Untuk menampilkan tombol
    "fc:frame:button:1": "Cek Skor",
    "fc:frame:button:1:action": "post",

    // ⭐ Endpoint POST yang dipanggil ketika tombol ditekan
    "fc:frame:post_url": "https://nneynr-mini.vercel.app/api/score",

    // 🔥 Metadata MiniApp (boleh tetap dipakai)
    "fc:miniapp": JSON.stringify({
      version: "1",
      name: "Cek Neynar Score",
      iconUrl: "https://i.imgur.com/RAjFzQX.png",
      button: { title: "Cek Skor" }
    })
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
