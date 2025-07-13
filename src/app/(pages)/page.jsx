import CollegeSection from "./components/CollegeSection";
import ImageGallerySection from "./components/ImageGallerySection";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <div>
        <CollegeSection />
        <ImageGallerySection />
      </div>
    </div>
  );
}
