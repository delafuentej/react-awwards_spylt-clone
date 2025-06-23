const ClipPathTitle = ({
  title,
  textColorClass = "",
  bgColorClass = "",
  borderColorClass = "",
  className = "",
  maskClipPath = "mask-clip-path-3",
}) => {
  return (
    <div className="general-title">
      <div
        className={`border-[.9vw] text-nowrap opacity-0 ${maskClipPath} ${borderColorClass} ${className}`}
      >
        <div className={`pb-3 md:px-14 px-3 md:pt-0 pt-3 ${bgColorClass}`}>
          <h1 className={`${textColorClass}`}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
