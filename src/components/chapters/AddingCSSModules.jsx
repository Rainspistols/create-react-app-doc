import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const AddingCSSModules = () => {
  return (
    <PageContent>
      <blockquote>Примечание: эта функция доступна с <code>react-scripts@2.0.0</code> и выше.</blockquote>

      <p>
        Этот проект поддерживает <ChapterLink href='https://github.com/css-modules/css-modules'>модули CSS</ChapterLink>{' '}
        наряду с обычными таблицами стилей использую соглашения об именах файлов <code>[name].module.css</code>. Модули
        CSS позволяют ограничивать область видимости CSS, автоматически создавая уникальное имя класса в формате{' '}
        <code>[filename]\_[classname]\_\_[hash]</code>.
      </p>

      <blockquote>
        Совет: если вы хотите предварительно обработать таблицу стилей с помощью Sass, обязательно{' '}
        <ChapterLink href='/adding-a-sass-stylesheet/' isLink>
          {' '}
          следуйте инструкциям по установке
        </ChapterLink>
        , а затем измените расширение файла таблицы стилей следующим образом: <code>[name].module.scss</code> или{' '}
        <code>[name].module.sass</code>.
      </blockquote>

      <p>
        Модули CSS позволяют использовать одно и то же имя класса CSS в разных файлах, не беспокоясь о конфликтах имен.
        Узнайте больше о модулях CSS{' '}
        <ChapterLink href='https://css-tricks.com/css-modules-part-1-need/'>здесь</ChapterLink>.
      </p>

      <ChapterTitle anchorId='Button.module.css'>
        <code>Button.module.css</code>
      </ChapterTitle>
      <CodeBlock>
        <span>.error &#123;</span>
        <span>&nbsp;&nbsp;background-color: red;</span>
        <span>&#125;</span>
      </CodeBlock>

      <ChapterTitle anchorId='another-stylesheet.css'>
        <code>another-stylesheet.css</code>
      </ChapterTitle>

      <CodeBlock>
        <span>.error &#123;</span>
        <span>&nbsp;&nbsp;color: red;</span>
        <span>&#125;</span>
      </CodeBlock>

      <ChapterTitle anchorId='Button.js'>
        <code>Button.js</code>
      </ChapterTitle>

      <CodeBlock>
        <span>{`import React, { Component } from 'react';`}</span>
        <span>import styles from './Button.module.css'; // Import css modules stylesheet as styles</span>
        <span>import './another-stylesheet.css'; // Import regular stylesheet</span>
        <span>
          <br />
        </span>
        <span>{`class Button extends Component {`}</span>
        <span>&nbsp;&nbsp;{`render() {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;// reference as a js object</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;{`return <button className={styles.error}>Error Button</button>;`}</span>
        <span>&nbsp;&nbsp;{`}`}</span>
        <span>{`}`}</span>
      </CodeBlock>

      <ChapterTitle anchorId='Result'>Result</ChapterTitle>

      <p>
        Нет конфликтов с именами других классов <code>.error</code>
      </p>

      <CodeBlock>
        <span>{`<!-- This button has red background but not red text -->`}</span>
        <span>{`<button class='Button_error_ax7yz'>Error Button</button>`}</span>
      </CodeBlock>

      <p>
        <strong>Это необязательная функция</strong>. Полностью поддерживаются обычные таблицы стилей{' '}
        <code>{`<link>`}</code> и файлы CSS. Модули CSS включены для файлов с расширением <code>.module.css</code>.
      </p>
    </PageContent>
  );
};

export default AddingCSSModules;
