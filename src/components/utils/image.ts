import { ImageRef } from "@/types/fsxa-ui";

interface ResolutionMeta {
  key: string;
  widthDelta: number;
  heightDelta: number;
}

export const isImageRef = (media: any): media is ImageRef => {
  return media && (media as any).type === "image";
};

export const determineCorrectResolution = (
  width: number,
  height: number,
  resolutions: Record<string, { url: string; width: number; height: number }>,
) => {
  // first of all we want to determine the current orientation
  const orientation = width > height ? "landscape" : "portrait";

  let foundResolution: ResolutionMeta | null = null;

  Object.keys(resolutions).forEach((key) => {
    const resolution = resolutions[key];
    const resolutionOrientation =
      resolution.width > resolution.height ? "landscape" : "portrait";
    if (resolutionOrientation === orientation) {
      const widthDelta = width - resolution.width;
      const heightDelta = height - resolution.height;
      if (
        !foundResolution ||
        (widthDelta < 0 &&
          widthDelta < foundResolution.widthDelta &&
          heightDelta < 0 &&
          heightDelta < foundResolution.heightDelta)
      ) {
        foundResolution = {
          key,
          widthDelta,
          heightDelta,
        };
      }
    }
  });
  return foundResolution
    ? resolutions[(foundResolution as ResolutionMeta).key]
    : null;
};
