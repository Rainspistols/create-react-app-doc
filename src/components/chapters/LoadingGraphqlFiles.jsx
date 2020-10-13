import React from 'react';
import PageContent from '../../layouts/PageContent';
import CodeBlock from '../../UI/CodeBlock';

const LoadingGraphqlFiles = () => {
  return (
    <PageContent>
      <p>
        Чтобы загрузить файлы <code>.gql</code> и <code>.graphql</code>, сначала установите пакеты <code>graphql</code>{' '}
        и <code>graphql.macro</code> используя:{' '}
      </p>

      <CodeBlock>
        <span>npm install --save graphql graphql.macro</span>
      </CodeBlock>

      <p>
        В качестве альтернативы вы можете использовать <code>yarn</code>:
      </p>

      <CodeBlock>
        <span>yarn add graphql graphql.macro</span>
      </CodeBlock>

      <p>
        Затем, когда вы захотите загрузить <code>.gql</code> или <code>.graphql</code> файлы, импортируйте{' '}
        <code>loader</code> из the macro package:
      </p>

      <CodeBlock>
        <span>{`import {loader} from 'graphql.macro';`}</span>
        <span>
          <br />
        </span>
        <span>{`const query = loader('./foo.graphql');`}</span>
      </CodeBlock>

      <p>
        И ваши результаты будут автоматически встроены! Это означает, что если приведенный выше файл{' '}
        <code>foo.graphql</code> содержит следующее:
      </p>

      <CodeBlock>
        <span>{`query {`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`hello {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;world</span>
        <span>&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>Предыдущий пример превращается в:</p>

      <CodeBlock>
        <span>{`const query = {`}</span>
        <span>&nbsp;&nbsp;&nbsp;'kind': 'Document',</span>
        <span>&nbsp;&nbsp;&nbsp;{`'definitions': [{`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</span>
        <span>&nbsp;&nbsp;&nbsp;{`}],`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`'loc': {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`'source': {`}</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`'body': '\\\\n  query {\\\\n    hello {\\\\n      world\\\\n    }\\\\n  }\\\\n',`}
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'name': 'GraphQL request',</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>{`};`}</span>
      </CodeBlock>

      <p>
        Вы также можете использовать шаблон <code>gql</code> таким же образом, как и версию без макросов из пакета{' '}
        <code>graphql-tag</code>, с дополнительным преимуществом встроенных результатов синтаксического анализа.
      </p>

      <CodeBlock>
        <span>{`import { gql } from 'graphql.macro';`}</span>
        <span>
          <br />
        </span>
        <span>const query = gql`</span>
        <span>&nbsp;&nbsp;&nbsp;{`query User {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`user(id: 5) {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastName</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...UserEntry1</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>`;</span>
      </CodeBlock>
    </PageContent>
  );
};

export default LoadingGraphqlFiles;
