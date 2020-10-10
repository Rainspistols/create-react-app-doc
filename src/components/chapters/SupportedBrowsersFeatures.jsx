import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const SupportedBrowsersFeatures = () => {
  return (
    <PageContent>
      <ChapterTitle anchorId='supported-browsers'>
        Supported Browsers
      </ChapterTitle>

      <p>
        По умолчанию сгенерированный проект поддерживает все современные
        браузеры. Для поддержка Internet Explorer 9, 10 и 11 требуются
        полифиллы. Для поддержки старых браузеров, используйте{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md'>
          react-app-polyfill.
        </ChapterLink>
      </p>

      <ChapterTitle anchorId='supported-language-features'>
        Поддерживаемые языковые функции
      </ChapterTitle>

      <p>
        Этот проект поддерживает расширенный набор последнего стандарта
        JavaScript. Помимо синтаксических функций ES6, он также поддерживает:
      </p>

      <ul>
        <li>
          <ChapterLink href='https://github.com/tc39/proposal-exponentiation-operator'>
            Оператор возведения в степень
          </ChapterLink>{' '}
          (ES2016).
        </li>
        <li>
          <ChapterLink href='https://github.com/tc39/ecmascript-asyncawait'>
            Async/await
          </ChapterLink>{' '}
          (ES2017).
        </li>
        <li>
          <ChapterLink href='https://github.com/tc39/proposal-object-rest-spread'>
            Object Rest/Spread Properties
          </ChapterLink>{' '}
          (ES2018).
        </li>
        <li>
          <ChapterLink href='https://github.com/tc39/proposal-dynamic-import'>
            Dynamic import()
          </ChapterLink>{' '}
          (stage 4 proposal)
        </li>
        <li>
          <ChapterLink href='https://github.com/tc39/proposal-class-public-fields'>
            Class Fields and Static Properties
          </ChapterLink>{' '}
          (part of stage 3 proposal).
        </li>
        <li>
          <ChapterLink href='https://reactjs.org/docs/introducing-jsx.html'>
            JSX
          </ChapterLink>
          ,
          <ChapterLink isLink href='/adding-flow/'>
            Flow
          </ChapterLink>{' '}
          and{' '}
          <ChapterLink href='/adding-typescript/' isLink>
            TypeScript
          </ChapterLink>
          .
        </li>
      </ul>

      <p>
        Узнайте больше о{' '}
        <ChapterLink href='https://tc39.es/process-document/'>
          этапах предложений.
        </ChapterLink>
      </p>

      <p>
        Хотя мы рекомендуем использовать с некоторой осторожностью
        экспериментальные предложения, Facebook активно использует эти функции,
        поэтому мы намерены предоставлять{' '}
        <ChapterLink href='https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb'>
          codemods
        </ChapterLink>{' '}
        если какое-либо из этих предложений изменится в будущем.
      </p>

      <p>
        Обратите внимание, что в этом проекте нет {''}
        <ChapterLink href='https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md'>
          polyfills
        </ChapterLink>{' '}
        по умолчанию.
      </p>

      <p>
        Если вы используете какие-либо другие функции ES6+, которые нуждаются в
        поддержке во время выполнения (например, <code>Array.from()</code> или{' '}
        <code>Symbol</code>), убедитесь, что вы добавили{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md'>
          соответствующие полифиллы вручную
        </ChapterLink>{' '}
        или что браузеры, на которые вы ориентируетесь, уже поддерживают их.
      </p>

      <ChapterTitle anchorId='configuring-supported-browsers'>
        Настройка поддерживаемых браузеров
      </ChapterTitle>

      <p>
        По умолчанию сгенерированный проект включает в себя конфигурацию{' '}
        <code>browserslist</code> в файле <code>package.json</code> направленный
        на широкий спектр браузеров в зависимости от глобального использования (
        <code>> 0,2%</code>) для product сборок и development в современных
        браузерах. Это дает хороший опыт разработки, особенно при использовании
        таких языковых функций, как async/await, но при этом обеспечивает
        высокую совместимость со многими браузерами в production сборке.
      </p>

      <p>
        Конфигурация <code>browserslist</code> контролирует вывод JavaScript,
        чтобы сгенерированный код был совместим с указанными браузерами. Список{' '}
        <code>production</code> будет использоваться при создании production
        сборки, запустив скрипт <code>build</code> и {''}
        <code>development</code> будет использоваться при запуске {''}
        <code>start</code> скрипта. Вы можете использовать{' '}
        <ChapterLink href='https://browserl.ist/?q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all'>
          https://browserl.ist
        </ChapterLink>{' '}
        чтобы увидеть браузеры, поддерживаемые вашим настройками
        <code>browserslist</code>.
      </p>

      <p>
        Вот пример <code>browserslist</code>, указанного в{' '}
        <code>package.json</code>:
      </p>

      <CodeBlock>
        <span>"browserslist":&nbsp; &#123; </span>
        <span>&nbsp;&nbsp;&nbsp;"production":&nbsp; [</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">0.2%",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"not dead",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"not op_mini all"</span>
        <span>&nbsp;&nbsp;&nbsp;],</span>
        <span>&nbsp;&nbsp;&nbsp;"development":&nbsp; [</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last 1 chrome version",
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last 1 firefox version",
        </span>
        <span>&nbsp;&nbsp;&nbsp;"last 1 safari version"</span>
        <span>&nbsp;&nbsp;&nbsp;]</span>
        <span>&#125;</span>
      </CodeBlock>

      <blockquote>
        Обратите внимание, что полифиллы автоматически не добавленны. Вам все
        равно потребуется полифиллировать языковые функции (см. выше) по мере
        необходимости в зависимости от поддерживаемых вами браузеров.
      </blockquote>

      <blockquote>
        При редактировании конфигурации <code>browserslist</code> вы можете
        заметить, что ваши изменения не сразу применяются.Это связано с тем,{' '}
        <ChapterLink href='https://github.com/babel/babel-loader/issues/690'>
          что babel-loader
        </ChapterLink>{' '}
        не находит изменений в вашем <code>package.json</code>. Быстрое решение
        заключается в том, чтобы удалить папку{' '}
        <code>node_modules/.cache</code> и повторить попытку.
      </blockquote>
    </PageContent>
  );
};

export default SupportedBrowsersFeatures;
