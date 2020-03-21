module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component/Component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/Component/Component.module.css.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component/index.js.hbs',
      },
      {
        // Adds an index.js file if it does not already exist
        type: 'add',
        path: 'components/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'components/index.js',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}';`,
      },
    ],
  });
};
