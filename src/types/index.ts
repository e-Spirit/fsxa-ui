import Vue from "vue";

export abstract class TsxComponent<P = {}> extends Vue {
  $tsxProps: Readonly<{}> & Readonly<P> = {} as P;
}
