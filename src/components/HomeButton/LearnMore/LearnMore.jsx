import "../button.css"

const LearnMore = ({href, children}) => {
  return (
    <>
    <a href={href} className="learn-more-btn">{children}</a>
    <div className="underline"></div>
    </>
  )
}

export default LearnMore