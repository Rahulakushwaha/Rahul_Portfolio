import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata = {
  title: "Rahul Kushwaha — Data Scientist & ML Engineer",
  description:
    "Portfolio of Rahul Kushwaha, a Data Science & Machine Learning engineer building classification systems, anomaly detection pipelines, and data-driven products.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Rahul Kushwaha — Data Scientist & ML Engineer",
    description:
      "Classification models, anomaly detection, and data pipelines — from notebook to production.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-body antialiased"
        style={{
          "--font-display": "'Space Grotesk', sans-serif",
          "--font-body": "'Inter', sans-serif",
          "--font-mono": "'JetBrains Mono', monospace",
        }}
      >
        {children}
      </body>
    </html>
  );
}
