import { determineCorrectResolution } from "../image";

describe("utils", () => {
  describe("determineCorrectResolution", () => {
    it("should return null if no resolution matched the orientation", () => {
      expect(
        determineCorrectResolution(100, 50, {
          ORIGINAL: {
            height: 100,
            width: 50,
            url: "",
          },
        }),
      ).toBe(null);
      expect(
        determineCorrectResolution(50, 100, {
          ORIGINAL: {
            height: 50,
            width: 100,
            url: "",
          },
        }),
      ).toBe(null);
    });

    it("should return the closest matching resolution possible", () => {
      expect(
        determineCorrectResolution(1000, 588, {
          ORIGINAL: {
            height: 10000,
            width: 860,
            url: "",
          },
          LANDSCAPE_BIG: {
            width: 1280,
            height: 768,
            url: "",
          },
          LANDSCAPE_SMALL: {
            width: 768,
            height: 512,
            url: "",
          },
        }),
      ).toEqual({
        width: 1280,
        height: 768,
        url: "",
      });
    });
  });
});
