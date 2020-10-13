import React from 'react';
import PageContent from '../../layouts/PageContent';
import CodeBlock from '../../UI/CodeBlock';

const InstallingADependency = () => {
  return (
    
    <PageContent>
      <p>
      Созданный проект включает в себя React и ReactDOM в качестве зависимостей. Он также включает набор скриптов, используемых приложением Create React в качестве зависимости разработки. Вы можете установить другие зависимости (например, React Router) используя <code>npm</code>:
      </p>

      <CodeBlock>
        <span>npm install --save react-router-dom</span>
      </CodeBlock>

      <p>В качестве альтернативы вы можете использовать <code>yarn</code>:</p>

      <CodeBlock>
        <span>yarn add react-router-dom</span>
      </CodeBlock>

      <p>Это работает для любой библиотеки, не только<code>react-router-dom</code>.</p>
    </PageContent>
  );
}

export default InstallingADependency;