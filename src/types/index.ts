import Vue from "vue";

export abstract class TsxComponent<P = {}> extends Vue {
  $props: Readonly<{}> & Readonly<P> = {} as P;
}
