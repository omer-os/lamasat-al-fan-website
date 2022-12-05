import DropDown from "./DropDown";


export default function LandingQAndA() {
  return (
    <div className="flex flex-col">
      <div className="text-center text-3xl font-bold">اسئلة الشائعة</div>

      <div className="mx-auto flex flex-col md:w-3/6 sm:w-4/6 px-7 mt-3">
        <DropDown
          Ques={"أحياناً عن طريق الصدفة، وأحياناً عن عمد"}
          Ans="أحياناً عن طريق الصدفة، وأحياناً عن عمدأحياناً عن طريق الصدفة، وأحياناً عن عمد"
        />
        <DropDown
          Ques={"أحياناً عن طريق الصدفة، وأحياناً عن عمد"}
          Ans="أحياناً عن طريق الصدفة، وأحياناً عن عمدأحياناً عن طريق الصدفة، وأحياناً عن عمد"
        />
        <DropDown
          Ques={"أحياناً عن طريق الصدفة، وأحياناً عن عمد"}
          Ans="أحياناً عن طريق الصدفة، وأحياناً عن عمدأحياناً عن طريق الصدفة، وأحياناً عن عمد"
        />
        <DropDown
          Ques={"أحياناً عن طريق الصدفة، وأحياناً عن عمد"}
          Ans="أحياناً عن طريق الصدفة، وأحياناً عن عمدأحياناً عن طريق الصدفة، وأحياناً عن عمد"
        />
      </div>
    </div>
  );
}
