import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import CodeBlock from '../../UI/CodeBlock';

const AddingSassStylesheets = () => {
  return (
    <PageContent>
      <blockquote>
        Примечание: эта функция доступна с <code>react-scripts@2.0.0</code> и выше.
      </blockquote>

      <p>
        Как правило, мы не рекомендуем повторно использовать одни и те же классы CSS в разных компонентах. Например,
        вместо использования CSS-класса <code>.Button</code> в компонентах <code>{`<AcceptButton>`}</code> и{' '}
        <code>{`<RejectButton>`}</code> мы рекомендуем создать компонент <code>{'<Button>'}</code> с его собственными
        стилями <code>.Button</code>, которые могут отображаться как <code>{'<AcceptButton>'}</code>, так и{' '}
        <code>{'<RejectButton>'}</code> (
        <ChapterLink href='https://reactjs.org/docs/composition-vs-inheritance.html'>Но без наследования</ChapterLink>).
      </p>

      <p>
        Следование этому правилу часто делает препроцессоры CSS менее полезными, поскольку такие функции, как миксины и
        вложения(nesting), заменяются композицией компонентов. Однако вы можете интегрировать препроцессор CSS, если
        сочтете его полезным.
      </p>

      <p>
        Чтобы использовать Sass, сначала установите <code>node-sass</code>:
      </p>

      <CodeBlock>
        <span>$ npm install node-sass --save</span>
        <span>$ # or</span>
        <span>$ yarn add node-sass</span>
      </CodeBlock>

      <p>
        Теперь вы можете переименовать <code>src/App.css</code> в <code>src/App.scss</code> и обновить{' '}
        <code>src/App.js</code> импортировав <code>src/App.scss</code>. Этот файл и любой другой файл будут
        автоматически скомпилированы при импорте с расширением <code>.scss</code> или <code>.sass</code>.
      </p>

      <p>
        Чтобы обмениваться переменными между файлами <code>Sass</code>, вы можете использовать imports Sass. Например,{' '}
        <code>src/App.css</code> и другие файлы стилей компонентов могут включать <code>@import "./shared.scss";</code>{' '}
        с переменными определениями.
      </p>

      <p>Это позволит вам выполнять импорт, например</p>

      <CodeBlock>
        <span>@import 'styles/_colors.scss'; // assuming a styles directory under src/</span>
        <span>@import '~nprogress/nprogress'; // importing a css file from the nprogress node module</span>
      </CodeBlock>

      <blockquote>
        Примечание. Перед импортом из <code>node_modules</code> необходимо указать префикс<code>~</code>, как показано
        выше.
      </blockquote>

      <p>
        <code>node-sass</code> также поддерживает <code>SASS_PATH</code> переменные.
      </p>

      <p>
        Чтобы использовать импорт относительно указанного вами пути из <code>node_modules</code> без добавления префикса{' '}
        <code>~</code>, вы можете добавить файл{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/adding-custom-environment-variables.md#adding-development-environment-variables-in-env'>
          <code>.env</code> файл
        </ChapterLink>{' '}
        в корень проекта с переменной <code>SASS_PATH=node_modules:src</code>. Чтобы указать больше каталогов, вы можете
        добавить их в <code>SASS_PATH</code>, разделив их <code>:</code> как <code>path1:path2:path3</code>.
      </p>

      <p>
        Если вы установите <code>SASS_PATH=node_modules:src</code>, это позволит вам выполнять импорт, например
      </p>

      <CodeBlock>
        <span>
          @import 'styles/colors'; // assuming a styles directory under src/, where _colors.scss partial file exists.
        </span>
        <span>@import 'nprogress/nprogress'; // importing a css file from the nprogress node module</span>
      </CodeBlock>

      <blockquote>Примечание. Для операционной системы Windows используйте синтаксис ниже</blockquote>

      <CodeBlock>
        <span>SASS_PATH=./node_modules;./src</span>
      </CodeBlock>

      <blockquote>
        Совет: вы можете включить эту функцию с помощью {''}
        <ChapterLink href='/adding-a-css-modules-stylesheet/' isLink>
          CSS modules тоже
        </ChapterLink>
        !
      </blockquote>

      <blockquote>
        Примечание. Если вы используете Flow, переопределите параметр{' '}
        <ChapterLink href='https://flow.org/en/docs/config/options/#toc-module-file-ext-string'>
          module.file_ext
        </ChapterLink>{' '}
        в вашем <code>.flowconfig</code>, чтобы он распознавал файлы <code>.sass</code> или <code>.scss</code>. Вам
        также необходимо будет включить настройки по умолчанию <code>module.file_ext</code> для файлов <code>.js</code>,{' '}
        <code>.jsx</code>, <code>.mjs</code> и <code>.json</code>.
      </blockquote>

      <CodeBlock>
        <span>[options]</span>
        <span>module.file_ext=.js</span>
        <span>module.file_ext=.jsx</span>
        <span>module.file_ext=.mjs</span>
        <span>module.file_ext=.json</span>
        <span>module.file_ext=.sass</span>
        <span>module.file_ext=.scss</span>
      </CodeBlock>
    </PageContent>
  );
};

export default AddingSassStylesheets;
