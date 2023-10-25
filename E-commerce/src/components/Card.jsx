import img1 from "../images/img1.avif"
export const Card = () => {
  return (
    <article className="article">
        <img src={img1} alt="" className="article-img" />
        <h2 className="article-titulo"></h2>
        <p className="article-price"></p>
        <p className="article-description"></p>
        <div className="article-rating"></div>
    </article>
  )
}