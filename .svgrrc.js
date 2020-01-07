module.exports = {
  svgoConfig: {
    plugins: {
      removeViewBox: false,
    }
  },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    componentName.name = componentName.name.slice(3, componentName.name.length + 1);
    const typeScriptTpl = template.smart({ plugins: ['typescript'] });
    return typeScriptTpl.ast`
    import * as React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `
  },
};

