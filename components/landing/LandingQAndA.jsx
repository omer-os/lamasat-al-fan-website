import DropDown from "./DropDown";

export default function LandingQAndA({ data, lang }) {
  return (
    <div className="flex flex-col">
      <div className="text-center text-3xl font-bold">اسئلة الشائعة</div>

      <div className="mx-auto flex flex-col md:w-3/6 sm:w-4/6 px-7 mt-3">
        {data.map((i, index) => (
          <DropDown key={index} Ques={i.q[lang]} Ans={i.a[lang]} />
        ))}
      </div>
    </div>
  );
}
