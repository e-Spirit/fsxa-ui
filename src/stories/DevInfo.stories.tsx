import { CreateElement } from "vue";
import FSXADevInfo from "@/components/FSXADevInfo";

export default {
  title: "DevInfo",
};

export const info = () => ({
  render: (h: CreateElement) => (
    <div class="w-full h-64 relative bg-gray-300">
      <FSXADevInfo>Content</FSXADevInfo>
    </div>
  ),
});
