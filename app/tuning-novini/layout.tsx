import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тунинг новини | Потопете в света на автомобилите с Автопрес БГ!",
  description: "Категорията Тунинг новини е насочена към автомобилните ентусиасти и обхваща информация за най-новите тенденции и технологии в областта на ...",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-[100%] px-[20px] text-center justify-center">
        {children}
      </div>
    </section>
  );
}
