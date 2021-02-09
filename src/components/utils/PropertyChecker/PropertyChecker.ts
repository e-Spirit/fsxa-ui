/**
 * Checks if defined value is part of an array, if not that Element will be removed and an error is thrown.
 * @param vueElement Vue Element: In this context it will be: this.$el
 * @param possibleOptions: An array of possible options.
 * @param actualValue: A value to check for inclusion in the possibleOptions array.
 * @param valueName: Name for better error message. Describes which value was set incorrectly
 */
const checkPassedValue = (
  vueElement: Element,
  possibleOptions: string[],
  actualValue: string | undefined,
  valueName?: string,
) => {
  if (!actualValue) return;
  if (!possibleOptions.includes(actualValue)) {
    vueElement.remove();
    throw new Error(
      `The ${
        valueName ? valueName : "element"
      } '${actualValue}' is not available.`,
    );
  }
};

export { checkPassedValue };
