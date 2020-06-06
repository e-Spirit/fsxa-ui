import { CreateElement } from "vue";
import FSXACol from "@/components/FSXACol";
import FSXARow from "@/components/FSXARow";

export default {
  title: "FSXARow",
};

export const sticky = () => ({
  render: (h: CreateElement) => (
    <FSXARow>
      <FSXACol width="12" lg_width="7">
        <div class="w-full h-12 bg-gray-400" />
      </FSXACol>
      <FSXACol width="12" lg_width="5" class="rows-span-2">
        <div class="w-full h-12 bg-gray-400" />
      </FSXACol>
    </FSXARow>
  ),
});
