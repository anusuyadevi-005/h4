import { useEffect } from "react";
import Trainers from "../components/Trainers";
import Footer from "../components/Footer";

function TrainersPage() {
  useEffect(() => {
    document.title = "Our Trainers – H4 Fitness Studio";
  }, []);

  return (
    <main className="page-wrapper bg-[#080808] min-h-screen flex flex-col">
      <div className="flex-1">
        <Trainers />
      </div>
      <Footer />
    </main>
  );
}

export default TrainersPage;
