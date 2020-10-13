import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const AddingImagesFontsAndFiles = () => {
  return (
    <PageContent>
      <p>
        With webpack, using static assets like images and fonts works similarly to CSS. Вместе с webpack, использование
        статических сторонних таких элементов как картинки и шрифты аналогично CSS
      </p>

      <p>
        Вы можете{' '}
        <strong>
          <code>import</code> файл прямо в JavaScript модуль
        </strong>
        . Это сообщит webpack что нужно включить этот файл в сборку. В отличии от CSS импортов, импортирование файлов
        дает вам строковое значение. Это значение - путь к файлу на который вы можете ссылаться в своем коде, например
        как <code>src</code> атрибут <code>img</code> тега или <code>href</code> для PDF ссылки.
      </p>

      <p>
        Чтобы уменьшить количество запросов на сервер, импортирование картинок размер которых меньше 10,000 байтов
        возвращает{' '}
        <ChapterLink href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs'>
          data URI
        </ChapterLink>{' '}
        вместо пути(path). Это относится к следующим расширениям файлов: bmp, gif, jpg, jpeg, and png. Файлы SVG
        исключены из-за <ChapterLink href='https://github.com/facebook/create-react-app/issues/1153'>#1153</ChapterLink>
        . Вы можете контролировать порог в 10,000 байтов с помощью переменной окружения{' '}
        <code>IMAGE_INLINE_SIZE_LIMIT</code> как указанно в нашей{' '}
        <ChapterLink href='/advanced-configuration/' isLink>
          продвинутой конфигурации
        </ChapterLink>
        .
      </p>

      <p>Пример:</p>

      <CodeBlock>
        <span>import React from 'react';</span>
        <span>import logo from './logo.png'; // Tell webpack this JS file uses this image</span>
        <span>
          <br />
        </span>
        <span>console.log(logo); // /logo.84287d09.png</span>
        <span>
          <br />
        </span>
        <span>{`function Header() {`}</span>
        <span>&nbsp;&nbsp;&nbsp;// Import result is the URL of your image</span>
        <span>&nbsp;&nbsp;&nbsp;{`return <img src={logo} alt="Logo" />;`}</span>
        <span>{`}`}</span>
        <span>
          <br />
        </span>
        <span>export default Header;</span>
      </CodeBlock>

      <p>
        Это гарантирует, что при создании проекта webpack правильно переместит изображения в папку сборки и предоставит
        нам правильные пути
      </p>

      <p>Это работает и c CSS:</p>

      <CodeBlock>
        <span>.{`Logo {`}</span>
        <span>&nbsp;&nbsp;&nbsp;background-image: url(./logo.png);</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>
        webpack находит все относительные ссылки на модули в CSS (они начинаются с <code>./</code>) и заменяет их
        окончательными путями из скомпилированного пакета. Если вы сделаете опечатку или случайно удалите важный файл,
        вы увидите ошибку компиляции, например, при импорте несуществующего модуля JavaScript. Окончательные имена
        файлов в скомпилированном пакете генерируются webpack из хэшей содержимого. Если в будущем содержимое файла
        изменится, webpack даст ему другое имя в рабочей среде, поэтому вам не нужно беспокоиться о долгосрочном
        кэшировании ресурсов.
      </p>

      <p>
        <strong>Обратите внимание, </strong> что это тоже особенность webpack.
      </p>

      <p>
        <strong>Это не требуется для React </strong>, но многим это нравится (и React Native использует аналогичный
        механизм для изображений).
      </p>

      <p>Альтернативный способ работы со статическими файлами описан в следующем разделе.</p>

      <ChapterTitle anchorId='Adding-SVGs'>Добавление SVG</ChapterTitle>

      <blockquote>
        Примечание: эта функция доступна с <code>react-scripts@2.0.0</code> и выше, и <code>react@16.3.0</code> и выше.
      </blockquote>

      <p>
        Один из способов добавления файлов SVG описан в разделе выше. Вы также можете импортировать SVG напрямую как
        компоненты React. Вы можете использовать любой из двух подходов. В вашем коде это будет выглядеть так:
      </p>

      <CodeBlock>
        <span>{`import { ReactComponent as Logo } from './logo.svg';`}</span>
        <span>
          <br />
        </span>
        <span>{`function App() {`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`return (`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{/* Logo is an actual React component */}`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Logo />`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`);`}</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>
        Это удобно, если вы не хотите загружать SVG как отдельный файл. Не забывайте фигурные скобки при импорте! Имя
        импорта <code>ReactComponent</code> имеет важное значение и сообщает Create React App, что вам нужен компонент
        React, который отображает SVG, а не его имя файла.
      </p>

      <blockquote>
        Совет. Импортированный SVG React Component принимает свойство <code>title</code> вместе с другими свойствами,
        которые принимает элемент <code>svg</code>. Используйте эту опцию, чтобы добавить доступный заголовок к вашему
        компоненту svg.
      </blockquote>
    </PageContent>
  );
};

export default AddingImagesFontsAndFiles;
