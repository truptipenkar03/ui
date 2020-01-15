import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return id => pattern.test(id)
};

const typescriptConfig = {
  cacheRoot: "tmp/.rpt2_cache",
  tsconfig: './tsconfig.rollup.json',
  tsconfigOverride: {
    compilerOptions: {
      declaration: false
    }
  },
};

const config = {
  input: "src/index.ts",
};

const external = makeExternalPredicate([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]);

const umd = Object.assign({}, config, {
  output: {
    file: `dist/rtkwlf-ui.dev.js`,
    format: "umd",
    name: "@rtkwlf-ui",
    exports: "named",
    globals: {
      react: "React",
      'react-dom': 'ReactDOM',
      'styled-components': 'styled'
    },
  },
  external: [
    "react",
    "react-dom",
    "styled-components"
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(typescriptConfig)
  ],
});

const umdProd = Object.assign({}, umd, {
  output: Object.assign({}, umd.output, {
    file: `dist/rtkwlf-ui.js`,
  }),
  plugins: [
    resolve(),
    commonjs(),
    typescript(typescriptConfig),
    terser(),
  ],
});

const cjs = Object.assign({}, config, {
  output: {
    file: `dist/rtkwlf-ui.cjs.js`,
    format: "cjs",
    exports: "named",
  },
  plugins: [commonjs(), typescript(typescriptConfig)],
  external,
});

const es = Object.assign({}, config, {
  output: {
    file: `dist/rtkwlf-ui.es.js`,
    format: "es",
    exports: "named",
  },
  plugins: [commonjs(), typescript(typescriptConfig)],
  external,
});

export default [umdProd, es, cjs]
