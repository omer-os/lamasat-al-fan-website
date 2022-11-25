import {LandingServicesCard} from "../Files"

export default function LandingServices() {
  return (
    <section className="sm:mt-24 mt-20">
      <div className="text-center text-3xl font-bold">بعض خدماتنا</div>

      <div className="flex gap-10 flex-col py-10 items-center px-7">
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="تجاري"
          img="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          link="/"
          dir="rtl"
        />
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="تجاري"
          img="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          link="/"
          dir="ltr"
        />
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="تجاري"
          img="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          link="/"
          dir="rtl"
        />
      </div>
    </section>
  );
}
