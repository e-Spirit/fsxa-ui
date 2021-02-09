import { checkPassedValue } from "../PropertyChecker";

describe("utils/PropertyChecker/checkPassedValue", () => {
  let spy: jest.SpyInstance;
  let testingArray: string[];
  let testingValue: string;
  let mockedFunction: jest.SpyInstance;
  let mockedVueElement: Element;

  beforeEach(() => {
    spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => null);
    testingArray = ["a", "b", "c"];
    testingValue = "d";
    mockedFunction = jest.fn();
    mockedVueElement = ({
      remove: mockedFunction,
    } as unknown) as Element;
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should not throw an error", () => {
    testingValue = "a";

    expect(() =>
      checkPassedValue(mockedVueElement, testingArray, testingValue),
    ).not.toThrowError();
  });

  it("should throw error with correct message without valueName", () => {
    const expectedString = `The element '${testingValue}' is not available.`;
    expect(() =>
      checkPassedValue(mockedVueElement, testingArray, testingValue),
    ).toThrowError(expectedString);
    expect(mockedFunction).toBeCalled();
  });

  it("should throw error with correct message with valueName", () => {
    const testingName = "TestName";
    const expectedString = `The ${testingName} '${testingValue}' is not available.`;

    expect(() =>
      checkPassedValue(
        mockedVueElement,
        testingArray,
        testingValue,
        testingName,
      ),
    ).toThrowError(expectedString);
    expect(mockedFunction).toBeCalled();
  });
});
