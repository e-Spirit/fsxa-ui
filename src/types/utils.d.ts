export interface ImageRef {
  /** The src of the image */
  src: string;
  /*
   * You can specify the dimensions of the image
   *
   * The dimensions will be taken into account and are used as **max-width** and **max-height**
   **/
  dimensions?: {
    width: number;
    height: number;
  };
  /**
   * Specify the elements previewId. It will be added to the image through `data-preview-id`-attribute
   *
   * This will enable direct editing through the OmniChannelManager
   */
  previewId?: string;
}
