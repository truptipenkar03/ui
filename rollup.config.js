import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return id => pattern.test(id);
};

// declaration is false because api-extractor will do the declarations
const typescriptConfig = {
  cacheRoot: 'tmp/.rpt2_cache',
  tsconfig: 'tsconfig.rollup.json',
  tsconfigOverride: {
    compilerOptions: {
      declaration: false,
    },
  },
};

// main entrypoint
const config = {
  input: 'src/index.ts',
};

// Takes the deps and peer dependencies and wraps them as externals
const external = makeExternalPredicate([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]);

// commonjs bundle
const cjs = Object.assign({}, config, {
  output: {
    file: `dist/ui.cjs.js`,
    format: 'cjs',
    exports: 'named',
  },
  external,
  plugins: [commonjs(), typescript(typescriptConfig)],
});

// es6 bundle
const es = Object.assign({}, config, {
  output: {
    file: `dist/ui.es.js`,
    format: 'es',
    exports: 'named',
  },
  external,
  plugins: [commonjs(), typescript(typescriptConfig)],
});

export default [es, cjs];
