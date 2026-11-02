// same heading for every section so they all match
// preText and postText are optional, highlight is the colored word
export default function SectionHeading({ preText, highlight, postText }) {
  return (
    // mb-10 = gap between the heading and the content under it
    <div className="text-center mb-10">
      {/* text gets bigger on md screens, uppercase just looks better here */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content uppercase">
        {preText && <span>{preText} </span>}
        {/* text-primary = theme color, changes if i switch the data-theme */}
        <span className="text-primary">{highlight}</span>
        {postText && <span> {postText}</span>}
      </h2>
      {/* little underline bar, mx-auto centers it */}
      <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
    </div>
  );
}
