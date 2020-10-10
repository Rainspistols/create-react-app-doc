import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const AddingStylesheets = () => {
  return (
    <PageContent>
      <p>
        Эта настройка проекта использует <ChapterLink href='https://webpack.js.org/'>webpack</ChapterLink> для обработки
        всех стороних настроек. Webpack предлагает собственный способ «расширить» концепцию <code>import</code> за
        пределы JavaScript. Чтобы выразить, что файл JavaScript зависит от файла CSS, вам{' '}
        <strong>необходимо импортировать CSS из файла JavaScript</strong>:
      </p>

      <ChapterTitle anchorId='Button.css'>
        <code>Button.css</code>
      </ChapterTitle>

      <CodeBlock>
        <span>.Button &#123;</span>
        <span>&nbsp;&nbsp;padding: 20px;</span>
        <span>&#125;</span>
      </CodeBlock>

      <ChapterTitle anchorId='Button.js'>
        <code>Button.js</code>
      </ChapterTitle>

      <CodeBlock>
        <span>import React, &#123; Component &#125; from 'react';</span>
        <span>import './Button.css'; // Tell webpack that Button.js uses these styles</span>
        <br />
        <span>class Button extends Component &#123;</span>
        <span>&nbsp;&nbsp;render() &#123;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;// You can use them as regular CSS styles</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;return {`<div className='Button' />`};</span>
        <span>&nbsp;&nbsp;&#125;</span>
        <span>&#125;</span>
      </CodeBlock>

      <p><strong>Это не обязательно для React</strong>, но многие считают эту функцию удобной. Вы можете прочитать о преимуществах этого подхода <ChapterLink href='https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b'>здесь</ChapterLink>. Однако вы должны знать, что это делает ваш код менее переносимым для других инструментов и сред сборки, чем webpack.</p>

      <p>В процессе разработки такое выражение зависимостей позволяет перезагружать стили на лету по мере их редактирования. В производственной среде все файлы CSS будут объединены в один минифицированный файл <code>.css</code> в выводе сборки.</p>

      <p>Если вас беспокоит использование webpack-семантики, вы можете поместить весь свой CSS прямо в <code>src/index.css</code>. Он все равно будет импортирован из <code>src/index.js</code>, но вы всегда можете удалить этот импорт, если позже перейдете на другой инструмент сборки.</p>
    </PageContent>
  );
};

export default AddingStylesheets;
