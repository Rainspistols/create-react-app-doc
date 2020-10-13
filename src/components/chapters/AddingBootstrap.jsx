import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const AddingBootstrap = () => {
  return (
    <PageContent>
      <p>
        Хотя вам не нужно использовать какую-либо конкретную библиотеку для интеграции Bootstrap с приложениями React,
        это часто проще, чем пытаться обернуть плагины Bootstrap использующие jQuery.{' '}
        <ChapterLink href='https://react-bootstrap.netlify.app/'>React Bootstrap</ChapterLink> - самый популярный
        вариант, стремящийся к полному паритету с Bootstrap.{' '}
        <ChapterLink href='https://reactstrap.github.io/'>reactstrap</ChapterLink> также является хорошим выбором для
        проектов, которым требуются небольшие сборки за счет некоторых функций.
      </p>

      <p>
        На соответствующем сайте документации каждого проекта есть подробные инструкции по их установке и использованию.
        Оба зависят от файла CSS Bootstrap, поэтому установите и его:
      </p>

      <CodeBlock>
        <span>npm install --save bootstrap</span>
      </CodeBlock>

      <p>
        В качестве альтернативы вы можете использовать<code>yarn</code>:
      </p>

      <CodeBlock>
        <span>yarn add bootstrap</span>
      </CodeBlock>

      <p>
        Импортируйте CSS Bootstrap и, нужные CSS темы Bootstrap в начале вашего файла <code>src/index.js</code>:
      </p>

      <CodeBlock>
        <span>import 'bootstrap/dist/css/bootstrap.css';</span>
        <span>{`// Put any other imports below so that CSS from your`}</span>
        <span>{`// components takes precedence over default styles`}.</span>
      </CodeBlock>

      <ChapterTitle anchorId='Using-a-Custom-Theme'>Using a Custom Theme</ChapterTitle>

      <blockquote>
        Примечание: эта функция доступна с <code>react-scripts@2.0.0</code> и выше.
      </blockquote>

      <p>Иногда вам может потребоваться настроить визуальные стили Bootstrap (или аналогичного пакета).</p>

      <p>
        Начиная с <code>react-scripts@2.0.0</code> вы можете импортировать файлы <code>.scss</code>. Это позволяет
        использовать встроенные в пакет переменные Sass для глобальных предпочтений стиля.
      </p>

      <p>
        Чтобы включить <code>scss</code> в приложении Create React вам нужно будет установить <code>node-sass</code>.
      </p>

      <p>
        В качестве альтернативы вы можете использовать<code>yarn</code>:
      </p>

      <CodeBlock>
        <span>yarn add node-sass</span>
      </CodeBlock>

      <p>
        Чтобы настроить Bootstrap, создайте файл с именем <code>src/custom.scss</code> (или аналогичный) и импортируйте
        исходную таблицу стилей Bootstrap. Добавьте любые переопределения <i>перед</i> импортированным файлом(ами). Вы
        можете обратиться к{' '}
        <ChapterLink href='https://getbootstrap.com/docs/4.1/getting-started/theming/#css-variables'>
          Bootstrap's документации
        </ChapterLink>{' '}
        для доступных имен переменных.
      </p>

      <CodeBlock>
        <span>{`// Override default variables before the import`}</span>
        <span>$body-bg: #000;</span>
        <span>
          <br />
        </span>
        <span>{`// Import Bootstrap and its default variables`}</span>
        <span>@import '~bootstrap/scss/bootstrap.scss';</span>
      </CodeBlock>

      <blockquote>
        Примечание. Вы должны импортировать из <code>node_modules</code> с <code>~</code> как показано выше.
      </blockquote>

      <p>
        Наконец, импортируйте вновь созданный <code>.scss </code> файл вместо стандартного Bootstrap <code>.css</code> в
        начало вашего <code>src/index.js</code> файла, например:
      </p>

      <CodeBlock>
        <span>import './custom.scss';</span>
      </CodeBlock>
    </PageContent>
  );
};

export default AddingBootstrap;
