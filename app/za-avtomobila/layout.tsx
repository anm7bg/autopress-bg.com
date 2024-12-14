import { Metadata } from "next";

export const metadata: Metadata = {
  title: "За автомобила | Потопете в света на автомобилите с Автопрес БГ!",
  description: "Категория За автомобила е широка и обхваща разнообразни теми, свързани с автомобилите. В нея можете да откриете информация за различни марки и модели ...",
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
