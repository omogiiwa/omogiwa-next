import FramePickerClient from "./FramePickerClient";
import "./frame-picker.css";

export const metadata = {
  title: "Video Frame Picker — Extract Frames from Video | Omogiwa",
  description:
    "Free online video frame picker and frame extractor. Select a video, browse frames by second, choose the moments you want, and download them directly in your browser.",
  keywords: [
    "video frame picker",
    "video frame extractor",
    "extract frames from video",
    "video to frames",
    "video screenshot tool",
    "extract video frames online",
    "free video frame extractor",
    "online frame picker",
    "video frame grabber",
    "frame extractor",
    "video screenshot generator",
    "Omogiwa",
    "Omogbolahan Giwa",
  ],
  authors: [
    {
      name: "Omogbolahan Giwa",
      url: "https://omogiwa.com",
    },
  ],
  creator: "Omogbolahan Giwa",
  publisher: "Omogiwa",
  metadataBase: new URL("https://omogiwa.com"),

  alternates: {
    canonical: "/tools/frame-picker",
  },

  openGraph: {
    title: "Video Frame Picker — Omogiwa",
    description:
      "Extract and select frames from your videos directly in your browser.",
    url: "https://omogiwa.com/tools/frame-picker",
    siteName: "Omogiwa",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Video Frame Picker — Omogiwa",
    description:
      "A free browser-based tool for extracting and selecting frames from video.",
    creator: "@omo_giiwa",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Omogiwa Video Frame Picker",
  url: "https://omogiwa.com/tools/frame-picker",
  description:
    "A free browser-based tool for extracting and selecting frames from videos.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires a modern web browser with JavaScript enabled.",
  isAccessibleForFree: true,
  author: {
    "@type": "Person",
    name: "Omogbolahan Giwa",
    url: "https://omogiwa.com",
  },
  publisher: {
    "@type": "Person",
    name: "Omogbolahan Giwa",
    url: "https://omogiwa.com",
  },
};

export default function FramePickerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main
        id="omogiwa-frame-picker-page"
        className="omogiwa-frame-picker-page"
      >
        <FramePickerClient />
      </main>
    </>
  );
}