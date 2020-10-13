import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import CodeBlock from '../../UI/CodeBlock';

const PostProcessingCss = () => {
  return (
    <PageContent>
      <p>
        Create react app минимизирует ваш CSS и добавляет вендор-префиксы к CSS автоматически с помощью{' '}
        <ChapterLink href='https://github.com/postcss/autoprefixer'>Autoprefixer</ChapterLink>, поэтому вам не стоит
        волноваться об этом.
      </p>

      <p>
        Поддержка новых возможностей CSS, таких как{' '}
        <ChapterLink href='https://developer.mozilla.org/en-US/docs/Web/CSS/all'>
          <code>all</code> property
        </ChapterLink>
        ,
        <ChapterLink href='https://www.w3.org/TR/css-break-3/#breaking-controls'>
          <code>break</code> properties
        </ChapterLink>
        ,
        <ChapterLink href='https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties'>
          <code>custom</code> properties
        </ChapterLink>{' '}
        и <ChapterLink href='https://www.w3.org/TR/mediaqueries-4/#range-context'>media query ranges</ChapterLink>{' '}
        автоматически полифилятся чтобы работать в старых браузерах.
      </p>

      <p>
        Вы можете настроить браузеры которые вам нужны использую <code>browserslist</code> ключ в{' '}
        <code>in package.json</code> в соответствии с{' '}
        <ChapterLink href='https://github.com/browserslist/browserslist#readme'>Browserslist specification</ChapterLink>
        .
      </p>

      <p>Вот, например:</p>

      <CodeBlock>
        <span>{`.App {`}</span>
        <span>&nbsp;&nbsp;&nbsp;display: flex;</span>
        <span>&nbsp;&nbsp;&nbsp;flex-direction: row;</span>
        <span>&nbsp;&nbsp;&nbsp;align-items: center;</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>Становится этим</p>

      <CodeBlock>
        <span>{`.App {`}</span>
        <span>&nbsp;&nbsp;&nbsp;display: -webkit-box;</span>
        <span>&nbsp;&nbsp;&nbsp;display: -ms-flexbox;</span>
        <span>&nbsp;&nbsp;&nbsp;display: flex;</span>
        <span>&nbsp;&nbsp;&nbsp;-webkit-box-orient: horizontal;</span>
        <span>&nbsp;&nbsp;&nbsp;-webkit-box-direction: normal;</span>
        <span>&nbsp;&nbsp;&nbsp;-ms-flex-direction: row;</span>
        <span>&nbsp;&nbsp;&nbsp;flex-direction: row;</span>
        <span>&nbsp;&nbsp;&nbsp;-webkit-box-align: center;</span>
        <span>&nbsp;&nbsp;&nbsp;-ms-flex-align: center;</span>
        <span>&nbsp;&nbsp;&nbsp;align-items: center;</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>
        Если вам нужно отключить autoprefixer по каким либо причинам,{' '}
        <ChapterLink href='https://github.com/postcss/autoprefixer#disabling'>перейдите по ссылке</ChapterLink>.
      </p>

      <p>
        <ChapterLink href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout'>
          CSS Grid Layout
        </ChapterLink>{' '}
        prefixing отключен по умолчанию, но при этом ручные prefixing не будут удалены. Если вы хотите включить по
        умолчанию CSS Grid prefixing,{' '}
        <ChapterLink href='https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie'>
          сначала ознакомьтесь с его ограничениями
        </ChapterLink>
        .
      </p>

      <p>
        Чтобы включить CSS Grid prefixing, добавьте <code>{`/* autoprefixer grid: autoplace */`}</code> в начало вашего CSS
        файла.
      </p>
    </PageContent>
  );
};

export default PostProcessingCss;
