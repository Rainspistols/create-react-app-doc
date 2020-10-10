import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import CodeBlock from '../../UI/CodeBlock';

const AnalyzingTheBundleSize = () => {
  return (
    <PageContent>
      <p>
        <ChapterLink href='https://www.npmjs.com/package/source-map-explorer'>Source map explorer</ChapterLink>{' '}
        анализирует пакеты JavaScript, используя исходные карты. Это поможет вам понять, откуда происходит раздувание
        кода.
      </p>

      <p>Чтобы добавить source map explorer в проект Create React App, выполните следующие действия:</p>

      <CodeBlock>
        <span>npm install --save source-map-explorer</span>
      </CodeBlock>

      <p>
        В качестве альтернативы вы можете использовать <code>yarn</code>:
      </p>

      <CodeBlock>
        <span>yarn add source-map-explorer</span>
      </CodeBlock>

      <p>
        Затем в <code>package.json</code> добавьте в <code>scripts</code> следующую строку:
      </p>

      <CodeBlock>
        <span>"scripts": &#123;</span>
        <span>+&nbsp;&nbsp;&nbsp;"analyze": "source-map-explorer 'build/static/js/*.js'",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"start": "react-scripts start",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"build": "react-scripts build",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"test": "react-scripts test",</span>
      </CodeBlock>

      <p>Затем, чтобы проанализировать пакет, запустите production build, затем запустите анализ скриптов.</p>

      <CodeBlock>
        <span>npm run build</span>
        <span>npm run analyze</span>
      </CodeBlock>
    </PageContent>
  );
};

export default AnalyzingTheBundleSize;
