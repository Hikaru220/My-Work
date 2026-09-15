import { useEffect } from "react";
import ProductGrid from "../components/ProductGrid";
import Materials from "../components/Materials";
import Reveal from "../components/Reveal";
import DetailVideo from "../components/DetailVideo";

export default function CategoryPage({ data }) {
  useEffect(() => {
    document.title = `${data.title} — KRAFT`;
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div id="page-content">
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <p className="label gold">Каталог · {data.title}</p>
            <h2 className="section-title">Модели и цены</h2>
            <p className="section-lead">{data.desc}</p>
          </Reveal>
          <ProductGrid products={data.products} />

          {data.detailVideo && (
            <DetailVideo src={data.detailVideo} poster={data.detailPoster} caption={data.detailCaption} />
          )}
        </div>
      </section>

      <Materials />
    </div>
  );
}
