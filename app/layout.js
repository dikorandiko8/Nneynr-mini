
export const metadata = {
  title: "Neynar Score Checker",
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      name: "Cek Neynar Score",
      button: { title: "Cek Skor" },
      iconUrl: "https://i.imgur.com/RAjFzQX.png"
    })
  }
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
