import DropDown from "./DropDown";

export default function LandingQAndA({ data, lang }) {
  return (
    <div dir={lang==="ar"?"rtl":"ltr"} className="flex flex-col">
      <div className="text-center mx-2 text-3xl font-bold">
        {lang === "ar" ? "اسئلة الشائعة" : "Frequently Asked Questions"}
      </div>

      <div className="mx-auto flex flex-col md:w-3/6 sm:w-4/6 px-7 mt-3">
        {data.map((i, index) => (
          <DropDown key={index} Ques={i.q[lang]} Ans={i.a[lang]} />
        ))}
      </div>
    </div>
  );
}
