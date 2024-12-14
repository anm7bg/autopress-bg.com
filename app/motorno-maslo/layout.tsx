import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Моторно масло | Потопете в света на автомобилите с Автопрес БГ!",
  description: "Моторно масло е специална течност, която се използва за намаляване на триенето и износването на двигателя на автомобила. То е една от най-важните течности ...",
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
