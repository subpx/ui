const fs = require('fs');
const path = require('path');
const glob = require("glob");


const allowedExtensions = ['.svelte', '.js', '.json'];

const autoStart = `/*** THIS FILE IS AUTOMATICALLY GENERATED BY /build/generate-exports.js ***/\n\n`;


function componentIndex(dir) {
  const components = glob.sync(dir + "/*/*");
  const examples = glob.sync(dir + "/*/examples/*.svelte");
  const addedComponents = {};

  components.forEach(component => {
    const componentName = component.split('/')[3];

    if (!addedComponents[componentName]) {
      addedComponents[componentName] = { name: componentName, examples: [] };
    }

    if (component.includes('options.js')) {
      addedComponents[componentName].options = true
    }
  });

  examples.forEach(example => {
    const componentName = example.split('/')[3];
    const exampleName = example.split('/')[5];
    if (!exampleName.includes('_')) {
      addedComponents[componentName].examples.push(exampleName.split('.')[0]);
    }
  })

  Object.values(addedComponents).forEach(item => {
    function CreateContent() {
      let doc = `import components from '../../../src/components/index';\n`
      if (item.options) {
        doc += `import ${item.name}, { options } from 'sveltekit/${item.name}';\n`
      } else {
        doc += `import ${item.name} from 'sveltekit/${item.name}';\n`
      }

      if (item.examples) {
        item.examples.forEach(example => {
          doc += `import ${example} from '../../../src/components/${item.name}/examples/${example}.svelte';\n`
        })
      }

      return doc;
    }

    let content = autoStart + CreateContent();

    content += `\ncomponents.${item.name} = {\n`;
    content += `  name: '${item.name}',\n`;
    content += `  src: ${item.name},\n`;
    content += `  examples: [${[...item.examples]}],\n`;

    if (item.options) {
      content += `  options,\n`;
    }

    content += `}`;

    fs.mkdir(`build/components/${item.name}`, () => {
      fs.writeFileSync(`build/components/${item.name}/index.js`, content);
    });
  });
}

function moduleExports(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory() && file.charAt(0) !== '_') {
      fs.writeFileSync(`${file}.js`, autoStart + `module.exports = require('./${file}.mjs');`);
    }
  });
}

function getComponents(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory() && file.charAt(0) !== '_') {
      createComponentIndex(dir, file);
    }
  });
}

function createComponentIndex(dir, file) {
  let defaultExport = '';
  let namedExports = '';
  let _content = autoStart;

  const componentSrc = path.join(dir, file);
  const componentFile = `${file}.svelte`;
  const componentFilePath = path.join(componentSrc, componentFile);

  if (fs.statSync(componentFilePath)) {
    _content += `import ${file} from './src/components/${file}/${file}.svelte';\n`;
    defaultExport = `export default ${file};\n`
  }

  fs.readdirSync(componentSrc).forEach((srcFile) => {
    const fileExt = path.extname(srcFile);

    if (!srcFile.includes('spec') && !srcFile.includes('_') && srcFile !== componentFile && srcFile !== 'Select.svelte' && srcFile !== 'index.js' && srcFile !== 'export.js' && allowedExtensions.includes(fileExt)) {
      const basename = path.basename(srcFile, fileExt);

      _content += `import ${basename} from './src/components/${file}/${srcFile}';\n`;

      namedExports += `\n\t${basename},`;
    }
  });

  _content += '\n';

  if (namedExports) _content += `export {${namedExports.replace(/,$/, '')}\n};\n`;

  if (defaultExport) _content += defaultExport;

  if (file !== 'Select') {
    fs.writeFileSync(`${file}.mjs`, _content);
  }
}

componentIndex('./src/components');
getComponents('./src/components');
moduleExports('./src/components');
