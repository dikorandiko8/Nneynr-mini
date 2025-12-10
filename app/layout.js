// app/layout.js

export const metadata = {
  title: "Neynar Score Checker",
  description: "Miniapp untuk cek Neynar Score langsung dari Farcaster",
  other: {
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
      <body
        style={{
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",
          background: "#f5f5f5"
        }}
      >
        <main
          style={{
            width: "100%",
            maxWidth: "430px",      // wajib untuk farcaster embed
            minHeight: "100vh",
            background: "white",
            padding: "16px",
            boxSizing: "border-box"
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
