/* eslint-disable react/prop-types */
export default function NewsCard({ article }) {
  return (
    <a
      className="max-w-sm lg:max-w-xl rounded overflow-hidden shadow-lg bg-[#FEF9D9] m-4 hover:shadow-2xl hover:bg-gray-100 hover:cursor-pointer"
      href={article.web_url}
      target="_blank"
    >
      {article.multimedia && article.multimedia.length > 0 && (
        <img
          className="w-full h-48 object-cover"
          src={`https://nytimes.com/${article.multimedia[0].url}`}
          alt={article.headline.main}
        />
      )}
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{article.headline.main}</h2>
        <p className="text-gray-700 text-base truncate">{article.snippet}</p>
      </div>
    </a>
  );
}
