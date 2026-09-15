import { useMemo, useState } from "react";
import { m } from "motion/react";
import { Minus, Plus, Check } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { CALCULATOR, COLLECTIONS, formatSom, waLink } from "../data/content";

function Switch({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className="flex w-full items-center justify-between gap-4 border border-ink/12 bg-canvas-deep px-5 py-4 text-left transition-colors duration-300 hover:border-ink/30"
    >
      <span>
        <span className="block text-base font-medium text-ink">{label}</span>
        <span className="mt-0.5 block text-sm text-ink-soft">{hint}</span>
      </span>
      <span
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 ${
          checked ? "bg-accent" : "bg-ink/15"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-ink shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </span>
    </button>
  );
}

export function Calculator() {
  const [selectedId, setSelectedId] = useState(COLLECTIONS[0].id);
  const [quantity, setQuantity] = useState(1);
  const [install, setInstall] = useState(true);
  const [trim, setTrim] = useState(true);

  const collection = COLLECTIONS.find((c) => c.id === selectedId) ?? COLLECTIONS[0];

  const { doorsCost, installCost, trimCost, total } = useMemo(() => {
    const doorsCost = collection.priceFrom * quantity;
    const installCost = install ? CALCULATOR.installFee * quantity : 0;
    const trimCost = trim ? CALCULATOR.trimFee * quantity : 0;
    return { doorsCost, installCost, trimCost, total: doorsCost + installCost + trimCost };
  }, [collection, quantity, install, trim]);

  const message = [
    "Здравствуйте! Посчитал(а) расчёт на сайте ВЕРЕЯ:",
    `— Коллекция: ${collection.title} (${quantity} шт.)`,
    install ? "— Монтаж под ключ: да" : "— Монтаж под ключ: нет",
    trim ? "— Доборы и наличники: да" : "— Доборы и наличники: нет",
    `Итого ориентировочно: ${formatSom(total)}`,
    "Хочу уточнить точную стоимость после замера.",
  ].join("\n");

  return (
    <section id="calculator" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-xl">
          <p className="label text-accent-soft">Калькулятор</p>
          <h2 className="text-balance mt-4 font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            Посчитайте примерную стоимость за минуту
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Выберите коллекцию, количество дверей и нужные опции — ниже сразу увидите
            ориентировочную сумму и сможете отправить расчёт нам в WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-10">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 lg:col-span-3"
          >
            <div>
              <span className="label text-ink-soft">Коллекция</span>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {COLLECTIONS.map((c) => {
                  const active = c.id === selectedId;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedId(c.id)}
                      aria-pressed={active}
                      className={`flex items-center justify-between gap-3 border px-5 py-4 text-left transition-colors duration-300 ${
                        active
                          ? "border-accent-soft bg-accent/10"
                          : "border-ink/12 bg-canvas-deep hover:border-ink/30"
                      }`}
                    >
                      <span>
                        <span className="block text-base font-medium text-ink">{c.title}</span>
                        <span className="mt-0.5 block text-sm text-ink-soft">от {formatSom(c.priceFrom)}</span>
                      </span>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          active ? "border-accent-soft bg-accent-soft text-canvas-dusk" : "border-ink/20 text-transparent"
                        }`}
                      >
                        <Check size={14} strokeWidth={3} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="label text-ink-soft">Количество дверей</span>
              <div className="mt-4 flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Уменьшить количество"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-300 hover:border-accent-soft hover:text-accent-soft"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-display text-3xl text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(30, q + 1))}
                  aria-label="Увеличить количество"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-300 hover:border-accent-soft hover:text-accent-soft"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="label text-ink-soft">Опции</span>
              <Switch
                checked={install}
                onChange={setInstall}
                label="Монтаж под ключ"
                hint={`+ ${formatSom(CALCULATOR.installFee)} за дверь`}
              />
              <Switch
                checked={trim}
                onChange={setTrim}
                label="Доборы и наличники"
                hint={`+ ${formatSom(CALCULATOR.trimFee)} за дверь`}
              />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 border border-accent-soft/20 bg-canvas-dusk p-7 sm:p-9">
              <p className="label text-accent-soft">Ваш расчёт</p>

              <dl className="mt-6 flex flex-col gap-3 text-sm text-ink">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink-soft">
                    {collection.title} × {quantity}
                  </dt>
                  <dd className="whitespace-nowrap">{formatSom(doorsCost)}</dd>
                </div>
                {install && (
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-ink-soft">Монтаж под ключ</dt>
                    <dd className="whitespace-nowrap">{formatSom(installCost)}</dd>
                  </div>
                )}
                {trim && (
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-ink-soft">Доборы и наличники</dt>
                    <dd className="whitespace-nowrap">{formatSom(trimCost)}</dd>
                  </div>
                )}
              </dl>

              <div className="hairline-top mt-6 border-ink/15 pt-6">
                <span className="label text-ink-faint">Итого ориентировочно</span>
                <p className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">{formatSom(total)}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Точная стоимость — после бесплатного замера проёмов.
                </p>
              </div>

              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-3 bg-whatsapp px-6 py-4 text-white transition-colors duration-300 hover:bg-whatsapp-deep"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span className="label">Отправить расчёт в WhatsApp</span>
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
