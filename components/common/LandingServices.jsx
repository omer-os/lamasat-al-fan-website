import { LandingServicesCard } from "..";

export default function LandingServices() {
  return (
    <section className=" mt-20">
      <div className="text-center text-first text-3xl font-extrabold">
        بعض خدماتنا
      </div>

      <div className="flex gap-14 flex-col py-10 items-center px-7">
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="سكني"
          img="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          link="/portfolio?category=سكني"
          dir="rtl"
        />
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="تجاري"
          img="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          link="/portfolio?category=تجاري"
          dir="ltr"
        />
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="حكومي"
          img="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          link="/portfolio?category=حكومي"
          dir="rtl"
        />
      </div>
    </section>
  );
}
