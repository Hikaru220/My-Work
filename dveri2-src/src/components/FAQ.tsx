import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "../data/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-canvas py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
        <p className="label text-center text-accent-soft">Вопросы</p>
        <h2 className="text-balance mx-auto mt-4 max-w-xl text-center font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
          Прежде чем написать нам
        </h2>

        <div className="mt-14 lg:mt-16">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="hairline-top border-ink/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium text-ink sm:text-xl">{item.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-accent-soft transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 text-base leading-relaxed text-ink-soft">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
