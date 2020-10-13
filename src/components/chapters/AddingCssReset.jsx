import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const AddingCssReset = () => {
  return (
    <PageContent>
      <p>
        Этот проект использует{' '}
        <ChapterLink href='https://github.com/csstools/postcss-normalize'>PostCSS Normalize</ChapterLink> для добавления{' '}
        <ChapterLink href='https://cssreset.com/what-is-a-css-reset/'>CSS Reset</ChapterLink>
      </p>

      <p>
        Для того чтобы начать использовать его, добавьте <code>@import-normalize;</code> где-угодно в ваш CSS файл(ы).
        Вам нужно всего лишь раз его добавить и дубликаты импортов будет автоматически удаленны. Поскольку вам нужно
        добавить его только один раз, хорошим местом для этого будет <code>index.css</code> или <code>App.css</code>.
      </p>

      <ChapterTitle anchorId='index.css'>
        <code>index.css</code>
      </ChapterTitle>

      <CodeBlock>
        <span>@import-normalize; /* bring in normalize.css styles */</span>
        <span>
          <br />
        </span>
        <span>{`/* rest of app styles */`}</span>
      </CodeBlock>

      <p>
        Вы можете контролировать какие части{' '}
        <ChapterLink href='https://github.com/csstools/normalize.css'>normalize.css</ChapterLink> использовать в вашем
        проекте с помощью <ChapterLink href='http://browserl.ist/'>browserslist</ChapterLink>
      </p>

      <p>
        Результаты использования <ChapterLink href='http://browserl.ist/'>browserslist</ChapterLink> для{' '}
        <code>3 last versions</code>:
      </p>

      <CodeBlock>
        <span>{`/**`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`* Add the correct display in IE 9-.`}</span>
        <span>&nbsp;&nbsp;&nbsp;*/</span>
        <span>
          <br />
        </span>
        <span>audio,</span>
        <span>{`video {`}</span>
        <span>&nbsp;&nbsp;&nbsp;display: inline-block;</span>
        <span>{`}`}</span>
        <span>
          <br />
        </span>
        <span>{`/**`}</span>
        <span>&nbsp;&nbsp;&nbsp;* Remove the border on images inside links in IE 10-.</span>
        <span>&nbsp;&nbsp;&nbsp;*/</span>
        <span>
          <br />
        </span>
        <span>{`img {`}</span>
        <span>&nbsp;&nbsp;&nbsp;border-style: none;</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>
        Результаты использования <ChapterLink href='http://browserl.ist/'>browserslist</ChapterLink> для{' '}
        <code>last 2 versions</code>:
      </p>

      <CodeBlock>
        <span>{`/**`}</span>
        <span>&nbsp;&nbsp;&nbsp;* Remove the border on images inside links in IE 10-.</span>
        <span>&nbsp;&nbsp;&nbsp;*/</span>
        <span>
          <br />
        </span>
        <span>{`img {`}</span>
        <span>&nbsp;&nbsp;&nbsp;border-style: none;</span>
        <span>{`}`}</span>
      </CodeBlock>

      <ChapterTitle anchorId='Поддержка браузера'>Поддержка браузера</ChapterTitle>

      <p>
        Поддержка браузера определяется <code>normalize.css</code>. На момент написания статьи он включает:
      </p>

      <ul>
        <li> Chrome (last 3)</li>
        <li> Edge (last 3)</li>
        <li> Firefox (last 3)</li>
        <li> Firefox ESR</li>
        <li> Opera (last 3)</li>
        <li> Safari (last 3)</li>
        <li> iOS Safari (last 2)</li>
        <li> Internet Explorer 9+</li>
      </ul>
    </PageContent>
  );
};

export default AddingCssReset;
