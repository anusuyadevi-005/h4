import { useEffect } from "react";
import Branches from "../components/Branches";
import Footer from "../components/Footer";

function BranchesPage() {
  useEffect(() => {
    document.title = "Our Branches – H4 Fitness Studio | Medavakkam & Semmancheri";
  }, []);

  return (
    <main className="page-wrapper bg-[#080808] min-h-screen flex flex-col">
      <div className="flex-1" style={{ paddingTop: "72px" }}>
        <Branches />
      </div>
      <Footer />
    </main>
  );
}

export default BranchesPage;
