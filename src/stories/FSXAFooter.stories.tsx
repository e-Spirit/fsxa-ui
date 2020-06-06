import { CreateElement } from "vue";
import FSXAFooter from "@/components/FSXAFooter";

export default {
  title: "FSXAFooter",
};

export const sticky = () => ({
  render: (h: CreateElement) => (
    <FSXAFooter
      copyright="Copyright"
      links={[
        {
          label: "Contact Us",
          previewId: "kljhghjkl",
          referenceId: "lkjhgfhjk",
          referenceType: "page",
          isActive: false,
        },
        {
          label: "Impressum",
          previewId: "kljhghjkl",
          referenceId: "lkjhgfhjk",
          referenceType: "page",
          isActive: true,
        },
      ]}
      handleClick={console.log}
    >
      <img src="https://demoprod.e-spirit.cloud/mth2/smartlivingglobal/Logo/HDFC-Logo.jpg" />
    </FSXAFooter>
  ),
});
