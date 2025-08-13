export default function Card({ question, creator, createdDate, tags,id}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">
        <a href={`/question/${id}`}>{question}</a>
        </h2>
      <p className="text-sm text-gray-600">
        Asked by {creator} on {new Date(createdDate).toLocaleDateString}
      </p>
      <div className="mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 text-gray-700">
            #{tag}
            </span>
        ))}
      </div>
    </div>
  );
}