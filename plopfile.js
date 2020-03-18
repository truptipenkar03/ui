module.exports = function(plop) {
  plop.setGenerator('create_components', {
    description: 'This will create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of this component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{ pascalCase name }}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{name}}/stories/{{ pascalCase name }}.stories.tsx',
        templateFile: 'templates/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/stories/{{ pascalCase name }}.mdx',
        templateFile: 'templates/Component.mdx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{name}}/__tests__/{{ pascalCase name }}.spec.tsx',
        templateFile: 'templates/Component.spec.tsx.hbs',
      },
    ],
  });
};
