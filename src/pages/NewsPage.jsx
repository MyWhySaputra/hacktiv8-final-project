// src/pages/NewsPage.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/features/news/newsSlice";
import NewsCard from "../components/NewsCard";

export default function NewsPage() {
  const { data, isLoading, errorMessage } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="container mx-auto flex items-center justify-center h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="container mx-auto flex items-center justify-center h-screen">
        <p className="text-center text-red-500">Error: {errorMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#D2E0FB]">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Latest News on Peace
        </h1>
        <div className="lg:flex lg:justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            {data.slice(0, 12).map((article) => (
              <NewsCard key={article._id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
