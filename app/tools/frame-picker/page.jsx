import FramePickerClient from "./FramePickerClient";
export const metadata = {
  title: "Video Frame Picker | Extract Frames from Video | Omogiwa",
  description:
    "Free online video frame picker by Omogbolahan Giwa. Upload a video and extract, select, and save individual frames directly in your browser.",
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
    "Omogiwa",
    "Omogbolahan Giwa",
  ],
  authors: [{ name: "Omogbolahan Giwa", url: "https://omogiwa.com" }],
  creator: "Omogbolahan Giwa",
  publisher: "Omogiwa",
  metadataBase: new URL("https://omogiwa.com"),
  alternates: {
    canonical: "/tools/frame-picker",
  },
  openGraph: {
    title: "Video Frame Picker | Omogiwa",
    description:
      "Extract and select frames or pictures from your videos directly in your browser with Omogiwa's free Video Frame Picker.",
    url: "https://omogiwa.com/tools/frame-picker",
    siteName: "Omogiwa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Frame Picker | Omogiwa",
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
export default function FramePickerPage() {
  return (
    <main
      id="omogiwa-frame-picker-page"
      className="omogiwa-frame-picker-page"
    >
      <section
        id="omogiwa-frame-picker-tool"
        className="omogiwa-frame-picker-tool"
      >
        <FramePickerClient />
      </section>
    </main>
  );
}