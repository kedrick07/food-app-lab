export default function SectionHeading({ preText, highlight, postText }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content uppercase">
        {preText && <span>{preText} </span>}
        <span className="text-primary">{highlight}</span>
        {postText && <span> {postText}</span>}
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
    </div>
  );
}