export interface ImageRef {
  /** The src of the image */
  src: string;
  resolutions: Record<
    string,
    {
      url: string;
      width: number;
      height: number;
    }
  >;
  /**
   * Specify the elements previewId. It will be added to the image through `data-preview-id`-attribute
   *
   * This will enable direct editing through the OmniChannelManager
   */
  previewId?: string;
}
